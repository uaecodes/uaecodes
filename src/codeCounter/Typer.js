import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { getCodes } from "./api";

export default function Typer(){
    const [typewrite, setTypewrite] = useState([">> Total number of coders"]);

    useEffect(() => {

      getCodes().then((data) =>
        setTypewrite(data.results.map((data) => ">> "+data.code))
      );



    },[typewrite]);
    return (
        <Typewriter
        options={{
          strings: typewrite,
          justifyContent: "center",
          autoStart: true,
          loop: true,
        }}   />
    )
}