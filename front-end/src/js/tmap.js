const initTmap = () => {
    const map = new Tmapv3.Map("map", { // 지도가 생성될 div
      center : new Tmapv3.LatLng(gps.lat, gps.lon),
      width : "100%",	// 지도의 넓이
      height : "400px",	// 지도의 높이
      zoom : 14	// 지도 줌레벨
    });

    var marker = new Tmapv3.Marker({
                      position: new Tmapv3.LatLng(35.1378295, 126.903827),	//Marker의 중심좌표 설정.
                      map: map	//Marker가 표시될 Map 설정..
                    });

      setMarker(map)

      
  }

  const setMarker = (map) => {
    fetch("http://localhost:8080/api/tmap/field_list", {
      method : 'post'
    })
    .then((response) => {return response.json()})
    .then((json) => {
      json.forEach((a) => {
        var marker = new Tmapv3.Marker({
          position: new Tmapv3.LatLng(a.field_lat, a.field_lon),	//Marker의 중심좌표 설정.
          map: map,	//Marker가 표시될 Map 설정..
          content : '<div class ="label"><span class="left"></span><span class="center">'+a.field_name+'</span><span class="right"></span></div>'
        });
      })
    })
  }

  const getRP = (e_lat, e_lon) => {
    var s_latlng = new Tmapv3.LatLng (35.1378295, 126.903827);
    var e_latlng = new Tmapv3.LatLng (gps.lat, gps.lon);
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