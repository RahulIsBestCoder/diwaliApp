import React, { useState, useEffect } from 'react';

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-11-01') - +new Date(); // Example Diwali date
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <section className="countdown">
      <h2>Countdown to Diwali</h2>
      <div id="timer">
        {Object.keys(timeLeft).length ? (
          <>
            {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
          </>
        ) : (
          <span>Happy Diwali!</span>
        )}
      </div>
    </section>
  );
}

export default Countdown;
