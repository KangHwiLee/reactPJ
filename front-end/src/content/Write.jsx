import React, { useEffect, useRef, useState } from 'react';

const Write = () => {

    /* const focusTest = useRef(null);
    useEffect(()=> {
        focusTest.current.focus();
    }) */

    const [values, setValues] = useState({
        title: "",
        content: "",
      })
      
      const handleChange = e => {
          setValues({
              ...values,
              [e.target.name]: e.target.value,
            })
            console.log(values);
        }

        const markup = () => {
            return {__html : <img src=""></img>}
        };

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
                        console.log(newArray);
                        setImgSrc(newArray);
                        setValues({
                            ...values,
                            content: values.content+`<img src="${reader.result}" alt="Image" />`,
                          })
                        // setImgSrc(reader.result);
                        resolve();
                    };
                  }); 
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
                    value={values.title}
                    onChange={handleChange}
                    />
                    <hr/>
                    <textarea 
                    /* ref={focusTest} */ 
                    name='content'
                    placeholder='내용을 입력하세요'
                    value={values.content}
                    onChange={handleChange}
                    ></textarea>
                </form>
            </div>
            <label htmlFor="inputFile">사진 추가 +</label>
            <input  
        id="inputFile" 
        type="file" 
        name="file" 
        accept='image/*'  // input을 이미지를 받는 버튼으로 변경(type="file")
        style={{"display":"none"}} // 기본 이미지는 못생겼으니 숨기고 label로 style 주기
        onChange={(e)=>{fileAdd(e.target.files[0])}}/> // 상태가 바뀐 input의 files[0]은
        												//fileChange 함수에 의해 처리됨
    <img src={imgSrc[0]}/> // 이제 귀여운 고양이 사진이 들어올 차례

            <div className="write-btn">
                <button onClick={() => test()}>글쓰기</button>
            </div>
        </div>
    );
}

export default Write;