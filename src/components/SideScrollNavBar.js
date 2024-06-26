import React from "react";
import logo from "../logo.png";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AssignmentIcon from "@mui/icons-material/Assignment";
// import { ContactPage, Info } from "@mui/icons-material";

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
    marginRight: 5,
    display: "inline-block",
    backgroundColor: "black",
    borderRadius: "50%",
    height: 25,
    color: "white",
    padding: "10px ",
    cursor: "pointer",
    // transition: "background-color 0.3s",
  };

  const navItemHoverStyle = {
    // backgroundColor: "black",
  };

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

  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop, // Adjust the offset as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={window.innerWidth < 600 ? smallScreenNavBarStyle : navBarStyle}>
      <nav>
        <ul style={navListStyle}>
          <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
            <img
              src={logo}
              style={{
                height: 45,
                borderRadius: "50%",
                marginLeft: 10,
                marginRight: 10,
              }}
              alt="Logo"
            />
          </a>
          {[
            {
              icon: (
                <>
                  <svg width={0} height={0}>
                    <linearGradient
                      id="exampleColors"
                      x1={1}
                      y1={0}
                      x2={1}
                      y2={1}
                      gradientTransform="rotate(45)"
                    >
                      <stop offset="0%" stopColor="#00cdff" />
                      <stop offset="25%" stopColor="#8032ff" />
                      <stop offset="50%" stopColor="#326dff" />
                      <stop offset="100%" stopColor="#ff97fc" />
                    </linearGradient>
                  </svg>
                  <HomeIcon sx={{ fill: "url(#exampleColors)" }} />
                </>
              ),
              name: "Home",
            },
            {
              icon: (
                <>
                  <svg width={0} height={0}>
                    <linearGradient
                      id="exampleColors"
                      x1={1}
                      y1={0}
                      x2={1}
                      y2={1}
                      gradientTransform="rotate(45)"
                    >
                      <stop offset="0%" stopColor="#00cdff" />
                      <stop offset="50%" stopColor="#8032ff" />
                      <stop offset="50%" stopColor="#326dff" />
                      <stop offset="100%" stopColor="#ff97fc" />
                    </linearGradient>
                  </svg>
                  <InfoIcon sx={{ fill: "url(#exampleColors)" }} />
                </>
              ),
              name: "About",
            },
            {
              icon: (
                <>
                  <svg width={0} height={0}>
                    <linearGradient
                      id="exampleColors"
                      x1={1}
                      y1={0}
                      x2={1}
                      y2={1}
                      gradientTransform="rotate(45)"
                    >
                      <stop offset="0%" stopColor="#00cdff" />
                      <stop offset="25%" stopColor="#8032ff" />
                      <stop offset="50%" stopColor="#326dff" />
                      <stop offset="100%" stopColor="#ff97fc" />
                    </linearGradient>
                  </svg>
                  <AssignmentIcon sx={{ fill: "url(#exampleColors)" }} />
                </>
              ),
              name: "Projects",
            },
            {
              icon: (
                <>
                  <svg width={0} height={0}>
                    <linearGradient
                      id="exampleColors"
                      x1={1}
                      y1={0}
                      x2={1}
                      y2={1}
                      gradientTransform="rotate(45)"
                    >
                      <stop offset="0%" stopColor="#00cdff" />
                      <stop offset="25%" stopColor="#8032ff" />
                      <stop offset="50%" stopColor="#326dff" />
                      <stop offset="100%" stopColor="#ff97fc" />
                    </linearGradient>
                  </svg>
                  <ContactPageIcon sx={{ fill: "url(#exampleColors)" }} />
                </>
              ),
              name: "Contact",
            },
          ].map((item) => (
            <li
              key={item.name}
              style={navItemStyle}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              <a
                href={`#${item.name.toLowerCase()}`}
                onClick={(e) => handleSmoothScroll(e, item.name.toLowerCase())}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideScrollNavBar;
