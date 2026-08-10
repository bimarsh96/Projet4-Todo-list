const Api_Url =
  "https://6a6ad153eb87a96865a8a173.mockapi.io/api/v1/todos/ToDoList"; //name of the mocapi at last
//Get
export async function getTodo() {
  const response = await fetch(Api_Url);
  const data = await response.json();
  return data;
}

//post
export async function addTodos(todo) {
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

export async function updateTodos(id, updatetodo) {
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

export async function deleteTodos(id) {
  const response = await fetch(`${Api_Url}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
}
