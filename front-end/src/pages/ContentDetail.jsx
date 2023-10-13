import { Link, useParams } from "react-router-dom";
// Props : 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.
import {nation, nations} from "../data/data";
const Home = () => {
    const { id } = useParams();
    console.log(id);
    return(
        <div className="home">
            <div className="header">
                <h3>여기 소제목?</h3>
                <h1>여기 메인제목</h1>
                {/* <Prop name="name1" age="11"/> */}
            </div>
            <div className="content">
                
            </div>
        </div>
    )
}

export default Home;