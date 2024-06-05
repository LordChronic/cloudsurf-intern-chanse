import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaTwitch, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "animate.css"; // Import animate.css
import banner from "../banner.png";

const styles = {
  container: {
    width: "100vw", // Full viewport width
    height: "100vh", // Full viewport height
    overflowX: "hidden", // Hide horizontal overflow
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "0",
    padding: "0",
  },
  banner: {
    width: "100%", // Full width of the viewport
    height: "auto", // Maintain aspect ratio
    objectFit: "cover", // Cover the entire area
    margin: "0",
    padding: "0",
  },
  content: {
    flex: "1", // Take remaining vertical space
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "20px",
  },
};

function Contact() {
  const [headerInView, setHeaderInView] = useState(false);

  const { ref: headerRef, inView: headerVisible } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    setHeaderInView(headerVisible);
  }, [headerVisible]);

  return (
    <div style={styles.container}>
      <img src={banner} style={styles.banner} alt="Banner" />
      <div
        style={styles.content}
        className={`animate__animated ${headerInView ? "animate__fadeIn" : ""}`}
      >
        <h1 ref={headerRef}>Contact Me</h1>
        <p>This is where you will find the different ways to contact me!</p>
        <ul>
          <li>
            <FaGithub size={45} /> {"  "}
            <a href="https://github.com/LordChronic">Lord Chronic</a>
          </li>
          <li>
            <FaLinkedin size={45} /> {"  "}
            <a href="https://linkedin.com/in/chanse-shaw-ab4450151/">
              Chanse Shaw
            </a>
          </li>
          <li>
            <FaEnvelope size={45} /> {"  "}
            <a>kainalu210@gmail.com</a>
          </li>
          <li>
            <FaTwitch size={45} /> {"  "}
            <a href="https://www.twitch.tv/lord_chronic">Twitch</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
