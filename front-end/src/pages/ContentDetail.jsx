import { Link, useParams } from "react-router-dom";
// Props : 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.
import {nation, nations} from "../data/data";
const Home = () => {
    const { id } = useParams();


    
    return(
            <div className="project-header text-left">
            <div className="write">
                <form>
                    <h1>제목입니다</h1>
                    <hr/>
                    <div id="write-content" className='contentEdit text-left'
                    name='content'
                    >
                        
                    </div>
                </form>
            </div>
          </div>
    )
}

export default Home;