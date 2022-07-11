import { memo, useState } from "react";
import { Box, Tabs, Tab, Badge } from "@mui/material";

import TabPanel from "./TabPanel";

const BasicTabs = (props) => {
  const { tabs, formikProps } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function countErrorsInEachTab(tabLabel) {
    if (!formikProps?.errors[tabLabel]) return;
    return Object.values(formikProps?.errors[tabLabel]).length;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={
                <>
                  <div>{tab.label}</div>
                  <Badge
                    badgeContent={countErrorsInEachTab(tab.label)}
                    color="error"
                    style={{
                      position: "absolute",
                      marginTop: "-20px",
                      marginLeft: "70px",
                    }}
                  ></Badge>
                </>
              }
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab?.component}
        </TabPanel>
      ))}
    </Box>
  );
};

export default memo(BasicTabs);
