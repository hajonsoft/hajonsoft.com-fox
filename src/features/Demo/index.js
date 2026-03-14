import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useIntl } from "react-intl";
import { sitePalette } from "../../util/siteTheme";

const Demo = () => {
  const intl = useIntl();

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        background: sitePalette.darkGradient,
        color: sitePalette.textOnDark,
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
              {intl.formatMessage({ id: "demo.title" })}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ mb: 4, color: "rgba(245, 251, 247, 0.82)" }}
            >
              {intl.formatMessage({ id: "demo.description" })}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayCircleOutlineIcon />}
              onClick={() =>
                window.open("https://player.vimeo.com/video/738277759", "_blank")
              }
              sx={{
                backgroundColor: "#fff",
                color: sitePalette.darkSoft,
                fontWeight: 600,
                px: 4,
                "&:hover": { backgroundColor: "#eef7f1" },
              }}
            >
              {intl.formatMessage({ id: "demo.watch-demo" })}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              size="large"
              startIcon={<RocketLaunchIcon />}
              onClick={() =>
                window.open("https://hajonsoft-kea.web.app/", "_blank")
              }
              sx={{
                borderColor: "rgba(255,255,255,0.72)",
                color: sitePalette.textOnDark,
                fontWeight: 600,
                px: 4,
                "&:hover": { borderColor: "#fff", backgroundColor: "rgba(255,255,255,0.08)" },
              }}
            >
              {intl.formatMessage({ id: "demo.try-free" })}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Demo;
