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
  picture: {
    height: "auto",
    width: "50%",
    borderRadius: "50%",
    padding: "30px",
  },
};

function Home() {
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
      <center>
        <img src={picture} style={styles.picture} alt="Profile" />
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
