import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxUpdate } from "react-icons/rx";

function TodoItem({ item, onDelete, onUpdate }) {
  return (
    <>
      <div>
        <MdDelete className="dlt-icon"
         onClick={() => onDelete(item.id)} />
       
        <RxUpdate className="update-icon"
         onClick={() => onUpdate(item)}
          />
       <TiTick className="tick-icon" />
      </div>
    </>
                              
                              
  );
}

export default TodoItem;
