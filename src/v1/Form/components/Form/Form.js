import React, { useMemo, useState } from "react";
import { TabHeader } from "../Tabs/TabHeader";
import { Box } from "@mui/material";

export const Form = ({ formikProps, children }) => {
  const stateTab = useState(0);

  const [tabs, labels] = useMemo(() => {
    return React.Children.toArray(children)
      .filter(React.isValidElement)
      .reduce(
        (acc, child) => {
          acc[0].push(child.props.name);
          acc[1].push(child.props.label ?? child.props.name);

          return acc;
        },
        [[], []]
      );
  }, [children]);

  return (
    <Box sx={{ width: "100%" }}>
      <TabHeader
        tabs={tabs}
        labels={labels}
        stateTab={stateTab}
        formikProps={formikProps}
      />
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
