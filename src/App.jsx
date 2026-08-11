import { useState } from "react";

import "./App.css";
import Toform from "./Components/todoform";

function App() {
  const [task, settask] = useState(0);
  // const [todos, settodos] = useState([]);

  return (
    <>
      <div className="App">
        <h1>My Todos</h1>
        <p>Organize your day, one task at a time</p>
      </div>

      <Toform />
    </>
  );
}

export default App;
