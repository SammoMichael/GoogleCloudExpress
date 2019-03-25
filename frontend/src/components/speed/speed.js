import React, { Component } from 'react';

export class Speed extends Component {
    constructor(props) {
      super(props);
      this.state={ prompt: prompt, innerHTML: '', new_state: '', index: 0, length: 0}
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
      // const props = this.props.props
      // props ? this.setState({props}) : this.setState({props: ""})
      // this.setState({ prompt: this.props.props, length: this.props.props.length })
      
    }
    handleKeyDown(e) {;
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
      } else if(e.key.length > 1) {
      } else {
            if (this.props.props[this.state.index] === e.key) {
            new_state = new_state.concat(e.key)
            this.setState({ new_state, prompt })
            // console.log(this.state)
          this.setState({ index: this.state.index+1, length })
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
        var innerHTML = this.props.props.substring(0, index) + "<span class='highlight'>" + this.props.props.substring(index, index + len) + "</span>" + this.props.props.substring(index + len);
        highlighter.innerHTML = innerHTML;
        console.log(innerHTML);
        debugger
      
    }
    render() {
      
      // debugger 
      window.addEventListener("keydown", this.handleKeyDown);
      // window.addEventListener('keydown', this.handleKeyDown)
      const prompt = (this.props.props)
      const new_state = (this.state.new_state)
      return (
        <div className="text">
          <div className="highlighter">
            {prompt}
          </div>
          <div>
            {new_state}
          </div>
          {/* <span className="prompt">{prompt}</span> */}
          {/* <span className="prompt">{new_state}</span> */}
        </div>
    )
  }
}

export default Speed
