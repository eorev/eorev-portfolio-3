import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import WhatIDo from "./WhatIDo.jsx";
import TheExtras from "./TheExtras.jsx";
import WhereIDoIt from "./WhereIDoIt.jsx";
import "./MainContent.css";

function MainContent() {
  const [currentView, setCurrentView] = useState("whatido");

  return (
    <>
      <Navbar setCurrentView={setCurrentView} />
      <div className='content--area'>
        {currentView === "whatido" && <WhatIDo />}
        {currentView === "whereidoit" && <WhereIDoIt />}
        {currentView === "theextras" && <TheExtras />}
      </div>
    </>
  );
}

export default MainContent;
