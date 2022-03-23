import React from "react";

const ToDoItem = ({ key, name, complete = false }) => {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id={key} type="checkbox" defaultChecked={complete} />
        <label className="todo-label" htmlFor={key}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
