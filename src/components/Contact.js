import React, { useState, useEffect } from "react";
import { FaTwitch, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "animate.css"; // Import animate.css
import banner from "../banner.png";

const styles = {
  container: {
    width: "100vw", // Full viewport width
    minHeight: "100vh", // Full viewport height or minimum viewport height
    overflowX: "hidden", // Hide horizontal overflow
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundImage: 'linear-gradient(to bottom right, #00cdff, #326dff, #8032ff, #ff97fc)', // Gradient background
    color: "white", // Text color
    fontFamily: "Arial, sans-serif", // Font family
    padding: "20px",
    margin: "0",
    padding: "0",
  },
  banner: {
    width: "100%", // Full width of the viewport
    height: "auto", // Maintain aspect ratio
    objectFit: "cover", // Cover the entire area
    margin: "0",
    padding: "0",
    top: 0,
  },
  content: {
    flex: "1", // Take remaining vertical space
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "10px",
    maxWidth: "600px", // Limit width for content
    textAlign: "center", // Center align text
  },
  header: {
    fontSize: "3em", // Larger font size
    marginBottom: "20px", // Space below header
  },
  paragraph: {
    fontSize: "1.2em", // Slightly larger font size
    lineHeight: "1.6", // Improved readability
    marginBottom: "20px", // Space below paragraph
  },
  icon: {
    marginRight: "10px", // Space between icon and text
    verticalAlign: "middle", // Align icons vertically centered
  },
  listItem: {
    fontSize: "1.2em", // Font size for list items
    margin: "20px 0", // Space around list items
  },
  link: {
    color: "#7DF9FF", 
    textDecoration: "none", // Remove underline from links
    transition: "color 0.3s ease", // Smooth color transition on hover
  },
  // linkHover: {
    // color: "#9F2B68", // Darker blue on hover
  // },
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
        <h1 style={styles.header} ref={headerRef}>
          Contact Me
        </h1>
        <p style={styles.paragraph}>
          Feel free to reach out to me through any of the following channels:
        </p>
        <ul style={{ padding: 0, listStyleType: "none" }}>
          <li style={styles.listItem}>
            <FaGithub size={45} style={styles.icon} />
            <a
              href="https://github.com/LordChronic"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lord Chronic
            </a>
          </li>
          <li style={styles.listItem}>
            <FaLinkedin size={45} style={styles.icon} />
            <a
              href="https://linkedin.com/in/chanse-shaw-ab4450151/"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chanse Shaw
            </a>
          </li>
          <li style={styles.listItem}>
            <FaEnvelope size={45} style={styles.icon} />
            <span>kainalu210@gmail.com</span>
          </li>
          <li style={styles.listItem}>
            <FaTwitch size={45} style={styles.icon} />
            <a
              href="https://www.twitch.tv/lord_chronic"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitch
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
