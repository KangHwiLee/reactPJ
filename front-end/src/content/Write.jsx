import axios from 'axios';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

const Write = () => {


    const navigate = useNavigate();
    const textareaRef = createRef();

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

        const test = () => {
            var p = document.getElementById('write-content');
            var arr = [];
            var img_arr = [];
            var index = 0;
            var first_line = p.outerHTML;
            var f_end = first_line.indexOf("<div", 5)

            const tt = (text) => {
                        var start = text.indexOf('<img src="data')
                        var end = text.indexOf('>', start);
                        var img = text.substring(start, end+1)
                        img_arr.push(img.replace('<img src="',"").replace('" style="width: 20%;"', ""));
                        text = text.replace(img, '<img src=""/>');
                        return text;
                       }

            if(f_end > -1)          //첫째줄만 있는지 검사
            first_line = first_line.substring(0,f_end);
            first_line = first_line.replace('contenteditable="true"', "")
            if(first_line.indexOf('<img src="data') > -1){
            while(first_line.indexOf('<img src="data') > -1){  //이미지 들어갈곳 생성
                first_line = tt(first_line)
            }
            arr.push(first_line);
            }else{
                arr.push(first_line)
            }
              for (let tag of p.children) {     //글 순회 시작
                if(index == 0) {
                    index ++;
                    continue;
                }       //img arr, return test
                
                var test = tag.outerHTML;       //tag를 string으로 변환
                if(tag.tagName == 'DIV'){       //이미지만 있는 줄인지 검사
                    if(tag.children.length != 0){   //글 + 이미지인지 검사
                   while(test.indexOf('<img src="data') > -1){  //이미지 들어갈곳 생성
                    test = tt(test)
                    }
                    arr.push(test);
                }else 
                    arr.push(test);
                }else if(tag.tagName == 'IMG' && f_end > -1){
                    test = tt(test);
                     arr.push(test);
                    }
                }
                if(f_end > -1)          //첫째줄만 있으면 </div>추가안함
                arr.push("</div>")
                console.log(arr);
                fetch("/api/content_write", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    content: arr,
                    img : img_arr
                }),
                }).then((response) => {
                    if(response.status == 200)
                    navigate('/content')
                })
                
        }

    return (
        <div className="project-header text-left">
            <h1>글쓰기</h1>
            <hr/>
                <br/>
            <div className="write">
                <form>
                    <input type="text" name="title" 
                    placeholder="제목을 입력하세요" 
                    value={title}
                    onChange={handleChange}
                    />
                    <hr/>
                    <div id="write-content" className='contentEdit text-left'
                    contentEditable={true} 
                    ref={textareaRef}
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
                <button onClick={() => test()}>등록</button>
            </div>
        </div>
    );
}

export default Write;