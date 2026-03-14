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
import { useIntl } from "react-intl";
import getStartedImage from "../../../images/get-started.png";

const GetStartedMain = ({ onStart }) => {
  const theme = useTheme();
  const aboveSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const intl = useIntl();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        alignItems="center"
        spacing={6}
        justifyContent="space-between"
      >
        {/* Text Column — fades in from the left */}
        <Grid item xs={12} md={9}>
          <Box
            mb={6}
            className="anim-fade-in-left"
            style={{ animationDuration: "0.9s" }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              <FormattedMessage id="get-started.more-than-software" />
            </Typography>
            <Typography
              variant="h5"
              color="rgba(255,255,255,0.85)"
              className="anim-fade-in-up"
              style={{ animationDelay: "0.3s", animationDuration: "0.8s" }}
            >
              <FormattedMessage id="get-started.we-are-team" />
            </Typography>
          </Box>

          <Box
            mt={4}
            display="flex"
            gap={2}
            className="anim-fade-in-up"
            style={{ animationDelay: "0.55s", animationDuration: "0.8s" }}
          >
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
                transition: "transform 0.2s ease, background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "#029F6A",
                  transform: "translateY(-2px)",
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
                transition: "transform 0.2s ease, background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "#357ae8",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {intl.formatMessage({ id: "getstarted.meet-now" })}
            </Button>
          </Box>
        </Grid>

        {/* Image Column — floats in from the right then bobs continuously */}
        {aboveSmall && (
          <Grid item md={3}>
            <Box display="flex" justifyContent="center">
              <img
                src={getStartedImage}
                alt="Hajonsoft software"
                className="anim-float-in"
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
