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
import { sitePalette } from "../../../util/siteTheme";

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
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ maxWidth: 760 }}>
              <FormattedMessage id="get-started.more-than-software" />
            </Typography>
            <Typography
              variant="h5"
              color={sitePalette.textMuted}
              className="anim-fade-in-up"
              style={{ animationDelay: "0.3s", animationDuration: "0.8s", maxWidth: "60rem" }}
            >
              <FormattedMessage id="get-started.we-are-team" />
            </Typography>
          </Box>

          <Box
            mt={4}
            display="flex"
            gap={2}
            flexWrap="wrap"
            className="anim-fade-in-up"
            style={{ animationDelay: "0.55s", animationDuration: "0.8s" }}
          >
            <Button
              onClick={onStart}
              variant="contained"
              sx={{
                backgroundColor: sitePalette.primary,
                color: sitePalette.textOnDark,
                fontSize: "1.1rem",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                boxShadow: sitePalette.shadow,
                transition: "transform 0.2s ease, background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: sitePalette.primaryHover,
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
              variant="outlined"
              sx={{
                borderColor: sitePalette.darkSoft,
                color: sitePalette.darkSoft,
                fontSize: "1.1rem",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                backgroundColor: "rgba(255,255,255,0.55)",
                transition: "transform 0.2s ease, background-color 0.2s ease",
                "&:hover": {
                  borderColor: sitePalette.primary,
                  backgroundColor: "rgba(255,255,255,0.86)",
                  color: sitePalette.primary,
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
                style={{ width: "100%", maxWidth: "340px", filter: "drop-shadow(0 18px 30px rgba(15, 38, 29, 0.18))" }}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default GetStartedMain;
