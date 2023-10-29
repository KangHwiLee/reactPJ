import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import chartDataAndOptions from '../js/chart'
import $ from "jquery";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  


// Props : 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.
const Skill1 = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { data, options } = chartDataAndOptions;
    const [chartData, setChartData] = useState({...data});
    const [chartKey, setChartKey] = useState(0);
    useEffect(() => { 

        var id = location.pathname.replace("/skill", "");
        fetch("http://localhost:8080/api/skill/title/"+id)
        .then(response => {return response.json()})
        .then(json => {
            console.log(json) 
            $('form h1').html(json.title)
        })
        
    }, [])
    var timer = null;
    useEffect(() => {
        timer = setInterval(() => {
            fetch("http://localhost:8080/api/chart/data", {
                method : "post"
            })
            .then(response => {
                return response.json()
            })
            .then((json) => {
                const newData = {...data}
                newData.datasets[0].data.push(json)
                if(newData.datasets[0].data.length > 100){
                    newData.datasets[0].data.shift();
                }
                newData.datasets[0].label = 'CPU 사용량 : ' + json
                setChartData(newData);
                setChartKey((prevKey) => prevKey + 1);
            }) 
        }, 1000)

        return () => {
            clearInterval(timer);
          };
    }, [])

    const useEffectCode = `
    var timer = null;
    useEffect(() => {
      timer = setInterval(() => {
        fetch("/api/chart/data", {
          method : "post"
        })
        .then(response => {
          return response.json()
        })
        .then((json) => {
          const newData = {...data}
          newData.datasets[0].data.push(json)
          if(newData.datasets[0].data.length > 100){
              newData.datasets[0].data.shift();
          }
          newData.datasets[0].label = 'CPU 사용량 : ' + json
          setChartData(newData);
          setChartKey((prevKey) => prevKey + 1);
        }) 
      }, 1000)
  
      return () => {
        clearInterval(timer);
      };
    }, [])
  `;

    const backCode = `   @PostMapping("/chart/data")
    public int chart_data(){
        OperatingSystemMXBean osBean = ManagementFactory.getPlatformMXBean(OperatingSystemMXBean.class);
        double cpuUsage = osBean.getSystemCpuLoad() * 100;
        System.out.println(cpuUsage);
        return (int)cpuUsage;
    }
    `

    const chartCode = `
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
  `
    function convertNewlineToBreak(text) {
        return text.split('\n').map((line, index) => (
            <>
            {line}
            <br />
            </>
        ));
      }


    
    return(
            <div className="project-header text-left">
            <div className="write">
                <form>
                    <h1>title</h1>
                    <hr/>
                    <div id="write-content" className='contentEdit text-left'
                    name='content'
                    >
                        <Line key={chartKey} data={chartData} options={options} />
                        <hr/>
                        <h3>front-end</h3>    
                        <p>{convertNewlineToBreak(useEffectCode)}</p>
                        <h3>Back-end</h3>
                        <p>{convertNewlineToBreak(backCode)}</p>
                        <h3>Chart-js</h3>
                        <p>{convertNewlineToBreak(chartCode)}</p>
                    </div>
                </form>
            </div>
            <div className="write-btn">
                <button onClick={() => navigate(-1)}>목록</button>
            </div>
          </div>
    )
}

export default Skill1;