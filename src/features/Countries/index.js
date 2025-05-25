import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Box, Container, Grid, Tooltip, Typography } from "@mui/material";
import { countries, findFlagUrlByCountryName } from "country-flags-svg";
import moment from "moment-timezone";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

import defaultFlag from "../../images/default-flag.png"; // ← Add a generic placeholder image
import lisbon from "../../images/lisbon.svg";

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

const Countries = () => {
  const world = hosWorld();

  const awake = world
    .filter((country) => country.isAwake)
    .sort((a, b) => a.meanTime.format("HHmm") - b.meanTime.format("HHmm"));

  const asleep = world
    .filter((country) => !country.isAwake)
    .sort((a, b) => a.meanTime.format("HHmm") - b.meanTime.format("HHmm"));

  return (
    <Container
      sx={{
        marginTop: 4,
        padding: 4,
        backgroundImage: `url(${lisbon})`,
        backgroundSize: "cover",
        borderRadius: 4,
        boxShadow: 3,
      }}
    >
      <Typography align="center" gutterBottom>
        <Box letterSpacing={5} fontSize={32}>
          <FormattedMessage
            id="countries.in-countries"
            values={{ countries: hosCountries.length }}
          />
        </Box>
      </Typography>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {awake.map((region) => (
          <Grid item key={`awake-${region.country}`}>
            <FlagItem region={region} variant="awake" />
          </Grid>
        ))}

        <Grid item>
          <WbSunnyOutlinedIcon />
        </Grid>

        {asleep.map((region) => (
          <Grid item key={`asleep-${region.country}`}>
            <FlagItem region={region} variant="asleep" showName={false} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const FlagItem = ({ region, variant = "awake", showName = true }) => {
  const [flagClicked, setFlagClicked] = useState(false);
  const [flagError, setFlagError] = useState(false);

  const handleFlagClick = () => setFlagClicked(true);
  const handleImageError = () => setFlagError(true);

  const itemStyle = {
    width: "3rem",
    border: "1px solid #589aae",
    borderRadius: "4px",
    boxShadow:
      variant === "awake" ? "0 0 8px #cfd8dc" : "0 0 8px rgba(97, 97, 97, 0.5)",
    transition: "transform 0.2s",
    cursor: "pointer",
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
            <Typography variant="caption" sx={{ color: "#1976d2" }}>
              {region.country}
            </Typography>
          </a>
        </Grid>
      )}
    </Grid>
  );
};

export default Countries;
