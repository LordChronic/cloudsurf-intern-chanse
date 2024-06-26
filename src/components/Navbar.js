import React, { useState } from "react";
import logo from "../logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "black",
      color: "white",
    },
    toggle: {
      display: "none",
      fontSize: "30px",
      cursor: "pointer",
    },
    logo: {
      padding: "15px 20px",
    },
    mainNav: {
      listStyle: "none",
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
    },
    navItem: {
      padding: "10px",
    },
    navLinks: {
      textDecoration: "none",
      color: "white",
    },
  };

  return (
    <nav style={styles.navbar}>
      <span style={styles.toggle} onClick={toggleNav}>
        &#9776;
      </span>
      <a href="/" style={styles.logo}>
        <img src={logo} style={{ height: "60px" }} alt="Logo" />
      </a>
      <ul
        style={{ ...styles.mainNav, flexDirection: isOpen ? "column" : "row" }}
      >
        <li style={styles.navItem}>
          <a href="/" style={styles.navLinks}>
            Home
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/about" style={styles.navLinks}>
            About
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/contact" style={styles.navLinks}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
