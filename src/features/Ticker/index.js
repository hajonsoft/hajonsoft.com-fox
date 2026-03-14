import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useMemo, useState } from "react";
import { useIntl } from "react-intl";
import firebase from "firebase/app";
import "firebase/firestore";
import { sitePalette } from "../../util/siteTheme";

const Ticker = () => {
  const intl = useIntl();
  const [tickers, setTickers] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      const db = firebase.firestore();
      const unsubscribe = db
        .collection("tickers")
        .where("active", "==", true)
        .orderBy("order", "asc")
        .onSnapshot(
          (snapshot) => {
            if (!snapshot.empty) {
              const items = snapshot.docs.map((doc) => doc.data().text);
              setTickers(items);
            }
          },
          () => {
            // Firestore not available, use defaults
          }
        );
      return () => unsubscribe();
    } catch {
      // Firebase not configured for Firestore, use defaults
    }
  }, []);

  const defaultTicker = intl.formatMessage({ id: "ticker.default" });
  const displayTickers = useMemo(
    () => (tickers.length > 0 ? tickers : [defaultTicker]),
    [tickers, defaultTicker]
  );

  if (!visible || displayTickers.length === 0) return null;

  return (
    <Box
      sx={{
        background: sitePalette.darkGradient,
        color: sitePalette.textOnDark,
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        height: "2.5rem",
        display: "flex",
        alignItems: "center",
        boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.08)",
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          animation: "ticker-scroll 30s linear infinite",
          paddingLeft: "100%",
          "@keyframes ticker-scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-100%)" },
          },
        }}
      >
        {displayTickers.map((text, i) => (
          <Typography
            key={i}
            component="span"
            variant="body2"
            sx={{
              display: "inline",
              marginRight: "4rem",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
      <IconButton
        size="small"
        onClick={() => setVisible(false)}
        sx={{
          position: "absolute",
          right: 8,
          color: "rgba(255,255,255,0.7)",
          "&:hover": { color: sitePalette.textOnDark },
        }}
        aria-label="close ticker"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default Ticker;
