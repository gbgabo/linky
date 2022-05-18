import React, { ReactElement } from "react";
import { Box, Typography } from "@material-ui/core";
import { Tab } from "@material-ui/core";

interface TabPanelProps {
  children: ReactElement<typeof Tab> | ReactElement<typeof Tab>[];
  value: number;
  index: number;
}

function TabPanel({
  children,
  value,
  index,
  ...other
}: TabPanelProps): ReactElement {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
