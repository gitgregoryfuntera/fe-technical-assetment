import {
  Container,
} from "@mui/material";
import ProductForm, { ProductFormValue } from "../shared/commons/ProductForm";

const EditProduct = () => {
  const initialForm = {
    title: "",
    description: "",
    imageUrl: "123",
  };

  const handleOnSave = (productFormValue: ProductFormValue) => {
    console.log(
      "🚀 ~ file: EditProduct.tsx:10 ~ handleOnSave ~ productFormValue:",
      productFormValue
    );
  };
  return (
    <main>
      <Container>
        <ProductForm
          productFormValue={initialForm}
          handleOnSave={handleOnSave}
        />
      </Container>
    </main>
  );
};

export default EditProduct;
