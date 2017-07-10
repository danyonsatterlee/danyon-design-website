import React from "react";
let FontAwesome = require('react-fontawesome');

class MyNav extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
             <a  href="https://github.com/danyonsatterlee">
                     <FontAwesome
                            className="bars white pull-right"
                            name='bars '
                            size='3x'
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

export default MyNav;