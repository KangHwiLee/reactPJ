import { useNavigate } from "react-router-dom";


const Content = () => {

const navigate = useNavigate();
    return (
        <div className="Content">
            <div className="project-header text-left">
            <h1>공부기록</h1>
            <hr/>
                <br/>
          </div>
            <div>
                <div className='list' onClick={() => navigate('/content_detail/1')}>
                    <h3> 제목2</h3>
                    <p>2월 17일 발행</p>
                    <hr/>
                </div>
            </div>
            <div className="register-btn">
                <button onClick={() => navigate('/write')}>글쓰기</button>
            </div>
        </div>
    );
}

export default Content;