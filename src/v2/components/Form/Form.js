import React, {
  createContext,
  memo,
  useCallback,
  useEffect,
  useContext,
  useReducer,
  useRef,
  useState,
} from "react";

export const FormContext = createContext();

const createNestedObjectState = (namesArray, currentState) => {
  if (namesArray.length === 0) return currentState;
  const [first, ...rest] = namesArray;
  return {
    ...currentState,
    [first]: createNestedObjectState(rest, currentState[first] || {}),
  };
};

// Função utilitária para atualização profunda (deep update) de objetos
const updateNestedObject = (obj, pathArray, fieldName, fieldType, value) => {
  const fullPathArray = [...pathArray, fieldName, fieldType];

  const update = (object, keys, val) => {
    if (keys.length === 0) return val;
    const [first, ...rest] = keys;
    return {
      ...object,
      [first]: update(object[first] || {}, rest, val),
    };
  };

  return update(obj, fullPathArray, value);
};

// Função utilitária para acessar um valor aninhado
const getValueByPath = (obj, pathArray, fieldName, fieldType) => {
  const fullPathArray = [...pathArray, fieldName, fieldType];
  return fullPathArray.reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : undefined;
  }, obj);
};

export const Form = (props) => {
  const reducer = useCallback((state, action) => {
    // console.log({ state, action });
    const { type, payload } = action;

    switch (type) {
      case "addTab":
        if (payload.length === 0) return state;
        return createNestedObjectState(payload, state);
      case "update":
        reportWebVitals(
          updateNestedObject(
            state,
            payload.path,
            payload.fieldName,
            "value",
            payload.value
          )
        );

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
  }, []);

  const [state, dispatch] = useReducer(reducer, {});

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {props.children(state, dispatch)}
    </FormContext.Provider>
  );
};

const Input = memo(function Input({ name, path, ...rest }) {
  const { state, dispatch } = useContext(FormContext);

  const getNestedValue = (state, path, name) => {
    const nestedObject = getValueByPath(state, path);
    return nestedObject ? nestedObject[name] : undefined;
  };

  return (
    <input
      value={getNestedValue(state, path, name) || undefined}
      onBlur={(e) =>
        dispatch({
          type: "update",
          payload: {
            path,
            fieldName: name,
            value: e.target.value,
          },
        })
      }
      {...rest}
    />
  );
});

const checkParentProps = (element, prop) => {
  const path = [];
  let hasNewElement = true;

  while (hasNewElement) {
    if (element.attributes[prop] !== undefined) {
      path.unshift(element.attributes[prop]?.value);
    }
    element = element.parentElement; // Subir para o elemento pai

    if (!element.parentElement) hasNewElement = false;
  }

  return path;
};

const Tab = memo(function Tab(props) {
  const ref = useRef(null);
  const { tabName } = props;
  const { dispatch } = useContext(FormContext);
  const [path, setPath] = useState([]);

  useEffect(() => {
    const path = checkParentProps(ref.current, "data-tab-name");

    dispatch({
      type: "addTab",
      payload: path,
    });

    setPath(path);
  }, [dispatch]);

  return (
    <div data-tab-name={tabName} ref={ref}>
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { path });
        }
        return child;
      })}
    </div>
  );
});

Form.Tab = Tab;
Form.Input = Input;
