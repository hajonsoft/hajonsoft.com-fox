import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Box, Container, Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { countries, findFlagUrlByCountryName } from "country-flags-svg";
import moment from "moment-timezone";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

import defaultFlag from "../../images/default-flag.png"; // ← Add a generic placeholder image
import lisbon from "../../images/lisbon.svg";
import { sitePalette } from "../../util/siteTheme";
import useInView from "../../util/useInView";

const hosCountries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Denmark",
  "Sweden",
  "Norway",
  "India",
  "Pakistan",
  "Australia",
  "South Africa",
  "Niger",
  "Mali",
  "Egypt",
  "Liberia",
  "Côte d'Ivoire",
  "Afghanistan",
  "Azerbaijan",
  "Bangladesh",
  "Brunei",
  "Cameroon",
  "Djibouti",
  "France",
  "Germany",
  "Hong Kong",
  "Indonesia",
  "Italy",
  "Japan",
  "Jordan",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mauritius",
  "Morocco",
  "Netherlands",
  "Palestine",
  "Réunion",
  "Russia",
  "Singapore",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Switzerland",
  "Thailand",
  "Vietnam",
];

const START_HOUR = 9;
const END_HOUR = 18;

const hosWorld = () => {
  const world = [];

  hosCountries.forEach((country) => {
    const countryModel = countries.find(
      (flagCountry) => flagCountry.name === country
    );
    if (!countryModel) return;

    const zones = moment.tz.zonesForCountry(countryModel.iso2);
    const countryZones = { country, zones: [], isAwake: false };

    zones.forEach((zone) => {
      const zoneMoment = moment().tz(zone);
      countryZones.zones.push({ name: zone, time: zoneMoment });

      const start = moment(zoneMoment).set("hour", START_HOUR).set("minute", 0);
      const end = moment(zoneMoment).set("hour", END_HOUR).set("minute", 0);

      if (zoneMoment.isBetween(start, end)) {
        countryZones.isAwake = true;
      }
    });

    countryZones.zones.sort(
      (a, b) =>
        parseInt(a.time.format("HHmm")) - parseInt(b.time.format("HHmm"))
    );

    countryZones.meanTime =
      countryZones.zones[Math.floor(countryZones.zones.length / 2)].time;

    world.push(countryZones);
  });

  return world;
};

const regionTooltip = (region) => (
  <>
    <Grid container justifyContent="space-between" spacing={1}>
      <Grid item>{region.country}</Grid>
      <Grid item>{region.meanTime.format("hh:mm a")}</Grid>
    </Grid>
    {region.zones.map((zone, i) => (
      <Grid key={i} container justifyContent="space-between" spacing={1}>
        <Grid item>{zone.name}</Grid>
        <Grid item>{zone.time.format("hh:mm a")}</Grid>
      </Grid>
    ))}
  </>
);

const MOBILE_FLAG_PREVIEW = 8;

