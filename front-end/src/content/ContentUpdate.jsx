import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import $ from "jquery";
// Props : 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.
const ContentUpdate = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const [title, setTitle] = useState("제목");
    const [img_origin, setImg_origin] = useState([]);

    useEffect(() => {
        fetch("/api/content/update/"+id)
        .then(response => {return response.json()})
        .then(json => {
            console.log(json)
            setTitle(json.title)
            $("#write-content").html(json.content)
            var img = JSON.parse(json.img_json)
            var imgKeys = Object.keys(img);
            var img_arr = [];
            var arr = [];
            for (var i=0; i<imgKeys.length; i++) {
                var key = imgKeys[i];
                img_arr.push(img[key])
                arr.push("http://localhost:3000/upload/"+img[key])
            }
            setImg_origin(arr)
            const img_list = document.getElementsByTagName('img');

            for(let i = 1; i < img_list.length; i++)  {
                img_list[i].src = "/upload/"+img_arr[i-1]
              }
        })

        $("#write-content").attr('contenteditable','true')

    }, [])

    const update = () => {
        var img_arr = [];
        var del_img = [];
        const img_list = document.getElementsByTagName('img');
        
        var category = $("select[name=category]").val();
        console.log(img_list)
        for(let i = 1; i < img_list.length; i++)  {
            img_arr.push(img_list[i].src)
            img_list[i].src = "";
          }
          
          // img_origin contain img_arr     새 이미지 리스트에 원래의 이미지가 있는지 체크 후
          // 이미지가 없는 것들은 삭제해줘야함 삭제할 이미지 리스트, 추가할 이미지 리스트

          let test = img_arr.filter(x => !img_origin.includes(x))
                            .concat(img_origin.filter(x => !img_arr.includes(x)))

          test.forEach(a => {
            if(a.length < 1000) del_img.push(a)
          })

          const content = document.getElementById("write-content").innerHTML;


              fetch("/api/content/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                content: content,
                id : id,
                img_arr : img_arr,
                del_img : del_img,
                category : category
            }),
            }).then((response) => {
                if(response.status == 200)
                navigate(`/content/${1}`)
            })  
        
    }
    const handleChange = e => {
        setTitle(e.target.value)
      }

      const [imgSrc, setImgSrc] = useState([]);
      const fileAdd = (fileBlob)=>{
          const reader = new FileReader(); // file, Blob 객체를 핸들링하는데 사용
                                          // File, Blob 객체를 사용해 특정 파일을 읽어들여
                                          // js에서 파일에 접근할 수 있게 도와줌
                reader.readAsDataURL(fileBlob); // File 혹은 Blob 을 읽은 뒤 base64로 인코딩한 문자열을
                                                //FileReader 인스턴스의 result라는 속성에 담아줌
                                             
                 return new Promise((resolve) => {
                  reader.onload = () => {       // FileReader가 성공적으로 파일을 읽어들였을 때 트리거 되는 이벤트 핸들러
                                                // 이 내부에 우리가 원하는 로직을 넣어주면 됨
                                                // 이번과 같은 경우는 setState로 img값 받기
                      var newArray = [...imgSrc];     
                      newArray.push(reader.result)
                      const div = document.getElementById('write-content');
                      const img = document.createElement('img')
                      img.style.width = '20%'
                      img.src = reader.result
                      div.append(img)
                      setImgSrc(newArray);
                      resolve();
                  };
                }); 
      }

    return(
            <div className="project-header text-left">
                 <h1>게시글 수정</h1>
            <hr/>
                <br/>
            <div className="write">
                <form>
                <select name='category'>
                        <option value="0">카테고리 선택</option>
                        <option value="1">스프링</option>
                        <option value="2">리액트</option>
                    </select>
                <input type="text" name="title" 
                    value={title}
                    onChange={handleChange}
                    />
                    <hr/>
                    <div id="write-content" className='contentEdit text-left'
                    name='content'
                    >
                        
                    </div>
                </form>
            </div>

            <label htmlFor="inputFile">사진 추가 +</label>
            <input  
        id="inputFile" 
        type="file" 
        name="file" 
        accept='image/*' 
        style={{"display":"none"}} 
        onChange={(e)=>{fileAdd(e.target.files[0])}}/>

            <div className="write-btn">
                <button onClick={() => update()}>수정</button>
            </div>
          </div>
    )
}

export default ContentUpdate;