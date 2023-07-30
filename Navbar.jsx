import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className={`header`}>
      
      <div className="leftSection">
        
        <p className="name">Subavarsni </p>

      
        <button className="nowAvailableButton">Now Available</button>
      </div>

    
      <div className="RightSection">
      
        <img
          src="twi.png"
          alt="Logo 1"
          className="logoImage"
        />
        <img
          src="ins.png"
          alt="Logo 2"
          className="logoImage"
        />
        <img
          src="ln.png"
          alt="Logo 3"
          className="logoImage"
        />
      </div>
    </div>
  );
};

export default Navbar;