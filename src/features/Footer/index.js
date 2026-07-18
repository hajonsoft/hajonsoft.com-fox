import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import owl from "../../images/owl.svg";
import { sitePalette } from "../../util/siteTheme";

const WEBMAIL_URL = "https://giow1026.siteground.us/webmail/log-in";
const USER_TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

const Footer = () => {
  return (
    <Box
      sx={{
        background: sitePalette.darkGradient,
        color: sitePalette.textOnDark,
        marginTop: { xs: 2, md: 4 },
        paddingTop: { xs: 4, md: 6 },
      }}
    >
      <Container sx={{ px: { xs: 2, md: 3 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 4 }}
          alignItems={{ xs: "flex-start", md: "stretch" }}
        >
          <Stack spacing={1.5} sx={{ minWidth: { md: 220 } }}>
            <Box
              sx={{
                display: "inline-flex",
                backgroundColor: sitePalette.white,
                borderRadius: 0,
                px: 1.25,
                py: 0.75,
                width: "fit-content",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="HAJonSoft"
                sx={{ width: { xs: 96, md: 110 }, height: "auto", display: "block" }}
              />
            </Box>
            <Typography variant="body2">admin@hajonsoft.net</Typography>
            <Typography variant="body2">
              <FormattedMessage id="header.telephone" />
            </Typography>
            <Button
              href={WEBMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              sx={{
                alignSelf: "flex-start",
                color: sitePalette.textOnDark,
                borderColor: "rgba(255,255,255,0.55)",
                "&:hover": {
                  borderColor: sitePalette.textOnDark,
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              <FormattedMessage id="footer.webmail-login" />
            </Button>
            <Typography variant="caption" sx={{ color: "rgba(245, 251, 247, 0.6)" }}>
              {USER_TIMEZONE}
            </Typography>
          </Stack>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
              <FormattedMessage id="footer.tagline" />
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(245, 251, 247, 0.76)",
                maxWidth: 680,
                fontSize: { xs: "0.92rem", md: "1rem" },
                lineHeight: 1.7,
              }}
            >
              <FormattedMessage id="footer.description" />
            </Typography>
          </Box>
        </Stack>
      </Container>

      <Box
        sx={{
          width: "100%",
          mt: { xs: 3, md: 4 },
          py: 2,
          px: { xs: 2, md: 3 },
          backgroundColor: "rgba(6, 18, 14, 0.42)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container disableGutters>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexWrap="wrap"
            useFlexGap
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2">
                © {new Date().getFullYear()}{" "}
                <FormattedMessage id="brand.name" />
              </Typography>
              <Box component="img" src={owl} alt="" width={28} height={28} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 1, sm: 1.5 },
                alignItems: "center",
                rowGap: 0.75,
              }}
            >
              <Link
                to="/privacy-policy"
                style={{ color: "inherit", textDecoration: "underline", fontSize: "0.875rem" }}
              >
                <FormattedMessage id="footer.privacy-policy" />
              </Link>
              <Typography component="span" variant="body2" sx={{ opacity: 0.5 }}>
                ·
              </Typography>
              <Link
                to="/terms-of-service"
                style={{ color: "inherit", textDecoration: "underline", fontSize: "0.875rem" }}
              >
                <FormattedMessage id="footer.terms-of-service" />
              </Link>
              <Typography component="span" variant="body2" sx={{ opacity: 0.5 }}>
                ·
              </Typography>
              <Link
                to="/about-the-technology"
                style={{ color: "inherit", textDecoration: "underline", fontSize: "0.875rem" }}
              >
                <FormattedMessage id="footer.about-the-technology" />
              </Link>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
