import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SyntheticEvent, useState } from "react";
import TabContent from "../shared/commons/TabContent";
import { getMethod } from "../../utils/axiosHelper";
import { API_ENDPOINT } from "../../utils/endpoints";
import useSWR from 'swr'

export const SUM_BASE_ENDPOINT = `${import.meta.env.VITE_FIREBASE_ENDPOINT_FUNCTION}/${API_ENDPOINT.SUM}`

type Content = {
  [key: number]: JSX.Element;
};

const Home = () => {
  const [value, setValue] = useState<number>(0);

  const { data: response } = useSWR(SUM_BASE_ENDPOINT, getMethod)

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const content: Content = {
    0: <TabContent tabKey="firstTab" />,
    1: <TabContent tabKey="secondTab" />,
    2: <TabContent tabKey="thirdTab" />,
  };

  return (
    <main>
      <Container maxWidth={'sm'}>
        <Stack margin={2}>
          <Typography variant="h6">SUM VALUE: {response?.data?.sum}</Typography>
        </Stack>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="First Tab" />
          <Tab label="Second Tab" />
          <Tab label="Third Tab" />
        </Tabs>
        {content[value]}
      </Container>
    </main>
  );
};

export default Home;
