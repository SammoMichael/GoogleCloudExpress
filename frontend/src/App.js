
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Repl from './components/repl/Repl';
import Speed from './components/speed/speed';
class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        {/* <Repl /> */}
        {this.state.data ? <Speed props={this.state.data}/> : "Loading..."}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    );
  }
}

export default App;