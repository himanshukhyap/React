import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CategoryPageComponent from "../../Components/CategoryPageComponent/CategoryPageComponent";
import "./CategoryPage.css";
import TopicPageCardLeft from "../../Components/Carts/TopicPageCard/TopicPageCardLeft";
import Singlecoursecategory from "../../Components/CategoryPageComponent/Singlecoursecategory/Singlecoursecategory";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="CategoryPageTabPannel"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="CategoryPageBOX" p={3}>
          <Typography className="CategoryPageTypography">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 500,
    padding: "15px",
    width: "100%",
    margin: "auto"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    overflow: "initial"
  }
}));

export default function CategoryPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        // className="CategoryPAgeTabs"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label=<TopicPageCardLeft /> {...a11yProps(0)} />
        <Tab label=<TopicPageCardLeft /> {...a11yProps(1)} />
        <Tab label=<TopicPageCardLeft /> {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(7)} />
        <Tab label="Item Five" {...a11yProps(8)} />
        <Tab label="Item Six" {...a11yProps(9)} />
        <Tab label="Item Seven" {...a11yProps(10)} />
        <Tab label="Item Seven" {...a11yProps(11)} />
        <Tab label="Item Six" {...a11yProps(12)} />
        <Tab label="Item Seven" {...a11yProps(13)} />
        <Tab label="Item Seven" {...a11yProps(14)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h2 className="text-center align-middle">Topic</h2>
        <CategoryPageComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 className="text-center align-middle">Topic 2</h2>
        <Singlecoursecategory />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
