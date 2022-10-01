import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import t from "../../util/trans";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F0F1F3",
    textAlign: "center",
    boxSizing: "border-box",
    padding: "1rem 1rem 1rem 1rem",
    marginTop: "2rem",
  },
  title: {
    margin: "1rem 0px",
    fontSize: "28px",
  },
});

const KeaDemo = ({lang}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Typography className={classes.title}>
          {t('introduction-to-hajonsoft-kea')}
        </Typography>
        <Box
          style={{
            // padding: '62.5% 0 0 0',
            position: "relative",
            marginBottom: "2rem",
            height: "500px",
          }}
        >
          <iframe
            src={`https://player.vimeo.com/video/${
              lang === "ar" ? "756009038" : "738277759"
            }?h=b4ef49a0ff&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
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
      <video></video>
    </>
  );
};

export default KeaDemo;
