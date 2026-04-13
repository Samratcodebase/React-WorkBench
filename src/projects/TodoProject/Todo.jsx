import { useState } from "react";
import "../TodoProject/Todo.css";
const Todo = () => {
  const [Todos, setTodos] = useState([]);
  const [input, setinput] = useState("");
  return (
    <>
      <ul className="todo__list">
        {Todos.map((todo, index) => {
          return (
            <li className="todo__item" key={index}>
              <span className="todo__text">{todo}</span>
              <button
                onClick={() => {
                  setTodos(Todos.filter((_, i) => i !== index));
                }}
                className="todo__delete-btn"
                type="button"
              >
                X
              </button>
            </li>
          );
        })}
      </ul>

      <div className="todo__container">
        <div className="todo__input-group">
          <input
            className="todo__input"
            type="text"
            placeholder="Enter Todo"
            value={input}
            onChange={(e) => {
              setinput(e.target.value);
            }}
          />
          <button
            className="todo__add-btn"
            type="button"
            onClick={() => {
              setTodos(() => {
                return [...Todos, input];
              });
              setinput("");
            }}
          >
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
