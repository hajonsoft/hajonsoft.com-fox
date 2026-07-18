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
  useMediaQuery,
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

const formatDisplayUrl = (url) =>
  url.replace(/^https?:\/\//, "").replace(/\/+$/, "");

const capabilities = [
  { id: "captcha", image: capabilityCaptcha, labelId: "hero.capability.captcha" },
  { id: "otp", image: capabilityOtp, labelId: "hero.capability.otp" },
  { id: "resize", image: capabilityResize, labelId: "hero.capability.resize" },
  { id: "forms", image: capabilityForms, labelId: "hero.capability.forms" },
];

const uniquenessPoints = [
  { id: "no-install", icon: <CloudDoneRoundedIcon fontSize="small" />, labelId: "hero.unique.no-install" },
  { id: "web-based", icon: <PhonelinkRoundedIcon fontSize="small" />, labelId: "hero.unique.web-based" },
  { id: "save-time", icon: <SpeedRoundedIcon fontSize="small" />, labelId: "hero.unique.save-time" },
];

const slides = [
  {
    id: "overview",
    titleId: "hero.slide.overview.title",
    bodyId: "hero.slide.overview.body",
    url: null,
    logo: ministryLogo,
    logoAltId: "hero.slide.overview.logo-label",
    labelId: "hero.overview-label",
    agentNumber: null,
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
      mx: "auto",
    }}
  >
    <Box
      component="img"
      src={slide.logo}
      alt={intl.formatMessage({ id: slide.logoAltId })}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        backgroundColor: slide.plateBg,
        p: 1.5,
        boxSizing: "border-box",
      }}
    />
  </Box>
);

