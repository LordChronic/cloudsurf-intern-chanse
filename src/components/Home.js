import React, { useState, useEffect } from "react";
import picture from "../picture.jpeg";
import { useInView } from "react-intersection-observer";
import "animate.css"; // Import animate.css

const styles = {
  container: {
    height: "100%",
    width: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#28282B",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    margin: "20px 0",
    fontSize: "2em",
    fontWeight: "bold",
    background: "linear-gradient(to right, #00cdff, #326dff, #8032ff, #ff97fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subHeader: {
    fontSize: "1.5em",
    fontWeight: "normal",
    background: "linear-gradient(to right, #00cdff, #326dff, #8032ff, #ff97fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontStyle: "italic",
  },
  picture: {
    height: "auto",
    borderRadius: "50%",
    padding: "30px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.5)",
  },
};

function Home() {
  const [headerInView, setHeaderInView] = useState(false);
  const [subHeaderInView, setSubHeaderInView] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 900);

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

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pictureStyle = {
    ...styles.picture,
    width: isLargeScreen ? "25%" : "70%", // Adjust width based on screen size
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img src={picture} style={pictureStyle} alt="Profile" />
        <div
          className={`animate__animated ${
            headerInView ? "animate__fadeIn" : ""
          }`}
          ref={headerRef}
        >
          <h1 style={styles.header}>Chanse K. F. Shaw</h1>
          <h2 style={styles.subHeader}>
            HVAC Technician
            <br />
            Software Engineer
            <br />
            God-King, Heretic Denier of the Beast
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
