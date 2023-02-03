import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import door from "./assets/images/door.png";
import TextField from "@mui/material/TextField";

//

const parameters = {
  A: "Handing",
  B: "Opening Width",
  C: "Opening Height",
  D: "Hinge Size",
};
const styles = {
  A: { height: 350, width: 30, mt: 50, ml: 16 },
  B: { height: 30, width: 300, mt: 99, ml: 5 },
  C: { height: 700, width: 30, mt: 7, ml: 61 },
  D: { height: 45, width: 30, mt: 25, ml: 35 },
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
      {Object.entries(styles).map(([key, value]) => {
        return (
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "rgba(255, 255, 0, 0.5);",
              ...value,
              display: showBox[key] ? "block" : "none",
            }}
          ></Box>
        );
      })}
      {/* <Box
        id="B"
        sx={{
          position: "absolute",
          height: 300,
          width: 30,
          backgroundColor: "rgba(255, 255, 0, 0.5);",
          mt: 70,
          ml: 14,
          display: showBox["B"] ? "block" : "none",
        }}
      ></Box> */}
      <Paper sx={{ minHeight: 1000, minWidth: 500, p: 0 }}>
        <img src={door} style={{ width: "100%" }}></img>
      </Paper>
      <Paper sx={{ width: 200 }}>
        {Object.entries(parameters).map(([key, value]) => {
          return (
            <TextField
              name={value}
              fullWidth
              id={key}
              // value={user}
              label={`${key} ${value}`}
              sx={{ mb: 1 }}
              onFocus={() => handleFocus(key)}
              onBlur={() => handleBlur(key)}
            />
          );
        })}
      </Paper>
    </Box>
  );
}

export default App;
