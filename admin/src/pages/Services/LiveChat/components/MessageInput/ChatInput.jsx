import { InputAdornment, TextField } from "@mui/material";
import { icons } from "../../../../../assets/icons";

const ChatInput = () => {
  return (
    <TextField
      placeholder="Type and enter"
      sx={{ p: 1 }}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <span>{icons.send}</span>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default ChatInput;
