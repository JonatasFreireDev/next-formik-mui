import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { AddTabFormAction } from "../../flux/actions";
import { FormContext } from "./Form";
import { checkParentProps } from "../../helper";

export const Tab = memo(function Tab(props) {
  const { tabName } = props;
  const [path, setPath] = useState([]);
  const ref = useRef(null);
  const { dispatch } = useContext(FormContext);

  useEffect(() => {
    if (ref.current) {
      const path = checkParentProps(ref.current, "data-tab-name");
      dispatch(AddTabFormAction({ path }));
      setPath(path);
    }
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