const DesktopCarousel = ({
  slides,
  slide,
  activeIndex,
  goTo,
  onStart,
  intl,
  visible,
  setPaused,
}) => (
  <Box
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    sx={{
      borderRadius: "24px",
      backgroundColor: "rgba(255,255,255,0.85)",
      border: `1px solid ${sitePalette.border}`,
      p: 3.5,
      minHeight: 440,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        flex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: `opacity ${TRANSITION_MS}ms ease, transform ${TRANSITION_MS}ms ease`,
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography
            variant="caption"
            sx={{
              display: "inline-block",
              mb: 1,
              px: 1.25,
              py: 0.35,
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
            sx={{ fontSize: "2rem", lineHeight: 1.2, mb: 1 }}
          >
            <FormattedMessage id={slide.titleId} />
          </Typography>
          <Typography
            sx={{
              color: sitePalette.textMuted,
              mb: 2,
              lineHeight: 1.65,
              display: "-webkit-box",
              WebkitLineClamp: 7,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            <FormattedMessage id={slide.bodyId} />
          </Typography>
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
              }}
            >
              {formatDisplayUrl(slide.url)}
              <OpenInNewRoundedIcon sx={{ fontSize: 18 }} />
            </Link>
          )}
          <Box display="flex" gap={1.5} alignItems="center">
            <Button
              onClick={onStart}
              variant="contained"
              sx={{
                backgroundColor: sitePalette.primary,
                color: sitePalette.textOnDark,
                fontWeight: 600,
                px: 3.5,
                py: 1.25,
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
        </Grid>
        <Grid item xs={12} md={5}>
          <LogoPlate slide={slide} intl={intl} />
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mt: 2 }}>
      {slides.map((item, index) => (
        <Box
          key={item.id}
          component="button"
          type="button"
          aria-label={intl.formatMessage({ id: "hero.goto-slide" }, { number: index + 1 })}
          onClick={() => goTo(index)}
          sx={{
            width: index === activeIndex ? 28 : 10,
            height: 10,
            border: 0,
            borderRadius: 999,
            cursor: "pointer",
            backgroundColor:
              index === activeIndex ? sitePalette.primary : sitePalette.border,
            p: 0,
          }}
        />
      ))}
    </Box>
  </Box>
);

const GetStartedMain = ({ onStart }) => {
  const intl = useIntl();
  const isMobile = useMediaQuery("(max-width:900px)");
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
    const timer = window.setInterval(() => goTo(activeIndex + 1), AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, activeIndex]);

  // Mobile: skip carousel autoplay entirely
  useEffect(() => {
    if (isMobile) setPaused(true);
  }, [isMobile]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        px: { xs: 2.5, sm: 3, md: 3 },
        mx: "auto",
      }}
    >
      <Box sx={{ mb: { xs: 2, md: 3.5 }, textAlign: { xs: "left", md: "center" } }}>
        <Typography
          variant="overline"
          sx={{
            color: sitePalette.primary,
            fontWeight: 800,
            letterSpacing: { xs: 1, md: 1.6 },
            fontSize: { xs: "0.65rem", md: "0.75rem" },
          }}
        >
          <FormattedMessage id="hero.unique.eyebrow" />
        </Typography>
        <Typography
          component="h1"
          fontWeight={800}
          sx={{
            mt: 0.5,
            mb: { xs: 1.5, md: 1 },
            fontSize: { xs: "1.25rem", md: "2.35rem" },
            lineHeight: 1.3,
            maxWidth: 860,
            mx: { md: "auto" },
          }}
        >
          <FormattedMessage
            id={isMobile ? "hero.unique.title.mobile" : "hero.unique.title"}
          />
        </Typography>

        {!isMobile && (
          <Typography
            sx={{
              color: sitePalette.textMuted,
              fontWeight: 500,
              maxWidth: 760,
              mx: "auto",
              lineHeight: 1.55,
              mb: 2.5,
              fontSize: "1.15rem",
            }}
          >
            <FormattedMessage id="hero.unique.subtitle" />
          </Typography>
        )}

        {/* Mobile: stacked column · Desktop: wrap row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: { xs: "nowrap", md: "wrap" },
            justifyContent: { xs: "stretch", md: "center" },
            alignItems: { xs: "stretch", md: "center" },
            gap: { xs: 1, md: 1.25 },
            mb: { xs: 2, md: 3 },
          }}
        >
          {uniquenessPoints.map((point) => (
            <Box
              key={point.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.85,
                px: { xs: 1.5, md: 1.75 },
                py: { xs: 1, md: 1 },
                borderRadius: { xs: 2, md: 999 },
                backgroundColor: "rgba(255,255,255,0.85)",
                border: `1px solid ${sitePalette.border}`,
                color: sitePalette.text,
                fontWeight: 700,
                fontSize: { xs: "0.88rem", md: "0.92rem" },
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Box sx={{ color: sitePalette.primary, display: "flex", "& svg": { fontSize: { xs: 20, md: 16 } } }}>
                {point.icon}
              </Box>
              <FormattedMessage id={point.labelId} />
            </Box>
          ))}
        </Box>

        {/* Capability images: column on mobile, 4-col grid on desktop */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(4, minmax(0, 1fr))",
            },
            gap: { xs: 1.25, md: 1.5 },
          }}
        >
          {capabilities.map((item, idx) => (
            <Box
              key={item.id}
              sx={{
                borderRadius: { xs: 2, md: 3 },
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.82)",
                border: `1px solid ${sitePalette.border}`,
                boxShadow: "0 10px 24px rgba(15, 38, 60, 0.08)",
                animation: `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${idx * 0.08}s both`,
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                alignItems: { xs: "center", md: "stretch" },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt=""
                loading="lazy"
                sx={{
                  width: { xs: 88, md: "100%" },
                  height: { xs: 72, md: 128 },
                  objectFit: "cover",
                  display: "block",
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  px: { xs: 1.5, md: 1.5 },
                  py: { xs: 1.25, md: 1.25 },
                  fontWeight: 700,
                  color: sitePalette.text,
                  textAlign: { xs: "left", md: "center" },
                  fontSize: { xs: "0.85rem", md: "0.875rem" },
                  flex: 1,
                }}
              >
                <FormattedMessage id={item.labelId} />
              </Typography>
            </Box>
          ))}
        </Box>

        {isMobile && (
          <Button
            onClick={onStart}
            variant="contained"
            fullWidth
            sx={{
              mt: 2.5,
              backgroundColor: sitePalette.primary,
              color: sitePalette.textOnDark,
              fontWeight: 700,
              py: 1.25,
              boxShadow: "none",
              "&:hover": { backgroundColor: sitePalette.primaryHover },
            }}
          >
            <FormattedMessage id="get-started" />
          </Button>
        )}
      </Box>

      {/* Carousel: desktop only */}
      {!isMobile && (
        <DesktopCarousel
          slides={slides}
          slide={slide}
          activeIndex={activeIndex}
          goTo={goTo}
          onStart={onStart}
          intl={intl}
          visible={visible}
          setPaused={setPaused}
        />
      )}
    </Container>
  );
};

export default GetStartedMain;
