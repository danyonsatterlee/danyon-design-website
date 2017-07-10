import React from "react"
let FontAwesome = require('react-fontawesome');
class Header extends React.Component {
    render() {
        return (
           
                <div className="row header">
                    <div className="col-md-4 col-md-offset-2 col-sm-12 col-sm-offset-0">
                       
                        <h1 className="white name-header">danyon satterlee</h1>
                        <h4 className="white name-bottom">developer, designer</h4>
                       
                    </div>


                    <div className="col-md-2 col-md-offset-2 col-sm-12 col-sm-offset-0">
                       <a className=" white connect-header hvr-skew-forward" href="https://github.com/danyonsatterlee">
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