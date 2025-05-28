import React from "react";

export default function Pro() {
    return (
        <section class="pro" id="pro">
          <h2 class="pr"><i class="fa-solid fa-list fa-fade"></i><span> Projects</span></h2>
  
          <div class="box-container">
                <div class="box">
                    <div class="content">
                        <a href="https://drive.google.com/file/d/1dQNpxKpYYwBXp8A7Z8FzFHbaP7bLOQEI/view?usp=drivesdk" target="_blank"> 
                            <h3><i class="fa-solid fa-angles-right fa-fade"></i> Automatic certificate generation using DIP</h3>
                            <p>The project is developed on MATLAB 2018a Version. The main aim of the project is reduces the manual work.</p>
                        </a>
                    </div>
                </div>

                <div class="box">
                    <div class="content">
                        <a href="https://drive.google.com/file/d/1dIW5y1sotVIOHPIQYdwmgX-7Hw_mabx9/view?usp=drivesdk" target="_blank"> 
                            <h3><i class="fa-solid fa-angles-right fa-fade"></i> Simple Banking System </h3>
                            <p>The project is developed on Android Studio using xml and Java.The app contains a User Table and a Transaction Table, which are carefully managed
                            by dedicated admin.</p>

                        </a>
                    </div>
                </div>

                <div class="box">
                    <div class="content">
                        <a href="https://drive.google.com/file/d/1cxuQC0A_ZxLOGjcuSlq8WyZ3PkSk6I5k/view?usp=drivesdk" target="_blank"> 
                            <h3><i class="fa-solid fa-angles-right fa-fade"></i> Stock price Prediction  </h3>
                           <p>The project is developed in python, Machine Learning Algorithm it analyse historical data and market indicators to forecast
                            future stock prices.</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}