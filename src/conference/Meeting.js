import {
  LiveKitRoom,
  VideoConference,
  useToken,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { useNavigate } from "react-router";

function Meeting() {
  const roomId = "hajonsoft";
  const username = new Date().valueOf();
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
        audio={true}
        onDisconnected={() => navigate("/")}
      >
        <VideoConference />
      </LiveKitRoom>
    </div>
  );
}

export default Meeting;
