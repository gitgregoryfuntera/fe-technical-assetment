import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { FormEvent, useReducer } from "react";

export type ProductFormValue = {
  title: string;
  description: string;
  imageUrl: string;
};

interface ProductFormProps {
  handleOnSave: (props: ProductFormValue) => void;
  productFormValue: ProductFormValue;
}

const ProductForm = (props: ProductFormProps) => {
  const { productFormValue, handleOnSave } = props;

  const [formValue, setFormValue] = useReducer(
    (current: ProductFormValue, next: Partial<ProductFormValue>) => ({
      ...current,
      ...next,
    }),
    productFormValue
  );

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleOnSave(formValue);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Stack spacing={3} marginTop={2}>
        <FormControl>
          <label>
            <Typography>Title*</Typography>
          </label>
          <Input
            required
            type="text"
            placeholder="Type product title here..."
            onChange={({ target: { value } }) =>
              setFormValue({
                title: value,
              })
            }
            value={formValue.title || ""}
          />
        </FormControl>
        <FormControl>
          <label>
            <Typography>Description*</Typography>
          </label>
          <Input
            type="text"
            required
            placeholder="Type product description here..."
            multiline
            minRows={3}
            onChange={({ target: { value } }) =>
              setFormValue({
                description: value,
              })
            }
            value={formValue.description || ""}
          />
        </FormControl>
        <FormControl>
          <label>
            <Typography>Image URL</Typography>
          </label>
          <Input
            type="text"
            placeholder="Add image URL here..."
            value={formValue.imageUrl || ""}
            onChange={({ target: { value } }) =>
              setFormValue({
                imageUrl: value,
              })
            }
          />
        </FormControl>
      </Stack>
      <Box sx={{ marginTop: 2 }}>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default ProductForm;
