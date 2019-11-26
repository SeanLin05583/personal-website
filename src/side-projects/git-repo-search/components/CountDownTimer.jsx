import React, { useState, useEffect } from 'react';

const SEARCH_API_RATE_LIMIT_SECOND = 6;

const CountDownTimer = ({ seconds = SEARCH_API_RATE_LIMIT_SECOND }) => {
  const [countDownTime, setCountDownTime] = useState(seconds);

  useEffect(() => {
    if (!countDownTime) return;

    const intervalId = setInterval(() => {
      setCountDownTime(countDownTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countDownTime]);

  return <span>{`Able to search again after ${countDownTime} seconds`}</span>;
};

export default CountDownTimer;
