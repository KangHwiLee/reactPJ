var label1 = [100]
var dataset1 = [100]
for(var i=0; i<100; i++){
    label1[i] = ''
    dataset1[i] = 0
}
const chartDataAndOptions = {
    data: {
        labels: label1,
        datasets: [{
            label: 'CPU 사용량',
            data: dataset1,
            fill: true,
            borderColor: 'rgb(78, 115, 223)',
            tension: 0.1,
            pointBorderWidth: 0
        }]
        }, 
        options: {
            transitions : 0,
            animation : false,
            scales: {
                x: {
                    display: false,     //세로선 없애기
                    title: {
                      display: true
                    }
                  },
                y: {
                    display: true,
                    suggestedMin: 0,
                    suggestedMax: 100
                  }
            },
            elements: {
                point:{
                radius: 0,
                }
                }
        }  
  };

  export default chartDataAndOptions;