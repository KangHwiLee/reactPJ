const Report = () => {
    return (
        <div className="project-explain text-left">
            <h2>안전점검일지</h2>
            <hr/>
            <div className="explain-content">
                <p>개발기간 : 2022-02 ~ 2022-08</p>
                <p>개발인원 : 2명</p>
                <p>백엔드 및 프론트엔드(본인), 퍼블리셔(1명)</p>
                <p>개발 스택 : Spring Legacy Project, JAVA, mysql, jdk 1.8, aws ec2, jsp, jquery, tomcat</p>
            </div>
                <p>개발 내용</p>
                <p> 1. 회사에서 사용중인 사이트의 기능을 여러 플랫폼에서 사용 할 수 있도록 기획되어 시작된 프로젝트</p>
                <p> 2. 점검표 양식 작성 기능, 양식을 이용해 점검표 작성 후 사용자에게 카카오톡으로 점검표 전송 서비스</p>
                <p> 3. 안전점검일지에서만 가능했던 기능을 각 플랫폼에서 사용 가능하도록 DB구조, 조회하는 기능을 수정</p>
                <p> 4. 기존에 있던 오류를 발견 및 수정 작업</p>
            <div className="explain-content">
                <p>배운 점</p>
                <p>1. 이미 만들어진 코드 분석 능력</p>
                <p>2. 같은 서버 내의 다른 DB를 연동 활용능력(개발 시야 넓어짐)</p>
                <p>3. 카카오 알림톡</p>
                <p>4. 다른 백엔드 개발자와의 협업 및 소통</p>
            </div>
          </div>
          
    );
}

export default Report;