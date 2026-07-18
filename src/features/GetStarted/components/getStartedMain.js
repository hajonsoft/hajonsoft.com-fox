import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CloudDoneRoundedIcon from "@mui/icons-material/CloudDoneRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import PhonelinkRoundedIcon from "@mui/icons-material/PhonelinkRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import capabilityCaptcha from "../../../images/capability-captcha.png";
import capabilityForms from "../../../images/capability-forms.png";
import capabilityOtp from "../../../images/capability-otp.png";
import capabilityResize from "../../../images/capability-resize.png";
import ksaVisaLogo from "../../../images/ksa-visa-enjaz-logo.png";
import ministryLogo from "../../../images/ministry-hajj-umrah-logo.png";
import nusukHajjLogo from "../../../images/nusuk-hajj-logo-white.png";
import nusukLogo from "../../../images/nusuk-logo.png";
import visitSaudiLogo from "../../../images/visit-saudi-logo.svg";
import { sitePalette } from "../../../util/siteTheme";

const AUTO_ADVANCE_MS = 7000;
const TRANSITION_MS = 380;
const CAROUSEL_HEIGHT = { xs: 620, md: 440 };

const formatDisplayUrl = (url) =>
  url.replace(/^https?:\/\//, "").replace(/\/+$/, "");

const capabilities = [
  { id: "captcha", image: capabilityCaptcha, labelId: "hero.capability.captcha" },
  { id: "otp", image: capabilityOtp, labelId: "hero.capability.otp" },
  { id: "resize", image: capabilityResize, labelId: "hero.capability.resize" },
  { id: "forms", image: capabilityForms, labelId: "hero.capability.forms" },
];

const uniquenessPoints = [
  { id: "no-install", icon: <CloudDoneRoundedIcon />, labelId: "hero.unique.no-install" },
  { id: "web-based", icon: <PhonelinkRoundedIcon />, labelId: "hero.unique.web-based" },
  { id: "save-time", icon: <SpeedRoundedIcon />, labelId: "hero.unique.save-time" },
];

const slides = [
  {
    id: "overview",
    titleId: "hero.slide.overview.title",
    bodyId: "hero.slide.overview.body",
    url: null,
    logo: ministryLogo,
    logoAltId: "hero.slide.overview.logo-label",
    placeholderId: null,
    labelId: "hero.overview-label",
    agentNumber: null,
    // Exact match to baked-in logo image background (#fcf9f6)
    plateBg: "#fcf9f6",
    plateBorder: "rgba(80, 100, 70, 0.14)",
  },
  {
    id: "umrah",
    titleId: "hero.slide.umrah.title",
    bodyId: "hero.slide.umrah.body",
    url: "https://masar.nusuk.sa/",
    logo: nusukLogo,
    logoAltId: "hero.slide.umrah.logo-label",
    placeholderId: null,
    labelId: "hero.agent-label",
    agentNumber: 1,
    plateBg: "#fcf9f3",
    plateBorder: "rgba(160, 130, 70, 0.18)",
  },
  {
    id: "enjaz",
    titleId: "hero.slide.enjaz.title",
    bodyId: "hero.slide.enjaz.body",
    url: "https://services.ksavisa.sa/",
    logo: ksaVisaLogo,
    logoAltId: "hero.slide.enjaz.logo-label",
    placeholderId: null,
    labelId: "hero.agent-label",
    agentNumber: 2,
    plateBg: "#f9f4fc",
    plateBorder: "rgba(120, 70, 170, 0.16)",
  },
  {
    id: "hajj-global",
    titleId: "hero.slide.hajj-global.title",
    bodyId: "hero.slide.hajj-global.body",
    url: "https://hajj.nusuk.sa/",
    logo: nusukHajjLogo,
    logoAltId: "hero.slide.hajj-global.logo-label",
    placeholderId: null,
    labelId: "hero.agent-label",
    agentNumber: 3,
    plateBg: "#f5f9f7",
    plateBorder: "rgba(40, 110, 80, 0.14)",
  },
  {
    id: "hajj-mission",
    titleId: "hero.slide.hajj-mission.title",
    bodyId: "hero.slide.hajj-mission.body",
    url: "https://masar.nusuk.sa/",
    logo: nusukLogo,
    logoAltId: "hero.slide.hajj-mission.logo-label",
    placeholderId: null,
    labelId: "hero.agent-label",
    agentNumber: 4,
    plateBg: "#fcf9f3",
    plateBorder: "rgba(160, 130, 70, 0.18)",
  },
  {
    id: "visit-visa",
    titleId: "hero.slide.visit-visa.title",
    bodyId: "hero.slide.visit-visa.body",
    url: "https://visa.visitsaudi.com/",
    logo: visitSaudiLogo,
    logoAltId: "hero.slide.visit-visa.logo-label",
    placeholderId: null,
    labelId: "hero.agent-label",
    agentNumber: 5,
    plateBg: "#fff7fb",
    plateBorder: "rgba(190, 0, 141, 0.16)",
  },
];

const AGENT_TOTAL = slides.filter((slide) => slide.agentNumber != null).length;

const LogoPlate = ({ slide, intl }) => (
  <Box
    sx={{
      width: "100%",
      maxWidth: 380,
      height: 168,
      borderRadius: "20px",
      backgroundColor: slide.plateBg,
      border: `1px solid ${slide.plateBorder}`,
      boxShadow: "0 10px 28px rgba(40, 60, 90, 0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      p: 0,
      flexShrink: 0,
    }}
  >
    {slide.logo ? (
      <Box
        component="img"
        src={slide.logo}
        alt={intl.formatMessage({ id: slide.logoAltId })}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          // Same color as plate so any letterboxing matches the logo image fill
          backgroundColor: slide.plateBg,
          p: 1.5,
          boxSizing: "border-box",
        }}
      />
    ) : (
      <Typography
        variant="h5"
        sx={{
          color: sitePalette.primary,
          fontWeight: 700,
          textAlign: "center",
          letterSpacing: 0.4,
        }}
      >
        {intl.formatMessage({ id: slide.placeholderId })}
      </Typography>
    )}
  </Box>
);

