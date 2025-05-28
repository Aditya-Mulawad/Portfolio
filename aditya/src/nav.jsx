import React from "react"

export default function Navbar() {
    return (
        <header>
            <a href="" class="logo"><i id="lg" class="fa-solid fa-crown fa-bounce"></i>  ADITYA</a>
  
            <nav class="navbar">
                <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#pro">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}