import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { undo, remove } from "../store/module/todo";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  const todoList = list.filter((todo) => todo.done);
  const dispatch = useDispatch();
  return (
    <div className="DoneList">
      <h2>오늘 할 일</h2>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => {
                  dispatch(undo(todo.id));
                }}
              />
              <span>{todo.text}</span>
              <button
                onClick={() => {
                  dispatch(undo(todo.id));
                }}
              >
                다시하기
              </button>
              <button
                onClick={() => {
                  dispatch(remove(todo.id));
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
