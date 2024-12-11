import { useState } from "react";
import "../styles/header.css";
import gitHubIcon from "../assets/github-mark.svg";
import humberguerIcon from "../assets/humbergerMenu.svg";

export default function Header() {
  const [showDropDown, setShowDropDown] = useState(false);

  function handleDropDown() {
    const dropDown = document.getElementById("dropdown");
    setShowDropDown(!showDropDown);
    dropDown.classList.toggle("show-dropdown-menu");
  }

  return (
    <>
      <header>
        <a
          className="home-container"
          href="https://github.com/XPanagiotis/cvApplication"
          target="_blank"
        >
          <img src={gitHubIcon} alt={"Git Hub Icon"} id="git-hub-icon" />
          Resume Builder
        </a>

        <button id="menu-btn" onClick={handleDropDown} onBlur={handleDropDown}>
          <img src={humberguerIcon} alt="menu" />
        </button>
      </header>
    </>
  );
}
