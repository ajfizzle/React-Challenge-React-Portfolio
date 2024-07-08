import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers.js";
import "../../App.css";

// Navigation component handling dynamic title and navigation logic
function Nav(props) {
  const { currentTab, handleTabChange } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <nav className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => handleTabChange("About")}
          className={currentTab === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#work"
          onClick={() => handleTabChange("Work")}
          className={currentTab === "Work" ? "nav-link active" : "nav-link"}
        >
          Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handleTabChange("Contact")}
          className={currentTab === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handleTabChange("Resume")}
          className={currentTab === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </nav>
  );
}

// Header component including Nav
function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <header>
      <div className="background">
        <h1>
          <a href="/">Joel Azeta's Portfolio</a>
        </h1>
      </div>
      <nav>
        <Nav currentTab={currentTab} handleTabChange={handleTabChange} />
        <section className="hero">
          <div className="section-hero">
            <h2>Welcome To My Hub</h2>
          </div>
        </section>
      </nav>
    </header>
  );
}

export default Header;
