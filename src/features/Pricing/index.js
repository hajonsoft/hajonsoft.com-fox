import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useIntl } from "react-intl";
import PriceCard from "./components/PriceCard";

const Pricing = () => {
  const intl = useIntl();

  const priceCards = [
    {
      name: "pricing.plan-lifetime",
      price: 2800,
      paymentTerm: "pricing.one-time",
      subHeader: "pricing.unlimited",
      inclusions: [
        [
          "pricing.total-pax",
          {
            total: intl.formatMessage({
              id: "pricing.unlimited",
            }),
          },
        ],
        [
          "pricing.doc-scans",
          {
            total: intl.formatMessage({
              id: "pricing.unlimited",
            }),
          },
        ],
        "pricing.dedicated-server",
      ],
      background: "#4ccdbe",
      learnMore: "pricing.lifetime-learn-more",
      paymentLink: "https://buy.stripe.com/00g2bI2Ww98qcnK3cm",
    },
    {
      name: "pricing.plan-pro",
      price: 2000,
      paymentTerm: "pricing.per-season",
      subHeader: "pricing.up-to-10k-pax",
      inclusions: [
        ["pricing.total-pax", { total: "10000" }],
        ["pricing.doc-scans", { total: "30000" }],
        ["pricing.premium-support", { total: "500" }],
      ],
      background: "#E0E4E8",
      learnMore: "pricing.basic-learn-more",
      paymentLink: "https://buy.stripe.com/bIY7w20Oo98qcnK3cl",
    },
    {
      name: "pricing.plan-basic",
      price: 600,
      paymentTerm: "pricing.per-season",
      subHeader: "pricing.up-to-1k-pax",
      inclusions: [
        ["pricing.total-pax", { total: "1000" }],
        ["pricing.doc-scans", { total: "2000" }],
        ["pricing.premium-support", { total: "100" }],
      ],
      background: "#E0E4E8",
      learnMore: "pricing.season-support-umrah-learn-more",
      paymentLink: "https://buy.stripe.com/aEU8A62WwckC9by6ow",
    },
    {
      name: "pricing.plan-free",
      price: 0,
      paymentTerm: "pricing.per-season",
      subHeader: "pricing.up-to-100-pax",
      inclusions: [
        ["pricing.total-pax", { total: "100" }],
        ["pricing.doc-scans", { total: "100" }],
      ],
      background: "#E0E4E8",
      learnMore: "pricing.season-support-haj-learn-more",
      paymentLink: "https://hajonsoft-kea.web.app/login",
    },
  ];
  return (
    <Container id="pricing">
      <Grid container justify="space-between" spacing={2}>
        {priceCards.map((priceCard) => (
          <Grid item sm={12} md={3} lg>
            <PriceCard
              name={priceCard.name}
              price={priceCard.price}
              paymentTerm={priceCard.paymentTerm}
              subHeader={priceCard.subHeader}
              inclusions={priceCard.inclusions}
              background={priceCard.background}
              learnMore={priceCard.learnMore}
              paymentLink={priceCard.paymentLink}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Pricing;
