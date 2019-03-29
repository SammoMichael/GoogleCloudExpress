import React, { Component } from 'react';
import Timer from '../timer/Timer'
// var Prism = require('prismjs');

export class Speed extends Component {
    constructor(props) {
      super(props);
      this.state={ over: false, highlight: "highlight",prompt: prompt, innerHTML: '', new_state: '', index: 12, length: 0, errors: 0, __html: ''}
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.gameOver = this.gameOver.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.callBackendAPI = this.callBackendAPI.bind(this)
      this.handleNext = this.handleNext.bind(this)
    }
    componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({
          data: res.res
        }))
        .catch(err => console.log(err));
      
    }
     
     // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
     callBackendAPI = async () => {
           const response = await fetch('/' + this.props.match.params.lang);
           const body = await response.json();
           if (response.status !== 200) {
             throw Error(body.message)
           }
           this.setState({body: body.res });
           return body;
          }
    handleNext() {
        this.callBackendAPI()
        .then(res => this.setState({
          data: res.res
        }))
        .catch(err => console.log(err));
      this.handleClick()
    }
    handleClick() {
      const index = this.state.index
      const len = this.state.length
      this.setState({index: 12, over:false})
      var innerHTML = this.state.body.substring(0, index) + `<span class=${this.state.highlight}>` + this.state.body.substring(index, index + len) + "</span>" + this.state.body.substring(index + len);
      const highlighter = document.getElementsByClassName('highlighter')[0]
      highlighter.innerHTML = innerHTML;
    }
    gameOver() {
      this.setState({over: false})
    }
    handleKeyDown(e) {
      e.preventDefault()
      if (this.state.index === this.state.length -14) {
        this.setState({over: true})
        return 
      }
      let prompt = this.state.prompt;
      let new_state = this.state.new_state
      let length = this.state.body.length || 0
      if(e.key === 'Backspace' && this.state.index > 13) {
          new_state = new_state.slice(0, -1);
          let new_index = this.state.index - 1 < 0 ? 0 : this.state.index - 1
          this.setState({ new_state, prompt })
          this.setState({ index: new_index })
        } else if(e.key === 'Tab') {
          if (this.state.body[this.state.index] === " " && this.state.body[this.state.index + 1] === " ") {
            new_state = new_state.concat("  ")
            this.setState({ new_state, prompt })
          this.setState({ highlight: "highlight", index: this.state.index+2, length })
            } else {
              this.setState({ highlight: "error", errors: this.state.errors+1 })

            }
      } else if(e.key === 'Enter') {
        if (this.state.body[this.state.index].charCodeAt() === 10) {
            new_state = new_state.concat("↵")
            this.setState({ new_state, prompt })
          this.setState({ highlight: "highlight", index: this.state.index+1, length })
            }
      } else if(e.key.length > 1 ) {
      } else {
            if (this.state.body[this.state.index] === e.key) {
            new_state = new_state.concat(e.key)
            this.setState({ new_state, prompt })
          this.setState({ highlight: "highlight", index: this.state.index+1, length })
            } else {
              this.setState({ highlight: "error", errors: this.state.errors+1 })
            }
        }
      const highlighter = document.getElementsByClassName('highlighter')[0]
      var index = this.state.index;
      const len = 1 
        var innerHTML = this.state.body.substring(0, index) + `<span class=${this.state.highlight}>`+ this.state.body.substring(index, index + len) + "</span>" + this.state.body.substring(index + len);
        highlighter.innerHTML = innerHTML;
    }
    render() {
      var errors = this.state.errors
      window.addEventListener("keydown", this.handleKeyDown);
      const prompt = (this.state.body)
      // var html;
      // var markdown
      // if (this.state.body) {
      //   var code = this.state.body
      //   html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
      //   markdown = {__html: html}
      // } else markdown = {__html: ''}
      var word_count = this.state.new_state.split(' ')
      word_count = word_count.filter(el => el !== "").length
      var elapsed_minutes = (300 - window.time) / 60
      var wpm = Math.round(word_count / (elapsed_minutes))
      wpm = (isNaN(wpm) ? 0 : wpm)
      return (
        <>
            <div className="timer-box">
                {/* {new_state} */}
                {/* {word_count} */}
                {/* {char_count} */}
                {this.state.over? null : <Timer /> }
                <div className="errors">
                  Errors: { errors } <br></br>
                  WPM: { wpm }
                  <br></br>
                  {/* <button className="next-button" onClick={this.handleNext}>Next</button> */}
                  { this.state.over ?  "You Won!!!" : null }
                  { this.state.over ? <><button className="replay-button" onClick={this.handleClick}>Replay</button><button className="next-button" onClick={this.handleNext}>Next</button></> : null}
                </div>
              </div>
            <div className="text">
              <div className="highlighter">
                  <div className="highlighter" dangerouslySetInnerHTML={{ __html: prompt }}/></div>
              {/* <span className="prompt">{new_state}</span> */}
            </div>
            <div className="feedback">
            </div>
        </>
    )
  }
}

export default Speed
