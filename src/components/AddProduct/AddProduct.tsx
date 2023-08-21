import { Container } from "@mui/material";
import ProductForm from "../shared/commons/ProductForm";

const AddProduct = () => {
  const initialForm = {
    title: "",
    description: "",
    imageUrl: "",
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

export default AddProduct;
