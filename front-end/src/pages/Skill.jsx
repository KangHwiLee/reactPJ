import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

let page;

const Skill = () => {
    const [pageArray, setPageArray] = useState([]);
    const [contentArray, setContentArray] = useState([]);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);
    const [startPage, setStartPage] = useState(0);
    const [endPage, setEndPage] = useState(0);
    const [nowPage, setPage] = useState(0);
    useEffect(() => {
        paging(0)
    }, [])

const paging = (n) => {
    fetch("http://localhost:8080/api/skill/paging")
        .then(response => {return response.json()})
        .then(json => {
            page = json;
            console.log(page)
            var array = [];
            var array2 = [];
            for(let i=page.startPage; i<page.endPage+1; i++){
                array.push(i);
            }
            setPageArray(array);
            for(let i=0; i<page.pages.content.length; i++){
                array2.push({
                    title : page.pages.content[i].title,
                    id : page.pages.content[i].id,
                    created_at : page.pages.content[i].created_at
                })
            }
            setContentArray(array2)
            setPrev(page.prev);
            setNext(page.next);
            setStartPage(page.startPage);
            setEndPage(page.endPage);
            setPage(page.pages.number+1);
        })
}

const navigate = useNavigate();
    return (
        <div className="Content">
            <div className="project-header text-left">
            <h1>공부기록</h1>
            <hr/>
                <br/>
          </div>
            <div>
                {contentArray.map((arr) => {
                    var a = <div key={arr.id} className='list' onClick={() => navigate(`/skill${arr.id}`)}>
                        <h3>{arr.title}</h3>
                        <p>{arr.created_at}</p>
                        <hr/>
                    </div>
                    return a;
                })}
            </div>
            <div className="pagination">
                <ul>
                    {prev === true ? <li onClick={() => paging(startPage-2)}>&lt;</li> : ""}
                    {pageArray.map((i) => {
                        var a = <li key={i} onClick={() => paging(i-1)} className={nowPage == i ? 'active' : ''}>{i}</li>
                        return a
                    })}
                    {next === true ? <li onClick={() => paging(endPage)}>&gt;</li> : ""}
                </ul>
            </div>
        </div>
    );
}

export default Skill;