import { useState } from "react";

function Btnfxn({Delete ,handleFilter}) {
  const [isComplete, setComplete] = useState(false);
  const [isClearAll, setClearAll] = useState(true);
  const [isFinish, setFinish] = useState(true);

  return (
    <>
      <div className="btn-area">
        <ul className="upper-btn">
          <li>
            <button
              className={`sec-btn ${isClearAll === true ? `active` : " "}`}
              onClick={handleFilter}
            >
              All
            </button>
          </li>



          <li>
            <button
              className={`sec-btn ${isComplete === false ? `active` : " "} `}
              onClick={handleFilter}
            >
              In Progress
            </button>
          </li>



          <li>
            <button
              className={`sec-btn ${isComplete === true ? `active` : " "} `}
              onClick={handleFilter}
            >
              Completed
            </button>
          </li>
        </ul>



        <ul className="lower-btn">
          <li>
            <button
              className={`sec-btn ${isFinish === true ? `active` : " "}`}
              onClick={()=>setFinish(true)}
            >
              Finish All
            </button>
          </li>


          <li>
            <button 
            className={`sec-btn ${isFinish === true ? `active` : " "}`}
            onClick={()=>setFinish(true)}
            >
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
