import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const airtableApiBaseId = process.env.REACT_APP_AIRTABLE_BASE_ID;
const airtableApiKey = process.env.REACT_APP_AIRTABLE_API_KEY;

console.log(airtableApiBaseId);
console.log(airtableApiKey);

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${airtableApiBaseId}/Default`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${airtableApiKey}`,
        // Authorization: "Bearer keychO6BLnDfKm60E",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setTodoList(result.records);
        setIsLoading(false);
        console.log(result);
      });
  }, []);

  console.log(todoList);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (item) => {
    let newTodoo = todoList.filter((todo) => item.id !== todo.id);
    setTodoList(newTodoo);
  };

  return (
    <>
      <h1 style={{ color: "green" }}>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {/* <p>{newTodo}</p> */}
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}

export default App;
