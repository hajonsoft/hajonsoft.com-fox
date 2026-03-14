import { Container, Grid } from "@mui/material";
import React from "react";
import { useIntl } from "react-intl";
import PriceCard from "./components/PriceCard";
import useInView from "../../util/useInView";

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
        ["pricing.total-pax", { total: intl.formatMessage({ id: "pricing.unlimited" }) }],
        ["pricing.doc-scans", { total: intl.formatNumber(30000) }],
        ["pricing.premium-support", { total: intl.formatNumber(500) }],
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
        ["pricing.total-pax", { total: intl.formatMessage({ id: "pricing.unlimited" }) }],
        ["pricing.doc-scans", { total: intl.formatNumber(10000) }],
        ["pricing.premium-support", { total: intl.formatNumber(100) }],
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
        ["pricing.total-pax", { total: intl.formatMessage({ id: "pricing.unlimited" }) }],
        ["pricing.doc-scans", { total: intl.formatNumber(100) }],
      ],
      background: "#E0E4E8",
      learnMore: "pricing.season-support-haj-learn-more",
      paymentLink: "https://hajonsoft-kea.web.app/login",
    },
  ];
  const [sectionRef, sectionInView] = useInView();

  return (
    <Container id="pricing" ref={sectionRef} style={{ marginTop: "-5rem" }}>
      <Grid container justify="space-between" spacing={2}>
        {priceCards.map((priceCard, idx) => (
          <Grid
            item
            sm={12}
            md={3}
            lg
            key={priceCard.name}
            style={{
              opacity: sectionInView ? 1 : 0,
              animation: sectionInView
                ? `slideUp 0.65s cubic-bezier(0.22,1,0.36,1) ${idx * 0.12}s both`
                : "none",
            }}
          >
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
