import React, { useState, useEffect } from "react";
import picture from "../picture.jpeg";
import { useInView } from "react-intersection-observer";
import "animate.css"; // Import animate.css

const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    color: "black",
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
    height: "auto",
    width: isLargeScreen ? "25%" : "70%", // Adjust width based on screen size
    borderRadius: "50%",
    padding: "30px",
  };

  return (
    <div style={styles.container}>
      <center>
        <img src={picture} style={pictureStyle} alt="Profile" />
      </center>
      <div
        className={`animate__animated ${headerInView ? "animate__fadeIn" : ""}`}
        ref={headerRef}
      >
        <h1 style={styles.header}>
          <center>
            Welcome to the domain of the Godking, Heretic Denier of The Beast,
            Lord Chronic.
          </center>
        </h1>
        <h2 style={styles.header}>
          <center>HVAC Technician</center>
          <center>Software Engineer</center>
        </h2>
      </div>
      {/* <h2
        style={styles.header}
        className={`animate__animated ${
          subHeaderInView ? "animate__rollIn" : ""
        }`}
        ref={subHeaderRef}
      >
        
      </h2> */}
    </div>
  );
}

export default Home;
