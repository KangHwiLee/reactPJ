import { useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import $ from "jquery";
  


// Props : 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.
const Skill2 = () => {
    const {Tmapv3} = window;
    console.log(Tmapv3)
    const navigate = useNavigate();
    const location = useLocation()
    const [fieldList, setFieldList] = useState([]);
    var dataset;
    useEffect(() => { 

        var id = location.pathname.replace("/skill", "");
        fetch("http://localhost:8080/api/skill/title/"+id)
        .then(response => {return response.json()})
        .then(json => {
            $('form h1').html(json.title)
          })
          
          fetch("http://localhost:8080/api/tmap/field_list", {
            method : 'post'
          })
          .then((response) => {return response.json()})
          .then((json) => {
            var fieldArr = [...fieldList];
            json.forEach((a) => {
              fieldArr.push({
                field_name : a.field_name,
                lat : a.field_lat,
                lon : a.field_lon
              })
            })
            setFieldList(fieldArr)
            dataset = json;
          })


          initTmap()
    }, [])

    var map;

    const initTmap = () => {
      $("#map").remove()
      $("#map_gif").parent().append('<div id="map"></div>')
      map = new Tmapv3.Map("map", { // 지도가 생성될 div
        center : new Tmapv3.LatLng(35.1328485, 126.90239),
        width : "100%",	// 지도의 넓이
        height : "400px",	// 지도의 높이
        zoom : 14	// 지도 줌레벨
      });
  
      var marker = new Tmapv3.Marker({
                        position: new Tmapv3.LatLng(35.1328485, 126.90239),	//Marker의 중심좌표 설정.
                        map: map	//Marker가 표시될 Map 설정..
                      });
          setMarker(map);
    }

    const setMarker = (map) => {
      fieldList.forEach((a) => {
        var marker = new Tmapv3.Marker({
          position: new Tmapv3.LatLng(a.lat, a.lon),	//Marker의 중심좌표 설정.
          map: map	//Marker가 표시될 Map 설정..
        });
      })
    }

var s_latlng;
var e_latlng;

    const getRP = (e_lat, e_lon) => {
      s_latlng = new Tmapv3.LatLng (35.1328485, 126.90239);
      e_latlng = new Tmapv3.LatLng (e_lat, e_lon);
      var optionObj = {
        reqCoordType:"WGS84GEO", //요청 좌표계 옵셥 설정입니다.
        resCoordType:"WGS84GEO",  //응답 좌표계 옵셥 설정입니다.
        trafficInfo:"Y"
      };
  
      var params = {
        onComplete:onComplete,
        onProgress:onProgress,
        onError:onError
      };
  
      // TData 객체 생성
      var tData = new Tmapv3.extension.TData();
  
      // TData 객체의 경로요청 함수
      tData.getRoutePlanJson(s_latlng, e_latlng, optionObj, params);
    }
    
    function onComplete() {
      var t_distance = 0;
        var t_time = 0;
            console.log(this._responseData); //json으로 데이터를 받은 정보들을 콘솔창에서 확인할 수 있습니다.
                for(var i=0; i<this._responseData.features.length; i++){
                if(this._responseData.features[i].properties.distance != null){
                    t_distance += this._responseData.features[i].properties.distance
                    }
                if(this._responseData.features[i].properties.time != null){
                    t_time += this._responseData.features[i].properties.time}
                }
                var t_s_distance = t_distance.toString().substring(0,t_distance.toString().length-3)+"."+t_distance.toString().substring(t_distance.toString().length-3)
                var h_time = Math.floor(t_time/3600);
                var m_time = Math.floor(t_time%3600/60);
                var s_time = t_time%60;
                var view = "<p>거리 : "+t_s_distance+"km</p>"
                view += "<p>예상 시간 : "+h_time+"시간 "+m_time+"분</p>"
                $(".field-info2").append(view)
            var jsonObject = new Tmapv3.extension.GeoJSON();
            var jsonForm = jsonObject.rpTrafficRead(this._responseData);
    
            //교통정보 표출시 생성되는 LineColor 입니다.
                var trafficColors = {
    
                    // 사용자가 임의로 색상을 설정할 수 있습니다.
                    // 교통정보 옵션 - 라인색상
                    trafficDefaultColor:"#000000", //교통 정보가 없을 때
                    trafficType1Color:"#009900", //원할
                    trafficType2Color:"#7A8E0A", //서행
                    trafficType3Color:"#8E8111",  //정체
                    trafficType4Color:"#FF0000"  //정체
                };
                console.log(map)
                console.log(jsonForm)
                console.log(trafficColors)
                jsonObject.drawRouteByTraffic(map, jsonForm, trafficColors);
                var center_lat = (s_latlng._lat+e_latlng._lat)/2;
                var center_lon = (s_latlng._lng+e_latlng._lng)/2;
            map.setCenter(new Tmapv3.LatLng(center_lat, center_lon));
            //map.setZoom(distanceToLevel(t_distance));
    
            var newData = this._responseData.features;
                      var PTbounds = new Tmapv3.LatLngBounds();
                          for (var i = 0; i < newData.length; i++) {
                            var mData = newData[i];
                            var type = mData.geometry.type;
                            var pointType = mData.properties.pointType;
                            if(type == "Point"){
                              var linePt = new Tmapv3.LatLng(mData.geometry.coordinates[1],mData.geometry.coordinates[0]);
                              PTbounds.extend(linePt);
                            }
                            else{
                              var startPt,endPt;
                              for (var j = 0; j < mData.geometry.coordinates.length; j++) {
                                var linePt = new Tmapv3.LatLng(mData.geometry.coordinates[j][1],mData.geometry.coordinates[j][0]);
                                PTbounds.extend(linePt);
                              }
                          }
                        }
                        $(".loading_gif").css('display','none')
                        map.fitBounds(PTbounds);
    
          }
    
          //데이터 로드중 실행하는 함수입니다.
          function onProgress(){
    
          }
    
          //데이터 로드 중 에러가 발생시 실행하는 함수입니다.
          function onError(){
            alert("onError");
          }
          function test2(e, index){
            $(".field-info2 p").remove();
            $(".field-info2 input:eq(1)").val(e.target.textContent)
            $(".field-info2 img").css('display', 'block')
            $("#map_gif").css('display', 'block')
            initTmap();
            setTimeout(function(){
              getRP(fieldList[index.index].lat, fieldList[index.index].lon)
              }, 100)
          }
    return(
            <div className="project-header text-left">
            <div className="write">
                <form>
                    <h1></h1>
                    <hr/>
                    <div style={{position:"relative", marginTop:"40px"}}>
                      <img id="map_gif" className="loading_gif" src="img/loading.gif" style={{display:'none'}}/>
                      <div id="map" style={{margin:"20px 0px 20px 0px"}}>

                      </div>
                    </div>
                    <div>
                      <hr/>
                      <div className="tmap-info text-left">
                        <div className="field-info">
                          <h2>현장목록</h2>
                          <ul>
                            {fieldList.map((a, index) => {
                              var test = <li key={index}
                                            onClick={(e) => {test2(e, {index})}}>{a.field_name}</li>
                              return test;
                            })}
                          </ul>
                        </div>
                        <div className="field-info2">
                          <img className="loading_gif" src="img/loading.gif" style={{display:'none'}}/>
                          <h2>경로탐색</h2>
                          <input value="광주광역시 남구청" readOnly/>
                          <input value="도착지" readOnly/>

                        </div>
                       
                      </div>
                    </div>
                   
                    <div id="write-content" className='contentEdit text-left'
                    name='content'
                    >
                    <hr/>
                    <div>tmapAPI를 이용해 만든 지도입니다.</div>
                    <div>처음에 렌더링할때 아래 코드처럼 마커리스트를 useState에 담아 관리합니다.</div>
                    <p>{convertNewlineToBreak(text3)}</p>
                    <br/>
                    <div>지도를 로드하는 js코드입니다.</div>
                    <div>리액트에서 사용하니 {`map.destroy()`}가 작동을 하지 않아 div를 remove하는 쪽으로 했습니다</div>
                    <p>{convertNewlineToBreak(text1)}</p>
                    <br></br>
                    <div>마커를 찍는 코드</div>
                    <p>{convertNewlineToBreak(text2)}</p>
                    <br/>
                    <div>네비게이션 기능</div>
                    <p>{convertNewlineToBreak(text4)}</p>
                    </div>
                    <div style={{textAlign:'left', backgroundColor: '#2b2b2b', color: '#a9b7c6', fontFamily: 'JetBrains Mono, monospace', fontSize: '9.0pt' }}>
                      <pre>
                      <span style={{ color: '#bbb529' }}>@PostMapping</span>
                      <span style={{ color: '#e8ba36' }}>("/tmap/field_list")</span>
                      <br />
                      <span style={{ color: '#e8ba36' }}>    </span><span style={{ color: '#cc7832' }}>public</span> List<span style={{ color: '#e8ba36' }}>&lt;Field&gt;</span> field_list<span style={{ color: '#e8ba36' }}>()</span><span style={{ color: '#54a857' }}>{'{'}</span>
                      <br />
                      <span style={{ color: '#54a857' }}>        </span>
                      <span style={{ color: '#cc7832' }}>return</span>
                      fieldRepository.findAll<span style={{ color: '#e8ba36' }}>()</span>
                      <span style={{ color: '#cc7832' }}>;</span>
                      <br />
                      <span style={{ color: '#cc7832' }}>    </span><span style={{ color: '#54a857' }}>{'}'}</span>
                      <br /><br />
                      <span style={{ color: '#e8ba36' }}>{'}'}</span>
                      </pre>
                      </div>
                </form>
            </div>
            <div className="write-btn">
                <button onClick={() => navigate(-1)}>목록</button>
            </div>
          </div>
    )

    function convertNewlineToBreak(text) {
      return text.split('\n').map((line, index) => (
          <>
          {line}
          <br />
          </>
      ));
    }
}

const text1 = `const initTmap = () => {
  $("#map").remove()
  $("#map_gif").parent().append('<div id="map"></div>')
  map = new Tmapv3.Map("map", { // 지도가 생성될 div
    center : new Tmapv3.LatLng(35.1328485, 126.90239),
    width : "100%",	// 지도의 넓이
    height : "400px",	// 지도의 높이
    zoom : 14	// 지도 줌레벨
  });`

const text2 = `    const setMarker = (map) => {
  fieldList.forEach((a) => {
    var marker = new Tmapv3.Marker({
      position: new Tmapv3.LatLng(a.lat, a.lon),	//Marker의 중심좌표 설정.
      map: map	//Marker가 표시될 Map 설정..
    });
  })
}`

const text3 = `const [fieldList, setFieldList] = useState([]);
fetch("/api/tmap/field_list", {
  method : 'post'
})
.then((response) => {return response.json()})
.then((json) => {
  var fieldArr = [...fieldList];
  json.forEach((a) => {
    fieldArr.push({
      field_name : a.field_name,
      lat : a.field_lat,
      lon : a.field_lon
    })
  })
  setFieldList(fieldArr)
  dataset = json;
})`

const text4 = `const getRP = (e_lat, e_lon) => {
  s_latlng = new Tmapv3.LatLng (35.1328485, 126.90239);
  e_latlng = new Tmapv3.LatLng (e_lat, e_lon);
  var optionObj = {
    reqCoordType:"WGS84GEO", //요청 좌표계 옵셥 설정입니다.
    resCoordType:"WGS84GEO",  //응답 좌표계 옵셥 설정입니다.
    trafficInfo:"Y"
  };

  var params = {
    onComplete:onComplete,
    onProgress:onProgress,
    onError:onError
  };

  // TData 객체 생성
  var tData = new Tmapv3.extension.TData();

  // TData 객체의 경로요청 함수
  tData.getRoutePlanJson(s_latlng, e_latlng, optionObj, params);
}

function onComplete() {
  var t_distance = 0;
    var t_time = 0;
        console.log(this._responseData); //json으로 데이터를 받은 정보들을 콘솔창에서 확인할 수 있습니다.
            for(var i=0; i<this._responseData.features.length; i++){
            if(this._responseData.features[i].properties.distance != null){
                t_distance += this._responseData.features[i].properties.distance
                }
            if(this._responseData.features[i].properties.time != null){
                t_time += this._responseData.features[i].properties.time}
            }
            var t_s_distance = t_distance.toString().substring(0,t_distance.toString().length-3)+"."+t_distance.toString().substring(t_distance.toString().length-3)
            var h_time = Math.floor(t_time/3600);
            var m_time = Math.floor(t_time%3600/60);
            var s_time = t_time%60;
            var view = "<p>거리 : "+t_s_distance+"km</p>"
            view += "<p>예상 시간 : "+h_time+"시간 "+m_time+"분</p>"
            $(".field-info2").append(view)
        var jsonObject = new Tmapv3.extension.GeoJSON();
        var jsonForm = jsonObject.rpTrafficRead(this._responseData);

        //교통정보 표출시 생성되는 LineColor 입니다.
            var trafficColors = {

                // 사용자가 임의로 색상을 설정할 수 있습니다.
                // 교통정보 옵션 - 라인색상
                trafficDefaultColor:"#000000", //교통 정보가 없을 때
                trafficType1Color:"#009900", //원할
                trafficType2Color:"#7A8E0A", //서행
                trafficType3Color:"#8E8111",  //정체
                trafficType4Color:"#FF0000"  //정체
            };
            console.log(map)
            console.log(jsonForm)
            console.log(trafficColors)
            jsonObject.drawRouteByTraffic(map, jsonForm, trafficColors);
            var center_lat = (s_latlng._lat+e_latlng._lat)/2;
            var center_lon = (s_latlng._lng+e_latlng._lng)/2;
        map.setCenter(new Tmapv3.LatLng(center_lat, center_lon));
        //map.setZoom(distanceToLevel(t_distance));

        var newData = this._responseData.features;
                  var PTbounds = new Tmapv3.LatLngBounds();
                      for (var i = 0; i < newData.length; i++) {
                        var mData = newData[i];
                        var type = mData.geometry.type;
                        var pointType = mData.properties.pointType;
                        if(type == "Point"){
                          var linePt = new Tmapv3.LatLng(mData.geometry.coordinates[1],mData.geometry.coordinates[0]);
                          PTbounds.extend(linePt);
                        }
                        else{
                          var startPt,endPt;
                          for (var j = 0; j < mData.geometry.coordinates.length; j++) {
                            var linePt = new Tmapv3.LatLng(mData.geometry.coordinates[j][1],mData.geometry.coordinates[j][0]);
                            PTbounds.extend(linePt);
                          }
                      }
                    }
                    $(".loading_gif").css('display','none')
                    map.fitBounds(PTbounds);

      }

      //데이터 로드중 실행하는 함수입니다.
      function onProgress(){

      }

      //데이터 로드 중 에러가 발생시 실행하는 함수입니다.
      function onError(){
        alert("onError");
      }
      function test2(e, index){
        $(".field-info2 p").remove();
        $(".field-info2 input:eq(1)").val(e.target.textContent)
        $(".field-info2 img").css('display', 'block')
        $("#map_gif").css('display', 'block')
        initTmap();
        setTimeout(function(){
          getRP(fieldList[index.index].lat, fieldList[index.index].lon)
          }, 100)
      }`
export default Skill2;