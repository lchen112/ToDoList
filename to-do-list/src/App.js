import ToDoItem from "./components/ToDoItem";
import { useState } from "react";
import React from "react";
import FilterButton from "./components/FilterButton";
import { getNumTasksRemaining } from "./utils";
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
    { val: "Sleep", complete: true },
    { val: "Eat", complete: false },
    { val: "Bathe", complete: true },
    { val: "Exercise", complete: false },
    { val: "Watch Movie", complete: false },
  ]);
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <FilterButton name={"All"} />
        <FilterButton name={"Active"} />
        <FilterButton name={"Completed"} />
      </div>
      <h2 id="list-heading">{getNumTasksRemaining(todos)} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todos &&
          todos.map((todo, index) => (
            <ToDoItem key={index} name={todo.val} complete={todo.complete} />
          ))}
      </ul>
    </div>
  );
}

export default App;
