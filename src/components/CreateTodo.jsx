import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../store/module/todo";

export default function AddTodo() {
  const dispatch = useDispatch();
  const nextID = useSelector((state) => state.todo.nextID);
  const todoRefs = useRef([]);

  const handleAddTodo = () => {
    const todoText = todoRefs.current[nextID].value;

    dispatch(create({ id: nextID, text: todoText }));
    todoRefs.current[nextID].value = "";
  };

  return (
    <div className="inputContainer">
      <input
        type="text"
        className="input"
        placeholder="What are your tasks for today?"
        ref={(el) => (todoRefs.current[nextID] = el)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleAddTodo();
          }
        }}
      />
      <button onClick={handleAddTodo} id="addBtn">추가하기</button>
    </div>
  );
}
