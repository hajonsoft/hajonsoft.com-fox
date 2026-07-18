import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
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

const MENU_ITEMS = [
  ["home", "header.home"],
  ["features", "header.features"],
  ["pricing", "header.pricing"],
  ["contact", "header.demo"],
];

const LANGUAGES = [
  ["en", "English"],
  ["ar", "العربية"],
  ["fr", "Français"],
  ["tr", "Türkçe"],
  ["de", "Deutsch"],
  ["it", "Italiano"],
  ["ja", "日本語"],
  ["zh", "中文"],
  ["th", "ไทย"],
  ["ms", "Melayu"],
  ["ru", "Русский"],
  ["hi", "हिन्दी"],
];

const Header = ({ onLanguageChange, lang }) => {
  const [language, setLanguage] = useState(lang);
  const [menuOpen, setMenuOpen] = useState(false);
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
    setMenuOpen(false);
    const element = document.getElementById(bookmark);
    analytics.logEvent(bookmark);
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const goLogin = () => {
    setMenuOpen(false);
    analytics.logEvent("login");
    window.location.href = "https://hajonsoft-kea.web.app";
  };

  return (
    <AppBar
      id="home"
      component="header"
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: sitePalette.white,
        color: sitePalette.text,
        borderBottom: `1px solid ${sitePalette.border}`,
        boxShadow: "0 6px 18px rgba(15, 38, 60, 0.05)",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: { xs: 64, md: 72 },
          px: { xs: 1, md: 2.5 },
          gap: { xs: 0.5, md: 1.5 },
          position: "relative",
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
          sx={{ display: "flex", alignItems: "center", flexShrink: 0, zIndex: 1 }}
        >
          <Box
            component="img"
            src={logo}
            alt="HAJonSoft"
            sx={{
              display: "block",
              height: { xs: 30, md: 52 },
              width: "auto",
            }}
          />
        </Box>

        {!isMobile && (
          <Box
            component="nav"
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              minWidth: 0,
            }}
          >
            {MENU_ITEMS.map(([id, label]) => (
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
            <Styled.HeaderButton color="inherit" onClick={goLogin}>
              <Typography variant="body1">
                <FormattedMessage id="header.kea" />
              </Typography>
            </Styled.HeaderButton>
          </Box>
        )}

        {/* Mobile: Login + WhatsApp centered in the header */}
        {isMobile && (
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              zIndex: 1,
            }}
          >
            <Button
              variant="contained"
              onClick={goLogin}
              sx={{
                backgroundColor: sitePalette.primary,
                color: sitePalette.textOnDark,
                fontWeight: 800,
                px: 3,
                py: 1.15,
                minWidth: 120,
                height: 48,
                fontSize: "1.05rem",
                letterSpacing: 0.3,
                borderRadius: 999,
                boxShadow: "0 6px 18px rgba(64, 144, 208, 0.45)",
                "&:hover": {
                  backgroundColor: sitePalette.primaryHover,
                  boxShadow: "0 8px 22px rgba(47, 116, 176, 0.5)",
                },
              }}
            >
              <FormattedMessage id="header.kea" />
            </Button>
            <IconButton
              component="a"
              href="https://wa.me/19495221879"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.logEvent("whatsapp")}
              aria-label="WhatsApp"
              sx={{
                color: "#fff",
                backgroundColor: "#25D366",
                width: 48,
                height: 48,
                boxShadow: "0 6px 18px rgba(37, 211, 102, 0.4)",
                "&:hover": {
                  backgroundColor: "#1ebe57",
                },
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Box>
        )}

        <Box
          sx={{
            ml: "auto",
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.25, md: 1.25 },
            zIndex: 1,
          }}
        >
          {!isMobile && (
            <>
              <IconButton
                component="a"
                href="https://wa.me/19495221879"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.logEvent("whatsapp")}
                aria-label="WhatsApp"
                sx={{
                  color: "#25D366",
                  backgroundColor: "rgba(37, 211, 102, 0.1)",
                  border: "1px solid rgba(37, 211, 102, 0.3)",
                  width: 40,
                  height: 40,
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 22 }} />
              </IconButton>
              <Box
                component="a"
                href="https://wa.me/19495221879"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: { xs: "none", lg: "inline-flex" },
                  color: sitePalette.text,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                <FormattedMessage id="header.telephone" />
              </Box>
              <Select
                value={language}
                onChange={handleLanguageChange}
                variant="standard"
                aria-label="Language"
                sx={{
                  color: sitePalette.text,
                  minWidth: 110,
                  ".MuiSvgIcon-root": { color: sitePalette.textMuted },
                }}
              >
                {LANGUAGES.map(([val, label]) => (
                  <MenuItem key={val} value={val}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </>
          )}

          {isMobile && (
            <IconButton
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              sx={{ color: sitePalette.text, width: 44, height: 44 }}
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{
          sx: { width: "min(82vw, 300px)", backgroundColor: sitePalette.white },
        }}
      >
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography variant="subtitle2" sx={{ color: sitePalette.textMuted, fontWeight: 700 }}>
            Menu
          </Typography>
        </Box>
        <Divider />
        <List dense>
          {MENU_ITEMS.map(([id, label]) => (
            <ListItemButton key={id} onClick={() => handleBookmarkClick(id)}>
              <ListItemText
                primary={<FormattedMessage id={label} />}
                primaryTypographyProps={{ fontWeight: 700 }}
              />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <Box sx={{ px: 2, py: 2 }}>
          <Typography
            variant="caption"
            sx={{ color: sitePalette.textMuted, fontWeight: 700, display: "block", mb: 1 }}
          >
            Language
          </Typography>
          <Select
            fullWidth
            value={language}
            onChange={handleLanguageChange}
            size="small"
            sx={{ mb: 2 }}
          >
            {LANGUAGES.map(([val, label]) => (
              <MenuItem key={val} value={val}>
                {label}
              </MenuItem>
            ))}
          </Select>
          <Box
            component="a"
            href="https://wa.me/19495221879"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: sitePalette.text,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
            <WhatsAppIcon sx={{ color: "#25D366", fontSize: 20 }} />
            <FormattedMessage id="header.telephone" />
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
