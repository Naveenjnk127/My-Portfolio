/* eslint-disable no-unused-vars */
import React from "react";
import "./Navbar.css";

export default function Navbar(){
    return (
        <nav id="navbar">
            <ul>
                <li>
                <a href="#navbar">Home</a>
                </li>
                <li>
                <a href="#about">About me</a></li>
                <li>
                <a href="#projects">Projects</a>
                </li>
                <li>
                <a href="#journey">My Journey</a></li>
                <li>
                <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}