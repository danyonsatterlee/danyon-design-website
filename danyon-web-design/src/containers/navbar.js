import React from "react";

import DropDown from '../components/nav-comps.js';
import { CSSTransitionGroup } from 'react-transition-group'
let FontAwesome = require('react-fontawesome');



class MyNav extends React.Component{
    render(){
        return(
            <div id="menuContainer">
                <DropDown/>
            </div>


        );
    }
}

export default MyNav;