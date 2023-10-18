const Calendar = () => {
    return (
<div className="project-explain text-left">
            <h2>캘린더</h2>
            <hr/>
            <div className="explain-content">
            <p>개발기간 : 2023-02 ~ 2023-02</p>
            <p>개발인원 : 2명</p>
            <p>개발 스택 : Spring Legacy Project, JAVA, mysql, jdk 1.8, aws ec2, jsp, jquery, tomcat</p>
            </div>
            <div className="explain-content">
            <p>개발 내용</p>
                <p>1. 카카오캘린더와 유사한 기능을 만들고자하는 기획안이 나옴</p>
                <p>2. 사용자가 일정을 등록하면 달력에 표시해주는 기능(사용자 소속별로 내용을 공유 및 비밀글 기능을 이용해 혼자서만 볼 수 있는 기능)</p>
                <p>3. JAVA에서 먼저 배열을 이용해 각 일정들을 저장해 달력에 표시하기 위한 데이터를 생성</p>
                <p>4. jquery를 이용해 해당 날에 일정 표시할 공간여부 체크 및 표시</p>
                <p>5. 달력에 표시되는 줄긋기는 일정한 규칙을 이용해 표시(카카오캘린더를 참고해 똑같은 방법으로 표시함)</p>
            </div>
            <div className="explain-content">
                <p>배운 점</p>
                <p>1. junit test케이스 사용법</p>
                <p>2. 로직 작성 능력</p>
                </div>
            </div>
    );
}

export default Calendar;