import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 300 }
  }
  componentDidMount() {
    this.resetTimer();
  }
  resetTimer() {
    setInterval(() => this.setState({ timer: this.state.timer - 1 }), 1000)
  }
  render() {
    var minutes = Math.floor(this.state.timer / 60).toString()
    var secs = (this.state.timer % 60).toString().length !== 1 ? (this.state.timer % 60).toString() : "0" + (this.state.timer % 60).toString()
    var time = minutes + ":" + secs
    time = minutes > 0 ? time : "Sorry, you failed!"
    window.time = this.state.timer 
    return (
      <div className="timer">
        { time } 
      </div>
    )
  }
}
