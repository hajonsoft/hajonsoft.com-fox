import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Link,
  Popover,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { sitePalette } from "../../util/siteTheme";
import useInView from "../../util/useInView";

const svgIcons = {
  ministry: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Enjaz">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#EAF2F9" />
      <path d="M18 43h28" stroke="#2F74B0" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 43V31h16v12" fill="#4090D0" />
      <path d="M22 31h20L32 22 22 31z" fill="#2F74B0" />
      <circle cx="48" cy="39" r="8" fill="#2F74B0" />
      <path d="M44.5 39.5l2.3 2.3 4.7-5.2" stroke="#F4F8FC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  masarUmrah: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Nusuk Umrah">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#EAF2F9" />
      <circle cx="19" cy="45" r="4.5" fill="#2F74B0" />
      <circle cx="32" cy="30" r="4.5" fill="#4090D0" />
      <circle cx="46" cy="20" r="4.5" fill="#2F74B0" />
      <path d="M22.5 42L28 35.8c1.5-1.7 4-1.9 5.7-.5l3.6 2.9c1.8 1.5 4.5 1.2 6-.6L49 30" stroke="#1A2740" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  masarHajj: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Nusuk Hajj Global">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#EAF2F9" />
      <rect x="22" y="23" width="20" height="20" rx="2" fill="#1A2740" />
      <rect x="22" y="23" width="20" height="5" fill="#8EBCE6" />
      <path d="M17 46h30" stroke="#5A8FBF" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="16" r="3" fill="#5A8FBF" />
    </svg>
  ),
  visitVisa: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Visit Saudi">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#EAF2F9" />
      <rect x="14" y="15" width="36" height="34" rx="5" fill="#2F74B0" />
      <circle cx="26" cy="29" r="5" fill="#E8F1F9" />
      <path d="M35 26h9M35 31h11M19 39h26" stroke="#E8F1F9" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M48 14v11" stroke="#8EBCE6" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  mission: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Nusuk Hajj Missions">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#EAF2F9" />
      <circle cx="21" cy="32" r="5" fill="#5A9FD6" />
      <circle cx="32" cy="21" r="5" fill="#2F74B0" />
      <circle cx="43" cy="32" r="5" fill="#5A9FD6" />
      <circle cx="32" cy="43" r="5" fill="#2F74B0" />
      <path d="M24.5 29.5l5-5M39.5 29.5l-5-5M24.5 34.5l5 5M39.5 34.5l-5 5" stroke="#1A2740" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

const players = [
  {
    title: "features.masar-umrah",
    icon: svgIcons.masarUmrah,
    description: "features.wtu-sender-description",
    targetUrl: "https://masar.nusuk.sa/",
  },
  {
    title: "features.ehaj-integration",
    icon: svgIcons.ministry,
    description: "features.ehaj-integration-description",
    targetUrl: "https://services.ksavisa.sa/",
  },
  {
    title: "features.masar-hajj",
    icon: svgIcons.masarHajj,
    description: "features.twf-sender-description",
    targetUrl: "https://hajj.nusuk.sa/",
  },
  {
    title: "features.much-more",
    icon: svgIcons.mission,
    description: "features.bau-sender-description",
    targetUrl: "https://masar.nusuk.sa/",
  },
  {
    title: "features.visit-visa",
    icon: svgIcons.visitVisa,
    description: "features.gma-sender-description",
    targetUrl: "https://visa.visitsaudi.com/",
  },
];

