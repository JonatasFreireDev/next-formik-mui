import React, { useMemo, useState } from "react";
import { TabHeader } from "../Tabs/TabHeader";
import { Box } from "@mui/material";

export const Form = ({ formikProps, children }) => {
  const stateTab = useState(0);

  const tabs = useMemo(() => {
    return React.Children.toArray(children)
      .filter(React.isValidElement)
      .map((child) => child.props.name);
  }, [children]);

  return (
    <Box sx={{ width: "100%" }}>
      <TabHeader tabs={tabs} stateTab={stateTab} formikProps={formikProps} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            formikProps,
            tabs,
            stateTab,
          });
        }
        return child;
      })}
      <button type="submit" disabled={formikProps.isSubmitting}>
        submit
      </button>
    </Box>
  );
};
