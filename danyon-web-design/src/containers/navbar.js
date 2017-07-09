import React from "react";
let FontAwesome = require('react-fontawesome');

class myNav extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
             <a  href="https://github.com/danyonsatterlee">
                     <FontAwesome
                            className="bars"
                            name='bars '
                            size='5x'
                            style={{
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                        }}/> 
                        </a>
                        </div>
                </div>
            </div>

        );
    }
}

export default myNav;