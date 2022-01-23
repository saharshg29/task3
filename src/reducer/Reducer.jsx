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

    case READ_TASK:
      let arr = state.todo.filter((task) => task.id == action.payload);
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        task: arr,
      };

    case UPDATE_TASK: {
      return {
        ...state,
        todo: state.todo.map((task) =>
          task.id == action.payload.id ? action.payload : task
        ),
      };
    }
    default:
      return state;
  }
}
