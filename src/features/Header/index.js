import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  AppBar,
  Box,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { analytics } from "../../analytics";
import logo from "../../images/logo.png";
import { sitePalette } from "../../util/siteTheme";
import Styled from "./components/styled-components";

const Header = ({ onLanguageChange, lang }) => {
  const [language, setLanguage] = useState(lang);
  const isMobile = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    setLanguage(lang);
  }, [lang]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    onLanguageChange(e.target.value);
    analytics.logEvent("language", { language: e.target.value });
  };

  const handleBookmarkClick = (bookmark) => {
    const element = document.getElementById(bookmark);
    analytics.logEvent(bookmark);
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  return (
    <AppBar
      id="home"
      component="header"
      position="static"
      elevation={0}
      sx={{
        marginBottom: 0,
        backgroundColor: sitePalette.white,
        color: sitePalette.text,
        borderBottom: `1px solid ${sitePalette.border}`,
        boxShadow: "0 8px 24px rgba(15, 38, 60, 0.06)",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: { xs: 64, md: 72 },
          px: { xs: 1.25, md: 2.5 },
          alignItems: "center",
          gap: { xs: 1, md: 2 },
        }}
      >
        <Box
          component="a"
          href="/"
          aria-label="HAJonSoft"
          onClick={(e) => {
            e.preventDefault();
            handleBookmarkClick("home");
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            textDecoration: "none",
            py: 0.5,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="HAJonSoft"
            width={isMobile ? 96 : 118}
            height="auto"
            sx={{
              display: "block",
              borderRadius: 0,
              maxHeight: { xs: 44, md: 52 },
              width: "auto",
            }}
          />
        </Box>

        <Box
          component="nav"
          aria-label="Primary"
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 1, md: 2 },
            minWidth: 0,
          }}
        >
          {!isMobile && (
            <Box display="flex" alignItems="center" gap={0.5} flexWrap="wrap">
              {[
                ["home", "header.home"],
                ["features", "header.features"],
                ["pricing", "header.pricing"],
                ["contact", "header.demo"],
              ].map(([id, label]) => (
                <Styled.HeaderButton
                  key={id}
                  color="inherit"
                  onClick={() => handleBookmarkClick(id)}
                >
                  <Typography variant="body1">
                    <FormattedMessage id={label} />
                  </Typography>
                </Styled.HeaderButton>
              ))}
              <Styled.HeaderButton
                color="inherit"
                onClick={() => {
                  window.location.href = "https://hajonsoft-kea.web.app";
                }}
              >
                <Typography variant="body1">
                  <FormattedMessage id="header.kea" />
                </Typography>
              </Styled.HeaderButton>
            </Box>
          )}

          {isMobile && <Box flex={1} />}

          <Box
            display="flex"
            alignItems="center"
            gap={{ xs: 0.75, md: 1.5 }}
            flexShrink={0}
          >
            <Box
              component="a"
              href="https://wa.me/19495221879"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.logEvent("whatsapp")}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                color: sitePalette.text,
                textDecoration: "none",
                borderRadius: 999,
                px: { xs: 0.75, md: 1.25 },
                py: 0.5,
                backgroundColor: "rgba(37, 211, 102, 0.1)",
                border: "1px solid rgba(37, 211, 102, 0.35)",
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(37, 211, 102, 0.18)",
                },
              }}
            >
              <IconButton
                color="inherit"
                size="small"
                component="span"
                sx={{
                  p: 0.25,
                  color: "#25D366",
                }}
                aria-hidden
                tabIndex={-1}
              >
                <WhatsAppIcon fontSize="small" />
              </IconButton>
              {!isMobile && (
                <Typography variant="body2" sx={{ fontWeight: 600, whiteSpace: "nowrap" }}>
                  <FormattedMessage id="header.telephone" />
                </Typography>
              )}
            </Box>

            <Select
              value={language}
              onChange={handleLanguageChange}
              variant="standard"
              aria-label="Language"
              sx={{
                color: sitePalette.text,
                borderBottom: `1px solid ${sitePalette.border}`,
                minWidth: { xs: 72, md: 110 },
                "&:before, &:after": {
                  borderBottomColor: sitePalette.border,
                },
                ".MuiSvgIcon-root": {
                  color: sitePalette.textMuted,
                },
              }}
            >
              {[
                ["en", "English"],
                ["ar", "اللغه العربيه"],
                ["fr", "Française"],
                ["tr", "Türkçe"],
                ["de", "Deutsch"],
                ["it", "Italiano"],
                ["ja", "日本語"],
                ["zh", "中文"],
                ["th", "ไทย"],
                ["ms", "Bahasa Melayu"],
                ["ru", "русский"],
                ["hi", "हिन्दी"],
              ].map(([val, label]) => (
                <MenuItem key={val} value={val}>
                  <Typography variant="body1">{label}</Typography>
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
