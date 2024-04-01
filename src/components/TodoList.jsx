import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { create, done, remove, update } from "../store/module/todo";

export default function TodoList() {
  const list = useSelector((state) => state.todo.list);
  const todoList = list.filter((todo) => !todo.done);
  const dispatch = useDispatch();
  const todoRefs = useRef([]);

  const nextID = useSelector((state) => state.todo.nextID);

  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingText, setEditingText] = useState("");

  return (
    <section className="TodoList">
      <h2>오늘 할 일</h2>
      <div>
        <input
          type="text"
          placeholder="Todo"
          ref={(el) => (todoRefs.current[nextID] = el)}
        />
        <button
          onClick={() => {
            dispatch(
              create({ id: nextID, text: todoRefs.current[nextID].value })
            );
            todoRefs.current[nextID].value = "";
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
              {editingTodoId === todo.id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <span>{todo.text}</span>
              )}
              {editingTodoId !== todo.id ? (
                <button
                  onClick={() => {
                    setEditingTodoId(todo.id);
                    setEditingText(todo.text);
                  }}
                >
                  수정
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(update(todo.id, { text: editingText }));
                    setEditingTodoId(null);
                  }}
                >
                  확인
                </button>
              )}
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
            </li>
          );
        })}
      </ul>
    </section>
  );
}
