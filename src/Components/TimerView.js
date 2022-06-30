import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import InputField from "./Input";
import { Typography } from "@mui/material";

const TimerView = () => {
  const [input, setInput] = useState(3);
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [flag, setFlag] = useState(false);
  const [inputDisable, setInputDisable] = useState(false);
  const [pauseDisable, setPauseDisable] = useState(true);
  const [continueDisable, setContinueDisable] = useState(true);
  const handleChange = (e) => {
    setInput(e.target.value);
    setMinutes(e.target.value);
  };
  const start = () => {
    setFlag(true);
    setInputDisable(true);
    setPauseDisable(false);
  };
  const reset = () => {
    setFlag(false);
    setInputDisable(false);
    setSeconds(0);
    setMinutes(3);
    setInput(3);
    setPauseDisable(true);
    setContinueDisable(true);
  };

  const pause = () => {
    setFlag(false);
    setPauseDisable(true);
    setContinueDisable(false);
  };

  const continueB = () => {
    setFlag(true);
    setPauseDisable(false);
    setContinueDisable(true);
  };

  useEffect(() => {
    if (flag) {
      const interval = setInterval(() => {
        if (parseInt(seconds) == 0 && parseInt(minutes) !== 0) {
          setSeconds((seconds) => seconds + 59);
          setMinutes((minutes) => minutes - 1);
        } else if (parseInt(seconds) == 0 && parseInt(minutes) == 0) {
        } else {
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [seconds, minutes, flag]);

  return (
    <>
      <InputField
        handleChange={handleChange}
        count={input}
        notFlag={inputDisable}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "50px"
        }}
      >
        <Typography variant="h3" component="h2">
          {parseInt(minutes) < 10 ? "0" + minutes : minutes} :{" "}
          {parseInt(seconds) < 10 ? "0" + seconds : seconds}
        </Typography>
      </div>
      <Buttons
        start={start}
        reset={reset}
        pause={pause}
        continueB={continueB}
        startDisable={inputDisable}
        pauseDisable={pauseDisable}
        continueDisable={continueDisable}
      />
    </>
  );
};

export default TimerView;
