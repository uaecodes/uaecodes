import React, { useEffect, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import { getCount } from "./api";

function Numbers(props) {

  const [count, setCount] = useState(0);



  const MINUTE_MS = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      getCount().then((data) => setCount(data));
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
    return (
  
        <AnimatedNumbers
          animateToNumber={count}
          fontStyle={{ fontSize: 64, fontFamily: 'Sans-serif', fontWeight: "thin", color: "#918f8e" }}
          configs={(number, index) => {
            return { mass: 2, tension: 230 * (index + 1), friction: 140 };
          }}
        ></AnimatedNumbers>
    );
  }

export default Numbers