import React from "react";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { display } from "@mui/system";

const InputField = ({ handleChange, count, notFlag }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px"
      }}
    >
      <TextField
        label="Set minutes to count"
        id="outlined-basic"
        type={"number"}
        InputProps={{
          inputProps: {
            max: 100,
            min: 1
          }
        }}
        disabled={notFlag}
        value={count}
        onChange={handleChange}
        style={{ width: "400px" }}
        size="normal"
      />
    </div>
  );
};

export default InputField;
