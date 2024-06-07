import React, { useMemo, memo } from "react";
import Box from "@mui/material/Box";

export const Tab = memo(({ name, stateTab, tabs, children }) => {
  const [currentTab] = stateTab;

  const index = useMemo(
    () => tabs.findIndex((tab) => name === tab),
    [name, tabs]
  );

  return (
    <div
      role="tabpanel"
      hidden={currentTab !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {currentTab === index && (
        <Box sx={{ p: 3 }}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                tabname: name,
              });
            }
            return child;
          })}
        </Box>
      )}
    </div>
  );
});

Tab.displayName = "Tab";
