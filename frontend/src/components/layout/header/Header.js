import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="language">
        <div className="choose">Choose Your Language</div>
        <button className="python"><Link className="python-link" to="/Speed/Python">Python</Link></button>
          <button className="javascript"><Link className="js-link" to="/Speed/JavaScript">JavaScript</Link></button>
          <button className="ruby"><Link className="ruby-link" to="/Speed/Ruby">Ruby</Link></button>
      </div>
    )
  }
}

export default Header
