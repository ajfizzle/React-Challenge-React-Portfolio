import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Clear messages when the user starts typing again
    if (errorMessage) {
      setErrorMessage("");
    }

    if (successMessage) {
      setSuccessMessage("");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");

    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Validate name
    if (!userName.trim()) {
      setErrorMessage("Name is required.");
      return;
    }

    // Validate message
    if (!message.trim()) {
      setErrorMessage("Message is required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);

      // Make sure Netlify knows which form this submission belongs to
      formData.set("form-name", "contact");

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      // Clear form after successful submission
      setUserName("");
      setEmail("");
      setMessage("");

      setSuccessMessage(
        "Thank you! Your message has been sent successfully."
      );
    } catch (error) {
      console.error("Contact form submission error:", error);

      setErrorMessage(
        "Sorry, there was a problem sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
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
            <input
              type="hidden"
              name="form-name"
              value="contact"
            />

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

            {/* Error message */}
            {errorMessage && (
              <p className="error-message">
                {errorMessage}
              </p>
            )}

            {/* Success message */}
            {successMessage && (
              <p className="success-message">
                {successMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>

          <div className="nav">
            <address>
              <a href="tel:832-600-4472">
                <FontAwesomeIcon
                  icon={faPhone}
                  aria-hidden="true"
                />
                <span className="sr-only">Phone</span>
              </a>
            </address>

            <address>
              <a href="mailto:ajfizzle310@outlook.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  aria-hidden="true"
                />
              </a>
            </address>

            <address>
              <a
                href="https://github.com/ajfizzle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  aria-hidden="true"
                />
              </a>
            </address>

            <address>
              <a
                href="https://www.linkedin.com/in/isikhuemwen-azeta-959bb221/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  aria-hidden="true"
                />
              </a>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;