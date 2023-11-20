import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import WhatIDo from "./WhatIDo.jsx";
import TheExtras from "./TheExtras.jsx";
import WhereIDoIt from "./WhereIDoIt.jsx";
import "./MainContent.css";

function MainContent() {
  const [currentView, setCurrentView] = useState("whatido");
  const [activeView, setActiveView] = useState("whatido");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (currentView !== activeView) {
      setIsFading(true);
      setTimeout(() => {
        setActiveView(currentView);
        setIsFading(false);
      }, 100);
    }
  }, [currentView]);

  const renderView = () => {
    switch (activeView) {
      case "whatido":
        return <WhatIDo />;
      case "whereidoit":
        return <WhereIDoIt />;
      case "theextras":
        return <TheExtras />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar setCurrentView={setCurrentView} />
      <div className={`content--area ${isFading ? "fade-out" : "fade-in"}`}>
        {renderView()}
      </div>
    </>
  );
}

export default MainContent;
