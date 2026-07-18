import { Box, Container, Typography } from "@mui/material";
import { useMemo } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { sitePalette } from "../../util/siteTheme";

const bulletSx = { color: sitePalette.textMuted, mb: 0.75 };
const bodySx = { color: sitePalette.textMuted, mb: 3 };
const headingSx = { color: sitePalette.text, mt: 4 };
const subheadingSx = { color: sitePalette.text, mt: 3 };

const BulletList = ({ items }) => (
  <Box component="ul" sx={{ pl: 3, mt: 0, mb: 3 }}>
    {items.map((item) => (
      <Typography component="li" variant="body1" key={item} sx={bulletSx}>
        {item}
      </Typography>
    ))}
  </Box>
);

const AboutTheTechnology = () => {
  const intl = useIntl();

  const workflowItems = useMemo(
    () =>
      [1, 2, 3, 4, 5, 6, 7, 8].map((n) =>
        intl.formatMessage({ id: `technology.workflow.item${n}` })
      ),
    [intl]
  );

  const scaleItems = useMemo(
    () =>
      [1, 2, 3, 4, 5].map((n) =>
        intl.formatMessage({ id: `technology.scale.item${n}` })
      ),
    [intl]
  );

  const stackItems = useMemo(
    () =>
      [1, 2, 3, 4, 5, 6, 7].map((n) =>
        intl.formatMessage({ id: `technology.stack.item${n}` })
      ),
    [intl]
  );

  return (
    <Box sx={{ backgroundColor: sitePalette.surface, minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom sx={{ color: sitePalette.text }}>
          <FormattedMessage id="technology.title" />
        </Typography>
        <Typography variant="body2" sx={{ color: sitePalette.textMuted, mb: 4 }}>
          <FormattedMessage id="technology.subtitle" />
        </Typography>

        <Typography variant="h5" gutterBottom sx={headingSx}>
          <FormattedMessage id="technology.introduction.title" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.introduction.p1" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.introduction.p2" />
        </Typography>

        <Typography variant="h5" gutterBottom sx={headingSx}>
          <FormattedMessage id="technology.capabilities.title" />
        </Typography>

        <Typography variant="h6" gutterBottom sx={subheadingSx}>
          <FormattedMessage id="technology.document.title" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.document.body" />
        </Typography>

        <Typography variant="h6" gutterBottom sx={subheadingSx}>
          <FormattedMessage id="technology.records.title" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.records.body" />
        </Typography>

        <Typography variant="h6" gutterBottom sx={subheadingSx}>
          <FormattedMessage id="technology.workflow.title" />
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 2 }}>
          <FormattedMessage id="technology.workflow.p1" />
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 2 }}>
          <FormattedMessage id="technology.workflow.p2" />
        </Typography>
        <BulletList items={workflowItems} />

        <Typography variant="h5" gutterBottom sx={headingSx}>
          <FormattedMessage id="technology.scale.title" />
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 2 }}>
          <FormattedMessage id="technology.scale.p1" />
        </Typography>
        <BulletList items={scaleItems} />
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.scale.p2" />
        </Typography>

        <Typography variant="h5" gutterBottom sx={headingSx}>
          <FormattedMessage id="technology.products.title" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.products.intro" />
        </Typography>

        <Typography variant="h6" gutterBottom sx={subheadingSx}>
          <FormattedMessage id="technology.kea.title" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.kea.p1" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.kea.p2" />
        </Typography>

        <Typography variant="h6" gutterBottom sx={subheadingSx}>
          <FormattedMessage id="technology.eagle.title" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.eagle.p1" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.eagle.p2" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.eagle.p3" />
        </Typography>

        <Typography variant="h6" gutterBottom sx={subheadingSx}>
          <FormattedMessage id="technology.owl.title" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.owl.p1" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.owl.p2" />
        </Typography>

        <Typography variant="h5" gutterBottom sx={headingSx}>
          <FormattedMessage id="technology.stack.title" />
        </Typography>
        <Typography variant="body1" sx={{ color: sitePalette.textMuted, mb: 2 }}>
          <FormattedMessage id="technology.stack.intro" />
        </Typography>
        <BulletList items={stackItems} />

        <Typography variant="h5" gutterBottom sx={headingSx}>
          <FormattedMessage id="technology.ownership.title" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.ownership.p1" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.ownership.p2" />
        </Typography>
        <Typography variant="body1" sx={bodySx}>
          <FormattedMessage id="technology.ownership.p3" />
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutTheTechnology;
