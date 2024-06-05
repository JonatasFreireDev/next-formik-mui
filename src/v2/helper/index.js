// Função utilitária para atualização profunda (deep update) de objetos
export const updateNestedObject = (
  obj,
  pathArray,
  fieldName,
  fieldType,
  value
) => {
  const fullPathArray = [...pathArray, fieldName, fieldType];

  const update = (object, keys, val) => {
    if (!keys.length) return val;
    const [first, ...rest] = keys;
    return {
      ...object,
      [first]: update(object[first] || {}, rest, val),
    };
  };

  return update(obj, fullPathArray, value);
};

export const createNestedObjectState = (namesArray = [], currentState) => {
  if (!namesArray.length) return currentState;

  const [first, ...rest] = namesArray;
  return {
    ...currentState,
    [first]: createNestedObjectState(rest, currentState[first] || {}),
  };
};

export const checkParentProps = (element, prop) => {
  const path = [];

  while (element && element.attributes && element.attributes[prop]) {
    path.unshift(element.attributes[prop].value);
    element = element.parentElement;
  }
  return path;
};

// Função utilitária para acessar um valor aninhado
export const getValueByPath = (obj, pathArray, fieldName, fieldType) => {
  const fullPathArray = [...pathArray, fieldName, fieldType];
  return fullPathArray.reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : undefined;
  }, obj);
};
