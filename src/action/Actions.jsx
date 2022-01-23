import {
    CREATE_TASK,
    READ_TASK,
    UPDATE_TASK,
    DELETE_TASK,
  } from "../constants";
  
export const Add = (Task) => ({
  type: CREATE_TASK,
  payload: Task,
});
