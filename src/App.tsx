import { useState } from "react";
import "./App.css";
import "./components/Login";
import Login from "./components/Login";
import SignIn from "./components/SignIn";

function App() {
  const [count, setCount] = useState(0);
  let isloggedIn = true;

  return (
    <div className="backgroundIntroPage">
      {isloggedIn && <Login />}
      {!isloggedIn && <SignIn />}
    </div>
  );
}

export default App;
