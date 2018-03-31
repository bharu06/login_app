class ChartsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.renderGraph = this.renderGraph.bind(this);
  }

  renderGraph() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
    var renderGraphThis = this;
    this.chart = new Chart(this.props.divID, {
        type: 'bar',
        data: this.props.options,
        options: {
          toolTip:{
            fontSize: 30,
           },
          tooltips: {
              bodyFontSize: 18,
              callbacks: {
                  label: function(columnObj) {
                      var studentNames = [];
                      //console.log(renderGraphThis.props.options)
                       //console.log(JSON.stringify(renderGraphThis.props.options.datasets[0].studentNamesData));
                       var grade = columnObj.xLabel;
                       var studentNamesData = renderGraphThis.props.options.datasets[0].studentNamesData[grade[0]];
                       for(var nameIndex in studentNamesData) {
                          studentNames.push(studentNamesData[nameIndex]);
                       }
                      return studentNames;
                      //return "$" + Number(tooltipItem.yLabel) + " and so worth\n\n it !";
                  }
              }
          },
          hover: {
            animationDuration: 0
          },
          animation: {
            duration: 1,
            onComplete: function() {
              var chartInstance = this.chart,
                ctx = chartInstance.ctx;

              ctx.font = Chart.helpers.fontString(18, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';

              this.data.datasets.forEach(function(dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function(bar, index) {
                  var data = dataset.data[index];
                  ctx.fillText(data, bar._model.x, bar._model.y - 5);
                });
              });
            }
          },
          legend: {
            labels: {
              fontColor: "blue",
              fontSize: 20
            }
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                fontColor: 'rgba(255,99,132,1)',
                labelString: 'time in ms'
              },
              ticks: {
                fontColor: 'rgba(255,99,132,1)',
                fontSize: 20,
                beginAtZero: true,
                suggestedMax: 15
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                fontColor: 'rgba(255,99,132,1)',
                labelString: 'Status with count'
              },
              barPercentage: 0.2,
              ticks: {
                fontColor: 'rgba(255,99,132,1)',
                fontSize: 16,
                beginAtZero: true
              }
            }]
          }
        }
    });
  }

  componentDidMount() {
    if(!this.props.divID) {
      return;
    }
    this.renderGraph();
  }

  componentDidUpdate() {
    this.renderGraph();
  }

  render() {
    return (
      <canvas id='status-analysis-graph'>
      </canvas>
    );
  }
}
