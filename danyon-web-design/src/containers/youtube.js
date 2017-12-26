import React from "react";

import WOW from 'wowjs';
class Youtube extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }


    render() {
        return (
            <div>
            <div className="skill-space" id="skills">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <a href="https://www.youtube.com/channel/UC4wxvu2z2x-ZkMT-CROQtkw?view_as=subscriber" target="_blank">
                            <img className="coder-chick text-center" src="../img/web/coder-chick-banner.jpg"></img>
                        </a>
                        <ul className="skills wow fadeInRight" data-wow-offset="70" data-wow-iteration="1" >
                            <li className="coder-here"> Discover introductory videos and tutorials on web development including React, npm, and more on my <a href="https://www.youtube.com/channel/UC4wxvu2z2x-ZkMT-CROQtkw?view_as=subscriber">Youtube channel.</a></li>
                            <li> Also featured on X-team blog  on Youtube covering how to access an while API using React/Redux It can be seen
                            <a href="https://www.youtube.com/watch?v=EgGXWQEmsQ0&list=PLuBbNu0ZF1U5_Q2jimNchmee8KMPMeoxQ" target="_blank"> here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr></hr>
          </div>

        );
    }
}


export default Youtube;