import { useState } from "react";

function Btnfxn({ Delete, setFilter, Finish, Clear }) {
  const [isClearAll, setClearAll] = useState(true);
  const [isFinish, setFinish] = useState(true);

  return (
    <>
      <div className="btn-area">
        <ul className="upper-btn">
          <li>
            <button className="sec-btn" onClick={() => setFilter("all")}>
              All
            </button>
          </li>

          <li>
            <button className="sec-btn" onClick={() => setFilter("inprogress")}>
              In Progress
            </button>
          </li>

          <li>
            <button className="sec-btn" onClick={() => setFilter("completed")}>
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
            <button
              className={`sec-btn ${isClearAll === true ? `active` : " "}`}
              onClick={Delete}
            >
              Clear All
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Btnfxn;
