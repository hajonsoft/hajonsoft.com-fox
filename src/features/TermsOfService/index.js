import { Box, Container, Typography } from "@mui/material";
import { sitePalette } from "../../util/siteTheme";

const TermsOfService = () => {
  return (
    <Box sx={{ backgroundColor: sitePalette.surface, minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom sx={{ color: sitePalette.text }}>
          Terms of Service
        </Typography>
        <Typography variant="body2" sx={{ color: sitePalette.textMuted, mb: 4 }}>
          Last updated: March 17, 2025
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          By accessing or using HAJonSoft's services, software, or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all users, including travel agencies, visa processing centers, and individual users.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          2. Description of Services
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          HAJonSoft provides AI-powered automation software and agents for Saudi Arabia visa processing. Our services include AI Agents for Umrah, Hajj, Visit Visa, Nusuk, and passport scanning. These agents automate the submission of traveller information to Saudi Arabia official visa systems including Bab Al-Umrah, eHaj, Masar, and the Nusuk platform.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          3. License and Software Use
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          Upon purchase, HAJonSoft grants you a non-exclusive, non-transferable license to use our software for your internal business operations. You may not copy, modify, distribute, sell, or sublicense our software. Software licenses are for a single organization and may not be shared across multiple entities. Lifetime software updates are included in the one-time purchase as specified in your plan.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          4. User Responsibilities
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          You are responsible for ensuring the accuracy of all traveller information submitted through our AI Agents. You must comply with all applicable laws, regulations, and requirements of Saudi Arabia visa authorities. You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          5. Payment Terms
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          All purchases are one-time, non-refundable payments unless otherwise specified. Seasonal support plans are valid for the applicable visa season. Proxy visa submission services are charged per submission as outlined in your selected plan. Prices are subject to change with advance notice.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          6. Service Availability
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          We strive to maintain continuous service availability but do not guarantee uninterrupted access. Our AI Agents depend on the availability and stability of Saudi Arabia government visa systems, which are outside our control. We will notify users of planned maintenance and work to minimize downtime. Service disruptions caused by changes to official Saudi Arabia systems will be addressed as promptly as possible.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          7. Intellectual Property
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          All intellectual property rights in our software, website, and services belong to HAJonSoft. Our trademarks, logos, and service names are proprietary to HAJonSoft and may not be used without our prior written consent. You retain ownership of all traveller data you submit through our services.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          8. Limitation of Liability
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          HAJonSoft shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. We are not responsible for visa rejections, processing delays, or decisions made by Saudi Arabia visa authorities. Our total liability to you shall not exceed the amount paid for the specific service giving rise to the claim.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          9. Disclaimer of Warranties
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          Our services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that our services will be error-free, uninterrupted, or free from viruses or other harmful components. We do not guarantee visa approval outcomes as these are solely determined by Saudi Arabia government authorities.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          10. Termination
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          We reserve the right to suspend or terminate your access to our services if you violate these Terms of Service or engage in fraudulent, abusive, or illegal activities. Upon termination, your right to use the software ceases, but your locally stored data remains accessible to you.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          11. Changes to Terms
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          We may update these Terms of Service from time to time. We will notify users of material changes by posting the updated terms on this page with a new effective date. Continued use of our services after changes constitutes your acceptance of the updated terms.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          12. Governing Law
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          These Terms of Service are governed by and construed in accordance with the laws of the United States. Any disputes arising from these terms shall be resolved through good-faith negotiation, and if necessary, through binding arbitration.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ color: sitePalette.text, mt: 4 }}>
          13. Contact Us
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 3 }}>
          If you have any questions about these Terms of Service, please contact us at hajonsoft@gmail.com or call us at 1 (949) 522-1879.
        </Typography>
      </Container>
    </Box>
  );
};

export default TermsOfService;
