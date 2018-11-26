import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p className="header-main">I eat too much when I am sad</p>
        <p className="header-sub">Wednesday, Nov 18, 2018</p>
        <div className="header-session">
          <p>Welcome to Session</p>
          <p>
            Invite Participants <span className="plus-button">+</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
