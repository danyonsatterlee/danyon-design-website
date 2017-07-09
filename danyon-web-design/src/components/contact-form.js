import React from "react";

class ContactForm extends React.Component {
    render() {
        return (

            <div>
             
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
                    </div>
          
       

        );
    }
}

export default ContactForm;