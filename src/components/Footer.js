import React from "react";
import { PageLinks } from "../data";
import { SocialLinks } from "../data";

export default function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {PageLinks.map(({ id, href, text }) => {
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {SocialLinks.map(({ id, href, className }) => {
          return (
            <a key={id} href={href} taget="_blank" className="footer-icon">
              <i className={className}></i>
            </a>
          );
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}
