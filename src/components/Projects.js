import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css"; // Import animate.css
import Navbar from "./Navbar"; // Ensure Navbar component is correctly imported
import cloudsurfImage from "../cloudsurf.png";

const styles = {
  container: {
    fontWeight: "bold",
    fontSize: "1rem",
    backgroundColor: "#28282B",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    maxWidth: "85vw",
    margin: "30px auto",
  },
  header: {
    textAlign: "center",
    margin: "20px 0",
    fontSize: "2.5em",
    fontWeight: "bold",
    background: "linear-gradient(to right, #00cdff, #326dff, #8032ff, #ff97fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    position: "relative", // Needed for the ::after pseudo-element
    paddingBottom: "10px",
  },
  paragraph: {
    padding: "0 10px",
    textAlign: "center",
    lineHeight: "1.6",
  },
  section: {
    display: "flex",
    flexDirection: "column",
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
    listStyleType: "none", // Remove bullet points
    padding: 0, // Remove default padding
  },
  listItem: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center the image and content
  },
  image: {
    width: "100%",
    maxWidth: "450px",
    marginBottom: "20px", // Add margin below the image
  },
};

const projects = [
  {
    title: "Project One",
    img: cloudsurfImage,
    description: "Attended and completed internship with CloudSurf Software",
  },
];

function Projects() {
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
    <>
      <div style={styles.container}>
        <div
          ref={headerRef}
          className={`animate__animated ${
            headerInView ? "animate__fadeIn" : ""
          }`}
        >
          <h1 style={styles.header}>
            Current Projects
            <span
              style={{
                content: '""',
                position: "absolute",
                left: "0",
                bottom: "0",
                width: "100%",
                height: "5px", // Adjust height as needed
                background:
                  "linear-gradient(to right, #00cdff, #326dff, #8032ff, #ff97fc)",
                borderRadius: "2px",
              }}
            />
          </h1>
        </div>
        <ul style={styles.list}>
          {projects.map((project, index) => (
            <li key={index} style={styles.listItem}>
              <div
                className={`animate__animated ${
                  headerInView ? "animate__fadeInUp" : ""
                }`}
              >
                {project.img && (
                  <img
                    src={project.img}
                    alt={project.title}
                    style={styles.image}
                  />
                )}
                <p style={styles.paragraph}>{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "lightblue" }}
                  >
                    {project.link}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Projects;
