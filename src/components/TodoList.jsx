import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { create, done } from "../store/module/todo";

export default function TodoList() {
  //   const list = useSelector((state) => state.todo.list);
  //   console.log(list);
  return (
    <div className="TodoList">
      <h2>오늘 할 일</h2>
    </div>
  );
}
