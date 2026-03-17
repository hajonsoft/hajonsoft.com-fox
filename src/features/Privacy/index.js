import { Box, Container, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { sitePalette } from "../../util/siteTheme";

const Section = ({ title, children }) => (
  <Box mb={4}>
    <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: sitePalette.primary }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const Privacy = () => {
  return (
    <Box sx={{ background: sitePalette.surface, minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight={800} gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Last updated: March 2025
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Section title="1. About HAJonSoft">
          <Typography variant="body1" paragraph>
            HAJonSoft ("we", "our", or "us") provides AI-powered software agents for travel agencies and visa processing centres worldwide. Our agents automate the submission of traveller information to Saudi Arabia's official visa platforms, including Bab Al-Umrah, eHaj, Nusuk, and the Saudi Visit Visa portal.
          </Typography>
          <Typography variant="body1" paragraph>
            We are committed to protecting the personal data of travellers whose information is processed through our platform. This Privacy Policy explains what data we handle, why we handle it, and how it is protected.
          </Typography>
        </Section>

        <Section title="2. Data We Collect and Process">
          <Typography variant="body1" paragraph>
            To automate visa applications, our software processes the following traveller information provided by travel agencies:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            {[
              "Full name (as it appears on the passport)",
              "Date of birth and nationality",
              "Passport number, issue date, and expiry date",
              "Machine-Readable Zone (MRZ) data extracted from passport scans",
              "Passport photograph and other official documents",
              "Contact details (phone number, email) where required by Saudi systems",
              "Travel package details (travel dates, accommodation, group composition)",
            ].map((item) => (
              <Typography component="li" variant="body1" key={item} sx={{ mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Box>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            This information is provided directly to us by licensed travel agencies that have obtained the necessary consents from their travellers. We do not collect this data directly from individuals.
          </Typography>
        </Section>

        <Section title="3. How We Use Your Data">
          <Typography variant="body1" paragraph>
            We use traveller data solely for the purpose of automating visa application submissions on behalf of travel agencies. Specifically, our AI Agents:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            {[
              "Submit Umrah visa applications through the Bab Al-Umrah (Masar) platform",
              "Submit Hajj visa applications through the eHaj system",
              "Register pilgrims on Saudi Arabia's Nusuk platform",
              "Process Saudi Visit Visa applications through the official portal",
              "Scan and extract data from passport images to pre-fill application forms",
            ].map((item) => (
              <Typography component="li" variant="body1" key={item} sx={{ mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Box>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            We do not use traveller data for marketing, profiling, or any purpose beyond the visa submission workflow instructed by the travel agency.
          </Typography>
        </Section>

        <Section title="4. Data Sharing">
          <Typography variant="body1" paragraph>
            Traveller data is transmitted to the following third-party systems as part of the visa application process:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            {[
              "Saudi Arabia's official Bab Al-Umrah / Masar visa portal",
              "Saudi Arabia's eHaj Hajj registration system",
              "Saudi Arabia's Nusuk platform",
              "Saudi Arabia's Visit Visa portal",
            ].map((item) => (
              <Typography component="li" variant="body1" key={item} sx={{ mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Box>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            These are official government platforms operated by the Kingdom of Saudi Arabia. We do not sell, rent, or share traveller data with any commercial third parties.
          </Typography>
          <Typography variant="body1" paragraph>
            We may also share data with our infrastructure providers (such as Firebase/Google Cloud) solely for the purpose of storing and processing application data securely.
          </Typography>
        </Section>

        <Section title="5. Data Retention">
          <Typography variant="body1" paragraph>
            Traveller data is retained only as long as necessary to complete visa processing and to provide support during the relevant visa season. Travel agencies may request the deletion of specific records at any time by contacting us.
          </Typography>
        </Section>

        <Section title="6. Data Security">
          <Typography variant="body1" paragraph>
            We take reasonable technical and organisational measures to protect personal data against unauthorised access, loss, or disclosure. Our systems use encrypted connections (HTTPS) for all data transmission, and access to the platform is restricted to authenticated users only.
          </Typography>
          <Typography variant="body1" paragraph>
            Despite these measures, no online system is completely secure. We encourage travel agencies to use strong passwords and to limit access to authorised personnel only.
          </Typography>
        </Section>

        <Section title="7. Your Rights">
          <Typography variant="body1" paragraph>
            Travellers whose data is processed through HAJonSoft have the right to:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            {[
              "Request access to their personal data held by us",
              "Request correction of inaccurate data",
              "Request deletion of their data (subject to legal obligations)",
              "Object to or restrict processing in certain circumstances",
            ].map((item) => (
              <Typography component="li" variant="body1" key={item} sx={{ mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Box>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            To exercise these rights, travellers should first contact the travel agency that submitted their application. Agencies may forward requests to us at the contact details below.
          </Typography>
        </Section>

        <Section title="8. Cookies and Analytics">
          <Typography variant="body1" paragraph>
            Our public website (hajonsoft.com) may use cookies and analytics tools (such as Firebase Analytics) to understand how visitors use the site. This information is aggregated and anonymous. No personal visa data is collected through website cookies.
          </Typography>
        </Section>

        <Section title="9. Changes to This Policy">
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. We will post the updated version on this page with a revised "Last updated" date. We encourage you to review this page periodically.
          </Typography>
        </Section>

        <Section title="10. Contact Us">
          <Typography variant="body1" paragraph>
            If you have any questions or concerns about this Privacy Policy or how we handle data, please contact us:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 0.5 }}>
              Email: <a href="mailto:hajonsoft@gmail.com" style={{ color: sitePalette.primary }}>hajonsoft@gmail.com</a>
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 0.5 }}>
              Phone: +1 (949) 522-1879
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 0.5 }}>
              WhatsApp: <a href="https://wa.me/19495221879" style={{ color: sitePalette.primary }} target="_blank" rel="noopener noreferrer">+1 (949) 522-1879</a>
            </Typography>
          </Box>
        </Section>

        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          <Link to="/" style={{ color: sitePalette.primary, textDecoration: "none" }}>
            ← Back to Home
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Privacy;
