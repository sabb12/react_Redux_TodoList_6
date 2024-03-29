const initialState = {
  list: [],
};

const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

let count = initialState.list.length;
initialState["nextID"] = count;

export const create = (payload) => ({ type: CREATE, payload });
export const done = (id) => ({ type: DONE, id });

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
    default:
      return state;
  }
}