const GetStartedMain = ({ onStart }) => {
  const intl = useIntl();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const transitionLock = useRef(false);
  const slide = slides[activeIndex];

  const goTo = (index) => {
    const next = (index + slides.length) % slides.length;
    if (next === activeIndex || transitionLock.current) return;
    transitionLock.current = true;
    setVisible(false);
    window.setTimeout(() => {
      setActiveIndex(next);
      setVisible(true);
      transitionLock.current = false;
    }, TRANSITION_MS);
  };

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      goTo(activeIndex + 1);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, activeIndex]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: { xs: 2.5, md: 3.5 }, textAlign: { xs: "left", md: "center" } }}>
        <Typography
          variant="overline"
          sx={{
            color: sitePalette.primary,
            fontWeight: 800,
            letterSpacing: 1.6,
          }}
        >
          <FormattedMessage id="hero.unique.eyebrow" />
        </Typography>
        <Typography
          component="h1"
          variant="h3"
          fontWeight={800}
          sx={{
            mt: 0.75,
            mb: 1.25,
            fontSize: { xs: "1.7rem", md: "2.35rem" },
            lineHeight: 1.15,
            maxWidth: 860,
            mx: { md: "auto" },
          }}
        >
          <FormattedMessage id="hero.unique.title" />
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: sitePalette.textMuted,
            fontWeight: 500,
            maxWidth: 760,
            mx: { md: "auto" },
            lineHeight: 1.55,
            mb: 2.5,
          }}
        >
          <FormattedMessage id="hero.unique.subtitle" />
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", md: "center" },
            gap: 1.25,
            mb: 3,
          }}
        >
          {uniquenessPoints.map((point) => (
            <Box
              key={point.id}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.75,
                py: 1,
                borderRadius: 2,
                backgroundColor: "rgba(255,255,255,0.78)",
                border: `1px solid ${sitePalette.border}`,
                color: sitePalette.text,
                fontWeight: 700,
                fontSize: "0.92rem",
              }}
            >
              <Box sx={{ color: sitePalette.primary, display: "flex" }}>{point.icon}</Box>
              <FormattedMessage id={point.labelId} />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
            },
            gap: 1.5,
          }}
        >
          {capabilities.map((item, idx) => (
            <Box
              key={item.id}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.82)",
                border: `1px solid ${sitePalette.border}`,
                boxShadow: "0 10px 24px rgba(15, 38, 60, 0.08)",
                animation: `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${idx * 0.08}s both`,
                transition: "transform 0.25s ease",
                "&:hover": { transform: "translateY(-3px)" },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt=""
                loading="lazy"
                sx={{
                  width: "100%",
                  height: { xs: 110, md: 128 },
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  px: 1.5,
                  py: 1.25,
                  fontWeight: 700,
                  color: sitePalette.text,
                  textAlign: "center",
                }}
              >
                <FormattedMessage id={item.labelId} />
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        sx={{
          borderRadius: { xs: "20px", md: "24px" },
          backgroundColor: "rgba(255,255,255,0.72)",
          border: `1px solid ${sitePalette.border}`,
          p: { xs: 2.5, md: 3.5 },
          height: CAROUSEL_HEIGHT,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transition: `opacity ${TRANSITION_MS}ms ease, transform ${TRANSITION_MS}ms ease`,
          }}
        >
          <Grid container spacing={3} alignItems="stretch" sx={{ height: "100%" }}>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
                height: "100%",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  mb: 1.25,
                  px: 1.25,
                  py: 0.4,
                  borderRadius: "999px",
                  backgroundColor: sitePalette.surfaceStrong,
                  color: sitePalette.darkSoft,
                  fontWeight: 700,
                }}
              >
                {slide.agentNumber == null ? (
                  <FormattedMessage id={slide.labelId} />
                ) : (
                  <FormattedMessage
                    id={slide.labelId}
                    values={{ number: slide.agentNumber, total: AGENT_TOTAL }}
                  />
                )}
              </Typography>
              <Typography
                component="h2"
                variant="h4"
                fontWeight={800}
                gutterBottom
                sx={{
                  color: sitePalette.text,
                  fontSize: { xs: "1.55rem", md: "2rem" },
                  lineHeight: 1.2,
                }}
              >
                <FormattedMessage id={slide.titleId} />
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: sitePalette.textMuted,
                  mb: 2,
                  maxWidth: 640,
                  lineHeight: 1.65,
                  flex: 1,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: { xs: 8, md: 7 },
                  WebkitBoxOrient: "vertical",
                }}
              >
                <FormattedMessage id={slide.bodyId} />
              </Typography>
              <Box sx={{ mt: "auto" }}>
                {slide.url && (
                  <Link
                    href={slide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      color: sitePalette.primary,
                      fontWeight: 700,
                      mb: 2,
                      wordBreak: "break-all",
                    }}
                  >
                    {formatDisplayUrl(slide.url)}
                    <OpenInNewRoundedIcon sx={{ fontSize: 18 }} />
                  </Link>
                )}
                <Box display="flex" gap={1.5} flexWrap="wrap" alignItems="center">
                  <Button
                    onClick={onStart}
                    variant="contained"
                    sx={{
                      backgroundColor: sitePalette.primary,
                      color: sitePalette.textOnDark,
                      fontWeight: 600,
                      px: 3.5,
                      py: 1.25,
                      boxShadow: sitePalette.shadow,
                      "&:hover": { backgroundColor: sitePalette.primaryHover },
                    }}
                  >
                    <FormattedMessage id="get-started" />
                  </Button>
                  <IconButton
                    aria-label={intl.formatMessage({ id: "hero.prev" })}
                    onClick={() => goTo(activeIndex - 1)}
                    size="small"
                    sx={{ border: `1px solid ${sitePalette.border}` }}
                  >
                    <ArrowBackIosNewRoundedIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    aria-label={intl.formatMessage({ id: "hero.next" })}
                    onClick={() => goTo(activeIndex + 1)}
                    size="small"
                    sx={{ border: `1px solid ${sitePalette.border}` }}
                  >
                    <ArrowForwardIosRoundedIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LogoPlate slide={slide} intl={intl} />
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            mt: 2,
            flexShrink: 0,
          }}
        >
          {slides.map((item, index) => (
            <Box
              key={item.id}
              component="button"
              type="button"
              aria-label={intl.formatMessage(
                { id: "hero.goto-slide" },
                { number: index + 1 }
              )}
              onClick={() => goTo(index)}
              sx={{
                width: index === activeIndex ? 28 : 10,
                height: 10,
                border: 0,
                borderRadius: 999,
                cursor: "pointer",
                backgroundColor:
                  index === activeIndex ? sitePalette.primary : sitePalette.border,
                transition: "width 0.25s ease, background-color 0.25s ease",
                p: 0,
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default GetStartedMain;
