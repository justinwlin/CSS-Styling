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
              <span className="caret" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
