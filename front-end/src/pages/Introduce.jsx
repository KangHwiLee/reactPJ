import '../Layout.css';
const Content = () => {

    /* heading 태그 옆에 텍스트를 입력하기 위한 스타일 */
    const inline_h = {display:'inline'}
    /* span 글씨 사이즈 */
    const h_span = {fontSize:'18px'}
    const contents_calc = {width: 'calc(50% - 40px)'}
    const gitOpen = () => {
        window.open("https://github.com/KangHwiLee/KangHwiLee")
    }
    return (
        <div className="introduce">
            <div className="introduce-container1">
                <h1>포트폴리오</h1>
                <h2>Backend Engineer, Web Developer</h2>
                <br/>
                <h3 style={inline_h}><img src="/img/clipart1451778.png"/>Technology Stack | </h3>
                <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" style={{ height: 'auto', width:'auto', marginLeft: '10px', marginRight: '10px' }} />
                <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" style={{ height: 'auto', width:'auto', marginLeft: '10px', marginRight: '10px' }} />
                <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" style={{ height: 'auto',width:'auto', marginLeft: '10px', marginRight: '10px' }} />
                <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery" style={{ height: 'auto',width:'auto', marginLeft: '10px', marginRight: '10px' }} />
                <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" style={{ height: 'auto',width:'auto', marginLeft: '10px', marginRight: '10px' }} />
                <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" style={{ height: 'auto', width:'auto',marginLeft: '10px', marginRight: '10px' }} />
                <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" style={{ height: 'auto',width:'auto', marginLeft: '10px', marginRight: '10px' }} />
                <img src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" style={{ height: 'auto', width:'auto', marginLeft: '10px', marginRight: '10px' }} />
                <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="Amazon AWS" style={{ height: 'auto',width:'auto', marginLeft: '10px', marginRight: '10px' }} />
                <img src="https://img.shields.io/badge/thymeleaf-6DB33F?style=for-the-badge&logo=thymeleaf&logoColor=white" alt="Amazon AWS" style={{ height: 'auto',width:'auto', marginLeft: '10px', marginRight: '10px' }} />
                <img src="https://img.shields.io/badge/jsp-007396?style=for-the-badge&logo=jsp&logoColor=white" alt="Amazon AWS" style={{ height: 'auto',width:'auto', marginLeft: '10px', marginRight: '10px' }} />
                <img src="https://img.shields.io/badge/react-B2CCFF?style=for-the-badge&logo=react&logoColor=white" alt="Amazon AWS" style={{ height: 'auto',width:'auto', marginLeft: '10px', marginRight: '10px' }} />

                <div>언제나 스킬향상과 활용할수 있는 실력을 갖기 위해 노력하는 개발자가 되겠습니다.</div>
            </div>
            <div className="introduce-container1 padding-top-80">
                <h2>Skill</h2>
                <hr />
                <div className='progress'>
                    <div className='progress-title'>
                    <span>Spring</span>
                    <span>80%</span>
                    </div>
                    <div className='progress-background'>
                        <div className='progress-bar' style={{width:'80%', background:'#F6C23E'}}></div>
                    </div>
                </div>
                <div className='progress'>
                <div className='progress-title'>
                    <span>java</span>
                    <span>70%</span>
                    </div>
                    <div className='progress-background'>
                        <div className='progress-bar' style={{width:'70%', background:'#F6C23E'}}></div>
                    </div>
                </div>
                <div className='progress'>
                <div className='progress-title'>
                    <span>JavaScript(Jquery)</span>
                    <span>65%</span>
                    </div>
                    <div className='progress-background'>
                        <div className='progress-bar' style={{width:'65%', background:'#F6C23E'}}></div>
                    </div>
                </div>
                <div className='progress'>
                <div className='progress-title'>
                    <span>mysql</span>
                    <span>50%</span>
                    </div>
                    <div className='progress-background'>
                        <div className='progress-bar' style={{width:'50%', background:'#F6C23E'}}></div>
                    </div>
                </div>
                <div className='progress'>
                <div className='progress-title'>
                    <span>react</span>
                    <span>30%</span>
                    </div>
                    <div className='progress-background'>
                        <div className='progress-bar' style={{width:'30%', background:'#F6C23E'}}></div>
                    </div>
                </div>
                <div className='progress'>
                <div className='progress-title'>
                    <span>Kotlin</span>
                    <span>20%</span>
                    </div>
                    <div className='progress-background'>
                        <div className='progress-bar' style={{width:'20%', background:'#F6C23E'}}></div>
                    </div>
                </div>
                <div className='progress'>
                <div className='progress-title'>
                    <span>Android</span>
                    <span>20%</span>
                    </div>
                    <div className='progress-background'>
                        <div className='progress-bar' style={{width:'20%', background:'#F6C23E'}}></div>
                    </div>
                </div>
                <div className='progress'>
                <div className='progress-title'>
                    <span>AWS</span>
                    <span>20%</span>
                    </div>
                    <div className='progress-background'>
                        <div className='progress-bar' style={{width:'20%', background:'#F6C23E'}}></div>
                    </div>
                </div>
                <div className='progress'>
                <div className='progress-title'>
                    <span>linux</span>
                    <span>40%</span>
                    </div>
                    <div className='progress-background'>
                        <div className='progress-bar' style={{width:'40%', background:'#F6C23E'}}></div>
                    </div>
                </div>
            </div>
            <div className="introduce-container2">
                <div className="introduce-contents left">
                    <h2><img src="/img/school.png"/>School</h2>
                    <hr/>
                    <p><img src="/img/university.png" />&nbsp;한국폴리텍 반도체융합캠퍼스</p>
                    <p><img src="/img/micro.png" />&nbsp;반도체 설계과</p>
                    <p><img src="img/student.png"/>&nbsp;2017.03 ~ 2021.08</p>
                </div>
                <div className="introduce-contents right">
                    <h2>Contact</h2>
                    <hr/>
                    <p><img src="img/email.png"/>&nbsp;rkdgnl12336@gmail.com</p>
                    <p><img src="img/call.png"/>&nbsp;010-2815-2658</p>
                    <p onClick={gitOpen} className="hyper-link"><img src="img/github.png"/>&nbsp;https://github.com/KangHwiLee/KangHwiLee</p>
                </div>
            </div>
            <div className="introduce-container2">
                <div className="introduce-contents left">
                    <h2>Carrer</h2>
                    <hr/>
                    <p><h4 style={inline_h}>기업명</h4> : 엔서치랩</p>
                    <p><h4 style={inline_h}>기간</h4> : 2022-01-17 ~ 현재</p>
                    <p><h4 style={inline_h}>업무</h4> : 웹 백엔드 & 프론트엔드, 서버관리</p>
                </div>
                <div className="introduce-contents right">
                    <h2>Projects</h2>
                    <hr/>
                    <p>스노우멜트 모니터링 서비스</p>
                    <p>스노우멜트 소켓</p>
                    <p>CCTV 웹 스트리밍 지원</p>
                    <p>캘린더</p>
                    <p>안전점검일지</p>
                </div>
            </div>
            <div className="introduce-container2">
                <div className="introduce-contents left">
                    <h2>ToyProject</h2>
                    <hr/>
                    <p>마이홈계산기(Spring Boot)</p>
                    <p>마이홈계산기(Android)</p>
                </div>
            </div>X
        </div>
    );
}

export default Content;