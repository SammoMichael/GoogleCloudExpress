import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <div>Choose Your Language</div>
        <button><Link to="/Speed/Python">Python</Link></button>
          <button><Link to="/Speed/JavaScript">JavaScript</Link></button>
          <button><Link to="/Speed/Ruby">Ruby</Link></button>
      </div>
    )
  }
}

export default Header
