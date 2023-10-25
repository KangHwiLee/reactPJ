import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// Props : 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.
const Home = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("제목");
    const location = useLocation()
    useEffect(() => {

        var id = location.pathname.replace("/skill", "");
        console.log(id)

        if(document.getElementById("write-content") != null) return;
        fetch("/api/skill/title/"+id)
        .then(response => {return response.json()})
        .then(json => {
            
        })
    }, [])
    
    return(
            <div className="project-header text-left">
            <div className="write">
                <form>
                    <h1>{title}</h1>
                    <hr/>
                    {/* <div id="write-content" className='contentEdit text-left'
                    name='content'
                    >
                        
                    </div> */}
                </form>
            </div>
            <div className="write-btn">
                <button onClick={() => navigate(-1)}>목록</button>
            </div>
          </div>
    )
}

export default Home;