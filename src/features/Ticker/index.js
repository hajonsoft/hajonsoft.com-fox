import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const defaultTickers = [
  "Welcome to HAJonSoft — Intelligent Visa Processing Automation",
];

const Ticker = () => {
  const [tickers, setTickers] = useState(defaultTickers);
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

  if (!visible || tickers.length === 0) return null;

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a2e",
        color: "#fff",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        height: "2.5rem",
        display: "flex",
        alignItems: "center",
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
        {tickers.map((text, i) => (
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
          "&:hover": { color: "#fff" },
        }}
        aria-label="close ticker"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default Ticker;
