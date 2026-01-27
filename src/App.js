import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button, createMuiTheme, Grid2, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { IntlProvider } from "react-intl";
import Contact from "./features/Contact";
import Countries from "./features/Countries";
import Demo from "./features/Demo";
import Features from "./features/Features";
import Footer from "./features/Footer";
import GetStarted from "./features/GetStarted";
import Header from "./features/Header";
import KeaDemo from "./features/Kea";
import Why from "./features/Why";
import messages_ar from "./lang/ar.json";

import { Route, Routes } from "react-router-dom";
import ConferenceMeeting from "./conference/Meeting";
import messages_de from "./lang/de.json";
import messages_en from "./lang/en.json";
import messages_fr from "./lang/fr.json";
import messages_hi from "./lang/hi.json";
import messages_it from "./lang/it.json";
import messages_ja from "./lang/ja.json";
import messages_ms from "./lang/ms.json";
import messages_ru from "./lang/ru.json";
import messages_th from "./lang/th.json";
import messages_tr from "./lang/tr.json";
import messages_zh from "./lang/zh.json";

// addLocaleData([...locale_en, ...locale_ar, ...locale_fr]);

const messages = {
  fr: messages_fr,
  ar: messages_ar,
  en: messages_en,
  de: messages_de,
  hi: messages_hi,
  it: messages_it,
  ja: messages_ja,
  ms: messages_ms,
  ru: messages_ru,
  th: messages_th,
  zh: messages_zh,
  tr: messages_tr,
};
let navigatorLanguage = navigator.language.split(/[-_]/)[0];
if (!messages[navigatorLanguage]) {
  navigatorLanguage = "en";
}
const theme = createMuiTheme({
  direction: "ltr",
});

const handleScrollTopClick = () => {
  const element = document.getElementById("home");
  if (element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

onscroll = function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 300) {
    document.getElementById("back-to-top").style.visibility = "visible";
  } else {
    document.getElementById("back-to-top").style.visibility = "hidden";
  }
};

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("langOverride") || navigatorLanguage
  );
  const [dir, setDir] = useState(
    localStorage.getItem("langOverride") === "ar" ? "rtl" : "ltr"
  );

  const handleLanguageChange = (lang) => {
    if (lang === "ar" && dir !== "rtl") {
      setDir("rtl");
    }

    if (lang !== "ar" && dir === "rtl") {
      setDir("ltr");
    }
    setLanguage(lang);
    localStorage.setItem("langOverride", lang);
  };

  document.dir = dir;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <IntlProvider messages={messages[language]} locale={language}>
          <Header onLanguageChange={handleLanguageChange} lang={language} />
          <Routes>
            <Route
              path="/"
              element={
                <Grid2 container spacing={2} direction="column">
                  <Grid2 item>
                    <GetStarted />
                  </Grid2>
                  <Grid2 item>
                    <Countries />
                  </Grid2>
                  <Grid2 item>
                    <Features />
                  </Grid2>
                  <Grid2 item>
                    <KeaDemo lang={language} />
                  </Grid2>
                  {/* <Grid2 item className={classes.containerStyle}>
                    <Pricing />
                  </Grid2> */}
                  <Grid2 item>
                    <Demo />
                  </Grid2>
                  <Grid2 item>
                    <Contact />
                  </Grid2>
                  <Grid2 item>
                    <Why />
                  </Grid2>
                  <Grid2 item>
                    <Footer />
                  </Grid2>
                </Grid2>
              }
            ></Route>
            <Route path="/conference" element={<ConferenceMeeting />}></Route>
          </Routes>
        </IntlProvider>
      </ThemeProvider>
      <div
        id="back-to-top"
        style={{
          position: "fixed",
          bottom: "6rem",
          right: 0,
          padding: "1rem",
          visibility: "hidden",
        }}
        onClick={handleScrollTopClick}
      >
        <Button>
          <ArrowUpwardIcon fontSize="large" color="#69A2CC" />
        </Button>
      </div>
    </div>
  );
}

export default App;
