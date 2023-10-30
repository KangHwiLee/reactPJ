import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// Props : 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.
import Introduce from "../pages/Introduce";
import Content from "../pages/Content";
import Project from "../pages/Project";
import Write from "../content/Write";
import ContentDetail from "../content/ContentDetail";
import ContentUpdate from "../content/ContentUpdate";
import Skill from "../pages/Skill";
import Skill1 from "../skill/Skill1";
import Skill2 from "../skill/Skill2";
import Skill3 from "../skill/Skill3";
const Home = () => {
    return(
        <div className="home">
                <Routes>
                    <Route path='/' element={<Introduce/>} />
                    <Route path='/content/:p_category' element={<Content/>} />
                    <Route path='/content_detail/:id' element={<ContentDetail/>} />
                    <Route path='/content_update/:id' element={<ContentUpdate/>} />
                    <Route path='/skill' element={<Skill/>} />
                    <Route path='/write' element={<Write/>} />
                    <Route path='/project' element={<Project/>} />

                    {/* 여기부터 스킬 jsx 전부 route */}
                    <Route path='/skill1' element={<Skill1/>} />
                    <Route path='/skill2' element={<Skill2/>} />
                    <Route path='/skill3' element={<Skill3/>} />
                    
                </Routes>
        </div>
    )
}

export default Home;