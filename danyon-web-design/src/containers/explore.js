import React from "react";
import {Link} from "react-router-dom";
import WOW from 'wowjs';
class Explore extends React.Component{
            componentDidMount() {
    new WOW.WOW().init();
  }
    render(){
        return(
            <div className="spacer" id="ex">
            <div className="row">
                <div className="col-md-4 col-md-offset-2 col-sm-12 col-sm-offset-0 no-marg">
                <h1 className="gray">explore</h1>

                </div>
                </div>
                
            <div  className="row">
                <div className="col-md-3 col-md-offset-1 col-sm-12 col-sm-offset-0 no-marg">
                     <Link to = "/allexplore"> <div className="explore1 portfolio wow fadeIn" data-wow-offset="70" data-wow-delay=".25s" data-wow-iteration="1"></div></Link>
                     <Link to = "/allexplore"><div className="explore2 wow portfolio fadeIn" data-wow-offset="70" data-wow-delay="1.25s" data-wow-iteration="1"></div></Link>
                    
                </div>
                 <div className="col-md-4 col-sm-12 col-sm-offset-0 no-marg">
                     {/*<Link to = "/allexplore"><div className="explore4 portfolio wow fadeIn" data-wow-offset="70" data-wow-delay=".75s" data-wow-iteration="1"></div></Link>*/}
                     <Link to = "/allexplore"><div className="explore7 portfolio wow fadeIn" data-wow-offset="70" data-wow-delay=".5s" data-wow-iteration="1"></div></Link>
                     <Link to = "/allexplore"><div className="explore3 portfolio wow fadeIn" data-wow-offset="70" data-wow-delay="1.75s" data-wow-iteration="1"></div></Link>
                    
                </div>
                     <div className="col-md-3 col-sm-12 col-sm-offset-0 no-marg">
                   
                     <Link to = "/allexplore"><div className="explore6 portfolio wow fadeIn" data-wow-offset="70" data-wow-delay="1.25s" data-wow-iteration="1"></div></Link>
                      {/*<Link to = "/allexplore"><div className="explore4 portfolio wow fadeIn" data-wow-offset="70" data-wow-delay="2s" data-wow-iteration="1"></div></Link>*/}
                     <Link to = "/allexplore/"><div className="explore5 wow portfolio fadeIn" data-wow-offset="70" data-wow-delay="2.25s" data-wow-iteration="1"></div></Link>
                    
                </div>
            </div>


                </div>
       

        );
    }
}

export default Explore;