import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button, createTheme, Grid2, ThemeProvider, useMediaQuery } from "@mui/material";
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
import {
  detectPreferredLanguageAsync,
  detectPreferredLanguageSync,
} from "./util/detectPreferredLanguage";
import SeoHead from "./util/SeoHead";
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
const AboutTheTechnology = lazy(() => import("./features/AboutTheTechnology"));

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

const initialLanguage = detectPreferredLanguageSync();

const handleScrollTopClick = () => {
  const element = document.getElementById("home");
  if (element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

function App() {
  const [language, setLanguage] = useState(initialLanguage);
  const [dir, setDir] = useState(initialLanguage === "ar" ? "rtl" : "ltr");
  const isMobile = useMediaQuery("(max-width:900px)");

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
            main: sitePalette.secondary,
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

  // Strengthen language from timezone / visitor country when the user has not
  // manually chosen a language and the browser only offered English (or nothing).
  useEffect(() => {
    let cancelled = false;

    const applyLanguage = (lang) => {
      if (cancelled || !lang || !messages[lang] || lang === language) return;
      if (localStorage.getItem("langOverride")) return;
      setLanguage(lang);
      setDir(lang === "ar" ? "rtl" : "ltr");
    };

    detectPreferredLanguageAsync().then(applyLanguage);

    return () => {
      cancelled = true;
    };
    // Run once on mount — intentional empty deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <SeoHead language={language} />
          <Header onLanguageChange={handleLanguageChange} lang={language} />
          <Routes>
            <Route
              path="/"
              element={
                <Grid2 container spacing={0} direction="column">
                  <Grid2 item>
                    <GetStarted />
                  </Grid2>
                  {/* Mobile home: hero → countries → pricing → footer */}
                  {isMobile ? (
                    <>
                      <Grid2 item>
                        <Suspense fallback={null}>
                          <Countries />
                        </Suspense>
                      </Grid2>
                      <Grid2 item>
                        <Suspense fallback={null}>
                          <Pricing />
                        </Suspense>
                      </Grid2>
                      <Grid2 item>
                        <Suspense fallback={null}>
                          <Footer />
                        </Suspense>
                      </Grid2>
                    </>
                  ) : (
                    <>
                      <Grid2 item>
                        <Suspense fallback={null}>
                          <Ticker />
                        </Suspense>
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
                    </>
                  )}
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
            <Route
              path="/about-the-technology"
              element={
                <Suspense fallback={null}>
                  <AboutTheTechnology />
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
          bottom: "1.25rem",
          right: "1rem",
          visibility: "hidden",
          zIndex: 20,
        }}
        onClick={handleScrollTopClick}
      >
        <Button
          variant="contained"
          aria-label="Back to top"
          sx={{
            minWidth: 0,
            width: { xs: 44, md: 56 },
            height: { xs: 44, md: 56 },
            background: sitePalette.darkGradient,
            boxShadow: sitePalette.shadow,
            "&:hover": {
              background: sitePalette.darkGradient,
            },
          }}
        >
          <ArrowUpwardIcon sx={{ color: sitePalette.textOnDark, fontSize: { xs: 22, md: 28 } }} />
        </Button>
      </div>
    </div>
  );
}

export default App;
