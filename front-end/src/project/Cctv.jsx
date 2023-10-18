const Cctv = () => {
    return (
<div className="project-explain text-left">
            <h2>CCTV 웹 스트리밍</h2>
            <hr/>
            
        <div className="explain-content">
            <p>CCTV 웹 스트리밍 서비스</p>
            <p>개발기간 : 2022-08 ~ 2022-10</p>
            <p>개발인원 : 1명</p>
            <p>개발 스택 : JAVA, mysql, nginx, windows, ffmpeg, TCP/IP, HLS</p>            </div>
        <div className="explain-content">
            <p>개발 내용</p>
            <p>1. IP카메라에 RTSP프로토콜을 이용하여 스트리밍 영상 데이터 요청</p>
            <p>2. JAVA에서 cmd커맨드를 사용해 ffmpeg를 실행</p>
            <p>3. RTSP -{">"} M3U8변환 및 서버에 저장</p>
            <p>4. hls.js를 이용해 웹 페이지에 스트리밍 구현</p>
            <p>5. 스트리밍은 CPU 점유율을 많이 가져가기 때문에 사용자(관리자)가 직접 스트리밍 ON,OFF 기능 구현</p>
            <p>6. CCTV의 통신이상을 감지하여 자동으로 스트리밍 종료 또는 재시작 기능 구현</p>
            <p>7. FFmpeg자체적 오류로 스트리밍 지원 끊길 경우 감지해서 자동으로 재시작하도록 구현(ts라는 파일을 생성하며 재생하기 때문에 ts파일이 생성중인지 체크)</p>
            <p>8. Java에서 cmd커맨드를 입력해 ffmpeg를 실행 및 종료</p>
            <p>9. nginx 서버와 hls.js를 이용해 웹 스트리밍 지원</p>
        </div>
        <div className="explain-content">
              <p>배운 점</p>
              <p>1. Java를 이용한 CMD커맨드 조작</p>
              <p>2. 상황에 따라 자동으로 동작을 하는 로직 작성</p>
              <p>3. StackOverFlow를 이용한 구글 검색</p>
              <p>4. 외부 라이브러리를 이용한 개발</p>
              <p>5. 서버(pc)의 디렉토리의 파일목록을 이용한 새로운 방식의 개발 접근. 개발의 시야가 넓어짐</p>
        </div>

          </div>

          
    );
}

export default Cctv;