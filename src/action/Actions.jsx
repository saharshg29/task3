import {
    CREATE_TASK,
    READ_TASK,
    UPDATE_TASK,
    DELETE_TASK,
  } from "../constants";
  
export const getTask = (id) => ({
  type: Read,
  payload: id,
});
