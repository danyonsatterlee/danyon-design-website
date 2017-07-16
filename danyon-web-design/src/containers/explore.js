import React from "react";

class Explore extends React.Component{
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
                     <a href="#explore"><div className="explore1"></div></a>
                     <a href="#explore"><div className="explore2"></div></a>
                    
                </div>
                 <div className="col-md-4 col-sm-12 col-sm-offset-0 no-marg">
                     <a href="#explore"><div className="explore4"></div></a>
                     <a href="#explore"><div className="explore7"></div></a>
                     <a href="#explore"><div className="explore3"></div></a>
                    
                </div>
                     <div className="col-md-3 col-sm-12 col-sm-offset-0 no-marg">
                   
                     <a href="#explore"><div className="explore6"></div></a>
                      <a href="#explore"><div className="explore4"></div></a>
                     <a href="#explore"><div className="explore5"></div></a>
                    
                </div>
            </div>


                </div>
       

        );
    }
}

export default Explore;