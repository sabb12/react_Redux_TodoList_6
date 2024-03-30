const initialState = {
  list: [],
};

const CREATE = "todo/CREATE";
const DONE = "todo/DONE";
const UNDO = "todo/UNDO";
const REMOVE = "todo/REMOVE";
const UPDATE = "todo/UPDATE";

// const CHECKED = "todo/CHECKED";
// const UNCHECKED = "todo/UNCHECKED";

let count = initialState.list.length;
initialState["nextID"] = count;

export const create = (payload) => ({ type: CREATE, payload });
export const done = (id) => ({ type: DONE, id });
export const undo = (id) => ({ type: UNDO, id });
export const remove = (id) => ({ type: REMOVE, id });
export const update = (id, payload) => ({ type: UPDATE, id, payload });

// export const checked = (id) => ({ type: CHECKED, id });
// export const unchecked = (id) => ({ type: UNCHECKED, id });

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      if (action.payload.text.trim() === "") return state;
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((li) => {
          if (li.id === action.id) {
            return {
              ...li,
              done: true,
            };
          } else {
            return li;
          }
        }),
      };
    case UNDO:
      return {
        ...state,
        list: state.list.map((li) => {
          if (li.id === action.id) {
            return {
              ...li,
              done: false,
            };
          } else {
            return li;
          }
        }),
      };
    case UPDATE:
      return {
        ...state,
        list: state.list.map((li) => {
          if (li.id === action.id) {
            return {
              ...li,
              text: action.payload.text,
            };
          } else {
            return li;
          }
        }),
      };
    case REMOVE:
      return {
        ...state,
        list: state.list.filter((li) => li.id !== action.id),
      };
    default:
      return state;
  }
}
