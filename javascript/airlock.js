$(document).ready(function() {
	
	target_temps = [[1,14],[2,1],[3,6],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9],[12,9],[13,9],[14,9]/*,[15,9],[16,9],[17,9],[18,8.5],[19,8],[20,7.5],[21,7],[22,6.5],[23,6],[24,5.5],[25,5],[26,4.5],[27,4],[28,3.5],[29,3],[30,2.5],[31,2],[32,1.5],[33,1],[34,1],[35,1],[36,1],[37,1],[38,1],[39,1],[40,1],[41,1],[42,1],[43,1],[44,1],[45,1],[46,1],[47,1],[48,1],[49,1],[50,1],[51,1],[52,1],[53,1],[54,1],[55,1],[56,1],[57,1],[58,1],[59,1],[60,1],[61,1],[62,1],[63,1],[64,1],[65,1],[66,1],[67,1],[68,1],[69,1],[70,1],[71,1],[72,1],[73,1],[74,1],[75,1]*/];
	actual_temps = [[1,13],[2,3],[3,6],[4,9.5],[5,9.4]];
	
	$.jqplot('chart',  [target_temps, actual_temps], {
		axes:{ 
			yaxis:{
				min: 0,
				label: 'Temp (°C)',
				labelRenderer: $.jqplot.CanvasAxisLabelRenderer
			},
			xaxis: {
				min: 0,
				label: 'Days',
				labelRenderer: $.jqplot.CanvasAxisLabelRenderer
			}
		},
		canvasOverlay: {
			show: true,
			objects: [
				{
					dashedVerticalLine: {
						name: 'today',
						x: 5,
						lineWidth: 2,
						shaddow: false
					}
				}]
		},
		series:[
			{
				label: 'Target',
				lineWidth: 1,
				color:'#f00',
				showMarker: false
			},
			{
				label: 'Actual',
				lineWidth: 1,
				color:'#00f',
				showMarker: true
			}
		],
		legend: {
			show: true,
			location: 'se'
		}
	});

});

function start_cooling() {
	$("#current_temp_circle").removeAttr("class");
	$("#current_temp_circle").addClass("temp_cooling");
}

function start_heating() {
	$("#current_temp_circle").removeAttr("class");
	$("#current_temp_circle").addClass("temp_heating");
}