import { Button, FormControl, Input, Stack, Typography } from "@mui/material";
import { FormEvent, useReducer } from "react";

export type RegisterFormValue = {
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const initialRegisterFormValue = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [registerForm, setRegisterForm] = useReducer(
    (current: RegisterFormValue, next: Partial<RegisterFormValue>) => ({
      ...current,
      ...next,
    }),
    initialRegisterFormValue
  );

  const handleOnRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerForm);
  };

  return (
    <Stack width={350}>
      <Typography variant="h5">Register</Typography>
      <form onSubmit={handleOnRegister}>
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
                setRegisterForm({
                  email: value,
                })
              }
              value={registerForm.email || ""}
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
                setRegisterForm({
                  password: value,
                })
              }
              value={registerForm.password || ""}
            />
          </FormControl>
          <FormControl>
            <label>
              <Typography>Confirm Password*</Typography>
            </label>
            <Input
              type="password"
              required
              placeholder="Password"
              onChange={({ target: { value } }) =>
                setRegisterForm({
                  confirmPassword: value,
                })
              }
              value={registerForm.confirmPassword || ""}
            />
          </FormControl>
        </Stack>
        <Stack marginTop={2} flexDirection={"row"} columnGap={2}>
          <Button color="primary" type="submit">
            Register
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default RegisterForm;
