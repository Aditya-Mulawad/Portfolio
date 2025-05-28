import React from "react";
import cpgm from "./ctc/Certificate_HACKATHON.pdf"
import javascript from "./ctc/certificare JavaScript.pdf"
import mysql from "./ctc/certificate Mysql.pdf"
import dm from "./ctc/DM.pdf"
import html from "./ctc/html.pdf"
import py from "./ctc/python.pdf"

export default function Skills() {
    return (
        <section class="skills" id="skills">
          <h2 class="sk"><i class="fa-brands fa-studiovinari fa-fade"></i><span>Skills</span></h2>
  
          <div class="box-container">
            <div class="box">
              <div class="content">
                <a href={cpgm} target="_blank">
                  <h3><i class="fa-solid fa-copyright"></i>  Programming</h3>
                </a>
              </div>
            </div>
  
            <div class="box">
              <div class="content">
                <a href={javascript} target="_blank">
                  <h3><i class="fa-brands fa-js"></i>  javascript</h3>
                </a>
              </div>
            </div>
  
            <div class="box">
              <div class="content">
              <a href={html} target="_blank">
                <h3><i class="fa-brands fa-html5"></i>  HTML&CSS</h3>
              </a>
              </div>
            </div>
  
            <div class="box">
              <div class="content">
              <a href={py} target="_blank">
                <h3><i class="fa-brands fa-python"></i>  Python</h3>
              </a>
              </div>
            </div>

            <div class="box">
              <div class="content">
                <a href={mysql} target="_blank">
                  <h3><i class="fa-solid fa-database"></i>  MYSQL</h3>
                </a>
              </div>
            </div>

            <div class="box">
              <div class="content">
                <a href={dm} target="_blank">
                  <h3><i class="fa-solid fa-globe"></i>  Digital Marketeting</h3>
                </a>
              </div>
            </div>

          </div>
        </section>
    )

}