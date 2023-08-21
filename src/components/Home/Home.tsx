import { Container } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SyntheticEvent, useState } from "react";
import FirstTab from "../shared/commons/FirstTab";
import SecondTab from "../shared/commons/SecondTab";
import ThirdTab from "../shared/commons/ThirdTab";

const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

type Content = {
  [key: number]: JSX.Element
}

const Home = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const content: Content = {
    0: <FirstTab />,
    1: <SecondTab />,
    2: <ThirdTab />
  }

  return (
    <main>
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="First Tab" {...a11yProps(0)} />
          <Tab label="Second Tab" {...a11yProps(1)} />
          <Tab label="Third Tab" {...a11yProps(2)} />
        </Tabs>
        {content[value]}
      </Container>
    </main>
  );
};

export default Home;
