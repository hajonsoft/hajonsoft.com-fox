import { Box, Container, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { sitePalette } from "../../util/siteTheme";

const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const TermsOfService = () => {
  return (
    <Box sx={{ backgroundColor: sitePalette.surface, minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom sx={{ color: sitePalette.text }}>
          <FormattedMessage id="terms.title" />
        </Typography>
        <Typography variant="body2" sx={{ color: sitePalette.textMuted, mb: 2 }}>
          <FormattedMessage id="terms.last-updated" />
        </Typography>
        <Typography variant="body2" sx={{ color: sitePalette.textMuted, mb: 4, fontStyle: "italic" }}>
          <FormattedMessage id="legal.translation-notice" />
        </Typography>

        {sections.map((n) => (
          <Box key={n}>
            <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
              <FormattedMessage id={`terms.s${n}.title`} />
            </Typography>
            <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
              <FormattedMessage id={`terms.s${n}.body`} />
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default TermsOfService;
