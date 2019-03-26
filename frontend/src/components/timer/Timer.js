import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 3000 }
  }
  componentDidMount() {
    this.resetTimer();
  }
  resetTimer() {
    setInterval(() => this.setState({ timer: this.state.timer - 1 }), 1000)
  }
  render() {
    return (
      <div className="timer">
        { this.state.timer } 
      </div>
    )
  }
}
