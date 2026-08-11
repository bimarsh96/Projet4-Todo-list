import { useState } from "react";

function Btnfxn({ Filter, Delete, setFilter, Finish, Clear }) {
  return (
    <>
      <div className="btn-area">
        <ul className="upper-btn">
          <li>
            <button
              className={`sec-btn ${Filter === "all" ? "active" : " "}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
          </li>

          <li>
            <button
              className={`sec-btn ${Filter === "inprogress" ? "active" : " "}`}
              onClick={() => setFilter("inprogress")}
            >
              In Progress
            </button>
          </li>

          <li>
            <button
              className={`sec-btn ${Filter === "completed" ? "active" : ""}`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </li>
        </ul>

        <ul className="lower-btn">
          <li>
            <button className="sec-btn" onClick={Finish}>
              Finish All
            </button>
          </li>

          <li>
            <button className="sec-btn" onClick={Clear}>
              Clear Completed
            </button>
          </li>

          <li>
            {
              <button className="sec-btn" onClick={Delete}>
                Clear All
              </button>
            }
          </li>
        </ul>
      </div>
    </>
  );
}

export default Btnfxn;
