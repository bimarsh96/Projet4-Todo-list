import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxUpdate } from "react-icons/rx";

function TodoItem({ item, onDelete, onUpdate, onComplete ,editId}) {
  return (
    <>
      <div className="DuT">
        <MdDelete className="dlt-icon" onClick={() => onDelete(item.id)} />
        <RxUpdate 
        
        
        className={`update-icon ${editId === item.id ? "active" : ""}`}
        onClick={() => onUpdate(item)} />

        <TiTick
          className={`tick-icon ${item.isComplete ? "active" : ""}`}
          onClick={() => onComplete(item)}
        />
      </div>
    </>
  );
}

export default TodoItem;
