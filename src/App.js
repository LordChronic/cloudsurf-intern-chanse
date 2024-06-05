import React from "react";
import "animate.css";
import SideScrollNavBar from "./components/SideScrollNavBar";
import Section from "./components/Section";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
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
const App = () => {
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
      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </div>
  );
};

export default App;
