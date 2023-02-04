import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import canvas from "./assets/images/canvas.png";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

const PARAMETERS = {
  A: {
    name: "Handing",
    style: { height: 320, width: 30, mt: 50, ml: 17 },
    meas: "2 ± mm",
  },
  B: {
    name: "Opening Width",
    style: { height: 30, width: 270, mt: 95, ml: 8 },
    meas: "2 ± mm",
  },
  C: {
    name: "Opening Height",
    style: { height: 670, width: 30, mt: 7, ml: 60 },
    meas: "2 ± mm",
  },
  D: {
    name: "Hinge Size",
    style: { height: 45, width: 30, mt: 24, ml: 35 },
    meas: "2 ± mm",
  },
  E: {
    name: "First Hinge",
    style: { height: 45, width: 30, mt: 7, ml: 43 },
    meas: "2 ± mm",
  },
  F: {
    name: "Second Hinge",
    style: { height: 140, width: 30, mt: 8, ml: 44 },
    meas: "2 ± mm",
  },
  G: {
    name: "Third Hinge (if 4)",
    style: { height: 360, width: 30, mt: 8, ml: 46 },
    meas: "2 ± mm",
  },
  H: {
    name: "Fourth Hinge",
    style: { height: 590, width: 30, mt: 8, ml: 48 },
    meas: "2 ± mm",
  },
  J: {
    name: "Hinge Type (c/b/p)",
    style: { height: 190, width: 300, mt: 126, ml: 68 },
    meas: "c, b, p",
  },
};

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
        return (
          <Box
            key={key}
            sx={{
              position: "absolute",
              backgroundColor: "rgba(255, 255, 0, 0.5);",
              ...value.style,
              display: showBox[key] ? "block" : "none",
            }}
          ></Box>
        );
      })}
      <Paper
        id="parameters"
        sx={{
          width: 320,
          zIndex: "tooltip",
          p: 1,
          ml: 69,
        }}
      >
        {Object.entries(PARAMETERS).map(([key, value]) => {
          return (
            <Box key={key} sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                variant="body1"
                sx={{
                  minWidth: 200,
                  maxWidth: 200,
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
