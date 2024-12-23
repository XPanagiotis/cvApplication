import { useState } from "react";
import "../styles/form.css";
import plusIcon from "../assets/plus.svg";
import binIcon from "../assets/bin.svg";
import editIcon from "../assets/edit.svg";

export default function Form({
  inputs,
  addDetails,
  renderShowCancelBtn,
  handleSubmit,
  oncancel,
}) {
  return (
    <form className="form profile-form" onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <div key={input.id} className="form-group">
          <label htmlFor={input.id}>{input.label}</label>
          <input
            type={input.inputType}
            id={input.id}
            placeholder={input.placeHolder}
          />
        </div>
      ))}

      {addDetails && <AddDetails details={addDetails} />}

      {renderShowCancelBtn && (
        <>
          <button type="Submit">Submit</button>
          <button type="button" onClick={oncancel}>
            Cancel
          </button>
        </>
      )}
    </form>
  );
}

function AddDetails({ details }) {
  const [input, setInput] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  function handleAddOrUpdate() {
    if (input.trim() === "") return;

    setResponsibilities([...responsibilities, input]);
    setInput("");
  }

  return (
    <div className="addDetails-container">
      <div key={details.id} className="form-group">
        <label htmlFor={details.id}>{details.label}</label>
        <div className="details-input">
          <input
            type="text"
            id={details.id}
            placeholder={details.placeHolder}
            value={input}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleAddOrUpdate}>
            <img src={plusIcon} alt="" />
          </button>
        </div>
      </div>

      {/* Display the list of details */}
      <ul className="details-list">
        {responsibilities.map((responsibility, index) => {
          return (
            <li key={index} className="entry">
              <span>{responsibility}</span>
              <div className="action-buttons">
                <button>
                  <img src={editIcon} alt="Edit" />
                </button>
                <button>
                  <img src={binIcon} alt="Delete" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
