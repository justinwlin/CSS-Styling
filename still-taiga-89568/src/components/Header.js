import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <p className="mainheader">I eat too much when I am sad</p>
        <p className="subheader">Wednesday, Nov 18, 2018</p>
        <div className="header-session">
          <p>10 people currently in this session</p>
          <p>
            Invite Participants <span className="plus-button">+</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
