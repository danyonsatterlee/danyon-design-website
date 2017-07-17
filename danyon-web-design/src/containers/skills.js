import React from "react";
import WOW from 'wowjs';
class Skills extends React.Component {
    componentDidMount() {
    new WOW.WOW().init();
  }


    render() {
        return (
            <div className="skill-space" id="skills">
                  <hr></hr>
                <div className="skill-div">
              
                <div className="row">

                    <div className="col-md-2 col-md-offset-2 col-sm-12 col-sm-offset-0">
                        <ul className="skills wow fadeInRight" data-wow-offset="70"  data-wow-iteration="1" >
                            <li>Javascript, ES6</li>
                            <li>React/Redux</li>
                            <li>HTML/CSS</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>

                        </ul>
                    </div>
                    <div className="col-md-2  col-sm-12 col-sm-offset-0">
                        <ul className="skills wow fadeInRight" data-wow-offset="70" data-wow-delay=".5s" data-wow-iteration="1" >
                            <li>Node JS</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                            <li>JSON</li>
                            <li>MongoDB</li>

                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-12 col-sm-offset-0">
                        <ul className="skills wow fadeInRight" data-wow-offset="70" data-wow-delay="1s" data-wow-iteration="1" >
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
                </div>
                 <hr></hr>
                </div >
        );
    }
}

export default Skills;