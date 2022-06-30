import React from "react";
import Button from "@mui/material/Button";
//import ButtonGroup from "@mui/material/ButtonGroup";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import HomeIcon from "@mui/icons-material/Home";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Buttons = ({
  start,
  pause,
  continueB,
  reset,
  startDisable,
  pauseDisable,
  continueDisable
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        size="large"
        onClick={start}
        startIcon={
          <AlarmOnIcon color={startDisable ? "disabled" : "primary"} />
        }
        disabled={startDisable}
      >
        Start
      </Button>
      <Button
        size="large"
        onClick={pause}
        startIcon={<PauseIcon color={pauseDisable ? "disabled" : "primary"} />}
        disabled={pauseDisable}
      >
        Pause
      </Button>
      <Button
        size="large"
        onClick={continueB}
        startIcon={
          <PlayArrowIcon color={continueDisable ? "disabled" : "primary"} />
        }
        disabled={continueDisable}
      >
        Continue
      </Button>
      <Button
        size="large"
        onClick={reset}
        startIcon={<HomeIcon color="primary" />}
      >
        Reset
      </Button>
    </div>
  );
};

export default Buttons;
