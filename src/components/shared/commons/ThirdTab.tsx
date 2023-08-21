import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";

const ThirdTab = () => {
  const [value, setValue] = useState<number>(0);
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("🚀 ~ file: thirdtab.tsx:6 ~ FirstTab ~ value:", value);
  };
  return (
    <Container>
      <Stack margin={1}>
        <Typography variant="h5">Third Tab</Typography>
        <form onSubmit={handleOnSubmit}>
          <Stack direction={"column"} width={300} marginTop={2}>
            <TextField
              variant="outlined"
              type="number"
              required
              placeholder="Enter integer"
              value={value || 0}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={({ target: { value } }) => setValue(parseInt(value))}
            />
          </Stack>
          <Stack marginTop={1} direction={"row"}>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};

export default ThirdTab;
