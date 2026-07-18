import React from "react";
import { analytics } from "../../analytics";
import { sitePalette } from "../../util/siteTheme";
import GetStartedMain from "./components/getStartedMain";

const GetStarted = () => {
  const handleStart = () => {
    analytics.logEvent("get-started");
    window.location.href = "https://hajonsoft-kea.web.app/";
  };

  return (
    <div
      style={{
        background: sitePalette.heroGradient,
        color: sitePalette.text,
        minHeight: "28rem",
        marginTop: 0,
        marginInline: 0,
        padding: "1.5rem 1rem 2.25rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        borderRadius: 0,
        border: "none",
        borderBottom: `1px solid ${sitePalette.border}`,
        boxShadow: "none",
        overflow: "hidden",
      }}
    >
      <GetStartedMain onStart={handleStart} />
    </div>
  );
};

export default GetStarted;
