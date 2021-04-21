import { Box, Container, Grid, Tooltip, Typography } from '@material-ui/core';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import { countries, findFlagUrlByCountryName } from 'country-flags-svg';
import moment from 'moment-timezone';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const hosCountries = ['United States', 'Canada', 'United Kingdom', 'Denmark', 'Sweden', 'Norway', 'India', 'Pakistan', 'Australia',
    'South Africa', 'Niger', 'Mali', 'Egypt', 'Liberia', 'Côte d\'Ivoire',
    'Afghanistan', 'Azerbaijan', 'Bangladesh', 'Brunei', 'Cameroon', 'Djibouti', 'France', 'Germany',
    'Hong Kong', 'Indonesia', 'Italy', 'Japan', 'Jordan', 'Malawi', 'Malaysia', 'Maldives', 'Mauritius',
    'Morocco', 'Netherlands', 'Palestine', 'Réunion', 'Russia', 'Singapore', 'South Korea',
    'Spain', 'Sri Lanka', 'Switzerland', 'Thailand', 'Vietnam'
];

const START_HOUR = 9;
const END_HOUR = 18;

const hosWorld = () => {
    const world = []; //[{country, isAwake, zones: [{zone, zoneMoment}]}]

    hosCountries.forEach(country => {
        const countryModel = countries.find(flagCountry => flagCountry.name === country);
        if (!countryModel) return;
        const zones = moment.tz.zonesForCountry(countryModel.iso2);
        const countryZones = { country, zones: [] };
        world.push(countryZones);
        zones.forEach(zone => {
            const zoneMoment = moment().tz(zone);
            countryZones.zones.push({ name: zone, time: zoneMoment });
            if (zoneMoment.isAfter(moment(zoneMoment).set('hour', START_HOUR).set('minute', 0)) && moment(zoneMoment).isBefore(moment(zoneMoment).set('hour', END_HOUR).set('minute', 0))) {
                countryZones.isAwake = true;
            }
        });
        countryZones.zones = countryZones.zones.sort((a, b) => {
            return parseInt(a.time.format('HHmm')) - parseInt(b.time.format('HHmm'));
        });
        countryZones.meanTime = countryZones.zones[Math.floor(countryZones.zones.length / 2)].time;
    })
    return world;
}


const regionTooltip = (region) => {

    return (
        <React.Fragment>
            <Grid container justify="space-between" spacing={2}>
                <Grid item>{region.country}</Grid>
                <Grid item>{region.meanTime.format('hh:mm a')}</Grid>
            </Grid>
            {
                region.zones.map(zone => <Grid container justify="space-between" spacing={2}>
                    <Grid item>{zone.name}</Grid>
                    <Grid item>{zone.time.format('hh:mm a')}</Grid>
                </Grid>)
            }
        </React.Fragment>
    )
}

const Countries = () => {

    return (
        <Container style={{ marginTop: '2rem' }}>
            <Typography variant="body1" align="center" letterSpacing={20} gutterBottom>
                <Box letterSpacing={5} fontSize={32}>
                    <FormattedMessage
                        id="countries.in-countries"
                        values={{ countries: hosCountries.length }}
                    />
                </Box>
            </Typography>
            <Grid container spacing={2} alignItems="center" justify="center">
                {hosWorld().filter(country => country.isAwake).sort((a, b) => {
                    return a.meanTime.format('HHmm') - b.meanTime.format('HHmm');
                }).map(region =>
                    <Grid item>
                        <Tooltip title={regionTooltip(region)}>
                            <img src={findFlagUrlByCountryName(region.country)} alt={region.country} style={{ width: '3rem', border: '1px solid #589aae', boxShadow: '10px 10px 5px #cfd8dc' }} />
                        </Tooltip>
                    </Grid>)}
                <WbSunnyOutlinedIcon />
                {hosWorld().filter(country => !country.isAwake).sort((a, b) => {
                    return a.meanTime.format('HHmm') - b.meanTime.format('HHmm');
                }).map(region =>
                    <Grid item>
                        <Tooltip title={regionTooltip(region)}>
                            <img src={findFlagUrlByCountryName(region.country)} alt={region} style={{ width: '3rem', border: '1px solid #589aae', boxShadow: '10px 10px 10px #616161' }} />
                        </Tooltip>
                    </Grid>)}
            </Grid>
        </Container>
    )
}

export default Countries


