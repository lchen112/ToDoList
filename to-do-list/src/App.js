import ToDoItem from "./components/ToDoItem";
import { useState } from "react";
import React from "react";
import FilterButton from "./components/FilterButton";
import { getNumTasksRemaining } from "./utils";
import Form from "./components/Form";
import { nanoid } from "nanoid";
/** Objectives
As a user, I can
read a list of tasks.
add a task using the mouse or keyboard.
mark any task as completed, using the mouse or keyboard.
delete any task, using the mouse or keyboard.
edit any task, using the mouse or keyboard.
view a specific subset of tasks: All tasks, only the active task, or only the completed tasks.

 */
function App(props) {
  const [todos, setTodos] = useState([
    { id: "todo-" + nanoid(), val: "Sleep", complete: true },
    { id: "todo-" + nanoid(), val: "Eat", complete: false },
    { id: "todo-" + nanoid(), val: "Bathe", complete: true },
    { id: "todo-" + nanoid(), val: "Exercise", complete: false },
    { id: "todo-" + nanoid(), val: "Watch Movie", complete: false },
  ]);

  const addTask = (name) => {
    const newTodo = { id: "todo-" + nanoid(), val: name, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTaskCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const editTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <div className="todoapp stack-large">
      <h1>To Do List </h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton name={"All"} />
        <FilterButton name={"Active"} />
        <FilterButton name={"Completed"} />
      </div>
      <h2 id="list-heading">{getNumTasksRemaining(todos)}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todos &&
          todos.length > 0 &&
          todos.map((todo, key) => (
            <ToDoItem
              key={key}
              id={todo.id}
              name={todo.val}
              complete={todo.complete}
              toggleTaskCompleted={toggleTaskCompleted}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;
