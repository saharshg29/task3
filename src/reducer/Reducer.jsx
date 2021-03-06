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
      console.log('edit reducer',action.payload)
      return {
        ...state,
        todo: state.todo.map((task) =>
          task.id == action.payload.id ? action.payload : task
        ),
      };
    }

    case DELETE_TASK :
      console.log("Delete is getting called", action);
      return {
        ...state,
        todo: state.todo.filter(
          (task) => task.id != action.payload
        )
      }


    default:
      return state;
  }
}
