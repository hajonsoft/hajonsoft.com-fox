import {
  LiveKitRoom,
  VideoConference,
  useToken,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { useNavigate } from "react-router";

function generateUniqueId(length) {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return id;
}

function Meeting() {
  const roomId = "hajonsoft";
  const username = generateUniqueId(15);
  const navigate = useNavigate();

  const token = useToken(
    "https://hajonsoft-livekit.fly.dev/api/livekit/token",
    roomId,
    {
      userInfo: {
        identity: username,
        name: username,
      },
    }
  );

  return (
    <div data-lk-theme="default" style={{ height: "100vh" }}>
      <LiveKitRoom
        token={token}
        serverUrl="wss://hajonsoft-n39g59x4.livekit.cloud"
        connect={true}
        video={false}
        audio={false}
        onDisconnected={() => navigate("/")}
      >
        <VideoConference />
      </LiveKitRoom>
    </div>
  );
}

export default Meeting;
