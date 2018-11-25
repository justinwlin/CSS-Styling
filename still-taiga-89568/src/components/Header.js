import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
    render() {
        
      return (
        /*
        Headings
        */
        <div>
          <div className = 'mainHeader'>
            I eat too much when I am sad
            </div>
          <div className = 'subHeader'>
            Wednesday, Nov 18, 2018
          </div>
          <div>  </div>
        </div>
      )
    }

}

export default Header;