const Countries = () => {
  const world = hosWorld();
  const isMobile = useMediaQuery("(max-width:900px)");
  const [sectionRef, sectionInView] = useInView({ once: false, threshold: 0.18 });

  const awake = world
    .filter((country) => country.isAwake)
    .sort((a, b) => a.meanTime.format("HHmm") - b.meanTime.format("HHmm"));

  const asleep = world
    .filter((country) => !country.isAwake)
    .sort((a, b) => a.meanTime.format("HHmm") - b.meanTime.format("HHmm"));

  const mobilePreview = [...awake, ...asleep].slice(0, MOBILE_FLAG_PREVIEW);
  const moreCount = Math.max(hosCountries.length - MOBILE_FLAG_PREVIEW, 0);

  return (
    <Container
      ref={sectionRef}
      sx={{
        marginTop: { xs: 2, md: 4 },
        mx: { xs: 2.5, md: "auto" },
        width: { xs: "auto", md: undefined },
        padding: { xs: 2.5, sm: 3, md: 4 },
        backgroundImage: `linear-gradient(180deg, rgba(244, 250, 246, 0.96), rgba(230, 242, 234, 0.92)), url(${lisbon})`,
        backgroundSize: "cover",
        borderRadius: { xs: 3, md: 6 },
        border: `1px solid ${sitePalette.border}`,
        boxShadow: sitePalette.shadow,
        opacity: sectionInView ? 1 : 0,
        transform: sectionInView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        overflow: "hidden",
      }}
    >
      <Typography align="center" gutterBottom component="div">
        <Box
          sx={{
            letterSpacing: { xs: 1.5, md: 5 },
            fontSize: { xs: "1.25rem", sm: "1.6rem", md: "2rem" },
            fontWeight: 700,
            lineHeight: 1.3,
            px: 0.5,
          }}
        >
          <FormattedMessage
            id="countries.in-countries"
            values={{ countries: hosCountries.length }}
          />
        </Box>
      </Typography>

      <Typography
        align="center"
        variant="body2"
        sx={{
          mb: { xs: 2, md: 3 },
          color: sitePalette.textMuted,
          letterSpacing: 0.5,
          display: { xs: "none", md: "block" },
        }}
      >
        <FormattedMessage
          id="countries.global-reach"
          values={{ count: hosCountries.length }}
        />
      </Typography>

      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          {mobilePreview.map((region, idx) => (
            <FlagItem
              key={`mobile-${region.country}`}
              region={region}
              variant={region.isAwake ? "awake" : "asleep"}
              showName={false}
              animIndex={idx}
              sectionVisible={sectionInView}
            />
          ))}
          {moreCount > 0 && (
            <Typography
              sx={{
                fontWeight: 800,
                color: sitePalette.primary,
                fontSize: "0.95rem",
                px: 1,
              }}
            >
              <FormattedMessage id="countries.and-more" values={{ count: moreCount }} />
            </Typography>
          )}
        </Box>
      ) : (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {awake.map((region, idx) => (
            <Grid item key={`awake-${region.country}`}>
              <FlagItem
                region={region}
                variant="awake"
                animIndex={idx}
                sectionVisible={sectionInView}
              />
            </Grid>
          ))}

          <Grid item>
            <WbSunnyOutlinedIcon />
          </Grid>

          {asleep.map((region, idx) => (
            <Grid item key={`asleep-${region.country}`}>
              <FlagItem
                region={region}
                variant="asleep"
                showName={false}
                animIndex={awake.length + 1 + idx}
                sectionVisible={sectionInView}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

const FlagItem = ({
  region,
  variant = "awake",
  showName = true,
  animIndex = 0,
  sectionVisible = false,
}) => {
  const [flagClicked, setFlagClicked] = useState(false);
  const [flagError, setFlagError] = useState(false);

  const handleFlagClick = () => setFlagClicked(true);
  const handleImageError = () => setFlagError(true);

  // Stagger each flag entrance — delay capped at 2 s for the last flags
  const delay = `${Math.min(animIndex * 0.06, 2)}s`;

  const itemStyle = {
    width: "3rem",
    border: `1px solid ${sitePalette.primarySoft}`,
    borderRadius: "4px",
    cursor: "pointer",
    // Entrance animation
    opacity: sectionVisible ? 1 : 0,
    animation: sectionVisible
      ? `waveFlag 0.55s cubic-bezier(0.22,1,0.36,1) ${delay} both`
      : "none",
    // Awake flags glow continuously after entrance
    ...(variant === "awake" && sectionVisible
      ? {
          boxShadow: "0 0 8px rgba(47, 125, 87, 0.24)",
          animation: `waveFlag 0.55s cubic-bezier(0.22,1,0.36,1) ${delay} both, glowPulse 2.4s ease-in-out ${delay} infinite`,
        }
      : variant === "asleep"
      ? { filter: "grayscale(40%) opacity(0.65)" }
      : {}),
    transition: "transform 0.2s ease",
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        {!flagClicked && (
          <Tooltip title={regionTooltip(region)}>
            <img
              src={
                flagError
                  ? defaultFlag
                  : findFlagUrlByCountryName(region.country)
              }
              alt={region.country}
              loading="lazy"
              decoding="async"
              style={itemStyle}
              onClick={handleFlagClick}
              onError={handleImageError}
            />
          </Tooltip>
        )}
        {flagClicked && (
          <Typography variant="body2">
            {region.meanTime.format("hh:mm a")}
          </Typography>
        )}
      </Grid>

      {showName && !flagClicked && (
        <Grid item>
          <Typography variant="caption">{region.country}</Typography>
        </Grid>
      )}

      {flagClicked && (
        <Grid item>
          <a
            href={`https://hajonsoft2020.firebaseapp.com/${region.country}/customers`}
            target="_blank"
            rel="noreferrer"
          >
            <Typography variant="caption" sx={{ color: sitePalette.primary, fontWeight: 700 }}>
              {region.country}
            </Typography>
          </a>
        </Grid>
      )}
    </Grid>
  );
};

export default Countries;
