import React, { useState, useEffect } from 'react';

function Datetime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1>
      {time.toLocaleString("default", {weekday: "long"})}, {time.toLocaleDateString("default", { month: "long", day: "numeric", year: "numeric" })}
    </h1>
  );
}

export default Datetime;
