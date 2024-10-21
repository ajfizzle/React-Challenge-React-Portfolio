import React, { useState } from "react";
import Header from "./components/Header/index.js";
import About from "./components/About/index.js";
import Contact from "./components/Contact/index.js";
import Work from "./components/Work/index.js";
import Resume from "./components/Resume/index.js";
import Footer from "./components/Footer/index.js";
import { Helmet } from "react-helmet";
import ErrorBoundary from "./components/ErrorBoundary.js";
import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState({ name: "About" });

  const handleTabChange = (tabName) => {
    setCurrentTab({ name: tabName });
  };

  const renderTab = () => {
    switch (currentTab.name) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Work":
        return <Work />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Joel Azeta's Portfolio | {currentTab.name}</title>
      </Helmet>
      <ErrorBoundary>
        <Header
          currentTab={currentTab.name}
          handleTabChange={handleTabChange}
        />
      </ErrorBoundary>
      <main>{renderTab()}</main>
      <Footer />
    </>
  );
}

export default App;
