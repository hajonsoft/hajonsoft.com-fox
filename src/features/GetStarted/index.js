import React from "react";
import { analytics } from "../../analytics";
import GetStartedMain from "./components/getStartedMain";

const GetStarted = () => {
  const handleStart = () => {
    analytics.logEvent("get-started");
    window.location.href = "https://hajonsoft-kea.web.app/";
  };

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #4B0082 0%, #6A0DAD 100%)", // Royal Purple
        color: "white",
        height: "24rem",
        marginTop: "2rem",
        padding: "2rem",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)",
      }}
    >
      <GetStartedMain onStart={handleStart} />
    </div>
  );
};

export default GetStarted;
