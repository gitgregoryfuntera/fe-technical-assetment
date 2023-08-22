import { FormEvent, useReducer } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import useSWR, { useSWRConfig } from "swr";
import useSWRMutation from "swr/mutation";
import { getMethod, postMethod } from "../../../utils/axiosHelper";
import { SUM_BASE_ENDPOINT } from "../../Home/Home";
import { API_ENDPOINT } from "../../../utils/endpoints";

const TAB_MAPPER = {
  firstTab: "First Tab",
  secondTab: "Second Tab",
  thirdTab: "Third Tab",
} as const;

type TabKey = keyof typeof TAB_MAPPER;

type TabContentValue = {
  value: number;
  snackbar: {
    open: boolean;
    message: string;
  };
};

interface TabContentProps {
  tabKey: TabKey;
}

const TabContent = (props: TabContentProps) => {
  const { tabKey } = props;

  const TAB_BASE_ENDPOINT = `${
    import.meta.env.VITE_FIREBASE_ENDPOINT_FUNCTION
  }/${API_ENDPOINT.TAB}/${tabKey}`;

  const [tabContentValue, setTabContentValue] = useReducer(
    (current: TabContentValue, next: Partial<TabContentValue>) => ({
      ...current,
      ...next,
    }),
    {
      value: 0,
      snackbar: {
        open: false,
        message: "",
      },
    }
  );

  const { data: response } = useSWR(TAB_BASE_ENDPOINT, getMethod);

  const { mutate } = useSWRConfig();

  const { trigger } = useSWRMutation(TAB_BASE_ENDPOINT, postMethod);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trigger(
      {
        value: tabContentValue.value,
      },
      {
        onSuccess: () => {
          setTabContentValue({
            snackbar: {
              open: true,
              message: `successfully updated value`,
            },
          });
          setTabContentValue({
            value: 0,
          });
          mutate(SUM_BASE_ENDPOINT);
        },
        onError: (error) => {
          setTabContentValue({
            snackbar: {
              open: true,
              message: `${error.response.data.message}`,
            },
          });
        },
      }
    );
  };

  return (
    <Box>
      <Snackbar
        open={tabContentValue.snackbar.open}
        autoHideDuration={6000}
        onClose={() =>
          setTabContentValue({
            snackbar: {
              open: false,
              message: "",
            },
          })
        }
        message={tabContentValue.snackbar.message}
      />
      <Stack margin={2} spacing={2}>
        <Typography variant="h6">{TAB_MAPPER[tabKey]}</Typography>
        <Typography variant="body1">
          Database Value: {response?.data?.value}
        </Typography>
        <form onSubmit={handleOnSubmit}>
          <Stack direction={"column"} width={300} marginTop={2}>
            <TextField
              label="Enter Value"
              variant="outlined"
              type="number"
              required
              placeholder="Enter integer"
              value={tabContentValue.value || 0}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={({ target: { value } }) =>
                setTabContentValue({ value: parseInt(value) })
              }
            />
          </Stack>
          <Stack marginTop={1} direction={"row"}>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default TabContent;
