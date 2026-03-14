import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useIntl } from "react-intl";

const Demo = () => {
  const intl = useIntl();

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        background: "linear-gradient(135deg, #4B0082 0%, #8e44ad 100%)",
        color: "#fff",
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
              sx={{ mb: 4, color: "rgba(255,255,255,0.85)" }}
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
                color: "#4B0082",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: "999px",
                px: 4,
                "&:hover": { backgroundColor: "#f0f0f0" },
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
                borderColor: "#fff",
                color: "#fff",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: "999px",
                px: 4,
                "&:hover": { borderColor: "#ccc", color: "#ccc" },
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
