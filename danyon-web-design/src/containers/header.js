import React from "react";
import WOW from 'wowjs';
let FontAwesome = require('react-fontawesome');
class Header extends React.Component {
        componentDidMount() {
    new WOW.WOW().init();
  }
    render() {
        return (
           
                <div className="row header">
                    <div className="col-md-4 col-md-offset-2 col-sm-12 col-sm-offset-0">
                    
                        <h1 className="white name-header wow fadeInRight" data-wow-offset="70"  data-wow-iteration="1" >danyon satterlee</h1>
                        <h4 className="white name-bottom wow fadeInLeft" data-wow-offset="70"  data-wow-iteration="1">developer, designer</h4>
                       
                    </div>


                    <div className="col-md-2 col-md-offset-2 col-sm-12 col-sm-offset-0">
                       <a className=" white connect-header hvr-skew-forward" href="#connection">
                        <h3 className="connect-header ">Let's Connect 
                   </h3>      <FontAwesome
                            className=" angle-right"
                            name='angle-right'
                            size='2x'
                            style={{
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                        }}/></a>
                        
                    </div>
                </div>
         
        );
    }
}

export default Header;