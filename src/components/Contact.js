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
        <form name="Contact Form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="Contact Form" />
          <p>
            <label>
              <br />
              <input type="text" name="name" placeholder="Name" />
            </label>
          </p>
          <p>
            <label>
              <br />
              <input type="email" name="email" placeholder="Email" />
            </label>
          </p>
          <p>
            <label>
              <br />
              <input type="text" name="subject" placeholder="Subject" />
            </label>
          </p>
          <p>
            <label>
              <br />
              <textarea
                name="message"
                rows="10"
                placeholder="Message"
              ></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
