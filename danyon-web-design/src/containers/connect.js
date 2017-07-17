import React from "react";
import ConntactForm from '../components/contact-form.js'
let FontAwesome = require('react-fontawesome');
class Contact extends React.Component {
    render() {
        return (
            <div className="spacer">
                <div className="row" id="connection">

                    <div className="col-md-3 col-md-offset-2 col-sm-12 col-sm-offset-0">
                        <h1 className="text-center gray">let's connect</h1>
                          <ConntactForm />
                 
                   
                          
                        </div>
                      
             
                    <div className="col-md-2 col-md-offset-1 col-sm-12 col-sm-offset-0 side">
                      
                        <h1 className="gray name-header pull-right ">about</h1>
                        </div>
                        <div className="col-md-3 col-md-offset-0 col-sm-12 col-sm-offset-0">
                              <p className="gray space aboutp">
                           arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                        </p>
                    </div>
                </div >
                 </div>
                
               
        );
    }
}

export default Contact;