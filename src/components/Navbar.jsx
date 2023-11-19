import React from "react";
import "./Navbar.css";

export default function Navbar({ setCurrentView }) {
  return (
    <div class='nav--container'>
      <div class='nav--inside__row'>
        <div class='nav--top__info'>
          <di class='name'>Ethan Orevillo</di>
        </div>
        <div className='page--navigation__container'>
          <a href='#' onClick={() => setCurrentView("whatido")}>
            what I do
          </a>
          <a href='#' onClick={() => setCurrentView("howidoit")}>
            how I do it
          </a>
          <a href='#' onClick={() => setCurrentView("whereidoit")}>
            where I do it
          </a>
          <a href='#' onClick={() => setCurrentView("theextras")}>
            the extras
          </a>
        </div>
        <div class='nav--bottom__socials'>
          <a href=''>
            <h1>filler</h1>
          </a>
          <a href=''>
            <h1>filler</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
