import { useSelector, useDispatch } from "react-redux";
import { isChecked, remove } from "../store/module/todo";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  const todoList = list.filter((todo) => todo.isChecked);
  const dispatch = useDispatch();

  return (
    <>
      {todoList.map((todo) => (
        <div className="todoContainer" key={todo.id} data-id={todo.id}>
          <div className="todoSection1">
            <input
              type="checkbox"
              className="checkbox"
              checked={todo.isChecked}
              onChange={() => {
                dispatch(isChecked(todo.id));
              }}
            />
          </div>
          <div className="todoSection2">
            <input
              type="text"
              className="todo"
              value={todo.text}
              disabled
            />
            <button
              className="deleteButton"
              onClick={() => {
                dispatch(remove(todo.id));
              }}
            >
              삭제
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
