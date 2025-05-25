import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import getStartedImage from "../../../images/get-started.png";

const GetStartedMain = ({ onStart }) => {
  const theme = useTheme();
  const aboveSmall = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Container maxWidth="lg">
      <Grid
        container
        alignItems="center"
        spacing={6}
        justifyContent="space-between"
      >
        {/* Text Column */}
        <Grid item xs={12} md={9}>
          <Box mb={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              <FormattedMessage id="get-started.more-than-software" />
            </Typography>
            <Typography variant="h5" color="rgba(255,255,255,0.85)">
              <FormattedMessage id="get-started.we-are-team" />
            </Typography>
          </Box>

          <Box mt={4} display="flex" gap={2}>
            <Button
              onClick={onStart}
              sx={{
                backgroundColor: "#00B37A",
                color: "white",
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: "999px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: "#029F6A",
                },
              }}
            >
              <FormattedMessage id="get-started" />
            </Button>

            <Button
              onClick={() =>
                window.open("https://meet.google.com/eap-zdrm-abh", "_blank")
              }
              sx={{
                backgroundColor: "#4285F4",
                color: "white",
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: "999px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: "#357ae8",
                },
              }}
            >
              Meet Now
            </Button>
          </Box>
        </Grid>

        {/* Image Column */}
        {aboveSmall && (
          <Grid item md={3}>
            <Box display="flex" justifyContent="center">
              <img
                src={getStartedImage}
                alt="Hajonsoft software"
                style={{ width: "100%", maxWidth: "360px" }}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default GetStartedMain;
