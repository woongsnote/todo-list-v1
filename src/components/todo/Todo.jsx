import "./style.css";

function Todo({ todo, onDeleteHandler, onEditHandler }) {
  return (
    <div className="todo-container">
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
      </div>
      <div className="button-container">
        <button
          className=" button-todo delete"
          onClick={() => onDeleteHandler(todo.id)}>
          삭제하기
        </button>
        {/* 상태에 따른 텍스트 구분 */}
        <button
          className="button-todo complete"
          onClick={() => onEditHandler(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
