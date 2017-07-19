import React from "react";

import { Dropdown, MenuItem, Button, Glyphicon} from 'react-bootstrap';


class DropDown extends React.Component {
 


  render() {
   
    return ( 

<div></div>



    )
  }
}




export default DropDown;






// class DropDown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toggleMenu = this.toggleMenu.bind(this);
//     this.state = {
//       menuActive: false
//     };
//   }

//   toggleMenu() {
//     let menuState = !this.state.menuActive;
//     this.setState({
//       menuActive: menuState
//     });
//   }

//   render() {
//     let menu;
//     if(this.state.menuActive) {
//       menu = 
//           <div className="nav-right">
              
//                 <ul className="nav-custom">
//                   <a href="#explore"><li>explore</li></a>
//                   <a  href="#skills"><li>skills </li></a>
//                   <a  href="#connection"><li>connect</li></a>
//                    <a href="#connection"><li>about</li></a>
//                 </ul>
//               </div>
              
//     } else {
//       menu = "";
//     }
//     return ( 
//       <div id = "menu">
//         <i className = "fa fa-bars bars fa-3x white pull-right" onClick = { this.toggleMenu }/> 
//       <CSSTransitionGroup transitionName = "menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}> 
       
//         {menu} 
//       </CSSTransitionGroup>
//     </div>
//     )
//   }
// }



// export default DropDown;
