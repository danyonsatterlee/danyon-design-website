import React from "react";


import { CSSTransitionGroup } from 'react-transition-group'


class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render() {
    let menu;
    if(this.state.menuActive) {
      menu = <div>
          <div className="menu-bk">
                <ul className="skills">
                  <a href="#explore"><li>explore</li></a>
                  <a  href="#skills"><li>skills </li></a>
                  <a  href="#connection"><li>connect</li></a>
                   <a href="#connection"><li>about</li></a>
                </ul>
              </div>
               </div>
    } else {
      menu = "";
    }
    return ( 
      <div id = "menu">
        <i className = "fa fa-bars white pull-right" onClick = { this.toggleMenu }/> 
      <CSSTransitionGroup transitionName = "menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}> 
        {menu} 
      </CSSTransitionGroup>
    </div>
    )
  }
}



export default DropDown;
