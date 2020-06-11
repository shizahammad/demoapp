import React from 'react';
function Contact(props){
    return (
        <div>
            <h3>Contact Us</h3>
            <p>
              contact num : {props.num}
              <br/>
               email id : {props.email_id}
            </p>
        </div>
    );
}
export default Contact;