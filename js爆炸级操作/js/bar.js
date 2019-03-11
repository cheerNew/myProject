function barLeft() {
	var myChart = echarts.init(document.getElementById('barLeft'));
	option = {
		title: {
			text: '语音余量',
			top: 'bottom',
			left: 'center',
			textStyle: {
				fontSize: 14,
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
				font: 'italic bolder 20px cursive',
				fill: '#13B3E1',
				width: 30,
				height: 30
			}
		}, //此例饼状图为圆环中心文字显示属性，这是一个原生图形元素组件，功能很多
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: ['50%', '65%'],
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

function barRight() {
	var myChart = echarts.init(document.getElementById('barRight'));
	option = {
		title: {
			text: '流量余量',
			top: 'bottom',
			left: 'center',
			textStyle: {
				fontSize: 14,
				fontWeight: '',
				color: '#333'
			},
		}, //标题
		graphic: {
			type: 'text',
			left: 'center',
			top: 'center',
			style: {
				text: '5%', //使用“+”可以使每行文字居中
				textAlign: 'center',
				font: 'italic bolder 20px cursive',
				fill: '#FB8931',
				width: 30,
				height: 30
			}
		}, //此例饼状图为圆环中心文字显示属性，这是一个原生图形元素组件，功能很多
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: ['50%', '65%'],
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
					value: 5
				},
				{
					value: 100
				}
			],
			color: ['#FB8931', '#ADB1B2'], //各个区域颜色
		}]
	};
	myChart.setOption(option);
}