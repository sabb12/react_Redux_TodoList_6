import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { create, done, update, remove } from "../store/module/todo";

export default function TodoList() {
  const list = useSelector((state) => state.todo.list);
  const todoList = list.filter((todo) => !todo.done);
  const dispatch = useDispatch();
  const todoRef = useRef();
  const nextID = useSelector((state) => state.todo.nextID);
  console.log("nextID: ", nextID);
  return (
    <section className="TodoList">
      <h2>오늘 할 일</h2>
      <div>
        <input type="text" placeholder="Todo" ref={todoRef} />
        <button
          onClick={() => {
            dispatch(create({ id: nextID, text: todoRef.current.value }));
            todoRef.current.value = "";
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => {
                  dispatch(done(todo.id));
                }}
              />
              <span>{todo.text}</span>
              <button
                onClick={() => {
                  dispatch(done(todo.id));
                }}
              >
                완료
              </button>
              <button
                onClick={() => {
                  dispatch(remove(todo.id));
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  dispatch(update({ id: nextID, text: todoRef.current.value }));
                }}
              >
                수정
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
