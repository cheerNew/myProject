function barLeft() {
	var myChart = echarts.init(document.getElementById('barLeft'));
	option = {
		title: {
			text: '语音余量',
			top: 'bottom',
			left: 'center',
			textStyle: {
				fontSize: 16,
				fontWeight: '',
				color: '#333'
			},
		}, //标题
		graphic: {
			type: 'text',
			left: 'center',
			top: 'center',
			style: {
				text: '45%', //使用“+”可以使每行文字居中
				textAlign: 'center',
				font: 'italic bolder 60px cursive',
				fill: '#13B3E1',
				width: 30,
				height: 30
			}
		}, //此例饼状图为圆环中心文字显示属性，这是一个原生图形元素组件，功能很多
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: ['55%', '70%'],
			avoidLabelOverlap: false,
			legendHoverLink: false,
			hoverAnimation: false,
			hoverOffset: 0,
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: 45
				},
				{
					value: 100
				}
			],
			color: ['#13B3E1', '#ADB1B2'], //各个区域颜色
		}]
	};
	myChart.setOption(option);
}