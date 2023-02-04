import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import canvas from "./assets/images/canvas.png";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { PARAMETERS } from "./data/PARAMETERS";

function App() {
  const [showBox, setShowBox] = React.useState(false);
  const handleFocus = (id) => {
    setShowBox({ ...showBox, [id]: !showBox[id] });
  };
  const handleBlur = (id) => {
    setShowBox({ ...showBox, [id]: false });
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Paper
        sx={{
          position: "absolute",
          minHeight: 1200,
          maxHeight: 1200,
          minWidth: 900,
          maxWidth: 900,
          p: 0,
          backgroundImage: `url(${canvas})`,
          backgroundSize: "cover",
        }}
      />
      {Object.entries(PARAMETERS).map(([key, value]) => {
        return Object.entries(value.styles).map(([keyStyle, valueStyle]) => {
          return (
            <Box
              key={key}
              sx={{
                position: "absolute",
                backgroundColor: "rgba(255, 255, 0, 0.4);",
                ...valueStyle,
                display: showBox[key] ? "block" : "none",
              }}
            ></Box>
          );
        });
      })}
      <Paper
        id="parameters"
        sx={{
          minWidth: 320,
          maxWidth: 320,
          zIndex: "tooltip",
          p: 1,
          ml: 69,
          mt: 0.5,
        }}
      >
        {Object.entries(PARAMETERS).map(([key, value]) => {
          return (
            <Box key={key} sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                variant="body1"
                sx={{
                  minWidth: 170,
                  maxWidth: 170,
                  borderBottom: "1px solid grey",
                }}
              >{`${key} ${value.name}`}</Typography>
              <TextField
                // name={value}
                variant="standard"
                fullWidth
                id={key}
                // value={user}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      {value.meas}
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 1,
                  p: 0,
                  minHeight: 24,
                  maxHeight: 24,
                  backgroundColor: "#faf9e1",
                }}
                onFocus={() => handleFocus(key)}
                onBlur={() => handleBlur(key)}
              />
            </Box>
          );
        })}
      </Paper>
    </Box>
  );
}

export default App;
