import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import picture from "../picture.jpeg";
const styles = {
  container: {
    // backgroundImage:
    // "linear-gradient(to bottom right, #00cdff, #326dff, #8032ff, #ff97fc)",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center"
  },
  header: {
    color: "black",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
  },
  picture: {
    height: "auto",
    width: "50%",
    borderRadius: "50%",
    padding: "30px",
  },
};

function Home() {
  return (
    <div style={styles.container}>
      <center>
        <img src={picture} style={styles.picture} />
      </center>
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
  );
}

export default Home;
