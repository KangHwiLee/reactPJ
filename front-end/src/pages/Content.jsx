import { useNavigate } from "react-router-dom";


const Content = () => {

const navigate = useNavigate();
    return (
        <div className="home">
            <div className='list' onClick={() => navigate('/content_detail/1')}>
                <h3> 제목1</h3>
                <p>2월 17일 발행</p>
                <hr/>
        </div>
      </div>
    );
}

export default Content;