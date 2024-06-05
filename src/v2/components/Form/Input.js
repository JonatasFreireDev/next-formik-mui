import { memo, useCallback, useContext, useMemo } from "react";
import { FormContext } from "./Form";
import { UpdateFormAction } from "../../flux/actions";
import { getValueByPath } from "../../helper";

export const Input = memo(function Input({ name, path, ...rest }) {
  const { state, dispatch } = useContext(FormContext);

  const value = useMemo(() => {
    const nestedObject = getValueByPath(state, path);
    return nestedObject ? nestedObject[name] : undefined;
  }, [name, path, state]);

  const handleBlur = useCallback(
    (e) => {
      dispatch(
        UpdateFormAction({
          path,
          fieldName: name,
          value: e.target.value,
        })
      );
    },
    [dispatch, path, name]
  );

  return <input value={value} onBlur={handleBlur} {...rest} />;
});
