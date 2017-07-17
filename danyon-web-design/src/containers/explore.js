import React from "react";
import WOW from 'wowjs';
class Explore extends React.Component{
            componentDidMount() {
    new WOW.WOW().init();
  }
    render(){
        return(
            <div className="spacer" id="explore">
            <div className="row">
                <div className="col-md-4 col-md-offset-2 col-sm-12 col-sm-offset-0 no-marg">
                <h1 className="gray">explore</h1>

                </div>
                </div>
                
            <div  className="row">
                <div className="col-md-3 col-md-offset-1 col-sm-12 col-sm-offset-0 no-marg">
                     <a href="#explore"><div className="explore1 wow fadeInDown" data-wow-offset="70" data-wow-delay=".25s" data-wow-iteration="1"></div></a>
                     <a href="#explore"><div className="explore2 wow fadeInDown" data-wow-offset="70" data-wow-delay="1.25s" data-wow-iteration="1"></div></a>
                    
                </div>
                 <div className="col-md-4 col-sm-12 col-sm-offset-0 no-marg">
                     <a href="#explore"><div className="explore4 wow fadeInDown" data-wow-offset="70" data-wow-delay=".75s" data-wow-iteration="1"></div></a>
                     <a href="#explore"><div className="explore7 wow fadeInDown" data-wow-offset="70" data-wow-delay=".5s" data-wow-iteration="1"></div></a>
                     <a href="#explore"><div className="explore3 wow fadeInDown" data-wow-offset="70" data-wow-delay="1.75s" data-wow-iteration="1"></div></a>
                    
                </div>
                     <div className="col-md-3 col-sm-12 col-sm-offset-0 no-marg">
                   
                     <a href="#explore"><div className="explore6 wow fadeInDown" data-wow-offset="70" data-wow-delay="1.25s" data-wow-iteration="1"></div></a>
                      <a href="#explore"><div className="explore4 wow fadeInDown" data-wow-offset="70" data-wow-delay="2s" data-wow-iteration="1"></div></a>
                     <a href="#explore"><div className="explore5 wow fadeInDown" data-wow-offset="70" data-wow-delay="2.25s" data-wow-iteration="1"></div></a>
                    
                </div>
            </div>


                </div>
       

        );
    }
}

export default Explore;