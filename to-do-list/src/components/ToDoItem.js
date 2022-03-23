import React from "react";

const EditingTemplate = (props) => {
  return (
    <form className="stack-small" onSubmit={props.editTodo(props.id)}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name} :
        </label>
        <input id={props.id} className="todo-text" type="text" />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel">
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
};

const ViewingTemplate = ({
  deleteTodo,
  toggleEditingMode,
  toggleTaskCompleted,
  id,
  name,
  complete = false,
}) => {
  return (
    <div>
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
        <button
          type="button"
          className="btn"
          onClick={() => toggleEditingMode(id)}
        >
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
    </div>
  );
};

const ToDoItem = (props) => {
  return (
    <li className="todo">
      {props.isEditing ? (
        <EditingTemplate {...props} />
      ) : (
        <ViewingTemplate {...props} />
      )}
    </li>
  );
};

export default ToDoItem;
