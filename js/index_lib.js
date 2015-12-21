function getDataAndDraw() {
  var node_selector = '#chart_div_1';
  var datasetURL = "/resources/dataset00.json";
  var chartType = 'bar';
  var chartTitle = 'My first chart';

  hx.json(datasetURL, function(err, data){
    drawChart(node_selector, data, chartType, chartTitle);
  });

  var node_selector_1 = '#chart_div_2';
  var datasetURL_1 = "/resources/dataset01.json";
  var chartType_1 = 'scatter';
  var chartTitle_1 = 'My second chart';

  hx.json(datasetURL_1, function(err, data){
    drawChart(node_selector, data, chartType_1, chartTitle_1);
  });  
}

// Draws a chart in the specified 'node'.
// 'data' is an object in the format
//   {
//     variables: [[type_1, name_1], ...],
//     rows: [[v_11, v_12, ...],
//            [v_21, v_22, ...],
//             ...,
//            [v_n1, v_n2, ...]]
//   }
// 'type' can be one of the following strings: BarChart, ColumnChart, PieChart, ...
// (see https://google-developers.appspot.com/chart/interactive/docs/gallery)
function drawChart(node, data, type, title){
  var graph = new hx.Graph(node)

  var axis = graph.addAxis({
    x: {
      scaleType: 'discrete'
    },
    y: {
      scaleType: 'linear',
      scalePaddingMax: 0.1,
      yMin: 0
    }
  });

  refactored = data.rows.map(function (d) {
    return {
      x: d[0],
      y: d[1],
      // color: hx.theme.plot.colors[d[1]]
    }
  });

  axis.addSeries(type, {
    title: title,
    data: refactored
  });

  graph.render();

}


getDataAndDraw()