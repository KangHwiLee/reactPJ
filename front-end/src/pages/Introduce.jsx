const Content = () => {

    /* heading 태그 옆에 텍스트를 입력하기 위한 스타일 */
    const inline_h = {display:'inline'}
    /* span 글씨 사이즈 */
    const h_span = {fontSize:'18px'}
    const contents_calc = {width: 'calc(50% - 40px)'}
    return (
        <div className="introduce">
            <div className="introduce-container1">
                <h1>포트폴리오</h1>
                <h2>Backend Engineer, Web Developer</h2>
                <br/>
                <h3 style={inline_h}><img src="/img/clipart1451778.png" id="stack"/>Technology Stack | </h3><span style={h_span}>Spring Boot, Java, mysql, kotlin, react, javascript, jquery, jsp, thymeleaf, linux, aws</span>
                <div>언제나 스킬향상과 활용할수 있는 실력을 갖기 위해 노력하는 개발자가 되겠습니다.</div>
                <div>test</div>
            </div>
            <div className="introduce-container2">
                <div className="introduce-contents1">
                    <h2>School</h2>
                    <hr/>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
                <div className="introduce-contents2">
                    <h2>Contact</h2>
                    <hr/>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
            </div>
            <div className="introduce-container2">
                <div className="introduce-contents1">
                    <h2>School</h2>
                    <hr/>
                </div>
                <div className="introduce-contents2">
                    <h2>Contact</h2>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default Content;