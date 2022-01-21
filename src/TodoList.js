import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  // let todos = todoList;
  // console.log(todos)
  return (
    <ul>
      {todoList.map((records) => (
        <TodoListItem key={records.id} item={records} todo={records.fields.Title} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
