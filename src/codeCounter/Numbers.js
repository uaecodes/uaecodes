import React from "react";
import AnimatedNumbers from "react-animated-numbers";

function Numbers(props) {
    return (
  
        <AnimatedNumbers
          animateToNumber={props.count}
          fontStyle={{ fontSize: 32 }}
          configs={(number, index) => {
            return { mass: 2, tension: 230 * (index + 1), friction: 140 };
          }}
        ></AnimatedNumbers>
    );
  }

export default Numbers