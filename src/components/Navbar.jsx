import React from "react";
import avatar from "../assets/avatarImage.jpeg"

const Navbar = () => {
  return <div className="navbar">
    <h1>Overview</h1>
    <div className="info">
      <h4>example@groove.music</h4>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  </div>;
};

export default Navbar;
