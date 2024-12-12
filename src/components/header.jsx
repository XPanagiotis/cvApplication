import "../styles/header.css";
import gitHubIcon from "../assets/github-mark.svg";
import humberguerIcon from "../assets/humbergerMenu.svg";

export default function Header({ handleDropDown }) {
  return (
    <header>
      <a
        className="home-container"
        href="https://github.com/XPanagiotis/cvApplication"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gitHubIcon} alt="GitHub Icon" id="git-hub-icon" />
        Resume Builder
      </a>
      <button id="menu-btn" onClick={handleDropDown}>
        <img src={humberguerIcon} alt="menu" />
      </button>
    </header>
  );
}
