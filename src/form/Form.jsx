import "./style.css";
import { useState } from "react";
import { FaSave } from "react-icons/fa";
let number = 3;
function Form({ setTodos, todos }) {
  const initialState = { id: 0, title: "", desc: "", isDone: false };

  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.desc.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          name="title"
          type="text"
          className="add-input"
          value={todo.title}
          onChange={onChangeHandler}
          required
        />
        <label className="form-label">내용</label>
        <input
          name="desc"
          type="text"
          className="add-input"
          value={todo.desc}
          onChange={onChangeHandler}
          required
        />
      </div>

      <button className="add-button">
        <FaSave color="#0e63da" size="24" />
      </button>
    </form>
  );
}

export default Form;
