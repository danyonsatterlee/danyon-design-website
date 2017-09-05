import React from "react";

import WOW from 'wowjs';

class ExploreComps extends React.Component {
    componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    let oneProject = this.props.explore.map((item) => {
      return (
        <div>
          <div>
       
            <div className="col-md-6 col-md-offset-0 col-sm-6 col-sm-offset-0 wow fadeIn" data-wow-offset="70"  data-wow-iteration="1">
              <h1>{item.title}</h1>
              <div>
                {item.description}
                <div>
                  <a target="_blank" href={`${item.url}`} className="explore-link wow fadeIn " data-wow-offset="70"  data-wow-iteration="1">{item.url}</a>
                </div>
              </div>
              <h3>technology</h3>
              <div>
                {item.tech}
              </div>
            </div>
            <div className="col-md-6  col-sm-6 col-sm-offset-0 wow fadeIn" data-wow-offset="70"  data-wow-iteration="1">
              <div>
                <img className="img-responsive center-block" src={item.img}/>
              </div>
            </div>
          </div>
          <hr/>
</div>

      );
    });
    return (
      <div>{oneProject}</div>
    );
  }
}

export default ExploreComps;