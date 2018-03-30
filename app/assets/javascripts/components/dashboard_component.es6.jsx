class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statuses: [],
      chartOptions: {},
      divID: ""
    };

    this.handleChartOptions = this.handleChartOptions.bind(this);
    this.loadStatuses = this.loadStatuses.bind(this);

    this.loadStatuses();
  }

  loadStatuses() {
    let url = "http://localhost:3000/login_status/statistics"
    ajaxCall(
      {url},
      (statuses) => {
        this.setState({
          statuses: []
        });
        console.log(statuses);
        window.setTimeout(this.loadStatuses, 5000);
      },
      (error, json) => {
        console.log(`Error in loading data: #${error.code}`, 500000);
      }
    );
  }

  handleChartOptions() {
    const divID = document.getElementById('status-analysis-graph');
    divID.style.backgroundColor = 'rgba(255,255,255,255)';
    divID.style.height = '300px';
    let data = null;
    let statuses = [{
        time: 5,
        status: 200,
        count: 3
      }, {
        time: 10,
        status: 404,
        count: 6
      }, {
        time: 6,
        status: 500,
        count: 2
      }
    ];
    let labels = statuses.map((status_name) => {
      return `${status_name.status}(${status_name.count})`;
    });
    let seriesData = statuses.map((status_name) => {
      return status_name.time;
    });
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
      <div>
        <ChartsComponent
          divID={this.state.divID}
          options={this.state.chartOptions}
        />
      </div>
    );
  }
}
