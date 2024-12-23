import { useState } from "react";
import "../styles/sidebar.css";
import arrowIcon from "../assets/arrow.svg";
import binIcon from "../assets/bin.svg";
import editIcon from "../assets/edit.svg";
import sections from "../utils/sections";
import Form from "./form";

export default function Sidebar() {
  const [activeSectionIndex, setactiveSectionIndex] = useState(null);
  const [submittedData, setSubmittedData] = useState({});
  const [showForm, setShowForm] = useState(true);

  function handleShowForm(index) {
    setactiveSectionIndex(activeSectionIndex === index ? null : index);
  }

  function handleSubmitForm(e, sectionName, formData, index) {
    e.preventDefault();

    setSubmittedData((prevData) => {
      const updatedData = { ...prevData };
      if (!updatedData[sectionName]) {
        updatedData[sectionName] = [];
      }

      updatedData[sectionName].push(formData);
      return updatedData;
    });
    setShowForm(showForm === index ? null : index);
  }
  return (
    <div className="sidebar">
      {/* Render all the buttons for the sections that user must input data */}
      {sections.map((section, index) => (
        <SectionButton
          key={index}
          name={section.name}
          isActive={activeSectionIndex === index}
          onClick={() => handleShowForm(index)}
        >
          {/* If the user submit the form, a commponent with the submitted data is created */}
          {submittedData[section.name]?.length > 0 && section.buttons && (
            <SubmitedData section={section} />
          )}

          {/* If the user has't cancel the form the form is renderd */}
          {showForm && activeSectionIndex === index && (
            <Form
              key={index}
              inputs={section.inputs}
              addDetails={section.details}
              renderShowCancelBtn={section.buttons}
              handleSubmit={(e, formData) =>
                handleSubmitForm(e, section.name, formData)
              }
              oncancel={
                () => {
                  setShowForm(false);
                } /* On cancel hide the form */
              }
            />
          )}

          {/* If the user cancel or submit the form a button is rendered which can display a new form */}
          {!showForm && section.buttons && (
            <button className="add-more-btn" onClick={() => setShowForm(true)}>
              + Add {section.name}
            </button>
          )}
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

      {/* If the button is clicked we render the Form */}
      {isActive && (
        <div className={`form-container ${isActive ? "show" : "hide"}`}>
          {children}
        </div>
      )}
    </div>
  );
}

function SubmitedData({ section }) {
  return (
    <div className="entry">
      <div className="entry-data-container">
        <div>University</div>
        <div>2020/02/06 - 2024/05/11</div>
      </div>
      <div className="action-buttons">
        <button>
          <img src={editIcon} alt={`Edit ${section.name} Entry`} />
        </button>
        <button>
          <img src={binIcon} alt={`Delete ${section.name} Entry`} />
        </button>
      </div>
    </div>
  );
}
