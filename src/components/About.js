import React from "react";
import Navbar from "./Navbar";

const styles = {
    container: {
        backgroundImage: 'linear-gradient(to bottom right, #00cdff, #326dff, #8032ff, #ff97fc)',
        height: "100vh",
    }
}

function About() {
    return (
        <div style={styles.container}>
            <Navbar />
            Hi
        </div>

    );
}

export default About;