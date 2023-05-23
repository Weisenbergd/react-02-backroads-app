import React from "react";
import logo from "../images/logo.svg";
import { PageLinks, SocialLinks } from "../data";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {PageLinks.map(({ id, href, text }) => {
            return (
              <li key={id}>
                <a
                  href={href}
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {SocialLinks.map(({ id, href, className }) => {
            return (
              <a key={id} href={href} taget="_blank" className="nav-icon">
                <i className={className}></i>
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
