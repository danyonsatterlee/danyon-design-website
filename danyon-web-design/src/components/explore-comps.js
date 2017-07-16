import React from "react";

class ExploreComps extends React.Component {

    render() {
        return (
            <div>
                <MyNav></MyNav>
                <div className="row">
                    <hr></hr>
                    <div className="col-md-4 col-md-offset-2 col-sm-12 col-sm-offset-0 no-marg">

                        <h1>{this.props.title}</h1>
                        <div>
                            {this.props.description}
                        </div>
                        <h3>technology</h3>
                        <div>
                            {this.props.tech}
                        </div>
                    </div>

                    <div className="col-md-4  col-sm-12 col-sm-offset-0 no-marg">

                        
                        <div>
                           <img className="img-responsive center-block" src={item.img} />
                        </div>
                        
                    </div>
                    
                </div>
                 <hr></hr>
               
            </div>

        );
    }
}

export default ExploreComps;