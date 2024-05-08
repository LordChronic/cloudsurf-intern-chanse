import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import picture from "../picture.jpeg";
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
        
    },
    picture: {
        height: "450px",
        
    }
    
}

function Home() {
    return (
        <div style={styles.container}>
            <Navbar />

            <img src={picture} style={styles.picture}/>
            <h1 style={styles.header} >
            <center>Welcome to the domain of the Godking, Heretic Denier of The Beast, Lord Chronic.</center>  
            </h1>
            
        </div>

    );
}

export default Home;