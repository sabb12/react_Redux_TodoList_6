import { useSelector, useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { isChecked, remove, update } from "../store/module/todo";

export default function TodoList() {
  const list = useSelector((state) => state.todo.list);
  const todoList = list.filter((todo) => !todo.isChecked);
  const dispatch = useDispatch();

  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (editingTodoId !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingTodoId]);

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
            {editingTodoId === todo.id ? (
              <input
                type="text"
                className="todo"
                value={editingText}
                ref={inputRef}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <input
                type="text"
                className="todo"
                value={todo.text}
                disabled
              />
            )}
            {!todo.isChecked && (
            <button
              className="updateButton"
              onClick={() => {
                if (editingTodoId === todo.id) {
                  dispatch(update(todo.id, { text: editingText }));  // Fixed here
                  setEditingTodoId(null);
                } else {
                  setEditingTodoId(todo.id);
                  setEditingText(todo.text);
                }
              }}
              >
              {editingTodoId === todo.id ? "저장" : "수정"}
            </button>
            )}
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
