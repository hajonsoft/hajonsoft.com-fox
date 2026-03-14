import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import t from "../../util/trans";
import { sitePalette } from "../../util/siteTheme";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(230,242,234,0.92) 100%)",
    textAlign: "center",
    boxSizing: "border-box",
    padding: "2rem 1rem 1.5rem 1rem",
    marginTop: "2rem",
    border: `1px solid ${sitePalette.border}`,
    borderRadius: "32px",
    boxShadow: sitePalette.shadow,
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  title: {
    margin: "1rem 0px",
    fontSize: "28px",
    color: sitePalette.text,
    fontWeight: 800,
  },
});

const KeaDemo = ({lang}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Typography className={classes.title}>
          HAJonSoft Kea
        </Typography>
        <Typography sx={{ color: sitePalette.textMuted, maxWidth: 760, margin: "0 auto 1.5rem auto" }}>
          {t('introduction-to-hajonsoft-kea')}
        </Typography>
        <Box
          style={{
            position: "relative",
            marginBottom: "2rem",
            height: "clamp(280px, 58vw, 500px)",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 14px 32px rgba(15, 38, 29, 0.18)",
          }}
        >
          <iframe
            src={`https://player.vimeo.com/video/${
              lang === "ar" ? "756009038" : "738277759"
            }?h=b4ef49a0ff&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              bottom: "0",
              width: "100%",
              height: "100%",
            }}
            title="HAJonSoft kea"
          ></iframe>
        </Box>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Box>
    </>
  );
};

export default KeaDemo;
