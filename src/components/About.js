import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useInView } from "react-intersection-observer";
import "animate.css"; // Import animate.css

const styles = {
  container: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    // backgroundColor: "black",
    // backgroundImage:
    // "linear-gradient(to bottom right, #00cdff, #326dff, #8032ff, #ff97fc)",
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
    <div
      style={styles.container}
      className={`animate__animated ${headerInView ? "animate__fadeIn" : ""}`}
    >
      <h1 style={{ textAlign: "center" }} ref={headerRef}>
        About Me
      </h1>
      <p style={{ padding: "0% 10%" }}>
        Hi there! I'm Chanse Shaw, a HVAC Service Technician based in Las Vegas,
        NV. I have a passion for coding, video games, and reading different
        types of books. I am currently enrolled at Western Governors University
        striving for my Bachelors of Applied Sciences with a focus in Cyber
        Security and I am currently attending an internship with CloudSurf for
        Software Engineering.
        <br />
        <br />
        This website serves as my digital portfolio where I showcase my
        projects, share my thoughts, and connect with like-minded individuals.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ flexDirection: "column" }}>
          <h2
            ref={subHeaderRef}
            className={`animate__animated ${
              subHeaderInView ? "animate__fadeIn" : ""
            }`}
            style={{ textAlign: "center" }}
          >
            My Skills
          </h2>
          <ul>
            <li>JavaScript (React, Node.js)</li>
            <li>HTML5 & CSS3</li>
            <li>Responsive Web Design</li>
            <li>Version Control (Git)</li>
          </ul>
        </div>
        <div style={{ flexDirection: "column" }}>
          <h2
            className={`animate__animated ${
              subHeaderInView ? "animate__fadeIn" : ""
            }`}
            style={{ textAlign: "center" }}
          >
            Experience
          </h2>
          <ul>
            <li>HVAC Service Technician: 5 1/5 years</li>
            <li>Natural Gas Technician</li>
            <li>Less than a month of FreeCodeCamp</li>
            <li>Certified Loverboy?</li>
            <li>Goon King: 27 years</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
