import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { InputField } from "../formField/InputField";
import { SelectField } from "../formField/SelectField";

const productSchema = yup.object().shape({
  email: yup.string().required("Please enter user's email"),
  role: yup
    .string()
    .oneOf(["Customer", "Admin", "Sale"])
    .required("Please enter user's role"),
});

const FormUser = () => {
  // init hook form
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({ mode: "onBlur", resolver: yupResolver(productSchema) });

  const handlerFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handlerFormSubmit)}>
      {/* User Email */}
      <FormControl fullWidth>
        <FormLabel>User Email</FormLabel>
        <InputField
          disabled
          control={control}
          name="email"
          placeholder="User Email"
        />
      </FormControl>

      {/* User Role */}
      <FormControl fullWidth>
        <FormLabel>Role</FormLabel>
        <SelectField
          control={control}
          name="role"
          options={[
            { label: "Customer", value: "Customer" },
            { label: "Admin", value: "Admin" },
            { label: "Sale", value: "Sale" },
          ]}
        />
      </FormControl>

      <Button disabled={isSubmitting} type="submit">
        {isSubmitting && <CircularProgress />}
        Add New User
      </Button>
    </Box>
  );
};

export default FormUser;
