import logo from "./logo.png";
import { Fab, Action } from "react-tiny-fab";
import { MdPlayArrow, MdHelp, MdAdd, MdCode } from "react-icons/md";
export default function FabIcon(props) {
  return (
    <>
      <Fab
        icon={<MdAdd color="white" size={20} />} // main icon
        alwaysShowTitle={true} // always show color
        event="hover"
        style={{ right: 15, bottom: 95, width: 35, height: 35 }} // location
        mainButtonStyles={{ backgroundColor: "gray", width: 35, height: 35 }}
      >
        <Action
          text="UAE CODES"
          style={{ backgroundColor: "white", width: 35, height: 35 }}
          onClick={() => window.location.replace("https://ai.gov.ae/uaecodes/")}
        >
          <img src={logo} style={{ width: 20 }}></img>
        </Action>
        <Action
          text="Help"
          style={{ backgroundColor: "gray", width: 35, height: 35 }}
          onClick={() =>
            alert(
              "Type any words to see them displayed in the console, this is called a print statement"
            )
          }
        >
          <MdHelp />
        </Action>
      </Fab>

      <Fab
        icon={<MdPlayArrow color="green" size={30} />} // main icon
        alwaysShowTitle={true} // always show color
        event="click"
        style={{ right: 5, bottom: 24 }} // location
        mainButtonStyles={{ backgroundColor: "lime" }}
        onClick={props.sendCode}
      ></Fab>
    </>
  );
}
