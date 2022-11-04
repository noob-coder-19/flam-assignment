import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const [currTime, setCurrTime] = useState("");

  const formatTime = (time) => {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      var d = new Date();
      var hh = formatTime(d.getHours());
      var mm = formatTime(d.getMinutes());
      var ss = formatTime(d.getSeconds());
      setCurrTime(`${hh}:${mm}:${ss}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Typography>{currTime}</Typography>;
};

export default Timer;
