import { Box, Container, Grid, Typography } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PublicIcon from "@mui/icons-material/Public";

const reasons = [
  {
    icon: <SpeedIcon sx={{ fontSize: 48, color: "#6A0DAD" }} />,
    title: "Fast & Reliable",
    description:
      "Process visa applications in seconds with automated passport reading and browser-based submission.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48, color: "#6A0DAD" }} />,
    title: "Secure & Accurate",
    description:
      "Eliminate human errors with intelligent form filling and automatic photo resizing to meet official requirements.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48, color: "#6A0DAD" }} />,
    title: "Dedicated Support",
    description:
      "Our team of industry experts provides hands-on support through meetings, video calls, and remote assistance.",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 48, color: "#6A0DAD" }} />,
    title: "Global Coverage",
    description:
      "Serve clients across 40+ countries with multi-language support and timezone-aware operations.",
  },
];

const Why = () => {
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
          Why Choose HAJonSoft?
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 5, maxWidth: 600, mx: "auto" }}
        >
          Trusted by travel agencies worldwide to streamline their visa
          processing workflows.
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

