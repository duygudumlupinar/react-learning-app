import { useState } from "react";
import "./App.css";
import "./components/Login";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Courses from "./components/Courses";
import Question from "./components/Question";

function App() {
  const [count, setCount] = useState(0);
  let isloggedIn = true;
  let isEntryPage = false;

  return (
    // <div>
    //   {isEntryPage ? (
    //     <div className="backgroundIntroPage">
    //       {isloggedIn && <Login />}
    //       {!isloggedIn && <SignIn />}
    //     </div>
    //   ) : (
    //     <Courses />
    //   )}
    // </div>
    <div className="backgroundContentPage">
      <Question />
    </div>
  );
}

export default App;
