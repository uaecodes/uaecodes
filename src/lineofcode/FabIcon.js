import logo from "./logo.png";
import { Fab, Action } from "react-tiny-fab";
import { MdPlayArrow, MdHelp, MdAdd, MdPeople, MdOutlineCode, MdShare,TiSocialTwitter ,MdOutlineAssignmentTurnedIn} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

export default function FabIcon(props) {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/counter", { replace: true }),
    [navigate]
  );

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
          text="Coders"
          style={{ backgroundColor: "gray", width: 35, height: 35 }}
          onClick={handleOnClick}
        >
          <MdPeople />
        </Action>
        <Action
          text="Certificate"
          style={{ backgroundColor: "gray", width: 35, height: 35 }}
          onClick={props.onOpenForm}
        >
          <MdOutlineAssignmentTurnedIn />
        </Action>
        <Action
          text="Learn"
          style={{ backgroundColor: "gray", width: 35, height: 35 }}
          onClick={props.onOpenLearn}
        >
          <MdOutlineCode />
        </Action>
        <Action
          text="Help"
          style={{ backgroundColor: "gray", width: 35, height: 35 }}
          onClick={props.onHelp}
        >
          <MdHelp />
        </Action>

        <Action
          text="Share"
          style={{ backgroundColor: "white", width: 35, height: 35 }}
        >
          <TwitterShareButton
            title={"كتبت أول سطر برمجة ! "+"\n"+"#الإمارات_تبرمج"+"\n"+"I wrote my first line of code !"+"\n"+"#uae_codes"+"\n\n"}
            url={"https://ai.gov.ae/uaecodes/"}
          >
            <TwitterIcon size={33} round />
          </TwitterShareButton>
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
