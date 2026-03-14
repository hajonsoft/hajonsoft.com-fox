import { Box, Container, Grid, Typography } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PublicIcon from "@mui/icons-material/Public";
import { useMemo } from "react";
import { useIntl } from "react-intl";

const Why = () => {
  const intl = useIntl();

  const reasons = useMemo(
    () => [
      {
        icon: <SpeedIcon sx={{ fontSize: 48, color: "#6A0DAD" }} />,
        title: intl.formatMessage({ id: "why.reason1.title" }),
        description: intl.formatMessage({ id: "why.reason1.description" }),
      },
      {
        icon: <SecurityIcon sx={{ fontSize: 48, color: "#6A0DAD" }} />,
        title: intl.formatMessage({ id: "why.reason2.title" }),
        description: intl.formatMessage({ id: "why.reason2.description" }),
      },
      {
        icon: <SupportAgentIcon sx={{ fontSize: 48, color: "#6A0DAD" }} />,
        title: intl.formatMessage({ id: "why.reason3.title" }),
        description: intl.formatMessage({ id: "why.reason3.description" }),
      },
      {
        icon: <PublicIcon sx={{ fontSize: 48, color: "#6A0DAD" }} />,
        title: intl.formatMessage({ id: "why.reason4.title" }),
        description: intl.formatMessage({ id: "why.reason4.description" }),
      },
    ],
    [intl]
  );

  return (
    <Box
      id="why"
      sx={{
        py: 6,
        px: 2,
        backgroundColor: "#fafafa",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          {intl.formatMessage({ id: "why.title" })}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 5, maxWidth: 600, mx: "auto" }}
        >
          {intl.formatMessage({ id: "why.subtitle" })}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {reasons.map((reason, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  height: "100%",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                {reason.icon}
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  {reason.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {reason.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Why;
