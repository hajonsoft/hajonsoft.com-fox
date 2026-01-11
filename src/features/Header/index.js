import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { analytics } from "../../analytics";
import logo from "../../images/logo.png";
import Styled from "./components/styled-components";

const Header = ({ onLanguageChange, lang }) => {
  const [language, setLanguage] = useState(lang);
  const isMobile = useMediaQuery("(max-width:600px)");

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
      position="static"
      sx={{
        marginBottom: "2rem",
        background: "linear-gradient(90deg, #6a0dad, #8e44ad)", // Royal purple
        color: "#fff",
      }}
    >
      <Styled.TopBar>
        <Grid
          container
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
          sx={{ paddingRight: "2rem", paddingTop: "0.25rem" }}
        >
          <Grid item>
            <Typography variant="body2">hajonsoft@gmail.com</Typography>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center">
              <Typography variant="body2" sx={{ marginRight: "0.5rem" }}>
                +1-949-522-1879
              </Typography>
              <IconButton
                color="inherit"
                size="small"
                href="https://wa.me/19495221879"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Styled.TopBar>

      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid
            item
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "0.5rem",
            }}
          >
            <img src={logo} alt="logo" width="64" />
          </Grid>

          <Grid item>
            {!isMobile && (
              <Grid container spacing={2} alignItems="center">
                {[
                  ["home", "header.home"],
                  ["features", "header.features"],
                  ["pricing", "header.pricing"],
                  ["contact", "header.contact-us"],
                ].map(([id, label]) => (
                  <Grid item key={id}>
                    <Styled.HeaderButton
                      color="inherit"
                      onClick={() => handleBookmarkClick(id)}
                    >
                      <Typography variant="body1">
                        <FormattedMessage id={label} />
                      </Typography>
                    </Styled.HeaderButton>
                  </Grid>
                ))}
                <Grid item>
                  <Styled.HeaderButton
                    color="inherit"
                    onClick={() =>
                      (window.location.href = "https://hajonsoft-kea.web.app")
                    }
                  >
                    <Typography variant="body1">
                      <FormattedMessage id="header.kea" />
                    </Typography>
                  </Styled.HeaderButton>
                </Grid>
              </Grid>
            )}
          </Grid>

          <Grid item>
            <Select
              value={language}
              onChange={handleLanguageChange}
              variant="standard"
              sx={{ color: "white", borderBottom: "1px solid white" }}
            >
              {[
                ["en", "English"],
                ["ar", "اللغه العربيه"],
                ["fr", "Française"],
                ["tr", "Türkçe"],
                ["de", "Deutsch"],
                ["it", "Italiano"],
                ["ja", "日本語 (にほんご)"],
                ["zh", "中文 (Zhōngwén)"],
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
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
