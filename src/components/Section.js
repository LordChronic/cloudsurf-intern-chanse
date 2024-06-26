import React from "react";

const Section = ({ id, title, children }) => {
  const sectionStyle = {
    minHeight: "100vh", // Changed to minHeight for better mobile handling
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#f1f1f1",
    // marginBottom: "10px",
    // padding: "0px 20px", // Added padding at the top
    boxSizing: "border-box",
    // backgroundImage:
    // "linear-gradient(to bottom right, #00cdff, #326dff, #8032ff, #ff97fc)",
  };
  // Media query for smaller screens
  const smallScreenSectionStyle = {
    ...sectionStyle,
    padding: "60px 10px 10px 10px", // Adjust padding for smaller screens
  };
  return (
    <div
      id={id}
      style={window.innerWidth < 600 ? smallScreenSectionStyle : sectionStyle}
    >
      {children}
    </div>
  );
};

export default Section;
