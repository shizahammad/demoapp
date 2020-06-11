import React from 'react';
import Contact from './Contact.js';
function Info(props){
    return (
        <div>
            <h3>Home</h3>
            <p>{props.Homeinfo}</p>
            <h3>About Us</h3>
            <p>{props.Aboutinfo}</p>
            <Contact num="32525435" email_id="abc@gmail.com"/>
        </div>
        
    );
}
export default Info;