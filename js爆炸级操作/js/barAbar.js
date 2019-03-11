function barAbar() {
	var data = [10, 52, 200, 334, 390, 330, 220];
	var value = 200;
	var myChart = echarts.init(document.getElementById('barAbar'));
	option = {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'line' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			axisTick: {
				alignWithLabel: true
			}
		}],
		yAxis: [{
			type: 'value',
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
		}],
		series: [{
			name: '直接访问',
			type: 'bar',
			barWidth: '60%',
			data: data,
			itemStyle: {
				normal: {
//					label: {
//						formatter: '{b}',
//						show: true, //开启显示
//						position: 'top', //在上方显示
//						textStyle: { //数值样式
//							color: 'black',
//							fontSize: 10
//						},
//					},
					color: function(params) {
						var colorList = [
							'#ff7e50', '#97d3f9', '#dd70d9', '#34cf34',
							'#6497ef', '#85802b', '#D7504B', '#C6E579',
							'#F4E001', '#F0805A', '#26C0C0'
						];
						return colorList[params.dataIndex]
					},
				}
			},
			markPoint : {
			    symbol: 'path://m 0,0 h 48 v 20 h -30 l -6,10 l -6,-10 h -6 z', 
			    symbolOffset: ['34%', '-50%'],
			    symbolKeepAspect: true,
			    label:{
                	position: "insideTop",
                    distance: 11,
                },
                data : [
                    {value : '三星级', xAxis: 'Wed', yAxis: 200}
                ]
                
            },
		}]
	};
	myChart.setOption(option);
}