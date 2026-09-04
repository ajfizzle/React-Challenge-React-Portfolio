import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "userName":
        setUserName(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }

    if (errorMessage) setErrorMessage("");
  };

  const handleFormSubmit = (e) => {
    if (!validateEmail(email)) {
      e.preventDefault();
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!userName.trim()) {
      e.preventDefault();
      setErrorMessage("Name is required.");
      return;
    }

    if (!message.trim()) {
      e.preventDefault();
      setErrorMessage("Message is required.");
      return;
    }

    // IMPORTANT:
    // Do NOT call e.preventDefault() here.
    // Let Netlify receive the form submission.
  };

  return (
    <section id="contact-me">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>

        <div className="section-border">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleFormSubmit}
          >
            {/* Required by Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="userName">Name:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={userName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleInputChange}
                required
              />
            </div>

            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}

            <button type="submit">Submit</button>
          </form>

          <div className="nav">
            <address>
              <a href="tel:832-600-4472">
                <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
                <span className="sr-only">Phone</span>
              </a>
            </address>

            <address>
              <a href="mailto:ajfizzle310@outlook.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </address>

            <address>
              <a
                href="https://github.com/ajfizzle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </address>

            <address>
              <a
                href="https://www.linkedin.com/in/isikhuemwen-azeta-959bb221/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;