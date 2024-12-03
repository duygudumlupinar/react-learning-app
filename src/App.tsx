import { useState } from "react";
import "./App.css";
import "./components/Login";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="backgroundIntroPage">
      <Login />
    </div>
  );
}

export default App;
