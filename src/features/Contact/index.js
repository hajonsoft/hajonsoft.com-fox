import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { sitePalette } from "../../util/siteTheme";

const Contact = () => {
  const intl = useIntl();

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 8 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            padding: { xs: 3, md: 5 },
            background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(230,242,234,0.92) 55%, rgba(214,234,220,0.9) 100%)",
            border: `1px solid ${sitePalette.border}`,
            boxShadow: sitePalette.shadow,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: "auto -5rem -6rem auto",
              width: 220,
              height: 220,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(47,125,87,0.22), rgba(47,125,87,0))",
            }}
          />
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={2.5}>
                <Typography variant="h4">
                  <FormattedMessage id="footer.tagline" />
                </Typography>
                <Typography variant="body1" sx={{ color: sitePalette.textMuted, maxWidth: 680, lineHeight: 1.8 }}>
                  <FormattedMessage id="footer.description" />
                </Typography>
                <Grid container spacing={1.5}>
                  {[
                    "features.quality-passport-reader",
                    "features.masar-umrah",
                    "features.ehaj-integration",
                    "features.visit-visa",
                  ].map((messageId) => (
                    <Grid item key={messageId}>
                      <Box
                        sx={{
                          px: 2,
                          py: 1,
                          borderRadius: 999,
                          backgroundColor: "rgba(255,255,255,0.8)",
                          border: `1px solid ${sitePalette.border}`,
                          color: sitePalette.darkSoft,
                          fontWeight: 700,
                          animation: "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
                        }}
                      >
                        <FormattedMessage id={messageId} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<PlayCircleOutlineIcon />}
                    onClick={() =>
                      window.open("https://player.vimeo.com/video/738277759", "_blank")
                    }
                    sx={{
                      backgroundColor: sitePalette.primary,
                      color: sitePalette.textOnDark,
                      "&:hover": { backgroundColor: sitePalette.primaryHover },
                    }}
                  >
                    {intl.formatMessage({ id: "demo.watch-demo" })}
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<SupportAgentRoundedIcon />}
                    onClick={() =>
                      window.open("https://meet.google.com/eap-zdrm-abh", "_blank")
                    }
                    sx={{
                      borderColor: sitePalette.darkSoft,
                      color: sitePalette.darkSoft,
                      backgroundColor: "rgba(255,255,255,0.58)",
                      "&:hover": {
                        borderColor: sitePalette.primary,
                        backgroundColor: "rgba(255,255,255,0.85)",
                        color: sitePalette.primary,
                      },
                    }}
                  >
                    {intl.formatMessage({ id: "footer.meet-now" })}
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: 280, md: 340 },
                  borderRadius: 5,
                  background: sitePalette.darkGradient,
                  color: sitePalette.textOnDark,
                  padding: 3,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: "1.5rem auto auto 1.5rem",
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.16)",
                    animation: "float 5s ease-in-out infinite",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: "auto 2rem 2rem auto",
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(143,196,160,0.42), rgba(143,196,160,0))",
                    animation: "float 6.5s ease-in-out infinite",
                  }}
                />
                <Stack spacing={2} sx={{ position: "relative", zIndex: 1 }}>
                  {[
                    "features.sell",
                    "features.quality-passport-reader",
                    "features.twf-sender-description",
                  ].map((messageId, idx) => (
                    <Box
                      key={messageId}
                      sx={{
                        ml: { xs: 0, sm: idx === 1 ? "auto" : 0 },
                        maxWidth: { xs: "100%", sm: idx === 1 ? 250 : 320 },
                        width: "100%",
                        px: 2,
                        py: 1.5,
                        borderRadius: 4,
                        backgroundColor: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        animation: `fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) ${idx * 0.18}s both`,
                      }}
                    >
                      <Typography
                        variant={idx === 2 ? "body2" : "subtitle2"}
                        sx={{
                          color: sitePalette.textOnDark,
                          lineHeight: 1.45,
                          overflowWrap: "anywhere",
                          wordBreak: "break-word",
                          display: idx === 2 ? "block" : "-webkit-box",
                          WebkitLineClamp: idx === 2 ? "unset" : 3,
                          WebkitBoxOrient: idx === 2 ? "unset" : "vertical",
                          overflow: idx === 2 ? "visible" : "hidden",
                        }}
                      >
                        <FormattedMessage id={messageId} />
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
