import { useEffect, useState } from "react";
import { getTodo, addTodos, updateTodos, deleteTodos } from "./api";
import TodoItem from "./todoitem";
import Btnfxn from "../btn";

function Toform() {
  const [allTodos, settodos] = useState([]);
  const [title, setTitle] = useState("");
  const [descrpt, setDescrpt] = useState("");
  const [editId, setEditId] = useState("");
  const [filter, setFilter] = useState("all");

  async function loadTodos() {
    //to request the data
    const data = await getTodo();
    settodos(data);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  const handleTool = async () => {
    const newTodoItem = {
      title: title,
      description: descrpt,
      isComplete: false,
    };
    await addTodos(newTodoItem);
    setTitle("");
    setDescrpt("");

    loadTodos();
  };

  const handleUpdate = async () => {
    const updatedTodo = {
      title: title,
      description: descrpt,
    };
    await updateTodos(editId, updatedTodo);

    setTitle("");
    setDescrpt("");
    setEditId("");
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodos(id);
    loadTodos();
  };

  const deleteAll = async () => {
    for (const item of allTodos) {
      await deleteTodos(item.id);
    }
    loadTodos();
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setTitle(item.title);
    setDescrpt(item.description);
  };

  const handleFilter = () => {
    if (filter === "all") {
      return allTodos;
    }

    if (filter === "completed") {
      return allTodos;
    }

    if (filter === "inprogress") {
      return allTodos;
    }
  };
  return (
    <>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title:</label>
            <input
              type="text"
              placeholder="Add List"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input
              type="text"
              placeholder="Whats the Task desc..."
              value={descrpt}
              onChange={(e) => setDescrpt(e.target.value)}
            ></input>
          </div>
          <div className="todo-input-item">
            <button
              type="button"
              className="main-btn"
              onClick={editId ? handleUpdate : handleTool}
            >
              Add
            </button>
          </div>
        </div>

        <div className="todo-list">
          {allTodos.map((item) => {
            return (
              <div className="todo-item" key={item.id}>
                {/* {title && descrpt && ( */}
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                {/* )} */}
                <TodoItem
                  item={item}
                  onDelete={handleDelete}
                  onUpdate={handleEdit}
                />
              </div>
            );
          })}
        </div>
        <footer>All Completed,good job!</footer>
      </div>

      <Btnfxn All={handleFilter} Delete={deleteAll} />
    </>
  );
}

export default Toform;
