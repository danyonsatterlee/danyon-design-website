import React from "react";
import ExploreComps from "../components/explore-comps.js";
class AllExplore extends React.Component{
    
    render(){
              let explore = [
          {
            title: "woman1",
            description: "The rankest compound of villainous smell that ever offended nostril",
            tech: "adf",
            img: "img/woman1.jpg"
          }, {
            title: "woman1",
            description: "The rankest compound of villainous smell that ever offended nostril",
            tech: "adf",
            img: "img/woman1.jpg"
          }, {
             title: "woman1",
            description: "The rankest compound of villainous smell that ever offended nostril",
            tech: "adf",
            img: "img/woman1.jpg"
          },  {
          title: "woman1",
            description: "The rankest compound of villainous smell that ever offended nostril",
            tech: "adf",
            img: "img/woman1.jpg"
          }
        ];
        return(
          <div>
            <MyNav></MyNav>
               <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 no-marg">

<ExploreComps explore={explore}></ExploreComps>

                </div>
                 </div>
                 </div>
       

        );
    }
}

export default AllExplore;