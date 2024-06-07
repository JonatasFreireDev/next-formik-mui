import { memo, useCallback } from "react";

import { Box, Tabs, Tab, Badge } from "@mui/material";

export const TabHeader = memo(({ tabs, labels, stateTab, formikProps }) => {
  const [currentTab, setCurrentTab] = stateTab;

  const countErrorsInEachTab = useCallback(
    (tabLabel) => {
      if (!formikProps?.errors[tabLabel]) return;
      return Object.values(formikProps?.errors[tabLabel]).length;
    },
    [formikProps?.errors]
  );

  const handleChangeTab = useCallback(
    (_, newValue) => setCurrentTab(newValue),
    [setCurrentTab]
  );

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={currentTab}
        onChange={handleChangeTab}
        aria-label="basic tabs example"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            id={`simple-tab-${tab}`}
            aria-controls={`simple-tabpanel-${tab}`}
            label={
              <>
                <div>{labels[index]}</div>
                <Badge
                  badgeContent={countErrorsInEachTab(tab)}
                  color="error"
                  style={{
                    position: "absolute",
                    marginTop: "-20px",
                    marginLeft: "70px",
                  }}
                ></Badge>
              </>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
});

TabHeader.displayName = "TabHeader";
