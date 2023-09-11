import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Form from "./components/TextForm";
import About from "./components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  //alert usestate msg
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1400);
  };

  // const removeBody=()=>{
  // document.body.classList.remove('bg-success')
  // document.body.classList.remove('bg-warning')
  // document.body.classList.remove('bg-danger')
  // document.body.classList.remove('bg-info')
  // }

  const toggleMode = () => {

  // console.log(colors)
  //   removeBody()
  //   document.body.classList.add('bg-'+ colors )
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "skyblue";

      showAlert("Dark Mode is enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enable", "success");
    }
  };

  return (
    <>
      <Router>
      <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
      <Route exact path="/" element={ <Form mode={mode}  showAlert={showAlert} />}/>
      <Route exact path="/about" element={ <About mode={mode} />}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
