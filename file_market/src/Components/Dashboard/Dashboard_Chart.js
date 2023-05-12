import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from '../../assets/css/Dashboard/Dashboard_Chart.module.css';

const ChartModeButton = (props) => {
    const total_button = props.chartMode === 'total' ? styles.dashboard_chart_cur_mode_button : styles.dashboard_chart_mode_button;
    const extension_button = props.chartMode === 'extension' ? styles.dashboard_chart_cur_mode_button : styles.dashboard_chart_mode_button;

    return(
        <div className={styles.dashboard_chart_mode_button_wrapper}>
            <button className={total_button}
                onClick={() => {
                    props.setChartMode('total');
                }}>
                Total
            </button>
            <button className={extension_button}
                onClick={() => {
                    props.setChartMode('extension');
                }}>
                Extension
            </button>
        </div>
    )
}

const Chart = () => {
    const [chartMode, setChartMode] = useState('total');
    const [chartData, setChartData] = useState({
        series: [11, 14, 25, 32, 2, 53],
        options: {
            chart: {
                type: 'donut',
            },
            legend: {
                position: 'bottom'
            },
            responsive: [{
                breakpoint: 480,
            }],
            plotOptions: {
                pie: {
                    donut: {
                    // hollow: {  
                    //   margin: 15,
                    //   size: '70%',
                    //   image: '../../css/images/a-icon.jpg',
                    //   imageWidth: 64,
                    //   imageHeight: 64,
                    //   imageClipped: false
                    // },
                        labels: {
                            show: true,
                            value: {
                                fontSize: '22px',
                                show: true,
                                color: 'blue',
                            },
                        },
                    }
                }
            },
            labels: ["txt", "mkv", "py", "cpp", "c", "h", "jpg"],
            title: {
                text: '이벤트별 통계',
                align: 'center'
            },
        },
    });

    return(
        <div className={styles.dashboard_chart_wrapper}>
            <ChartModeButton setChartMode={setChartMode} chartMode={chartMode}/>
            <div className={styles.dashboard_chart}>
                <ReactApexChart 
                    options={chartData.options}
                    series={chartData.series}
                    type="donut" 
                    width="500"
                />
            </div>
        </div>
    )
}

export default Chart;