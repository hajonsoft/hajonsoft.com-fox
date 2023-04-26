import { Button, Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import logo from "../../images/logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { FormattedMessage } from "react-intl";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useNavigate } from "react-router-dom";

import footerBg from "../../images/footer_bg.svg";
import owl from "../../images/owl.svg";
import { colors } from "../../util/colors";
import moment from "moment-timezone";

const facebookUrl = "https://www.facebook.com/Hajonsoft-108504544787000";

const Footer = () => {
  const navigate = useNavigate();
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
            md={2}
            lg
            container
            spacing={1}
            alignContent="flex-start"
          >
            <Grid item xs={12}>
              <Typography variant="button">
                <FormattedMessage id="footer.company" />
              </Typography>
              <div
                style={{ border: "2px solid rgb(57,63,82)", width: "90%" }}
              ></div>
            </Grid>
            <Grid item xs={12}>
              <FormattedMessage id="footer.about-us" />
            </Grid>
            <Grid item xs={12}>
              <FormattedMessage id="header.contact-us" />
            </Grid>
            <Grid item xs={12}>
              <FormattedMessage id="find" />
            </Grid>
          </Grid>
          <Grid
            item
            sm={12}
            md={2}
            lg
            container
            spacing={1}
            alignContent="flex-start"
          >
            <Grid item xs={12}>
              <Typography variant="button">
                <FormattedMessage id="footer.resources" />
              </Typography>
              <div
                style={{ border: "2px solid rgb(57,63,82)", width: "90%" }}
              ></div>
            </Grid>
            <Grid item xs={12}>
              <FormattedMessage id="header.demo" />
            </Grid>
            <Grid item xs={12}>
              <FormattedMessage id="footer.common-questions" />
            </Grid>
            <Grid item xs={12}>
              <FormattedMessage id="footer.insights" />
            </Grid>
          </Grid>
          <Grid
            item
            sm={12}
            md={2}
            lg
            container
            spacing={1}
            alignContent="flex-start"
          >
            <Grid item xs={12}>
              <Typography variant="button">
                <FormattedMessage id="footer.our-product" />
              </Typography>
              <div
                style={{ border: "2px solid rgb(57,63,82)", width: "90%" }}
              ></div>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="https://github.com/hajonsoft/hajonsoft-hawk"
                target="_blank"
                variant="caption"
              >
                <FormattedMessage id="footer.Hawk" />
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="https://github.com/hajonsoft/hajonsoft-eagle"
                target="_blank"
                variant="caption"
              >
                <FormattedMessage id="footer.Eagle" />
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="https://github.com/hajonsoft/hajonsoft-tiger"
                target="_blank"
                variant="caption"
              >
                <FormattedMessage id="footer.Nest" />
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            sm={12}
            md={2}
            lg
            container
            spacing={1}
            alignContent="flex-start"
          >
            <Grid item xs={12}>
              <Typography variant="button">
                <FormattedMessage id="get-the-app" />
              </Typography>
              <div
                style={{ border: "2px solid rgb(57,63,82)", width: "90%" }}
              ></div>
            </Grid>
            <Grid item xs={12}>
              <FormattedMessage id="coming-soon" />
            </Grid>
            <Grid item xs={12}>
              <FormattedMessage id="app-store" />
            </Grid>
            <Grid item xs={12}>
              <FormattedMessage id="google-play" />
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
          <Grid item>
            <a
              href={facebookUrl}
              target="_blank"
              alt="facebook"
              rel="noreferrer"
            >
              <FacebookIcon style={{ color: colors.white }} />
            </a>
            <LinkedInIcon />
            <TwitterIcon />
          </Grid>
          <Grid item style={{ marginRight: "1rem" }}>
            <Button
              onClick={() => navigate("/conference")}
              variant="contained"
              color="primary"
              startIcon={<HelpOutlineIcon />}
              style={{
                color: "white",
                textTransform: "none",
                borderRadius: "16px",
              }}
            >
              <FormattedMessage id="help" />
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
