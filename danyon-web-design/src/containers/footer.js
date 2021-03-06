import React from "react";
let FontAwesome = require('react-fontawesome');

class Footer extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 footer">
                    <div className="connect-here text-center">
                        <a className="icons" href="https://www.youtube.com/channel/UC4wxvu2z2x-ZkMT-CROQtkw?view_as=subscriber">
                            <FontAwesome
                                className="youtube footer-icons"
                                name='youtube '
                                size='2x'
                                style={{
                                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                            }}/>
                        </a>
                        <a className="icons" href="https://github.com/danyonsatterlee">
                            <FontAwesome
                                className="github-square footer-icons"
                                name='github '
                                size='2x'
                                style={{
                                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                            }}/>
                        </a>
                        <a className="icons" href="https://instagram.com/danyonsatterlee">
                            <FontAwesome
                                className="instagram-square footer-icons"
                                name='instagram'
                                size='2x'
                                style={{
                                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                            }}/></a>
                        <a className="icons" href="https://www.linkedin.com/in/danyon-satterlee/">
                            <FontAwesome
                                className="linkedin-square footer-icons"
                                name='linkedin-square '
                                size='2x'
                                style={{
                                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                            }}/></a>
                        <a className="icons" target="_blank" href="mailto:danyon.satterlee@gmail.com">
                            <FontAwesome
                                className="envelop-o footer-icons"
                                name='envelope-o'
                                size='2x'
                                style={{
                                textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                            }}/></a>
                    </div>

                </div>
            </div>

        );
    }
}

export default Footer;