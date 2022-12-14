import "./style.css";
import { useState } from "react";

let number = 3;

function Form({ setTodos, todos }) {
  const initialState = { id: 0, title: "", content: "", isDone: false };

  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.content.trim() === "") return;
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
          name="content"
          type="text"
          className="add-input"
          value={todo.content}
          onChange={onChangeHandler}
          required
        />
      </div>

      <button className="add-button">저장하기</button>
    </form>
  );
}

export default Form;
