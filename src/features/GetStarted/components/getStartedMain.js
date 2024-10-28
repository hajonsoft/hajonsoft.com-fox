import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import getStartedImage from "../../../images/get-started.png";

const GetStartedMain = ({ onStart }) => {
  const theme = useTheme();
  const aboveSmall = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Container>
      <Grid container justify="center" spacing={6}>
        <Grid
          item
          container
          direction="column"
          justify="space-around"
          md={6}
          sm={12}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              <FormattedMessage id="get-started.more-than-software" />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              <FormattedMessage id="get-started.we-are-team" />
            </Typography>
          </Grid>
          <Grid item container justify="center" spacing={4}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                style={{
                  textTransform: "none",
                  backgroundColor: "white",
                  color: "black",
                  height: "3rem",
                  width: "15rem",
                }}
                onClick={onStart}
              >
                <Typography variant="h6">
                  <FormattedMessage id="get-started" />
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {aboveSmall && (
          <Grid item xs={5}>
            <img src={getStartedImage} alt="hajonsoft software" width="300px" />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default GetStartedMain;
