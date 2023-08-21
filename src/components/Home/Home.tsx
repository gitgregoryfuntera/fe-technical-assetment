import { Container, Stack } from "@mui/material";
import ProductCard from "../shared/commons/ProductCard";

const Home = () => {
  return (
    <main>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          marginTop={2}
          marginBottom={2}
          flexWrap={"wrap"}
          columnGap={2}
          rowGap={2}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Stack>
      </Container>
    </main>
  );
};

export default Home;
