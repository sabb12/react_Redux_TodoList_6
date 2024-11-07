const initialState = {
  list: [],
};

const CREATE = "todo/CREATE";
const ISCHECKED = "todo/ISCHECKED";
const REMOVE = "todo/REMOVE";
const UPDATE = "todo/UPDATE";

let count = initialState.list.length;
initialState["nextID"] = count;

export const create = (payload) => ({ type: CREATE, payload });
export const isChecked = (id) => ({ type: ISCHECKED, id });
export const remove = (id) => ({ type: REMOVE, id });
export const update = (id, payload) => ({ type: UPDATE, id, payload });

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      if (action.payload.text.trim() === "") return state;
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          isChecked: false,
        }),
        nextID: action.payload.id + 1,
      };
    case ISCHECKED:
      return {
        ...state,
        list: state.list.map((li) => {
          if (li.id === action.id) {
            return {
              ...li,
              isChecked: !li.isChecked,
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
