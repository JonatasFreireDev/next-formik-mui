import { createContext, useReducer } from "react";
import { reducer } from "../../flux/reducers";
import { Tab } from "./Tab";
import { Input } from "./Input";

export const FormContext = createContext();

export const Form = (props) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {props.children(state, dispatch)}
    </FormContext.Provider>
  );
};

Form.Tab = Tab;
Form.Input = Input;
