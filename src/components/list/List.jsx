import Todo from "../todo/Todo";
import "./style.css";
import { FaRegCheckSquare, FaTasks } from "react-icons/fa";

function List({ todos, setTodos }) {
  //delet todo
  const onDeleteHandler = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };

  //change todo state
  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="list-container">
      <div className="list-box">
        <h2 className="list-header">
          <FaTasks size="32" /> Working
        </h2>
        <div className="todo-box">
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todo
                  todo={todo}
                  key={todo.id}
                  setTodos={setTodos}
                  onDeleteHandler={onDeleteHandler}
                  onEditHandler={onEditHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div className="list-box">
        <h2 className="list-header" style={{ color: "green" }}>
          <FaRegCheckSquare color="#008000" size="32" /> Done
        </h2>
        <div className="todo-box">
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <Todo
                  todo={todo}
                  key={todo.id}
                  setTodos={setTodos}
                  onDeleteHandler={onDeleteHandler}
                  onEditHandler={onEditHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
