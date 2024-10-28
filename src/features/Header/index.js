import {
  AppBar,
  Grid2,
  Select,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import logo from "../../images/logo.png";
import Styled from "./components/styled-components";
import { analytics } from "../../analytics";

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
    <AppBar id="home" position="static" color="inherit" sx={{
      marginBottom: "2rem",
    }}>
      <Styled.TopBar>
        <Grid2
          container
          spacing={2}
          justifyContent="flex-end"
          sx={{ marginRight: "6rem" }}
        >
          <Grid2 item>
            <Typography variant="body2">hajonsoft@gmail.com</Typography>
          </Grid2>
          <Grid2 item>
            <Typography variant="body2">
              <FormattedMessage id="header.telephone" />
            </Typography>
          </Grid2>
        </Grid2>
      </Styled.TopBar>
      <Toolbar>
        <Grid2 container justifyContent="space-between" alignItems="center" width={"100%"}>
          <Grid2 item>
            <img src={logo} alt="logo" width="64" />
          </Grid2>
          <Grid2 item>
            {!isMobile && (
              <Grid2
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid2 item>
                  <Styled.HeaderButton
                    color="primary"
                    onClick={() => handleBookmarkClick("home")}
                  >
                    <Typography variant="body1">
                      <FormattedMessage id="header.home" />
                    </Typography>
                  </Styled.HeaderButton>
                </Grid2>
                <Grid2 item>
                  <Styled.HeaderButton
                    color="primary"
                    onClick={() => handleBookmarkClick("features")}
                  >
                    <Typography variant="body1">
                      <FormattedMessage id="header.features" />
                    </Typography>
                  </Styled.HeaderButton>
                </Grid2>
                <Grid2 item>
                  <Styled.HeaderButton
                    color="primary"
                    onClick={() => handleBookmarkClick("pricing")}
                  >
                    <Typography variant="body1">
                      <FormattedMessage id="header.pricing" />
                    </Typography>
                  </Styled.HeaderButton>
                </Grid2>
                <Grid2 item>
                  <Styled.HeaderButton
                    color="primary"
                    onClick={() => handleBookmarkClick("contact")}
                  >
                    <Typography variant="body1">
                      <FormattedMessage id="header.contact-us" />
                    </Typography>
                  </Styled.HeaderButton>
                </Grid2>
                <Grid2 item>
                  <Styled.HeaderButton
                    color="primary"
                    onClick={() =>
                      (window.location.href = "https://hajonsoft-kea.web.app")
                    }
                  >
                    <Typography variant="body1">
                      <FormattedMessage id="header.kea" />
                    </Typography>
                  </Styled.HeaderButton>
                </Grid2>
              </Grid2>
            )}
          </Grid2>
          <Grid2 item>
            <Select
              value={language}
              onChange={handleLanguageChange}
              variant="standard"
            >
              <MenuItem value="en">
                <Typography variant="body1">English</Typography>
              </MenuItem>
              <MenuItem value="ar">
                <Typography variant="body1">اللغه العربيه</Typography>
              </MenuItem>
              <MenuItem value="fr">
                <Typography variant="body1">Française</Typography>
              </MenuItem>
              <MenuItem value="tr">
                <Typography variant="body1">Türkçe</Typography>
              </MenuItem>
              <MenuItem value="de">
                <Typography variant="body1">Deutsch</Typography>
              </MenuItem>
              <MenuItem value="it">
                <Typography variant="body1"> Italiano</Typography>
              </MenuItem>
              <MenuItem value="ja">
                <Typography variant="body1">日本語 (にほんご)</Typography>
              </MenuItem>
              <MenuItem value="zh">
                <Typography variant="body1">
                  中文 (Zhōngwén), 汉语, 漢語
                </Typography>
              </MenuItem>
              <MenuItem value="th">
                <Typography variant="body1">ไทย</Typography>
              </MenuItem>
              <MenuItem value="ms">
                <Typography variant="body1">Bahasa Melayu</Typography>
              </MenuItem>
              <MenuItem value="ru">
                <Typography variant="body1">русский</Typography>
              </MenuItem>
              <MenuItem value="hi">
                <Typography variant="body1">हिन्दी, हिंदी</Typography>
              </MenuItem>
            </Select>
          </Grid2>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
