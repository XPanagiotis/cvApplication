import { useState } from "react";
import "../styles/sidebar.css";
import arrowIcon from "../assets/arrow.svg";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <SectionButton name={"Personal Information"} />
        <SectionButton name={"Education"} />
        <SectionButton name={"Experience"} />
        <SectionButton name={"Project Details"} />
        <SectionButton name={"Skill Details"} />
      </div>
    </>
  );
}

function SectionButton({ name }) {
  const [rotateIcon, setRotateIcon] = useState(false);

  function handleRotateIcon(e) {
    const icon = e.target.children[1];
    setRotateIcon(!rotateIcon);
    icon.classList.toggle("open-form");
    icon.classList.toggle("hide-form");
  }

  return (
    <>
      <button className="sidebar-section-button" onClick={handleRotateIcon}>
        <div>{name}</div>
        <img src={arrowIcon} alt="" id="arrow-icon" className="hide-form" />
      </button>
    </>
  );
}
