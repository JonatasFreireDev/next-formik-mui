import { ADD_TAB_ACTION, UPDATE_ACTION } from "./actions.names";

export const UpdateFormAction = (payload) => ({
  type: UPDATE_ACTION,
  payload: payload,
});

export const AddTabFormAction = (payload) => ({
  type: ADD_TAB_ACTION,
  payload: payload,
});
