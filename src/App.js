import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "./components/Work";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  const [currentTab, handleTabChange] = useState("About");

  // If `currentTab` does not match any case, it defaults to rendering the 'About' component.
  const renderTab = () => {
    switch (currentTab) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <About />; // Default to 'About' component.
    }
  };

  return (
    <>
      <Helmet>
        <title>Joel Azeta&apos;s Portfolio | {currentTab}</title>
      </Helmet>
      <Header currentTab={currentTab} handleTabChange={handleTabChange} />
      <main>{renderTab()}</main>
      <Footer />
    </>
  );
}

export default App;
