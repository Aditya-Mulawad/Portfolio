import React from "react";
import cmr from "./img/cmr.jpg";
import kcp from "./img/kcp.jpg";
import jss from "./img/jsss.jpg";



export default function Edu() {
    return (
        <section class="education" id="education">

            <h1 class="ed"><i class="fa-solid fa-graduation-cap fa-bounce"></i> My <span>Education</span></h1>

            <div class="box-container">

                <div class="box">
                    <div class="image">
                        <a href="https://www.cmr.edu.in/" target="_blank">
                            <img draggable="false" src={cmr} alt=""/>
                        </a>
                    </div>
                    <div class="content">
                        <h3>MCA - Master of Computer Application</h3>
                        <p>CMR University, Bangalore, karnataka-560043</p>
                        <h4>2022-2024 | Pursuing</h4>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <a href="http://bldeasbkcp.ac.in/" target="_blank">
                            <img draggable="false" src={kcp} alt=""/>
                        </a>
                    </div>
                    <div class="content">
                        <h3>BCA - Bachelor of Computer Application</h3>
                        <p> BLDE KCP Science College, Vijayapur, karnataka-586103</p>
                        <h4>2019-2022 | Completed</h4>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <a href="http://jsssmpu.com/" target="_blank">
                            <img draggable="false" src={jss} alt=""/>
                        </a>
                    </div>
                    <div class="content">
                        <h3>PUC - Pre University Course</h3>
                        <p>Jss SMPU College, Dharwad, karnataka-560006</p>
                        <h4>2017-2019 | Completed</h4>
                    </div>
                </div>

            </div>
        </section>
    )
}