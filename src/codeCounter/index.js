import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../uaecodes.png";
import Numbers from "./Numbers";
import "./counter.css";
import CoolLooking  from "./CoolLooking";




export default function Counter() {


  return (
    <div className="bg" style={{ height: "100vh" }}>
      <CoolLooking/>
      <div className="flex header flex-row min-h-screen justify-center items-center">
        <img src={logo} className="lg:max-w-md max-w-xs" alt="logo" />
      </div>
      <div className="centered ">
        <Numbers  />
      </div>

    </div>
  );
}
