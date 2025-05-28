import React from "react"
import icon from "./img/icon.png"

export default function Hero() {
    return (
        <section class="home" id="home">
               
            <div class="content">
                <h2>Hello!<br/> I'm <span>Aditya Mulawad</span></h2>
                <p>Web Developer <span class="typing-text"></span></p>
                <a href="#about" class="btn"><span>About Me</span>
                <i class="fa-solid fa-face-smile fa-shake"></i>
                </a>
                <div class="socials">
                    <ul class="social-icons">
                        <li><a class="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/aditya-mulawad-816326233" target="_blank"><i class="fab fa-linkedin"></i></a></li> 
                        <li><a class="github" aria-label="GitHub" href="https://github.com/Aditya-Mulawad" target="_blank"><i class="fab fa-github"></i></a></li>
                        <li><a class="telegram" aria-label="Telegram" href="https://t.me/mr_unknown_x" target="_blank"><i class="fab fa-telegram-plane"></i></a></li>
                        <li><a class="instagram" aria-label="Instagram" href="https://www.instagram.com/_mr_aditya__18" target="_blank"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="image">
                    <img draggable="false" class="tilt" src={icon} alt="" />
                </div>
        </section>
        

        
    )
}
