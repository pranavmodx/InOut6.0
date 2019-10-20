import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="navcontainer">                
                <div className="navbar">
                <ul>
                    <li className="logo"> <a href="#"> <strong>ProductName</strong>  </a> </li>
                    <section className="div_navbar_items">
                    <li className="navbar_items"> <a href="#home"> Home </a> </li>
                    <li className="navbar_items"> <a href="#about_me"> About Us </a> </li>
                    <li className="navbar_items"> <a href="#skills"> Top Trending</a> </li>
                    <li className="navbar_items"> <a href="#projects"> Explore </a> </li>
                    <li className="navbar_items"> <a href="#contact"> Contact </a> </li>
                    </section>
                    <li className="icon">
                    <a href="#"> &#9776;</a>
                    </li>
                </ul>
                </div>
                </div>
            </div>
        )
    }
}
