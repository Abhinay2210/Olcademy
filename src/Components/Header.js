import React from "react";
import './header.css';

export default function Header() {
  return (
    <>
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">Olcademy</div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="//github.io/jo_geek" target="_blank">
            Home
          </a>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">
            About
          </a>
          <a
            href="https://in.linkedin.com/in/jonesvinothjoseph"
            target="_blank"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
