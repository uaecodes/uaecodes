import axios from "axios";
import logo from "../uaecodes.png";
import Numbers from "./Numbers";
import "./counter.css";
import CoolLooking from "./CoolLooking";
import Typer from "./Typer";

export default function Counter() {
  return (
    <div className="bg " style={{ height: "100vh" }}>
      <div className="practicles">
        <CoolLooking />
      </div>
      <div className="flex header flex-row min-h-screen justify-center items-center">
        <img src={logo} className="lg:max-w-md max-w-xs" alt="logo" />
      </div>
      <div className="centered ">
        <Numbers />
      </div>
      <div className="info light">
        <p>عدد المبرمجين</p>
        <p style={{color: "black"}}>Number of coders  </p>
      </div>

      <div className="text-center typewriter">
        <p className="light">Everyone can code</p>
        <Typer />
      </div>
    </div>
  );
}
