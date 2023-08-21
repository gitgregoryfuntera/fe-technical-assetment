import { Container, Stack } from "@mui/material";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export type LoginFormValue = {
  email: string;
  password: string;
};

const Login = () => {
  return (
    <main>
      <Container>
        <Stack
          marginTop={2}
          direction={{ xs: "column", sm: "row" }}
          columnGap={10}
          rowGap={3}
          justifyContent={"center"}
        >
          <LoginForm />
          <RegisterForm />
        </Stack>
      </Container>
    </main>
  );
};

export default Login;
