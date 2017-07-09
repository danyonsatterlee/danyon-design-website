import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './containers/header.js';
import Explore from './containers/explore.js';
import Skills from './containers/skills.js';
import Contact from './containers/connect.js';
import Footer from './containers/footer.js';

class App extends React.Component{
    render(){
        return(
<div className="container-fluid">
    <Header />
    <Explore />
    <Skills />
    <Contact/>
    <Footer/>

</div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

