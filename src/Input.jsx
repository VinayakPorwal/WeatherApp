import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function Input(props) {
    var City = props.city
    var keyPress = props.keyfunc
    var api = props.api
    var handleCityChange = props.handle
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Ex: Indore"
          variant="outlined"
          value={City}
          onChange={handleCityChange}
          onKeyDown={keyPress}
        />
      </Box>
      <Button
        variant="contained"
        onClick={api}
        sx={{
          marginBottom: "50px",
        }}
      >
        check
      </Button>
    </div>
  );
}

export default Input;
