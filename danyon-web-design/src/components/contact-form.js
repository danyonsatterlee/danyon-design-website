import React from "react";
let FontAwesome = require('react-fontawesome');
class ContactForm extends React.Component {
    render() {
        return (

            <div>
             <form action="https://formspree.io/danyon.satterlee@gmail.com"
      method="POST">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control input-lg"
                                name="Name"
                                autocomplete="off"
                                id="Name"
                                placeholder="Name"/>
                                </div>
                      
                  

          
       
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control input-lg"
                                name="Email"
                                autocomplete="off"
                                id="Name"
                                placeholder="Email"/>
                 
                </div>
           
                        <div className="form-group">
                            <textarea
                                className="form-control textarea input-lg"
                                rows="3"
                                name="Message"
                                id="Message"
                                placeholder="Message"></textarea>

                                

                        </div>
                         <a className=" pull-right skew" href="https://github.com/danyonsatterlee">
                          <button type="submit" className="connect">connect</button>   <FontAwesome
                            className="angle-right gray"
                            name='angle-right'
                            size='2x'
                            style={{
                            textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                        }}/> 
                             </a>
                        </form>
                    </div>
          
       

        );
    }
}

export default ContactForm;