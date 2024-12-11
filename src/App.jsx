import Header from "./components/header";
import Canvas from "./components/canvas";
import Sidebar from "./components/sidebar";
import DropDown from "./components/dropDown";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <DropDown />
      <div className="container">
        <Sidebar />
        <Canvas />
      </div>
    </>
  );
}

export default App;
