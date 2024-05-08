import React from "react";
import Navbar from "./Navbar";
import { FaTwitch, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const styles = {
    container: {
        backgroundImage: 'linear-gradient(to bottom right, #00cdff, #326dff, #8032ff, #ff97fc)',
        height: "100vh",
    }
}

function Contact() {
    return (
        <div style={styles.container}>
            <Navbar />
            <h1>Contact Me</h1>
            <p>This is where you will find the different ways to contact me!</p>
      <ul>
        <li>
        <FaGithub size={45} /> {"  "}
         <a href="https://github.com/LordChronic">Lord Chronic</a>
        </li>
        <li>
        <FaLinkedin size={45} />  {"  "}
         <a href="https://linkedin.com/in/chanse-shaw-ab4450151/">Chanse Shaw</a>
        </li>
        <li>
        <FaEnvelope size={45} />  {"  "}
         <a>kainalu210@gmail.com</a>
        </li>
        <li>
        <FaTwitch size={45} />  {"  "}
         <a href="https://www.twitch.tv/lord_chronic">Twitch</a>
        </li>
      </ul>
        </div>

    );
}

export default Contact;