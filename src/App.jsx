import { useState } from "react";
import Header from "./components/header";
import Canvas from "./components/canvas";
import Sidebar from "./components/sidebar";
import DropDown from "./components/dropDown";
import "./styles/App.css";
import "./styles/header.css";

export default function App() {
  const [showDropDown, setShowDropDown] = useState(false);

  function handleDropDown() {
    setShowDropDown((prev) => !prev);

    // When the menu button is clicked we add a focus style
    const btn = document.getElementById("menu-btn");
    showDropDown
      ? (btn.style.backgroundColor = "inherit")
      : (btn.style.backgroundColor = "var(--lightgrey-color)");
  }

  return (
    <>
      <Header handleDropDown={handleDropDown} />
      <DropDown isActive={showDropDown} />

      <div className="container">
        <Sidebar />
        <Canvas />
      </div>
    </>
  );
}
