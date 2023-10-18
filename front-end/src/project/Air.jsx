const Air = () => {
    return (
        <div className="project-explain text-left">
            <h2>미세먼지 모니터링 서비스</h2>
            <hr/>
            <div className="explain-content">
                <p>개발기간 : 2022-11 ~ 2023-01</p>
                <p>개발인원 : 2명</p>
                <p>백엔드 및 프론트엔드(본인), 퍼블리셔(1명)</p>
                <p>개발 스택 : Spring Legacy Project, JAVA, mysql, jdk 1.8, aws ec2, jsp, jquery, tomcat, TCP/IP</p>
            </div>
            <div className="explain-content">
                <p>개발 내용</p>
                <p>1. TCP통신을 이용하여 장비가 보내주는 데이터를 보여주는 웹 프로젝트</p>
                <p>2. 장비가 보내주는 데이터 시간에 맞춰 웹 페이지 데이터 업데이트</p>
                <p>3. 카카오맵api를 이용해 장비의 위치 출력</p>
                <p>3. 날씨api를 이용해 현장의 날씨를 출력</p>
            </div>
            <div className="explain-content">
              <p>배운 점</p>
              <p>1. Spring 프로젝트의 흐름과 기본기 복습</p>
              <p>2. 더 읽기 좋은 코드를 만들기위한 코드 숙달</p>
              <p>3. 자신감</p>
            </div>
        </div>
    );
}

export default Air;