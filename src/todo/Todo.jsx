import "./style.css";
import { FaTrash, FaCheck, FaRedo } from "react-icons/fa";
const Todo = ({ todo, onDeleteHandler, onEditHandler }) => {
  return (
    <div className="todo-container">
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.desc}</p>
      </div>
      <div className="button-container">
        <button
          className=" button-todo delete"
          onClick={() => onDeleteHandler(todo.id)}>
          <FaTrash size="20" />
        </button>
        {/* 상태에 따른 텍스트 구분 */}
        <button
          className="button-todo complete"
          onClick={() => onEditHandler(todo.id)}>
          {todo.isDone ? <FaRedo size="20" /> : <FaCheck size="20" />}
        </button>
      </div>
    </div>
  );
};

export default Todo;
