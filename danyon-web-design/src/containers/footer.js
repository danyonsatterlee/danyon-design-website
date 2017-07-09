import React from "react";
let FontAwesome = require('react-fontawesome');

class Footer extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-12 footer">
                    <div className="connect-here text-center">
                     <a href="https://www.github.com/danyonsatterlee" 
                     <FontAwesome
                            className="github-square footer-icons"
                            name='github '
                            size='2x'
                            style={{
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                        }}/> 
                           <FontAwesome
                            className="instagram-square footer-icons"
                            name='instagram'
                            size='2x'
                            style={{
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                        }}/>
                           <FontAwesome
                            className="linkedin-square footer-icons"
                            name='linkedin-square '
                            size='2x'
                            style={{
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                        }}/>
                              <FontAwesome
                            className="envelop-o footer-icons"
                            name='envelope-o'
                            size='2x'
                            style={{
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                        }}/>
                        </div>

                </div>
            </div>

        );
    }
}

export default Footer;