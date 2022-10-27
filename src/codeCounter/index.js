import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../uaecodes.png";
import { getCount } from "./api";
import Numbers from "./Numbers";
import background from "./background.jpg";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  //   const response = axios({
  //     method: "GET",
  //     url: process.env.REACT_APP_API + "&order_by=",
  //     headers: {
  //       Authorization: "Token " + process.env.REACT_APP_BACKEND_TOKEN,
  //     },
  //   }).then((response) => console.log(setCount(response.data.results[0].id)));

  const MINUTE_MS = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      getCount().then((data) => setCount(data));
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    <div className="bg mx-auto w-screen" style={{ height: "100vh" }}>
      <div className="flex pt-6 flex-row min-h-screen justify-center items-center">
        <img src={logo} className="lg:max-w-md max-w-xs" alt="logo" />
      </div>
      <div className="centered">
        <Numbers count={count} />
      </div>

    </div>
  );
}
