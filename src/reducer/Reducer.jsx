import {
  initialState,
  CREATE_TASK,
  READ_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "../constants";

export function Reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TASK:
      return { ...state };
    // case UPDATE_TASK:
    //     return { ...state,  };
    case READ_TASK:
      return { ...state };
    // case DELETE_TASK:
    //     return { ...state, ...payload };
    default:
      return state;
  }
}
