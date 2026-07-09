import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button, createTheme, Grid2, ThemeProvider } from "@mui/material";
import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import GetStarted from "./features/GetStarted";
import Header from "./features/Header";
import messages_ar from "./lang/ar.json";

import { Route, Routes } from "react-router-dom";
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
import { sitePalette } from "./util/siteTheme";

const Contact = lazy(() => import("./features/Contact"));
const Countries = lazy(() => import("./features/Countries"));
const Demo = lazy(() => import("./features/Demo"));
const Features = lazy(() => import("./features/Features"));
const Footer = lazy(() => import("./features/Footer"));
const KeaDemo = lazy(() => import("./features/Kea"));
const Pricing = lazy(() => import("./features/Pricing"));
const Ticker = lazy(() => import("./features/Ticker"));
const Why = lazy(() => import("./features/Why"));
const PrivacyPolicy = lazy(() => import("./features/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./features/TermsOfService"));

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
const handleScrollTopClick = () => {
  const element = document.getElementById("home");
  if (element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("langOverride") || navigatorLanguage
  );
  const [dir, setDir] = useState(
    localStorage.getItem("langOverride") === "ar" ? "rtl" : "ltr"
  );

  const theme = useMemo(
    () =>
      createTheme({
        direction: dir,
        palette: {
          primary: {
            main: sitePalette.primary,
            dark: sitePalette.primaryHover,
            light: sitePalette.primarySoft,
            contrastText: sitePalette.textOnDark,
          },
          secondary: {
            main: sitePalette.darkSoft,
            contrastText: sitePalette.textOnDark,
          },
          text: {
            primary: sitePalette.text,
            secondary: sitePalette.textMuted,
          },
          background: {
            default: sitePalette.surface,
            paper: sitePalette.white,
          },
        },
        typography: {
          fontFamily: '"Manrope", "Noto Sans Arabic", "Segoe UI", sans-serif',
          h3: {
            fontWeight: 800,
            lineHeight: 1.15,
          },
          h4: {
            fontWeight: 800,
            lineHeight: 1.2,
          },
          h5: {
            fontWeight: 700,
          },
          h6: {
            fontWeight: 700,
          },
          button: {
            textTransform: "none",
            fontWeight: 700,
          },
        },
        shape: {
          borderRadius: 18,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 999,
                paddingInline: "1.4rem",
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                borderRadius: 18,
              },
            },
          },
        },
      }),
    [dir]
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

  useEffect(() => {
    document.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const backToTopButton = document.getElementById("back-to-top");

      if (!backToTopButton) {
        return;
      }

      backToTopButton.style.visibility = scrollTop > 300 ? "visible" : "hidden";
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <IntlProvider messages={messages[language]} locale={language}>
          <Header onLanguageChange={handleLanguageChange} lang={language} />
          <Suspense fallback={null}>
            <Ticker />
          </Suspense>
          <Routes>
            <Route
              path="/"
              element={
                <Grid2 container spacing={0} direction="column">
                  <Grid2 item>
                    <GetStarted />
                  </Grid2>
                  <Grid2 item>
                    <Suspense fallback={null}>
                      <Countries />
                    </Suspense>
                  </Grid2>
                  <Grid2 item>
                    <Suspense fallback={null}>
                      <Features />
                    </Suspense>
                  </Grid2>
                  <Grid2 item>
                    <Suspense fallback={null}>
                      <Pricing />
                    </Suspense>
                  </Grid2>
                  <Grid2 item>
                    <Suspense fallback={null}>
                      <KeaDemo lang={language} />
                    </Suspense>
                  </Grid2>
                  <Grid2 item>
                    <Suspense fallback={null}>
                      <Demo />
                    </Suspense>
                  </Grid2>
                  <Grid2 item>
                    <Suspense fallback={null}>
                      <Why />
                    </Suspense>
                  </Grid2>
                  <Grid2 item>
                    <Suspense fallback={null}>
                      <Contact />
                    </Suspense>
                  </Grid2>
                  <Grid2 item>
                    <Suspense fallback={null}>
                      <Footer />
                    </Suspense>
                  </Grid2>
                </Grid2>
              }
            ></Route>
            <Route
              path="/privacy-policy"
              element={
                <Suspense fallback={null}>
                  <PrivacyPolicy />
                </Suspense>
              }
            ></Route>
            <Route
              path="/terms-of-service"
              element={
                <Suspense fallback={null}>
                  <TermsOfService />
                </Suspense>
              }
            ></Route>
          </Routes>
        </IntlProvider>
      </ThemeProvider>
      <div
        id="back-to-top"
        style={{
          position: "fixed",
          bottom: "6rem",
          right: "1rem",
          padding: "1rem",
          visibility: "hidden",
          zIndex: 20,
        }}
        onClick={handleScrollTopClick}
      >
        <Button
          variant="contained"
          sx={{
            minWidth: 0,
            width: 56,
            height: 56,
            background: sitePalette.darkGradient,
            boxShadow: sitePalette.shadow,
            "&:hover": {
              background: sitePalette.darkGradient,
            },
          }}
        >
          <ArrowUpwardIcon fontSize="large" sx={{ color: sitePalette.textOnDark }} />
        </Button>
      </div>
    </div>
  );
}

export default App;
