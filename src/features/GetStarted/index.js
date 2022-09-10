import React from "react";
import { analytics } from "../../analytics";
import GetStartedMain from "./components/getStartedMain";

const GetStarted = () => {
  const handleStart = () => {
    analytics.logEvent("get-started");
    window.location.href = 'https://hajonsoft.s3.ap-south-1.amazonaws.com/release/HAJonSoft-Windows-1.1.2-Setup.exe'; 
    // window.location.href = 'https://hajonsoft.talentlms.com/catalog/info/id:125,cms_featured_course:1'; 
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(56,134,176,1) 0%, rgba(71,161,177,1) 100%)",
        color: "white",
        height: "21rem",
        marginTop: "1rem",
      }}
    >
      <GetStartedMain onStart={handleStart} />
    </div>
  );
};

export default GetStarted;
