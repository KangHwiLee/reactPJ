import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const [active, activeset] = useState(["active","",""]);

    const changeActive = (e) => {
        console.log(e)
        // const nodes = [...e.target.parentElement.children];
        // const index = nodes.indexOf(e.target);
        // console.log(index)
        var newArray = [...active];
        for(var i=0; i<newArray.length; i++){
            newArray[i] = '';
        }
        newArray[e] = 'active';
        activeset(newArray);
        console.log(active[0], active[1],active[2])
    }
    const location = useLocation()
    let num = 0;
    useEffect(() => {
        if(location.pathname == '/content')
        num = 1;
        else if(location.pathname == "/project")
        num = 2;
        changeActive(num);
    }) 

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
                    <li><Link to={"/"} onClick={() => changeActive(0)} className={active[0]}>Home</Link></li>
                    <li><Link to={"/content"} onClick={() => changeActive(1)} className={active[1]}>Content</Link></li>
                    <li><Link to={"/project"} onClick={() => changeActive(2)} className={active[2]}>Projects</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;