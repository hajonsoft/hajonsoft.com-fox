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
        minHeight: "24rem",
        marginTop: 0,
        marginInline: "0.75rem",
        padding: "2.2rem 1.2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "32px",
        border: `1px solid ${sitePalette.border}`,
        boxShadow: sitePalette.shadow,
        overflow: "hidden",
      }}
    >
      <GetStartedMain onStart={handleStart} />
    </div>
  );
};

export default GetStarted;
