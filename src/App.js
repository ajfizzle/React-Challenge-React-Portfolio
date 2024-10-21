import React, { useState, useEffect } from "react";
import Header from "./components/Header/index.js";
import About from "./components/About/index.js";
import Contact from "./components/Contact/index.js";
import Work from "./components/Work/index.js";
import Resume from "./components/Resume/index.js";
import Footer from "./components/Footer/index.js";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import "./App.css";

function App() {
  // Initialize Google Analytics
  useEffect(() => {
    // Initialize Google Analytics with your tracking ID for GA4
    ReactGA.initialize("G-32C5Z8N00K");
    // Record a pageview for the initial page load
    ReactGA.send("pageview");
  }, []);

  // Initialize currentTab with an object that includes a 'name' property
  const [currentTab, setCurrentTab] = useState({ name: "About" });

  // Log initial state
  console.log("Initial currentTab:", currentTab);

  // Function to handle tab change
  const handleTabChange = (tabName) => {
    console.log("Changing tab from:", currentTab.name, "to:", tabName); // Log tab change
    setCurrentTab({ name: tabName });
    // Log the new pageview to Google Analytics
    ReactGA.send("pageview", { page: tabName });
  };

  // Render the appropriate component based on currentTab.name
  const renderTab = () => {
    console.log("Rendering tab:", currentTab.name); // Log which tab is being rendered
    switch (
      currentTab.name // Ensure you use currentTab.name to match string values
    ) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Work":
        return <Work />;
      case "Resume":
        return <Resume />;
      default:
        console.log("Defaulting to About tab"); // Log default case
        return <About />; // Default to 'About' component if no match
    }
  };

  return (
    <>
      <Helmet>
        <title>Joel Azetas Portfolio | {currentTab.name}</title>
      </Helmet>
      <Header currentTab={currentTab.name} handleTabChange={handleTabChange} />{" "}
      {/* Pass down the name for consistency */}
      <main>{renderTab()}</main>
      <Footer />
    </>
  );
}

export default App;
