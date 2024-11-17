import React from "react";
import NavBar from "./NavBar"; // Correct relative path
import Home from "./Home"; // Correct relative path
import About from "./About"; // Correct relative path

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
