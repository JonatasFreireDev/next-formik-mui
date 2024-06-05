import { createNestedObjectState, updateNestedObject } from "../helper";
import { ADD_TAB_ACTION, UPDATE_ACTION } from "./actions.names";

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TAB_ACTION:
      if (!payload.path.length) return state;
      return createNestedObjectState(payload.path, state);
    case UPDATE_ACTION:
      return updateNestedObject(
        state,
        payload.path,
        payload.fieldName,
        "value",
        payload.value
      );
    default:
      return state;
  }
};
