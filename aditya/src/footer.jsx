import React from "react";

export default function Foot() {
    return (
        <section class="footer">

            <div class="box-container">

                <div class="box">
                    <h3 class="nm">Portfolio | <span>Aditya-Mulawad</span>  </h3>
                    <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> <br/> Keep Rising<i class="fa-solid fa-rocket fa-beat-fade"></i></p>
                </div>

                <div class="box">
                    <h3>quick links</h3>
                    <a href="#home"><i class="fas fa-chevron-circle-right"></i> home</a>
                    <a href="#about"><i class="fas fa-chevron-circle-right"></i> about</a>
                    <a href="#skills"><i class="fas fa-chevron-circle-right"></i> skills</a>
                    <a href="#pro"><i class="fas fa-chevron-circle-right"></i> Projects</a>
                    <a href="#education"><i class="fas fa-chevron-circle-right"></i> education</a>
                </div>

                <div class="box">
                    <h3>contact info</h3>
                    <p> <i class="fas fa-phone"></i>+91 9353660232</p>
                    <p> <i class="fas fa-envelope"></i>adityamulawad3@gmail.com</p>
                    <p> <i class="fas fa-map-marked-alt"></i>Bangalore, karnataka-560040</p>
                    <div class="share">
                        <a href="https://www.linkedin.com/in/aditya-mulawad-816326233" class="fab fa-linkedin" aria-label="LinkedIn" target="_blank"></a>
                        <a href="https://github.com/Aditya-Mulawad" class="fab fa-github" aria-label="GitHub" target="_blank"></a>
                        <a href="mailto:adityamulawad3@gmail.com" class="fas fa-envelope" aria-label="Mail" target="_blank"></a>
                        <a href="https://t.me/mr_unknown_x" class="fab fa-telegram-plane" aria-label="Telegram" target="_blank"></a>
                    </div>
                </div>
            </div>

            <h1 class="credit"><i class="fa fa-heart pulse"></i> by <a href=""> Aditya</a></h1>

        </section>
    )
}