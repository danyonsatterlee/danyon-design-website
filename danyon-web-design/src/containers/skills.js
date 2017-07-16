import React from "react";
import WOW from 'wowjs';
class Skills extends React.Component {

    render() {
        return (
            <div className="spacer" id="skills">
                <div className="row">

                    <div className="col-md-2 col-md-offset-2 col-sm-12 col-sm-offset-0">
                        <ul className="skills wow slideInRight" data-wow-offset="10" data-wow-iteration="10" >
                            <li>Javascript, ES6</li>
                            <li>React/Redux</li>
                            <li>HTML/CSS</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>

                        </ul>
                    </div>
                    <div className="col-md-2  col-sm-12 col-sm-offset-0">
                        <ul className="skills">
                            <li>Node JS</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                            <li>JSON</li>
                            <li>MongoDB</li>

                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-12 col-sm-offset-0">
                        <ul className="skills">
                            <li>Git</li>
                            <li>
                                Mocha/Chai</li>
                            <li>JSON</li>
                            <li>Photoshop</li>
                            <li>Adobe Illustrator</li>

                        </ul>
                    </div>

                </div>
                < div className="row">
                    <div className="col-md-4 col-md-offset-8 col-sm-12 col-sm-offset-0">
                        <h1 className="gray name-bottom">skills</h1>
                    </div>
                </div >
                </div >
        );
    }
}

export default Skills;