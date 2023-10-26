import React, { createRef, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import $ from "jquery";

const Write = () => {


    const navigate = useNavigate();

    const [line, setLine] = useState(1)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
      
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

        const write = () => {
            var img_arr = [];
            const img_list = document.getElementsByTagName('img');
            
            var category = $("select[name=category]").val();
            console.log(img_list)
            for(let i = 1; i < img_list.length; i++)  {
                img_arr.push(img_list[i].src)
                img_list[i].src = "";
              }
              const content = document.getElementById("write-content").innerHTML;
              fetch("/api/content/write", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    content: content,
                    img : img_arr,
                    category : category
                }),
                }).then((response) => {
                    if(response.status == 200)
                    navigate(`/content/${1}`)
                })
            
        }

    return (
        <div className="project-header text-left">
            <h1>글쓰기</h1>
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
                    placeholder="제목을 입력하세요" 
                    value={title}
                    onChange={handleChange}
                    />
                    <hr/>
                    <div id="write-content" className='contentEdit text-left'
                    contentEditable={true} 
                    name='content'
                    ></div>
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
                <button onClick={() => write()}>등록</button>
            </div>
        </div>
    );
}

export default Write;