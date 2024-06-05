import { useContext } from "react";
import Cam from "../img/cam.png";
import Input from "./Input";
import Messages from "./Messages";
import { ChatContext } from "../context/ChatContext";

function Chat() {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <h3>{data.user?.displayName}</h3>
        <div className="chatIcons">
          <img src={Cam} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
