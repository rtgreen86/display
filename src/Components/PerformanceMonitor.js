import React, { useEffect, useState } from 'react';

function startPerformanceCheck(setMessage) {
  let totalTime = 0;
  let frames = 0;
  function onNextFrame(time) {
    requestAnimationFrame(onNextFrame);
    frames++;
    if (time - totalTime > 1000) {
      setMessage(`${frames} fps`);
      frames = 0;
      totalTime = time;
    }
  }
  requestAnimationFrame(onNextFrame);
}

export default function PerformanceMonitor() {
  const [message, setMessage] = useState('');
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (started) return;
    setStarted(true);
    startPerformanceCheck(setMessage);
  }, [started]);
  return (<div id="info">{message}</div>);
}