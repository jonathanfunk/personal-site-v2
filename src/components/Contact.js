import React from "react"
import LinkedinIcon from "./icons/LinkedinIcon"
import GithubIcon from "./icons/GithubIcon"
import EnvelopeIcon from "./icons/EnvelopeIcon"

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="center">Contact</h2>
        <div className="social-icons">
          <ul>
            <li>
              <a
                href={`https://linkedin.com/in/jonathan-funk/`}
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a href={`https://github.com/jonathanfunk`} target="_blank">
                <GithubIcon />
              </a>
            </li>
            <li>
              <a href={`mailto:jonfunk88@hotmail.com`}>
                <EnvelopeIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
