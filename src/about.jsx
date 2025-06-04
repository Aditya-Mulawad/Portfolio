import React from "react";
import op from "./img/op.jpg"
import resume from "./ctc/adi_cv.pdf"

export default function About() {
    return (
        <section class="about" id="about">
         <h2 class="ab"><i class="fa-solid fa-face-smile fa-fade"></i> About <span>Me</span></h2>
      
            <div class="row">
  
                <div class="image">
                    <img draggable="false" class="tilt" src={op} alt=""/>
                </div>
                <div class="content">
                    <h3>Hello!<br/>I'm Aditya</h3>
                    <span class="tag">Web Developer</span>
                    <p>from Vijayapur karnataka, Currently pursuing MCA at CMR University Bangalore,
                        I am very passionate about improving my coding skills & developing websites.
                        Working for myself to improve my skills.
                    </p>
                    <div class="box-container">
                        <div class="box">
                            <p><span> email : </span> adityamulawad3@gmail.com</p>
                            <p><span> mobile : </span> 9353660232</p>
                            <p><span> place : </span> Bangalore, karnataka -560040 </p>
                        </div>
                    </div>
                    <div class="resumebtn">
                        <a href={resume} target="_blank" class="btn"><span>Resume</span>
                        <i class="fa-solid fa-download fa-shake"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
       
    )
}