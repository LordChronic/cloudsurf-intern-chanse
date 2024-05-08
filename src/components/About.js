import React from "react";
import Navbar from "./Navbar";

const styles = {
    container: {
        backgroundImage: 'linear-gradient(to bottom right, #00cdff, #326dff, #8032ff, #ff97fc)',
        height: "100vh",
    }
}

function About() {
    return (
        <div style={styles.container}>
            <Navbar />
            <h1>About Me</h1>
      <p>
        Hi there! I'm Chanse Shaw, a HVAC Service Technician based in Las Vegas, NV. I have a passion for coding, video games, and reading different types of books. I am currently enrolled at Western Governors Univeristy striving for my Bachelors of Applied Sciences with a focus in Cyber Security and I am currently attending an internship with CloudSurf for Software Egineering.
      </p>
      <p>
        This website serves as my digital portfolio where I showcase my projects, share my thoughts, and connect with like-minded individuals.
      </p>
      <h2>My Skills</h2>
      <ul>
        <li>JavaScript (React, Node.js)</li>
        <li>HTML5 & CSS3</li>
        <li>Responsive Web Design</li>
        <li>Version Control (Git)</li>
      </ul>
      <h3>Experience</h3>
        <ul>
            <li>HVAC Service Technician: 5 1/5 years</li>
            <li>Natural Gas Technician</li>
            <li>Less than a month of FreeCodeCamp</li>
            <li>Certified Loverboy?</li>
            <li>Goon King: 27 years</li>
        </ul>
          </div>

    );
}

export default About;