const Features = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [sectionRef, sectionInView] = useInView();
  const isMobile = useMediaQuery("(max-width:600px)");
  const activePlayer = selectedIndex >= 0 ? players[selectedIndex] : null;
  const detailsOpen = Boolean(anchorEl) && activePlayer !== null;

  const handleOpenDetails = (event, idx) => {
    event.preventDefault();

    if (detailsOpen && selectedIndex === idx) {
      setAnchorEl(null);
      setSelectedIndex(-1);
      return;
    }

    setAnchorEl(event.currentTarget);
    setSelectedIndex(idx);
  };

  const handleCloseDetails = () => {
    setAnchorEl(null);
    setSelectedIndex(-1);
  };

  return (
    <Box
      id="features"
      ref={sectionRef}
      sx={{
        padding: { xs: "1rem 0", md: "2rem 0" },
        background: sitePalette.softGradient,
        opacity: sectionInView ? 1 : 0,
        transform: sectionInView ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: { xs: 3, md: 4 }, px: { xs: 0.5, md: 0 } }}>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontSize: { xs: "1.4rem", md: "2.125rem" }, px: 1 }}
          >
            <FormattedMessage id="features.manage-effortlessly" />
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: sitePalette.textMuted,
              maxWidth: 920,
              mx: "auto",
              fontSize: { xs: "0.92rem", md: "1rem" },
              px: 0.5,
              display: { xs: "none", md: "block" },
            }}
          >
            <FormattedMessage id="features.complete-software" />
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
              lg: "repeat(5, minmax(0, 1fr))",
            },
            gap: { xs: 1.75, md: 2.5 },
            alignItems: "stretch",
            px: { xs: 0.5, md: 0 },
          }}
        >
          {players.map((player, idx) => {
            const isActive = selectedIndex === idx && detailsOpen;

            return (
              <Box
                key={player.title}
                className="anim-hover-lift"
                sx={{
                  height: "100%",
                  minHeight: { xs: "auto", lg: 360 },
                  display: "flex",
                  flexDirection: "column",
                  padding: { xs: 2, md: 2.5 },
                  borderRadius: 4,
                  backgroundColor: isActive ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.9)",
                  border: `1px solid ${isActive ? sitePalette.primarySoft : sitePalette.border}`,
                  boxShadow: isActive ? sitePalette.shadow : "0 10px 24px rgba(15, 38, 60, 0.08)",
                  opacity: sectionInView ? 1 : 0,
                  animation: sectionInView
                    ? `fadeInUp 0.65s cubic-bezier(0.22,1,0.36,1) ${idx * 0.1}s both`
                    : "none",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  "&:hover": {
                    borderColor: sitePalette.primarySoft,
                    boxShadow: sitePalette.shadow,
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 1.5,
                    animation: sectionInView
                      ? `float 4.5s ease-in-out ${idx * 0.2}s infinite`
                      : "none",
                    width: "fit-content",
                  }}
                >
                  {player.icon}
                </Box>
                <Typography variant="h6" sx={{ mb: 1.25, fontSize: "1.05rem", lineHeight: 1.3 }}>
                  <FormattedMessage id={player.title} />
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: sitePalette.textMuted,
                    lineHeight: 1.65,
                    flex: 1,
                    display: { xs: "none", sm: "-webkit-box" },
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    mb: 1.5,
                  }}
                >
                  <FormattedMessage id={player.description} />
                </Typography>
                <Link
                  component="button"
                  underline="hover"
                  onClick={(event) => handleOpenDetails(event, idx)}
                  sx={{
                    mt: "auto",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: isActive ? sitePalette.primaryHover : sitePalette.primary,
                    cursor: "pointer",
                    textAlign: "left",
                    alignSelf: "flex-start",
                    "&:hover": {
                      color: sitePalette.primaryHover,
                    },
                  }}
                >
                  <FormattedMessage id="pricing.learn-more" />
                </Link>
              </Box>
            );
          })}
        </Box>

        {isMobile ? (
          <Dialog
            open={detailsOpen}
            onClose={handleCloseDetails}
            fullWidth
            maxWidth="sm"
            PaperProps={{
              sx: {
                m: 1.5,
                borderRadius: 3,
                background: sitePalette.softGradient,
                border: `1px solid ${sitePalette.primarySoft}`,
              },
            }}
          >
            {activePlayer && (
              <DialogContent sx={{ p: 2.5 }}>
                <FeatureDetails
                  activePlayer={activePlayer}
                  onClose={handleCloseDetails}
                />
              </DialogContent>
            )}
          </Dialog>
        ) : (
          <Popover
            open={detailsOpen}
            anchorEl={anchorEl}
            onClose={handleCloseDetails}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            slotProps={{
              paper: {
                sx: {
                  width: 460,
                  maxHeight: "70vh",
                  overflowY: "auto",
                  borderRadius: 4,
                  border: `1px solid ${sitePalette.primarySoft}`,
                  boxShadow: sitePalette.shadow,
                  background: sitePalette.softGradient,
                },
              },
            }}
          >
            {activePlayer && (
              <Box sx={{ p: 3 }}>
                <FeatureDetails
                  activePlayer={activePlayer}
                  onClose={handleCloseDetails}
                />
              </Box>
            )}
          </Popover>
        )}
      </Container>
    </Box>
  );
};

const FeatureDetails = ({ activePlayer, onClose }) => (
  <Stack spacing={2}>
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, minWidth: 0 }}>
        {activePlayer.icon}
        <Typography variant="h6" sx={{ fontSize: { xs: "1.05rem", md: "1.25rem" } }}>
          <FormattedMessage id={activePlayer.title} />
        </Typography>
      </Box>
      <IconButton size="small" onClick={onClose} aria-label="Close">
        <CloseRoundedIcon fontSize="small" />
      </IconButton>
    </Box>

    <Typography variant="body2" sx={{ color: sitePalette.text, lineHeight: 1.75 }}>
      <FormattedMessage id={activePlayer.description} />
    </Typography>

    {activePlayer.targetUrl && (
      <Button
        component="a"
        href={activePlayer.targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
        endIcon={<OpenInNewRoundedIcon />}
        sx={{
          justifyContent: "space-between",
          borderColor: sitePalette.border,
          color: sitePalette.darkSoft,
          backgroundColor: "rgba(255,255,255,0.75)",
          textTransform: "none",
          wordBreak: "break-all",
          "&:hover": {
            borderColor: sitePalette.primary,
            backgroundColor: "rgba(64, 144, 208, 0.08)",
          },
        }}
      >
        {activePlayer.targetUrl.replace(/^https?:\/\//, "").replace(/\/+$/, "")}
      </Button>
    )}

    <Button
      startIcon={<ArrowBackRoundedIcon />}
      variant="text"
      onClick={onClose}
      sx={{
        justifyContent: "flex-start",
        px: 0,
        color: sitePalette.primary,
        "&:hover": { backgroundColor: "transparent", color: sitePalette.primaryHover },
      }}
    >
      <FormattedMessage id="header.features" />
    </Button>
  </Stack>
);

export default Features;
