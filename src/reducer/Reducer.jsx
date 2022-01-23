import {
  initialState,
  CREATE_TASK,
  READ_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "../constants";

export function Reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TASK: {
      console.log("add reducer", action.payload);
      return { ...state, todo: [action.payload, ...state.todo] };
    }

    default:
      return state;
  }
}
