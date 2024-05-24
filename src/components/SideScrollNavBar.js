import React from "react";
import { Link } from "react-scroll";
import logo from "../logo.png";
import HomeIcon from "@mui/icons-material/Home";
import { ContactMail, ContactPage, Info } from "@mui/icons-material";

const SideScrollNavBar = () => {
  const navBarStyle = {
    position: "fixed",
    top: 0,
    width: "100vw",
    padding: "10px 0",
    zIndex: 1000, // Ensure the nav bar is above other content
    overflowX: "auto",
    whiteSpace: "nowrap",
  };

  const navListStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const navItemStyle = {
    display: "inline-block",
    color: "black",
    padding: "10px 10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const navItemHoverStyle = {
    backgroundColor: "#00cdff",
  };
  // Media query for smaller screens
  const smallScreenNavBarStyle = {
    ...navBarStyle,
    padding: "5px 0", // Adjust padding for smaller screens
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = navItemHoverStyle.backgroundColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "";
  };

  return (
    <div style={window.innerWidth < 600 ? smallScreenNavBarStyle : navBarStyle}>
      <nav>
        <ul style={navListStyle}>
          <Link to="/">
            <img
              src={logo}
              style={{
                height: 40,
                borderRadius: 40 / 2,
                marginLeft: 10,
                marginRight: 10,
              }}
            />
          </Link>
          {[
            { icon: <HomeIcon />, name: "Home" },
            { icon: <Info />, name: "About" },
            { icon: <ContactPage />, name: "Contact" },
          ].map((item) => (
            <li
              key={item.name}
              style={navItemStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.name.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-50}
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideScrollNavBar;
