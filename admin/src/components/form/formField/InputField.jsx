import { TextField } from "@mui/material";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

export function InputField({ name, control, label, ...inputProps }) {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      {...field}
      label={label}
      error={invalid}
      helperText={error?.message}
      {...inputProps}
    />
  );
}
InputField.propTypes = {
  name: PropTypes.any,
  control: PropTypes.any,
  label: PropTypes.any,
};
