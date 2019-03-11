function barBox() {
	var myChart = echarts.init(document.getElementById('box'));
	option = {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross',
	            crossStyle: {
	                color: '#999'
	            }
	        }
	    },
	    toolbox: {
	        feature: {
	            dataView: {show: true, readOnly: false},
	            magicType: {show: true, type: ['line', 'bar']},
	            restore: {show: true},
	            saveAsImage: {show: true}
	        }
	    },
	    legend: {
	        right:'10%',
	        data:['正常','迟到','早退','缺勤']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '13%',
	        top:'14%',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            data: ['早上第一节','上午第一节','上午第二节','上午第三节','上午第四节','下午第一节','下午第二节','晚上第一节','晚上第二节'],
	            axisPointer: {
	                type: 'shadow'
	            },
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            name: '人',
	           	min: -100,
	            max: 200,
	            interval: 50,
	             axisTick:{
	                show:false
	            },
	        },
	        {
	            type: 'value',
	            name: '%',
	            min: 0,
	            max: 100,
	            interval: 20,
	            splitLine:{
	                show:false
	            },
	            axisTick:{
	                show:false
	            },
	        }
	    ],
	    series: [
	        {
	            name:'正常',
	            type:'bar',
	             label: {
	                normal: {
	                    show: true,
	                    position: 'inside'
	                }
	            },
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6]
	        },
	        {
	            name:'迟到',
	            type:'bar',
	              label: {
	                normal: {
	                    show: true,
	                    position: 'inside',
	                     formatter:function(param){
	                         let num = Math.abs(param.value)
	                         return num
	                    },
	                },
	                
	            },
	           
	            data:[-2,-6,- 5.9, -9 ,-26,-4, -28,-7, -70]
	        },
	         {
	            name:'早退',
	            type:'bar',
	            data:[-2,-6,- 5.9, -9 ,-26,-4, -28,-7, -70]
	        },
	         {
	            name:'缺勤',
	            type:'bar',
	             data:[-2,-6,- 5.9, -9 ,-26,-4, -28,-7, -70]
	        },
	        {
	            type:'line',
	            yAxisIndex: 1,
	            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
	        }
	    ]
	};
	myChart.setOption(option);
}