// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(getDataAndDraw);

function getDataAndDraw() {
  var node = $('.chart')[0]; // where to draw the chart
  var datasetURL = "/resources/dataset00.json";
  var chartType = 'BarChart';
  var chartTitle = 'My first chart';

  $.getJSON(datasetURL, function(data){
    drawChart(node, data, chartType, chartTitle);
  });

  var node_1 = $('.chart')[1];
  var datasetURL_1 = "/resources/dataset01.json";
  var chartType_1 = 'ScatterChart';
  var chartTitle_1 = 'My second chart';

  $.getJSON(datasetURL_1, function(data){
    drawChart(node_1, data, chartType_1, chartTitle_1);
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
  // a DataTable object is an object containing data
  // in a format that the google API can understand.
  // We create one and we wrap our data into it
  var dataTable = new google.visualization.DataTable();
  // set columns type and name
  data.variables.forEach(function(pair){
    dataTable.addColumn(pair[0], pair[1]);
  });
  // set data
  dataTable.addRows(data.rows);

  // now that we have a data table, we can setup a chart
  var options = {
    'title': title,
    'width': 400,
    'height': 300
  };
  var chart = new google.visualization[type](node);
  chart.draw(dataTable, options);
}
