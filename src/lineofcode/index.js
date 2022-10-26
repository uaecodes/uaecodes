import Header from "./Header";
import "./loc.css";
import TextEditor from "./TextEditor";
import "react-tiny-fab/dist/styles.css";

import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import MatrixCard from "matrix-card";
import { Buffer } from "buffer";
import FabIcon from "./FabIcon";
import axios from "axios";

function LineOfCode() {
  const [codeConsole, setCodeConsole] = useState([
    ">> " + "Console loaded...",
    ">> " + "Type your script above and click the green play button",
  ]);
  const [message, setMessage] = useState("");

  const coded = Buffer.from([69, 83, 82, 65]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  // when green button is clicked
  const sendCode = () => {
    if (message==="") {
      alert("You need to type a message in the code where it says print(")
      return
    }
    setCodeConsole([">> " + message, ">> Congratulations you have typed your first line of code", ">> Please use the link above the play button to continue your coding journey"])
    axios({
      method: "POST",
      url: process.env.REACT_APP_API,
      headers: {
        Authorization: "Token "+ process.env.REACT_APP_BACKEND_TOKEN,
        "Content-Type": "application/json"
      },
      data: {
        "code": message
      }
    })
  }

  console.log(process.env.REACT_APP_BACKEND_TOKEN)

  const canvWidth = window.innerWidth - 20;

  return (
    <div className="LOC flex flex-col h-screen">
      <FabIcon sendCode={sendCode}/>

      <Header />
      <TextEditor handleChange={handleChange}/>
      <div
        style={{ backgroundColor: "#242424" }}
        className="flex-1 h-full flex-grow pl-2 loc-mono sm:text-sm Green"
      >
        <div className="w-full">
          <MatrixCard
            id={"my-id-1"}
            matrixText={"UAE CODES" + coded.toString()}
            canvasSize={{ width: canvWidth, height: "300" }}
            delay={40}
            backgroundColor={"rgba(42, 40, 45, 0.2)"}
            textFontSize={"16"}
            textMainColor={"#A9A9A9"}
            textAlternateColorRatio={0.1}
            textAlternateColorList={[
              "#808080",
              "#989898",
              "#A9A9A9",
              "#C0C0C0",
            ]}
            styleOverrideForChildrenDiv={{
              "background-color": "transparent",
              top: "0px",
              margin: "0px",
              padding: "0px",
              left: "0px",
              right: "0px",
            }}
          >
            <div>
              <Typewriter
                options={{
                  strings: codeConsole,
                  autoStart: true,
                }}
              />
            </div>
          </MatrixCard>
        </div>
      </div>
    </div>
  );
}

export default LineOfCode;
