import React from "react"
let FontAwesome = require('react-fontawesome');
class Header extends React.Component {
    render() {
        return (
           
                <div className="row header">
                    <div className="col-md-4 col-md-offset-2 col-sm-12 col-sm-offset-0">
                       
                        <h1 className="white name-header">danyon satterlee</h1>
                        <h6 className="white name-bottom">developer, designer</h6>
                       
                    </div>
                    <div className="col-md-2 col-md-offset-2 col-sm-12 col-sm-offset-0">
                        <h3 className="white connect-header ">Let's Connect  
                        <FontAwesome
                            className="white name-bottom angle-right"
                            name='angle-right'
                            size='2x'
                            style={{
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                        }}/></h3> 
                        
                    </div>
                </div>
         
        );
    }
}

export default Header;