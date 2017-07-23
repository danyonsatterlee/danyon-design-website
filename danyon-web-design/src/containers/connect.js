import React from "react";
import ConntactForm from '../components/contact-form.js'
import WOW from 'wowjs';
let FontAwesome = require('react-fontawesome');

class Contact extends React.Component {
    componentDidMount() {
        new WOW
            .WOW()
            .init();
    }
    render() {
        return (
            <div className="spacer wow fadeIn" data-wow-offset="70" data-wow-iteration="1">
                <div className="row" id="connection">

                    <div className="col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 ">
                        <h1 className="text-center gray">let's connect</h1>
                        <ConntactForm/>

                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;
