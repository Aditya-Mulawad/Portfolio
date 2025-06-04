import React from "react";
import ctc from "./img/contact1.png"
import { useState } from 'react';
import axios from 'axios';

export default function Ctc() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [msg,setMsg] = useState('');

    const handleSubmit = () => {
    if(name.length === 0){
    alert("Name has left Blank!");
    }
    else if(email.length === 0){
    alert("Email has left Blank!");
    }
    else if(phone.length === 0){
    alert("Phone has left Blank!");
    }
    else if(msg.length === 0){
    alert("Msg has left Blank!");
    }
    else{
    const url = 'http://localhost/formsubmit.php';
    let fData = new FormData();
    fData.append('name', name);
    fData.append('email', email);
    fData.append('phone', phone);
    fData.append('msg', msg);
    axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
}

    return (
        <section class="contact" id="contact">
  
            <h2 class="heading"><i class="fa-solid fa-handshake fa-beat-fade"></i> Get in <span>Touch</span></h2>

            <div class="container">
                <div class="content">
                    <div class="image-box">
                        <img draggable="false" src={ctc} alt=""/>
                    </div>
                    <form id="contact-form"
                        action="https://formspree.io/f/mayrnppn" method="POST">
      
                        <div class="form-group">
                            <div class="field">
                                <input type="text" name="name" placeholder="Name" required  value={name} onChange={(e) => setName(e.target.value)}/>
                                <i class='fas fa-user'></i>
                            </div>
                             <div class="field">
                                <input type="text" name="email" placeholder="Email" required  value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <i class='fas fa-envelope'></i>
                            </div>
                            <div class="field">
                                <input type="text" name="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                <i class='fas fa-phone-alt'></i>
                            </div>
                            <div class="message">
                                <textarea placeholder="Message" name="msg" required  value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                                <i class="fas fa-comment-dots"></i>
                            </div>
                        </div>
                        <div class="button-area">
                            <button type="submit" name="submit"  onClick={handleSubmit}>Submit <i class="fa fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
