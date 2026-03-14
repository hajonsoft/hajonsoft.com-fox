import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Button, Container, Grid, Typography } from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import logo from "../../images/logo.png";

import moment from "moment-timezone";
import footerBg from "../../images/footer_bg.svg";
import owl from "../../images/owl.svg";

const Footer = () => {
  const intl = useIntl();

  return (
    <div style={{ backgroundImage: `url(${footerBg})` }}>
      <Container>
        <Grid container alignItems="stretch">
          <Grid item sm={12} md={3} lg container>
            <Grid item sm={12} md={12} lg={12}>
              <img src={logo} alt="logo" width="128" />
            </Grid>
            <Grid item sm={12} md={12} lg={12}>
              <Typography variant="caption">hajonsoft@gmail.com</Typography>
            </Grid>
            <Grid item sm={12} md={12} lg={12}>
              <Typography variant="caption" align="center">
                {moment.tz.guess()}
              </Typography>
            </Grid>
            <Grid item sm={12} md={12} lg={12}>
              <Typography variant="caption">
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
              <Typography variant="body2" color="textSecondary">
                <FormattedMessage id="footer.description" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{
          width: "100%",
          height: "4rem",
          backgroundColor: "rgb(57,63,82)",
          marginTop: "1rem",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          color: "white",
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
                <FormattedMessage id="footer.privacy-terms" />
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
              color="primary"
              startIcon={<HelpOutlineIcon />}
              style={{
                color: "white",
                textTransform: "none",
                borderRadius: "16px",
              }}
            >
              {intl.formatMessage({ id: "footer.meet-now" })}
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
