import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const [active, activeset] = useState(["active","","","","","",""]);

    const changeActive = (e) => {
        // const nodes = [...e.target.parentElement.children];
        // const index = nodes.indexOf(e.target);
        // console.log(index)
        var newArray = [...active];
        for(var i=0; i<newArray.length; i++){
            newArray[i] = '';
        }



        newArray[e] = 'active';
        activeset(newArray);
    }

    const location = useLocation()
    useEffect(() => {
    let num = 0;
        if(location.pathname == "/project")
        num = 1;
        else if (location.pathname == "/content/1") num = 3;
        else if (location.pathname == "/content/2") num = 4;
        else if (location.pathname == "/content/3") num = 5;
        else if (location.pathname == "/skill") num = 6;
        console.log(num)
        if(num > 1 && num < 6){
            console.log(num)
            var div = document.getElementById("content-menu")
            div.style.display = "block";
        }
        changeActive(num);
    }, []) 

    const test = () => {
        var div = document.getElementById("content-menu")
        if(div.style.display == 'block') div.style.display = 'none';
        else
        div.style.display = "block";
    }
    return(
        <div className="side">
            <div className="test1">
                <div className="test1-1">
                    <img id="profile" src="/img/profile1.png"></img>
                </div>
            </div>
            <div className="test3">
                <h2>이 강 휘</h2>
                <p>2년차가 되어가는 주니어 개발자로
                모니터링 시스템 관련회사에서
                웹 서비스를 기획/개발/배포/운영
                하였습니다.
                저의 개발능력이 곧 회사의 발전으로
                이루어진다는 것을 이해하고 스킬향상을 위해 꾸준히 노력하고 있습니다.</p>
            </div>
            <div className="test2">
                <ul>
                    <li><Link to={"/"} className={active[0]} onClick={() => changeActive(0)}>Home</Link></li>
                    <li><a className={active[2]} onClick={() => test()} style={{cursor: "pointer"}}>Content</a></li>
                        <div style={{display:"none"}} id="content-menu">
                            <Link to={`/content/${1}`} className={active[3]} onClick={() => changeActive(3)}><p style={{fontSize:"14px"}}>전체</p></Link>
                            <Link to={`/content/${2}`} className={active[4]} onClick={() => changeActive(4)}><p style={{fontSize:"14px"}}>스프링</p></Link>
                            <Link to={`/content/${3}`} className={active[5]} onClick={() => changeActive(5)}><p style={{fontSize:"14px"}}>리액트</p></Link>
                        </div>
                    <li><Link to={"/project"} className={active[1]} onClick={() => changeActive(1)}>Projects</Link></li>
                    <li><Link to={"/skill"} className={active[6]} onClick={() => changeActive(6)}>Skill</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;