import React, { useState, useEffect } from 'react';
import './trafficLight.css';

const getNextColorAndDelay = (currentColor) => {
  switch (currentColor) {
    case 'green':
      return ['yellow', 3000];
    case 'yellow':
      return ['red', 2000];
    case 'red':
      return ['yellow', 5000];
    default:
      return ['green', 2000];
  }
};

export default function TrafficLight() {
  const [color, setColor] = useState('green');

  useEffect(() => {
    const [nextColor, delay] = getNextColorAndDelay(color);
    const timer = setTimeout(() => {
      setColor(nextColor);
    }, delay);

    return () => clearTimeout(timer);
  }, [color]);

  return (
    <div className="traffic-light">
      <div className={`bulb ${color}`} />
    </div>
  );
}
