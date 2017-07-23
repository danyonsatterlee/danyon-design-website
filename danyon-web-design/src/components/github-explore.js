import React from "react";
import {Link} from "react-router-dom";
class GitHubExplpre extends React.Component {
    

    render() {
    
         
             let github = this.props.explore.map((item)=>{
    return(
        <div>
                
                        <h1>{item.title}</h1>
                        <div>
                            {item.description}
                            <div>
                           <a href="{`${item.url}`}">{item.url}</a>
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
    <div>{github}</div>
    );
}
}

    
export default GitHubExplpre;