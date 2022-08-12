import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [todoList, setList] = useState([
    { id: 1, title: "react를 배워봅시다!" },
  ]);

  return (
    <div className="App">
      <div className="NewTodo">
        <input
          placeholder={"새로운 할 일을 입력햇!"}
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          onClick={() =>
            setList([...todoList, { id: todoList.length + 1, title: title }])
          }>
          추가하기
        </button>
      </div>
      <h2>Todo List</h2>
      <div className="TodoList">
        {todoList.map((todo) => (
          <div className="Todo" key={todo.id}>
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
