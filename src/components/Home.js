import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const styles = {
    container: {
        backgroundImage: 'linear-gradient(to bottom right, #00cdff, #326dff, #8032ff, #ff97fc)',
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center"
    }, 
    header: {
        color: "black"
    },
    linkContainer: {
        display: "flex",
        flexDirection: "column",
        
    }
    
}

function Home() {
    return (
        <div style={styles.container}>
            <Navbar />
            <h1 style={styles.header}>Hi</h1>
            
            
            
            
        </div>

    );
}

export default Home;