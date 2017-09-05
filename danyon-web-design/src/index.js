import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './index.css';
import Home from './containers/home.js'

import AllExplore from './containers/allexplore.js';

import Explore from './containers/explore.js';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-72855452-1');


function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

class App extends React.Component{
    render(){
        return(


    <BrowserRouter onUpdate={logPageView}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/allexplore" component={AllExplore} />
  
        </Switch>
      </BrowserRouter>
   

  
 


        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));



