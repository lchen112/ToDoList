import React from "react";

const ToDoItem = ({
  deleteTodo,
  editTodo,
  toggleTaskCompleted,
  id,
  name,
  complete = false,
}) => {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={complete}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => editTodo(id)}>
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTodo(id)}
        >
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
