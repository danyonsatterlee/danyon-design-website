import React from 'react';

import MyNav from './navbar.js';
import Header from './header.js';
import Explore from './explore.js';
import Skills from './skills.js';
import Contact from './connect.js';
import Footer from './footer.js';

class Home extends React.Component{
    render(){
        return(
<div>
 
     <MyNav/>
     <div className="container-fluid">
    <Header> </Header>
    <Explore />
    <Skills />
    <Contact/>
    <Footer/>
    </div>
  
    </div>
  


        );
    }
}
export default Home;



