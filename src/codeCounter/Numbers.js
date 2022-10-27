import React from "react";
import AnimatedNumbers from "react-animated-numbers";

function Numbers(props) {
    return (
  
        <AnimatedNumbers
          animateToNumber={props.count}
          fontStyle={{ fontSize: 64, fontWeight: "bold", color: "#918f8e" }}
          configs={(number, index) => {
            return { mass: 2, tension: 230 * (index + 1), friction: 140 };
          }}
        ></AnimatedNumbers>
    );
  }

export default Numbers