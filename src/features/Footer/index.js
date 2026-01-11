import FacebookIcon from "@mui/icons-material/Facebook";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Container, Grid, Link, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import logo from "../../images/logo.png";

import moment from "moment-timezone";
import footerBg from "../../images/footer_bg.svg";
import owl from "../../images/owl.svg";
import { colors } from "../../util/colors";

const facebookUrl = "https://www.facebook.com/Hajonsoft-108504544787000";

const Footer = () => {
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
                Global Visa Processing Automation
              </Typography>
              <Typography variant="body2" color="textSecondary">
                HAJonSoft provides intelligent automation solutions for travel agencies and visa processing centers worldwide. Our platform streamlines visa applications for Saudi Arabia, Schengen countries, USA, UK, UAE, and more through advanced passport reading technology and seamless browser automation.
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
              <Grid item>© 2020 HAJonSoft Owl</Grid>
              <Grid item>
                <img src={owl} alt="hajonsoft owl" width="30" height="30"></img>
              </Grid>
              <Grid item>Privacy & Terms</Grid>
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
              Meet Now
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
