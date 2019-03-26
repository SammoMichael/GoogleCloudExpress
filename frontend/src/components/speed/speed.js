import React, { Component } from 'react';
import Timer from '../timer/Timer'
var Prism = require('prismjs');
export class Speed extends Component {
    constructor(props) {
      super(props);
      this.state={ over: false, highlight: "highlight",prompt: prompt, innerHTML: '', new_state: '', index: 0, length: 0, errors: 0, __html: ''}
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.gameOver = this.gameOver.bind(this)
    }
    componentDidMount() {
      
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.setState({time})
      // const props = this.props.props
      // props ? this.setState({props}) : this.setState({props: ""})
      // this.setState({ prompt: this.props.props, length: this.props.props.length })
      
    }
    gameOver() {
      this.setState({over: false})
    }
    // componentDidUpdate() {
    //   if (this.state.index >= this.state.length && this.state.length !== 0) {
    //     this.gameOver();
    //   }
    // }
    handleKeyDown(e) {
      e.preventDefault()
      console.log(e.key)
      // debugger
      let prompt = this.state.prompt;
      let new_state = this.state.new_state
      let length = this.props.props.length || 0
      console.log(new_state);
      if(e.key === 'Backspace') {
          new_state = new_state.slice(0, -1);
          let new_index = this.state.index - 1 < 0 ? 0 : this.state.index - 1
          this.setState({ new_state, prompt })
          // console.log(this.state)
          this.setState({ index: new_index })
        } else if(e.key === 'Tab') {
          if (this.props.props[this.state.index] === " " && this.props.props[this.state.index + 1] === " ") {
            new_state = new_state.concat("  ")
            this.setState({ new_state, prompt })
            // console.log(this.state)
          this.setState({ highlight: "highlight", index: this.state.index+2, length })
            } else {
              this.setState({ highlight: "error", errors: this.state.errors+1 })

            }
      } else if(e.key === 'Enter') {
        if (this.props.props[this.state.index].charCodeAt() === 10) {
            new_state = new_state.concat("↵")
            this.setState({ new_state, prompt })
            // console.log(this.state)
          this.setState({ highlight: "highlight", index: this.state.index+1, length })
            }
      } else if(e.key.length > 1 ) {
      } else {
            if (this.props.props[this.state.index] === e.key) {
            new_state = new_state.concat(e.key)
            this.setState({ new_state, prompt })
            // console.log(this.state)
          this.setState({ highlight: "highlight", index: this.state.index+1, length })
            } else {
              this.setState({ highlight: "error", errors: this.state.errors+1 })
            }
          console.log(this.state)
        }
      // debugger
      console.log(this.state)
      const highlighter = document.getElementsByClassName('highlighter')[0]
      console.log(highlighter.innerHTML);
      // var innerHTML = highlighter.innerHTML;
      var index = this.state.index;
      const len = 1 
      console.log(index)
        var innerHTML = this.props.props.substring(0, index) + `<span class=${this.state.highlight}>`+ this.props.props.substring(index, index + len) + "</span>" + this.props.props.substring(index + len);
        highlighter.innerHTML = innerHTML;
        console.log(innerHTML);
        // debugger
      
    }
    render() {
      var error = this.state.highlight ? null : "error"
      var errors = this.state.errors
      // debugger 
      window.addEventListener("keydown", this.handleKeyDown);
      // window.addEventListener('keydown', this.handleKeyDown)
      const prompt = (this.props.props)
      var html;
      var markdown
      if (this.props.props) {
        var code = this.props.props
        html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
        markdown = {__html: html}
      } else markdown = {__html: ''}
      var index = this.state.index
      var length = this.state.length
      const new_state = (this.state.new_state)
      const char_count = new_state.length
      var word_count = this.state.new_state.split(' ')
      word_count = word_count.filter(el => el !== "").length
      var elapsed_minutes = (300 - window.time) / 60
      var wpm = Math.round(word_count / (elapsed_minutes))
      wpm = (isNaN(wpm) ? 0 : wpm)
      return (
        <>
          <div className="speed">Speed Code </div>
            <div className="text">
              <div className="highlighter">
                {prompt}
              </div>
              <div className="timer-box">
                {/* {new_state} */}
                {/* {word_count} */}
                {/* {char_count} */}
                {<Timer /> }
                <div className="errors">
                  Errors: { errors } <br></br>
                  WPM: { wpm }
                  { index >= length && length !== 0 ? "You Won!!!" : null }
                  {/* <pre><code dangerouslySetInnerHTML={markdown}></code></pre> */}
                </div>
              </div>
              {/* <span className="prompt">{prompt}</span> */}
              {/* <span className="prompt">{new_state}</span> */}
            </div>
            <div className="feedback">
              
            </div>
        </>
    )
  }
}

export default Speed
