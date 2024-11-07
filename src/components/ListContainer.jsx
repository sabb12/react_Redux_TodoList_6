import CreateTodo from "./CreateTodo";
import DoneList from "./DoneList";
import TodoList from "./TodoList";

export default function ListContainer() {
  return (
    <div className="container">
      <div className="inputContainer">
        <CreateTodo />
      </div>
      <div className="todoListContainer">
        <div className="todoList">
          <div className="todoTitle">TO DO LIST</div>
          <div className="todoContent">
            <TodoList />
          </div>
        </div>
        <div className="doneList">
          <div className="doneTitle">DONE LIST</div>
          <div className="doneContent">
            <DoneList />
          </div>
        </div>
      </div>
    </div>
  );
} 
