import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useIntl } from "react-intl";
import PriceCard from "./components/PriceCard";

const Pricing = () => {
  const intl = useIntl();

  const priceCards = [
    {
      name: "pricing.plan-lifetime",
      price: null,
      paymentTerm: "pricing.one-time",
      subHeader: "pricing.one-time-payment-volume-pricing",
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
      background: "#E0E4E8",
      learnMore: "pricing.lifetime-learn-more",
    },
    {
      name: "pricing.plan-pro",
      price: 1850,
      paymentTerm: "pricing.per-season",
      subHeader: "pricing.up-to-10k-pax",
      inclusions: [
        ["pricing.total-pax", { total: "Unlimited" }],
        ["pricing.doc-scans", { total: "10000" }],
        ["pricing.premium-support", { total: "500" }],
      ],
      background: "#4ccdbe",
      learnMore: "pricing.basic-learn-more",
      paymentLink: "https://buy.stripe.com/eVa8A61SsfwO3Re14h",
    },
    {
      name: "pricing.plan-basic",
      price: 950,
      paymentTerm: "pricing.per-season",
      subHeader: "pricing.up-to-1k-pax",
      inclusions: [
        ["pricing.total-pax", { total: "Unlimited" }],
        ["pricing.doc-scans", { total: "1000" }],
        ["pricing.premium-support", { total: "100" }],
      ],
      background: "#E0E4E8",
      learnMore: "pricing.season-support-umrah-learn-more",
      paymentLink: "https://buy.stripe.com/8wMdUqeFe0BUdrO14g",
    },
    {
      name: "pricing.plan-free",
      price: 0,
      paymentTerm: "pricing.per-season",
      subHeader: "pricing.up-to-100-pax",
      inclusions: [
        ["pricing.total-pax", { total: "Unlimited" }],
        ["pricing.doc-scans", { total: "100" }],
      ],
      background: "#E0E4E8",
      learnMore: "pricing.season-support-haj-learn-more",
      paymentLink: "https://hajonsoft-kea.web.app/login",
    },
  ];
  return (
    <Container id="pricing" style={{marginTop: "-5rem"}} >
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
