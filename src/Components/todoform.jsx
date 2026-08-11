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
    const data = await getTodo();
    settodos(data);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  const handleTool = async () => {
    //to input title and desc
    if (!title.trim() || !descrpt.trim()) {
      alert("Please Enter Title and Desciption");

      setTitle("");
      setDescrpt("");
      return;
    }

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
    //updating title and desc
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
    //to dlt one item
    await deleteTodos(id);
    loadTodos();
  };

  const deleteAll = async () => {
    //to dlt all

    for (const item of allTodos) {
      await deleteTodos(item.id);
    }
    loadTodos();
  };

  const handleEdit = (item) => {
    //for input
    setEditId(item.id);
    setTitle(item.title);
    setDescrpt(item.description);
  };

  const handleComplete = async (item) => {
    //complete
    const updatedTodo = {
      title: item.title,
      description: item.description,
      isComplete: !item.isComplete,
    };
    await updateTodos(item.id, updatedTodo);
    loadTodos();
  };

  const handleFilter = () => {
    //filtering which is what
    if (filter === "all") {
      return allTodos;
    }

    if (filter === "completed") {
      return allTodos.filter((item) => item.isComplete);
    }

    if (filter === "inprogress") {
      return allTodos.filter((item) => !item.isComplete);
    }
  };

  const handleFinish = async () => {
    //all task will be completed
    for (const item of allTodos) {
      const updatedTodo = {
        title: item.title,
        description: item.description,
        isComplete: true,
      };

      await updateTodos(item.id, updatedTodo);
    }
    loadTodos();
  };

  const handleClear = async () => {
    //only completed task will be cleared

    const completedall = allTodos.filter((item) => item.isComplete);

    for (const item of completedall) {
      await deleteTodos(item.id);
    }

    loadTodos();
  };

  return (
    <div className="todo-page">
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
          {handleFilter().map((item) => {
            return (
              <div
                className={`todo-item ${item.isComplete ? "completed" : ""}`}
                key={item.id}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <TodoItem
                  item={item}
                  onDelete={handleDelete}
                  onUpdate={handleEdit}
                  onComplete={handleComplete}
                  editId={editId}
                />
              </div>
            );
          })}
        </div>
        <footer>Small steps every day lead to big results.</footer>
      </div>

      <Btnfxn
        Filter={filter}
        setFilter={setFilter}
        Delete={deleteAll}
        Finish={handleFinish}
        Clear={handleClear}
      />
    </div>
  );
}

export default Toform;
