import {
  Button,
  FormControl,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { FormEvent, useReducer } from "react";

export type LoginFormValue = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const initialLoginFormValue = {
    email: "",
    password: "",
  };
  const [loginForm, setLoginForm] = useReducer(
    (current: LoginFormValue, next: Partial<LoginFormValue>) => ({
      ...current,
      ...next,
    }),
    initialLoginFormValue
  );

  const handleOnLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginForm);
  };

  return (
    <Stack width={350}>
      <Typography variant="h5">Login</Typography>
      <form onSubmit={handleOnLogin}>
        <Stack spacing={3} marginTop={2}>
          <FormControl>
            <label>
              <Typography>Email*</Typography>
            </label>
            <Input
              required
              type="email"
              placeholder="Email"
              onChange={({ target: { value } }) =>
                setLoginForm({
                  email: value,
                })
              }
              value={loginForm.email || ""}
            />
          </FormControl>
          <FormControl>
            <label>
              <Typography>Password*</Typography>
            </label>
            <Input
              type="password"
              required
              placeholder="Password"
              onChange={({ target: { value } }) =>
                setLoginForm({
                  password: value,
                })
              }
              value={loginForm.password || ""}
            />
          </FormControl>
        </Stack>
        <Stack marginTop={2} flexDirection={"row"} columnGap={2}>
          <Button color="primary" type="submit">
            Login
          </Button>
          <Button color="secondary" type="button">
            Login using Google
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default LoginForm;
