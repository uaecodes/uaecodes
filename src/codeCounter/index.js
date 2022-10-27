import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../uaecodes.png";
import Numbers from "./Numbers";

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
      axios
        .get(process.env.REACT_APP_API.replace("user_field_names=true", ""), {
          params: { size: 1 },
          headers: {
            Authorization: "Token " + process.env.REACT_APP_BACKEND_TOKEN,
          },
        })
        .then((response) => setCount(response.data.count))
        .catch((err) => console.log(err));
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    <div className="h-screen bg-white mx-auto w-screen">
      <div className="flex mt-3 flex-row min-h-screen justify-center items-center">
        <img src={logo} className="items-center" width={"25%"} alt="logo" />
      </div>
      <div className="flex mt-3 flex-row min-h-screen justify-center items-center">
        <Numbers count={count} />
      </div>
    </div>
  );
}
