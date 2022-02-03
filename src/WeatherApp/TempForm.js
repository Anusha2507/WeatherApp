import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import NewTempApp from "./NewTempApp";
import "../WeatherApp/TempStyle.css"
import Inputcontext from "../StoreNew/ContextApi";

const TempForm = () => {
  const ctx = useContext(Inputcontext);
  const [btn, setBtn] = useState(false);

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {!btn ? (
          <>
            <TextField
              id="standard-basic"
              label="City Name"
              value={ctx.name}
              variant="standard"
              onChange={(e) => {
                ctx.addInput(e.target.value);
              }}
            />
            <Button variant="contained" onClick={()=>{setBtn(true)}}>
              Get Weather
            </Button>
          </>
        ) : (
          ""
        )}
        {btn ? <NewTempApp/> : ""}
      </Box>
    </>
  );
};
export default TempForm;