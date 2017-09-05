import React from "react";
import MyNav from './navbar.js';
import Footer from './footer.js';
import ExploreComps from "../components/explore-comps.js";
class AllExplore extends React.Component{
    
    render(){
              let explore = [
          {
            title: "big horn cinemas",
            description: "Movie theater website for Big Horn Cinema's in Cody, WY. Currently in projection to become more dynamic and using React/Redux and accessing their API.",
            tech: "HTML/CSS, Bootstrap, UI Design",
            url: "https://github.com/danyonsatterlee/movie-house",
            img: "img/web/moviemac.jpg"
          }, 
          {
            title: "nopical",
            description: "A news site that divides and sorts the top trending news stories according to your preferences. Specifically contribued to creating the entire about page, login window, and additional features on the profile page. The website undergoing matinance at this time.",
            url: "",
            tech: " Metor.js, Blaze, HTML/CSS, Bootstrap,  UI Design",
            img: "img/web/nopical/nopicalMac.jpg"
          }, 
          {
             title: "weather",
            description: "Search the current weather in any city",
            tech: "Javascript, Restful API, HTML/CSS, Bootstrap",
            url: "https://github.com/danyonsatterlee/weather",
            img: "img/web/weathermac.jpg"
          },  
          // {
          // title: "Shakespearean Insults",
          //   description: "A drag and drop application to create custom insults inspired by Shakespeare's text",
          //   tech: "Javascript, jQuery, HTML/CSS, Bootstrap",
          //   url: "https://github.com/danyonsatterlee/shakespeare-copy-paste",
          //   img: "img/web/shakespeare"
          // }, 
          {
          title: "timony siobhan photography",
            description: "Portfolio for professional photographer in Los Angeles, CA.",
            url:"http://www.timonysiobhan.com/",
            tech: "Javascript, jQuery, HTML/CSS, Bootstrap",
            img: "img/web/timony/timony-all.jpg"
          },
          {
             title: "moss model agency",
            description: "Fashion and fit model botique model agency in Los Angeles, CA",
            tech: "HTML/CSS, UI Design, Branding, Custom branding graphics created using Photoshop and Illustrator.",
            url:"http://www.mossmodelsagency.com/",
            img: "img/web/moss/allmoss.jpg"
          }, {
             title: "ticky-tacky cake company",
            description: "Botique custom cake company in Slidell, LA",
            tech: "HTML/CSS, UI Design, Branding, Custom branding graphics created using Photoshop and Illustrator.",
            url: "http://www.tickytackycakeco.com/",
            img: "img/web/ticky-tacky/tickytacky-all.jpg"
          }, 
        ];
        return(
          <div>
            < MyNav></ MyNav>
               <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-0 no-marg">
                  <h1 className="text-center explore-here gray">web development</h1>

<ExploreComps explore={explore}></ExploreComps>
<h5 className="text-center">View additional code and projects on <a target="_blank" href ="https://github.com/danyonsatterlee" className="explore-link ">GitHub</a></h5>
                </div>
                 </div>
                 <Footer/>
                 </div>

       

        );
    }
}

export default AllExplore;