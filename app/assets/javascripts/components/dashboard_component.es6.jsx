class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statuses: {},
      chartOptions: {},
      divID: ""
    };

    this.handleChartOptions = this.handleChartOptions.bind(this);
    this.loadStatuses = this.loadStatuses.bind(this);

    this.loadStatuses();
  }

  loadStatuses() {
    let url = window.location.origin + "/login_status/statistics";
    ajaxCall(
      {method:"GET",
        url},
      (statuses) => {
        this.setState({
          statuses: statuses
        }, this.handleChartOptions);
        console.log(statuses);
        window.setTimeout(this.loadStatuses, 5000);
      },
      (error, json) => {
        console.log(json);
        console.log("Error in loading data: ");
      }
    );
  }

  handleChartOptions() {
    const divID = document.getElementById('status-analysis-graph');
    divID.style.backgroundColor = 'rgba(255,255,255,255)';
    divID.style.height = '300px';
    let data = null;
    let { status_with_count, status } = this.state.statuses;

    let labels = [];
    let seriesData = [];

    if (status_with_count) {
      labels = status.map((status_name) => {
        return `${status_name.status_code}(${status_with_count[status_name.status_code]})`;
      });
      seriesData = status.map((status_name) => {
        return Math.round(status_name['avg'])      
      });
    }

    data = {
      labels: labels,
      datasets: [
        {
          label : "Status graph",
          backgroundColor: [
              'rgba(116, 250, 154, 0.82)',
              'rgba(253, 186, 124, 0.83)',
              'rgba(237, 155, 155, 0.83)',
              'rgba(250, 50, 50, 0.94)',
          ],
          borderColor: [
              'rgba(116, 250, 154, 0.82)',
              'rgba(253, 186, 124, 0.83)',
              'rgba(237, 155, 155, 0.83)',
              'rgba(250, 50, 50, 0.94)',
          ],
          borderWidth: 1,
          data: seriesData,
          showTooltips: true,
        }
      ]

    };
    this.setState({
      chartOptions: data,
      divID: divID
    });
  }

  componentDidMount() {
    this.setState({
      statuses: []
    });
    this.handleChartOptions();
  }

  render () {
    return (
      <div className="analysis-chart">
        <ChartsComponent
          divID={this.state.divID}
          options={this.state.chartOptions}
        />
      </div>
    );
  }
}
