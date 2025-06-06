import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar/Sidebar";

import Mainfile from "./components/Main/Mainfile";

// import './App.css'

function App() {
  return (
    <>
      <Sidebar />
      <Mainfile />
    </>
  );
}

export default App;
