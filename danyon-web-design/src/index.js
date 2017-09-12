import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './index.css';
import Home from './containers/home.js'
import createHistory from 'history/createBrowserHistory'
import AllExplore from './containers/allexplore.js';
import withTracker from './containers/tracker.js';
import Explore from './containers/explore.js';
let ReactGA = require('react-ga');

ReactGA.initialize('UA-72855452-1');

const history = createHistory()
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

class App extends React.Component{
    render(){
        return(


    <BrowserRouter history={history} >
        <Switch >
          <Route exact path="/" component={Home}/>
          <Route exact path="/allexplore" component={AllExplore} />
  
        </Switch>
      </BrowserRouter>
   

  
 


        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));



