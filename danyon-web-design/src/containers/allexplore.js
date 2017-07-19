import React from "react";
import MyNav from './navbar.js';
import Footer from './footer.js';
import ExploreComps from "../components/explore-comps.js";
class AllExplore extends React.Component{
    
    render(){
              let explore = [
          {
            title: "Big Horn Cinemas",
            description: "Movie theater",
            tech: " Reactjs, Redux, HTML/CSS, Bootstrap, Restful API, UI Design",
            img: "img/woman1.jpg"
          }, {
            title: "Nopical",
            description: "The rankesvillainous smell that ever offended nostril",
            tech: " Metor.js, Blaze, HTML/CSS, Bootstrap,  UI Design",
            img: "img/woman1.jpg"
          }, {
             title: "Weather",
            description: "Search the current weather in any city",
            tech: "Javascript, Restful API, HTML/CSS, Bootstrap",
            img: "img/woman1.jpg"
          },  {
          title: "Shakespearean Insults",
            description: "A drag and drop application to create custom insults inspired by Shakespeare's text",
            tech: "Javascript, jQuery, HTML/CSS, Bootstrap",
            img: "img/woman1.jpg"
          }, 
          {
          title: "Timony Siobhan Photography",
            description: "Portfolio for professional photographer",
            tech: "Javascript, jQuery, HTML/CSS, Bootstrap",
            img: "img/woman1.jpg"
          },
          {
             title: "Moss Model Agency",
            description: "The rankest compasdfllainous smell that ever offended nostril",
            tech: "HTML/CSS, UI Design, Branding, Custom branding graphics created using Photoshop and Illustrator",
            img: "img/woman1.jpg"
          }, {
             title: "Ticky-Tacky Cake Company",
            description: "The rankest compasdfllainous smell that ever offended nostril",
            tech: "HTML/CSS, UI Design, Branding, Custom branding graphics created using Photoshop and Illustrator",
            img: "img/woman1.jpg"
          }, 
        ];
        return(
          <div>
            < MyNav></ MyNav>
               <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 no-marg">

<ExploreComps explore={explore}></ExploreComps>

                </div>
                 </div>
                 <Footer/>
                 </div>

       

        );
    }
}

export default AllExplore;