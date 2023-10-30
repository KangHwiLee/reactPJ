import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import $ from "jquery";
  


// Props : 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.
const Skill2 = () => {
    const navigate = useNavigate();
    const location = useLocation()
    useEffect(() => { 

        var id = location.pathname.replace("/skill", "");
        fetch("/api/skill/title/"+id)
        .then(response => {return response.json()})
        .then(json => {
            $('form h1').html(json.title)
        })
        
    }, [])


    function convertNewlineToBreak(text) {
        return text.split('\n').map((line, index) => (
            <>
            {line}
            <br />
            </>
        ));
      }


    
    return(
            <div className="project-header text-left">
            <div className="write">
                <form>
                    <h1></h1>
                    <hr/>
                    <div id="write-content" className='contentEdit text-left'
                    name='content'
                    >
                    </div>
                </form>
            </div>
            <div className="write-btn">
                <button onClick={() => navigate(-1)}>목록</button>
            </div>
          </div>
    )
}

export default Skill2;