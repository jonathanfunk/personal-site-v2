import React from "react";
import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcon from "./icons/GithubIcon";
import EnvelopeIcon from "./icons/EnvelopeIcon";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="site-info">
          <p>Copyright © {new Date().getFullYear()} Jonathan Funk</p>
        </div>
        <div className="social-icons">
          <ul>
            <li><a href={`https://linkedin.com/in/jonathan-funk/`} target="_blank"><LinkedinIcon /></a></li>
            <li><a href={`https://github.com/jonathanfunk`} target="_blank"><GithubIcon /></a></li>
            <li><a href={`mailto:jonfunk88@hotmail.com`}><EnvelopeIcon /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
