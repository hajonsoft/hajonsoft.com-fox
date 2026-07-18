import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { sitePalette } from "../../util/siteTheme";
import useInView from "../../util/useInView";

const agentKeys = [
  "features.masar-umrah",
  "features.ehaj-integration",
  "features.masar-hajj",
  "features.much-more",
  "features.visit-visa",
];

const Contact = () => {
  const intl = useIntl();
  const [sectionRef, sectionInView] = useInView();

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{
        py: { xs: 4, md: 9 },
        px: { xs: 1.5, md: 2 },
      }}
    >
      <Container maxWidth="md" disableGutters>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: { xs: 3, md: 5 },
            px: { xs: 2.25, md: 6 },
            py: { xs: 3.5, md: 6 },
            textAlign: "center",
            background: sitePalette.darkGradient,
            color: sitePalette.textOnDark,
            boxShadow: sitePalette.shadow,
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-4rem",
              left: "-3rem",
              width: 220,
              height: 220,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(64,144,208,0.35), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "-5rem",
              right: "-2rem",
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(142,188,230,0.22), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <Stack spacing={3} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 2,
                color: sitePalette.primarySoft,
                fontWeight: 700,
              }}
            >
              <FormattedMessage id="brand.name" />
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.85rem", md: "2.5rem" },
                maxWidth: 720,
                lineHeight: 1.2,
              }}
            >
              <FormattedMessage id="footer.tagline" />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(244,248,252,0.82)",
                maxWidth: 680,
                lineHeight: 1.8,
              }}
            >
              <FormattedMessage id="footer.description" />
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 1.25,
                maxWidth: 720,
                pt: 0.5,
              }}
            >
              {agentKeys.map((messageId, idx) => (
                <Box
                  key={messageId}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: sitePalette.textOnDark,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    animation: sectionInView
                      ? `fadeInUp 0.55s cubic-bezier(0.22,1,0.36,1) ${0.15 + idx * 0.08}s both`
                      : "none",
                  }}
                >
                  <FormattedMessage id={messageId} />
                </Box>
              ))}
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                onClick={() => {
                  window.location.href = "https://hajonsoft-kea.web.app/";
                }}
                sx={{
                  backgroundColor: sitePalette.primary,
                  color: sitePalette.textOnDark,
                  px: 3.5,
                  py: 1.35,
                  fontWeight: 700,
                  "&:hover": { backgroundColor: sitePalette.primaryHover },
                }}
              >
                <FormattedMessage id="get-started" />
              </Button>
              <Button
                variant="outlined"
                startIcon={<PlayCircleOutlineIcon />}
                onClick={() =>
                  window.open("https://player.vimeo.com/video/738277759", "_blank")
                }
                sx={{
                  borderColor: "rgba(255,255,255,0.45)",
                  color: sitePalette.textOnDark,
                  px: 3.5,
                  py: 1.35,
                  fontWeight: 700,
                  "&:hover": {
                    borderColor: sitePalette.textOnDark,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                {intl.formatMessage({ id: "demo.watch-demo" })}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
