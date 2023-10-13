import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// Props : 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.
import {nation, nations} from "../data/data";
import Content from "../pages/Content";
import Project from "../pages/Project";
import ContentDetail from "../pages/ContentDetail";
const Home = () => {
    return(
        <div className="home">
                <Routes>
                    <Route path='/content' element={<Content/>} />
                    <Route path='/content_detail/:id' element={<ContentDetail/>} />
                    <Route path='/project' element={<Project/>} />
                </Routes>
        </div>
    )
}

export default Home;