import { Box } from "@mui/material";
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
    <Box
      sx={{
        background: sitePalette.heroGradient,
        color: sitePalette.text,
        marginTop: 0,
        px: { xs: 0, md: 1 },
        py: { xs: 2, md: 3 },
        pb: { xs: 2.5, md: 3.5 },
        borderBottom: `1px solid ${sitePalette.border}`,
        overflowX: "hidden",
      }}
    >
      <GetStartedMain onStart={handleStart} />
    </Box>
  );
};

export default GetStarted;
