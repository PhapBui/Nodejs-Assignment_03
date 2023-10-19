import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../formField/inputField";

const SignupSchema = yup.object().shape({
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "minium passwork must be 8"),

  email: yup
    .string()
    .required("Please enter your password")
    .email("Please enter a valid email"),
});

function FormLogin({ handlerFormSubmit, loading }) {
  // init react-hook-form
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(SignupSchema),
  });

  //send data from form to login page
  const onSubmit = (data) => {
    handlerFormSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form__login">
      <h1 className="page-title">Sign In</h1>

      <InputField
        placeholder="Email"
        type="email"
        name="email"
        control={control}
        className="form-control"
      />

      <InputField
        placeholder="Password"
        className="form-control"
        type="password"
        name="password"
        control={control}
        autoComplete="username"
      />

      <Button variant="contained" type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Sign In"}
      </Button>
    </form>
  );
}

FormLogin.propTypes = {
  handlerFormSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default FormLogin;
