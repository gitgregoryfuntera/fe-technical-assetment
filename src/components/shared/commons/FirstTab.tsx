import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";

const FirstTab = () => {
  const [value, setValue] = useState<number>(0);
 

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("🚀 ~ file: FirstTab.tsx:6 ~ FirstTab ~ value:", value);
  }
  
  return (
    <Container>
      <Stack margin={1}>
        <Typography variant="h5">First Tab</Typography>
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

export default FirstTab;
