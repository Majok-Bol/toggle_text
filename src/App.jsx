import "./index.css";
//import useState from react
import { useState } from "react";
//main function to display UI
export default function App() {
  const [isVisibile, setIsVisible] = useState(false);
  //function to handle toggle on button click
  function handleToggleVisibility() {
    //call setIsVisible to handle visibility
    //check if true
    setIsVisible(!isVisibile);
  }
  //return the ui
  return (
    <>
      <div id="toggle-container">
        <button id="btn" onClick={handleToggleVisibility}>
          Toggle Message
        </button>
        {/*display this message if toggle visibility is true */}
        {isVisibile && <p id='para'>I love Coding</p>}
      </div>
    </>
  );
}
