const Snowmelt = () => {
    return (
            <div className="project-explain text-left">
            <h2>스노우멜트 모니터링 서비스</h2>
            <hr/>
            
            <div className="explain-content">
              <p>개발기간 : 2022-02 ~ 2022-08</p>
              <p>개발인원 : 2명</p>
              <p>백엔드 및 프론트엔드(본인), 퍼블리셔(1명)</p>
              <p>개발 스택 : Spring Legacy Project, JAVA, mysql, jdk 1.8, aws ec2, jsp, jquery, tomcat, TCP/IP</p>
            </div>
            <div className="explain-content">
              <p>개발 내용</p>
              <p>1. TCP통신을 이용하여 현장의장비를 제어 및 관제하는 서비스</p>
              <p>2. 서버에 소켓을 설치, 10분마다 장비에서 서버를 향해 보내주는 데이터를 읽어들임</p>
              <p>3. 사용자가 스위치를 조작하면 DB에 데이터를 저장 후 장비에서 통신을 요청했을 때 장비에 데이터를 보내 장비 제어</p>
              <p>4. 지도, 날씨, 그래프 등 사용자의 편의성을 위한 기능 제공</p>
              <p>5. 통신 시간을 계산하여 화면에 데이터 업데이트 및 데이터 새로고침(동적)</p>
              <p>6. 원격 스노우멜트 실행(TCP 소켓을 이용, JSON형식 데이터 송 수신)</p>
              <p>7. 4시간 타이머 기능</p>
              </div>
            <div className="explain-content">
              <p>배운 점</p>
              <p>1. Spring 프로젝트의 흐름과 기본기</p>
              <p>2. API의 동작(requestmapping, getmapping, postmapping, responsebody 등)의 기본.</p>
              <p>3. ajax 동적표현, interval, timeout 등 다양한 javascript, jquery</p>
              <p>4. TCP통신, Socket</p>
              <p>5. 외부 API를 사용하는 방법(chart.js 등)</p>
              <p>6. aws 인스턴스 방화벽 정책, ec2 배포, linux명령어 등</p>
              <p>7. 퍼블리셔와 협업, 소통</p>
              </div>
          </div>
    );
}

export default Snowmelt;