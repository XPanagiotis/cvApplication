import downLoadIcon from "../assets/download.svg";
import loadIcon from "../assets/upload.svg";
import resetIcon from "../assets/reset.svg";

export default function DropDown() {
  return (
    <>
      <div className="dropdown-menu" id="dropdown">
        <button className="drop-btn">
          <img src={downLoadIcon} alt=""></img>
          Download Resume
        </button>
        <button className="drop-btn">
          <img src={loadIcon} alt=""></img>
          Load a Template
        </button>
        <button className="drop-btn">
          <img src={resetIcon} alt=""></img>
          Clear Resume
        </button>
      </div>
    </>
  );
}
