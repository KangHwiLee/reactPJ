import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import $ from "jquery";
// Props : 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.
const ContentDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const [title, setTitle] = useState("제목");
    useEffect(() => {
        fetch("/api/content/detail/"+id)
        .then(response => {return response.json()})
        .then(json => {
            setTitle(json.title)
            $("#write-content").html(json.content)
            var img = JSON.parse(json.img_json)
            var imgKeys = Object.keys(img);
            var img_arr = [];
            for (var i=0; i<imgKeys.length; i++) {
                var key = imgKeys[i];
                img_arr.push(img[key])
            }
            console.log(img_arr)
            const img_list = document.getElementsByTagName('img');

            for(let i = 1; i < img_list.length; i++)  {
                console.log(img_list[i]);
                img_list[i].src = "/upload/"+img_arr[i-1]
              }
        })
    }, [])
    /* useEffect(() => {
        if(document.getElementById("write-content") != null) return;
        fetch("/api/content/detail/"+id)
        .then(response => {return response.json()})
        .then(json => {
            setTitle(json.title)
            var content = JSON.parse(json.content);
            var keys = Object.keys(content);
           
            const div = document.createElement("div");
            const form = document.querySelector("form");
            var container = "";
            for (var i=0; i<keys.length; i++) {
                var key = keys[i];
                container += content[key];
            }
            
            div.innerHTML = container
            console.log(div);
            form.appendChild(div);
            
            var img = JSON.parse(json.img_json)
            var imgKeys = Object.keys(img);
            var img_arr = [];
            for (var i=0; i<imgKeys.length; i++) {
                var key = imgKeys[i];
                img_arr.push(img[key])
            }
            console.log(img_arr)
            const img_list = document.getElementsByTagName('img');

            for(let i = 1; i < img_list.length; i++)  {
                console.log(img_list[i]);
                img_list[i].src = "/upload/"+img_arr[i-1]
              }
        })
    }, []) */
    
    return(
            <div className="project-header text-left">
            <div className="write">
                <form>
                    <h1>{title}</h1>
                    <hr/>
                    <div id="write-content" className='contentEdit text-left'
                    name='content'
                    >
                        
                    </div>
                </form>
            </div>
            <div className="write-btn">
                <button onClick={() => navigate(`/content_update/${id}`)}>수정</button>
            </div>
          </div>
    )
}

export default ContentDetail;