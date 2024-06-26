import React from "react";
import "animate.css";
import SideScrollNavBar from "./SideScrollNavBar";
import Section from "./Section";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
const styles = {
  container: {
    backgroundImage:
      "linear-gradient(to bottom right, #00cdff, #326dff, #8032ff, #ff97fc)",
    height: "100vh",
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
    height: "300px",
    width: "450px",
    padding: "30px",
  },
};
const AppContainer = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #00cdff, #326dff, #8032ff, #ff97fc)",
      }}
    >
      <SideScrollNavBar />
      <Section id="home" title="Home">
        <Home />
      </Section>
      <Section id="about" title="About">
        <About />
      </Section>
      <Section id="projects" title="Projects">
        <Projects />
      </Section>
      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </div>
  );
};

export default AppContainer;
