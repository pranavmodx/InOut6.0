import React, { Component } from 'react'



export default class Header extends Component {
   

    render() {
        return (
            <div>
                <div class="navcontainer">                
                <div class="navbar">
                <ul>
                    <li class="logo"> <a href="#"> <strong>ProductName</strong>  </a> </li>
                    <section class="div_navbar_items">
                    <li class="navbar_items"> <a href="#home"> Home </a> </li>
                    <li class="navbar_items"> <a href="#about_me"> About Us </a> </li>
                    <li class="navbar_items"> <a href="#skills"> Top Trending</a> </li>
                    <li class="navbar_items"> <a href="#projects"> Explore </a> </li>
                    <li class="navbar_items"> <a href="#contact"> Contact </a> </li>
                    </section>
                    <li class="icon">
                    <a href="#"> &#9776;</a>
                    </li>
                </ul>
                </div>
                </div>
            </div>
        )
    }
}
