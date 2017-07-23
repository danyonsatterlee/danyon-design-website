import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './index.css';
import Home from './containers/home.js'

import AllExplore from './containers/allexplore.js';

import Explore from './containers/explore.js';


class App extends React.Component{
    render(){
        return(


    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/allexplore" component={AllExplore}/>
  
        </Switch>
      </BrowserRouter>
   

  
 


        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));



