import React from "react";
// import {Link} from "react-router-dom";
class ExploreComps extends React.Component {
    

    render() {
    
         
             let oneProject= this.props.explore.map((item)=>{
    return(
        <div>
                <div className="row">
                   
                    <div className="col-md-6 col-md-offset-0 col-sm-12 col-sm-offset-0 no-marg">

                        <h1>{item.title}</h1>
                        <div>
                            {item.description}
                            <div>
                           <a href="{`${item.url}`}" className="explore-link">{item.url}</a>
                            </div>
                        </div>

                        <h3>technology</h3>
                        <div>
                            {item.tech}
                        </div>
                    </div>

                    <div className="col-md-6  col-sm-12 col-sm-offset-0 no-marg">

                        
                        <div>
                           <img className="img-responsive center-block" src={item.img} />
                        </div>
                        
                    </div>
                    
                </div>
                 <hr></hr>
                 </div>
               
        
        );
     });
    return(
    <div>{oneProject}</div>
    );
}
}

    
export default ExploreComps;