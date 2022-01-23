import { CREATE_TASK, READ_TASK, UPDATE_TASK, DELETE_TASK } from "../constants";

export const Add = (Task) => ({
  type: CREATE_TASK,
  payload: Task,
});

export const Get = (id) => ({
  type: READ_TASK,
  payload: id,
});

export const Edit = (Task) => ({
  type: UPDATE_TASK,
  payload: Task,
});
