import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css"; // Import animate.css
import Navbar from "./Navbar";

const styles = {
  container: {
    fontWeight: "bold",
    fontSize: "1 rem",
    backgroundColor: "#28282B",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    maxWidth: "85vw", // Limit width for larger screens
    margin: "30px auto", // Center align and add margin
  },
  header: {
    textAlign: "center",
    margin: "20px 0",
    fontSize: "2.5em",
    fontWeight: "bold",
    background: "linear-gradient(to right, #00cdff, #326dff, #8032ff, #ff97fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  paragraph: {
    padding: "0 10px", // Adjust padding for better readability
    textAlign: "center",
    lineHeight: "1.6",
  },
  section: {
    display: "flex",
    flexDirection: "column", // Stack sections on mobile
    alignItems: "center",
    marginTop: "20px",
  },
  subHeader: {
    textAlign: "center",
    margin: "20px 0",
    fontSize: "2em",
    fontWeight: "bold",
    background: "linear-gradient(to right, #00cdff, #326dff, #8032ff, #ff97fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  list: {
    listStyleType: "none",
    padding: "0",
    textAlign: "left",
    fontSize: "1.2em",
  },
  listItem: {
    marginBottom: "10px",
  },
};

function About() {
  const [headerInView, setHeaderInView] = useState(false);
  const [subHeaderInView, setSubHeaderInView] = useState(false);

  const { ref: headerRef, inView: headerVisible } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const { ref: subHeaderRef, inView: subHeaderVisible } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    setHeaderInView(headerVisible);
  }, [headerVisible]);

  useEffect(() => {
    setSubHeaderInView(subHeaderVisible);
  }, [subHeaderVisible]);

  return (
    <div style={styles.container}>
      <div
        className={`animate__animated ${headerInView ? "animate__fadeIn" : ""}`}
      >
        <h1 style={styles.header} ref={headerRef}>
          About Me
        </h1>
        <p style={styles.paragraph}>
          Hi there! I'm Chanse Shaw, an HVAC Service Technician based in Las
          Vegas, NV. I have a passion for coding, video games, and reading
          different types of books. I am currently enrolled at Western Governors
          University striving for my Bachelor's of Applied Sciences with a focus
          in Cyber Security and I am currently attending an internship with
          CloudSurf for Software Engineering.
          <br />
          <br />
          This website serves as my digital portfolio where I showcase my
          projects, share my thoughts, and connect with like-minded individuals.
        </p>
        <div style={styles.section}>
          <div>
            <h2
              ref={subHeaderRef}
              className={`animate__animated ${
                subHeaderInView ? "animate__fadeIn" : ""
              }`}
              style={styles.subHeader}
            >
              My Skills
            </h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>JavaScript (React, Node.js)</li>
              <li style={styles.listItem}>HTML5 & CSS3</li>
              <li style={styles.listItem}>Responsive Web Design</li>
              <li style={styles.listItem}>Version Control (Git)</li>
            </ul>
          </div>
          <div>
            <h2
              className={`animate__animated ${
                subHeaderInView ? "animate__fadeIn" : ""
              }`}
              style={styles.subHeader}
            >
              Experience
            </h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                HVAC Service Technician: 5 1/5 years
              </li>
              <li style={styles.listItem}>Natural Gas Technician: 2 years</li>
              <li style={styles.listItem}>FreeCodeCamp: Less than a month</li>
              <li style={styles.listItem}>
                CloudSurf Internship: Class of 2024
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
