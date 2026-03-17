import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

import moment from "moment-timezone";
import owl from "../../images/owl.svg";
import { sitePalette } from "../../util/siteTheme";

const Footer = () => {
  const intl = useIntl();

  return (
    <Box
      sx={{
        background: sitePalette.darkGradient,
        color: sitePalette.textOnDark,
        marginTop: 4,
        paddingTop: 6,
      }}
    >
      <Container>
        <Grid container alignItems="stretch" spacing={3}>
          <Grid item sm={12} md={3} lg container>
            <Grid item sm={12} md={12} lg={12}>
              <Box
                sx={{
                  display: "inline-flex",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  borderRadius: "50%",
                  padding: "0.85rem",
                }}
              >
                <img src={logo} alt="logo" width="96" style={{ filter: sitePalette.logoFilter }} />
              </Box>
            </Grid>
            <Grid item sm={12} md={12} lg={12}>
              <Typography variant="body2">hajonsoft@gmail.com</Typography>
            </Grid>
            <Grid item sm={12} md={12} lg={12}>
              <Typography variant="body2" align="center" sx={{ color: "rgba(245, 251, 247, 0.72)" }}>
                {moment.tz.guess()}
              </Typography>
            </Grid>
            <Grid item sm={12} md={12} lg={12}>
              <Typography variant="body2">
                <FormattedMessage id="header.telephone" />
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sm={12}
            md={7}
            lg
            container
            spacing={2}
            alignContent="flex-start"
          >
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                <FormattedMessage id="footer.tagline" />
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(245, 251, 247, 0.76)", maxWidth: 680 }}>
                <FormattedMessage id="footer.description" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{
          width: "100%",
          minHeight: "4.5rem",
          backgroundColor: "rgba(6, 18, 14, 0.42)",
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          color: "white",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Grid container justify="space-between" spacing={1} alignItems="center">
          <Grid item style={{ marginLeft: "2rem" }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>© {new Date().getFullYear()} HAJonSoft</Grid>
              <Grid item>
                <img src={owl} alt="hajonsoft owl" width="30" height="30"></img>
              </Grid>
              <Grid item>
                <Link
                  to="/privacy-policy"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  Privacy Policy
                </Link>
              </Grid>
              <Grid item>·</Grid>
              <Grid item>
                <Link
                  to="/terms-of-service"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  Terms of Service
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item style={{ marginRight: "1rem" }}>
            <Button
              onClick={() =>
                (window.location.href = "https://meet.google.com/eap-zdrm-abh")
              }
              variant="contained"
              startIcon={<HelpOutlineIcon />}
              style={{
                color: "white",
                borderRadius: "16px",
                backgroundColor: sitePalette.primary,
              }}
            >
              {intl.formatMessage({ id: "footer.meet-now" })}
            </Button>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Footer;
