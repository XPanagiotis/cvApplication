import { useState } from "react";
import "../styles/sidebar.css";
import arrowIcon from "../assets/arrow.svg";
import sections from "../utils/sections";
import Form from "./form";

export default function Sidebar() {
  const [activeSectionIndex, setactiveSectionIndex] = useState(null);

  function handleShowForm(index) {
    setactiveSectionIndex(activeSectionIndex === index ? null : index);
  }
  return (
    <div className="sidebar">
      {sections.map((section, index) => (
        <SectionButton
          key={index}
          name={section.name}
          isActive={activeSectionIndex === index}
          onClick={() => handleShowForm(index)}
        >
          <Form inputs={section.inputs} />
        </SectionButton>
      ))}
    </div>
  );
}

function SectionButton({ name, onClick, isActive, children }) {
  return (
    <div className="section">
      <button
        className={`sidebar-section-button ${isActive ? "active-button" : ""}`}
        onClick={onClick}
      >
        <div>{name}</div>
        <img
          src={arrowIcon}
          alt=""
          className={isActive ? "rotate-icon" : "reverse-rotate-icon"}
        />
      </button>
      {isActive && (
        <div className={`form-container ${isActive ? "show" : "hide"}`}>
          {children}
        </div>
      )}
    </div>
  );
}
