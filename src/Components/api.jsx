const Api_Url = "https://6a6ad153eb87a96865a8a173.mockapi.io/api/v1/todos/todos";

//Get
async function getTodo() {
  const response = await fetch(Api_Url);
  const data = await response.json();
  return data;
}

//post
async function addTodos(todo) {
  const response = await fetch(Api_Url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const data = await response.json();
  return data;
}
//update

async function updateTodos(id, updatetodo) {
  const response = await fetch(`${Api_Url}/${id}`, {
    method: "PUT",

    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updatetodo),
  });

  const data = await response.json();
  return data;
}
//delete

async function deleteTodos(id) {
  const response = await fetch(`${Api_Url}/${id}`, {
    method: "DELETE",

    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(),
  });

  const data = await response.json();
  return data;
}

export default { getTodo, addTodos, updateTodos, deleteTodos };
