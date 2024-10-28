import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import trans from "../../../util/trans";
import React from "react";
import { FormattedNumber } from "react-intl";
import Zoom from "@mui/material/Zoom";

const PriceCard = ({
  name,
  price,
  subHeader,
  inclusions,
  paymentTerm,
  background,
  learnMore,
  paymentLink,
}) => {
  return (
    <Card raised>
      <CardHeader
        style={{ backgroundColor: background }}
        title={trans(name)}
        subheader={trans(subHeader)}
      />
      <CardContent>
        {price === null ? (
          <Grid container spacing={1} justify="center" alignItems="flex-end">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Request a quote
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={1} justify="center" alignItems="flex-end">
            <Grid item>{trans("usd")}</Grid>
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                <FormattedNumber value={price}></FormattedNumber>
              </Typography>
            </Grid>
            <Grid item>{trans(paymentTerm)}</Grid>
          </Grid>
        )}
        <Divider style={{ marginBottom: "1rem" }} />
        <Zoom in={true}>
          <div style={{ height: "8rem" }}>
            <Typography variant="body1" gutterBottom>
              {trans("includes")}
            </Typography>
            {inclusions &&
              inclusions.map((i) => (
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  style={{ marginLeft: "0" }}
                >
                  <Grid item>
                    <CheckIcon style={{ color: "#85C24B" }}></CheckIcon>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                      {console.log(i)}
                      {typeof i === "string" ? trans(i) : trans(i[0], i[1])}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
          </div>
        </Zoom>
      </CardContent>

      <CardActions>
        <Grid container justify="space-around">
          <Grid item>
            {price === null ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {trans("header.contact-us")}
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  window.location.href = paymentLink;
                }}
              >
                {trans("pricing.buy-now")}
              </Button>
            )}
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default PriceCard;
