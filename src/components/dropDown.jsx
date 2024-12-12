import downLoadIcon from "../assets/download.svg";
import loadIcon from "../assets/upload.svg";
import resetIcon from "../assets/reset.svg";
import "../styles/header.css";

export default function DropDown({ isActive }) {
  return (
    <>
      <div
        className={`dropdown-menu ${isActive ? "show-dropdown-menu" : ""}`}
        id="dropdown"
      >
        <button className="drop-btn">
          <img src={downLoadIcon} alt="" />
          Download Resume
        </button>
        <button className="drop-btn">
          <img src={loadIcon} alt="" />
          Load a Template
        </button>
        <button className="drop-btn">
          <img src={resetIcon} alt="" />
          Clear Resume
        </button>
      </div>
    </>
  );
}
