class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: '',
      loggedin : false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.postResponseData = this.postResponseData.bind(this);
  }

  handleSubmit(e) {
    let start = (new Date).getTime();
    let end = null;

    e.preventDefault();
    let url = window.location.origin + "/users/login";
    let data = {email: this.state.email, password: this.state.password};
    ajaxCall(
      {
        method: 'POST',
        url: url,
        data: JSON.stringify(data)
      },
      (result,status) => {
        end = (new Date).getTime();
        this.postResponseData(result.status, end-start);
        console.log(result);
      },
      (error, json) => {
        end = (new Date).getTime();
        this.postResponseData(500, end-start);
        console.log(`${error.message} #${error.code}`, 5000);
      }
    );
  };

  postResponseData(code, time) {
    let url = window.location.origin + "/login_status/login_status_code";
    let data = {status_code: code, time: time};
    ajaxCall(
      {
        method: 'POST',
        url: url,
        data: JSON.stringify(data)
      },
      (result) => {
        if(code == 200) {
         alert("logged in Check analysis tab");
       } else {
         alert("Error : Wrong Username/Pwd, Relogin");
       }
        console.log(result);
      },
      (error, json) => {
        alert("Relogin there is some error");
        console.log(`${error.message} #${error.code}`, 5000);
      }
    );
  }


  handleMailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Email:
        <input type="text" name="email" value={this.state.email} onChange={this.handleMailChange}/>
        <br></br>
        Password:
        <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        <br></br>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
