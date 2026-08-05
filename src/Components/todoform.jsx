import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";

function Toform() {
  const [IsComplete, setComplete] = useState(false);

  return (
    <>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Ttile:</label>
            <input type="text" placeholder="Add List"></input>
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input type="text" placeholder="Whats the Task desc..."></input>
          </div>
          <div className="todo-input-item">
            <button type="button" className="main-btn">
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button
            className={`sec-btn ${IsComplete === false && `active`} `}
            onClick={() => setComplete(false)}
          >
            Todo
          </button>
          <button
            className={`sec-btn ${IsComplete === true && `active`} `}
            onClick={() => setComplete(true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
          <div className="todo-item">
            <div>
              <h3>Task</h3>
              <p>Description</p>
            </div>
            <div>
              <MdDelete className="dlt-icon" />
              <TiTick className="tick-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Toform;
