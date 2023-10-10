import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

export function SelectField({
  name,
  control,
  label,
  disabled,
  options,
  ...selectProps
}) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <FormControl
      fullWidth
      margin="normal"
      size="small"
      disabled={disabled}
      error={invalid}
    >
      <FormLabel id={`${name}_label`}>{label}</FormLabel>
      {
        <Select
          labelId={`${name}_label`}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          label={label}
          placeholder="Select your option"
          defaultValue={value}
          {...selectProps}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      }

      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
SelectField.propTypes = {
  name: PropTypes.any,
  control: PropTypes.any,
  label: PropTypes.any,
  disabled: PropTypes.any,
  options: PropTypes.any,
};
