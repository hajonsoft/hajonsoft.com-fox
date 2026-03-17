import { Box, Container, Typography } from "@mui/material";
import { sitePalette } from "../../util/siteTheme";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ backgroundColor: sitePalette.surface, minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom sx={{ color: sitePalette.text }}>
          Privacy Policy
        </Typography>
        <Typography variant="body2" sx={{ color: sitePalette.textMuted, mb: 4 }}>
          Last updated: March 17, 2025
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, and other contact details. We also collect traveller information that you submit through our AI Agents for the purpose of processing Saudi Arabia visa applications.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          We use the information we collect to provide, maintain, and improve our services, process visa applications on your behalf, communicate with you about our services and updates, and comply with legal obligations. Traveller data is used solely for the purpose of submitting visa applications to the relevant Saudi Arabia government systems.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          3. Information Sharing
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          We do not sell, trade, or otherwise transfer your personal information to outside parties except as necessary to provide our services. We may share information with Saudi Arabia visa processing systems (such as Bab Al-Umrah, eHaj, Masar, and Nusuk) as required to complete visa applications. We may also disclose information where required by law or to protect our rights.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          4. Data Security
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          5. Data Retention
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with our legal obligations, resolve disputes, and enforce our agreements. Traveller passport data is retained in your local database and is under your control.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          6. Your Rights
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us at hajonsoft@gmail.com.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          7. Cookies
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser. Some features of our service may not function properly if cookies are disabled.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          8. Third-Party Services
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          Our services integrate with third-party platforms including Saudi Arabia government visa systems, Firebase for data storage, and analytics services. These third parties have their own privacy policies governing the use of your information.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          9. Changes to This Policy
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date. Your continued use of our services after any changes constitutes acceptance of the new policy.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          10. Contact Us
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          If you have any questions about this Privacy Policy, please contact us at hajonsoft@gmail.com or call us at 1 (949) 522-1879.
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
