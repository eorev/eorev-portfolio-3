import React from "react";
import "./Navbar.css";

export default function Navbar({ setCurrentView, currentView }) {
  return (
    <div class='nav--container'>
      <div class='nav--inside__row'>
        <div class='nav--top__info'>
          <di class='name'>Ethan Orevillo</di>
        </div>
        <div className='page--navigation__container'>
          <a
            href='#'
            onClick={() => setCurrentView("whatido")}
            className={currentView === "whatido" ? "active-link" : ""}
          >
            what I do
          </a>
          <a
            href='#'
            onClick={() => setCurrentView("whereidoit")}
            className={currentView === "whereidoit" ? "active-link" : ""}
          >
            where I do it
          </a>
          <a
            href='#'
            onClick={() => setCurrentView("theextras")}
            className={currentView === "theextras" ? "active-link" : ""}
          >
            the extras
          </a>
        </div>
        <div class='nav--bottom__socials'>
          <a href='https://github.com/eorev'>
            <img src='/github-mark-white.svg' alt='github' />
          </a>
        </div>
      </div>
    </div>
  );
}
