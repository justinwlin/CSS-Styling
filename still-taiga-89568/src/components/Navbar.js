import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-items">
          <span className="wordmark">session</span>
          <div className="navbar-links">
            <a href="#">My Sessions</a>
            <a href="#">Messages</a>
            <a href="#">Notifications</a>
            <div className="navbar-dropdown">
              <div className="navbar-user-bubble">D</div>
              <span class="navbar-user-bubble-arrow"><img src={require('./images/arrow_down_mediumGray_12x8.svg')} /></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
