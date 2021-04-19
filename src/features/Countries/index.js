import React from 'react'
import { Container, Grid, Typography, Tooltip, Box } from '@material-ui/core';
import { findFlagUrlByCountryName, countries } from 'country-flags-svg'
import { FormattedMessage } from 'react-intl';
import moment from 'moment-timezone';

const hosCountries = ['United States', 'Canada', 'United Kingdom', 'Denmark', 'Sweden', 'Norway', 'India', 'Pakistan', 'Australia',
    'South Africa', 'Niger', 'Mali', 'Egypt', 'Liberia', 'Côte d\'Ivoire',
    'Afghanistan', 'Azerbaijan', 'Bangladesh', 'Brunei', 'Cameroon', 'Djibouti', 'France', 'Germany',
    'Hong Kong', 'Indonesia', 'Italy', 'Japan', 'Jordan', 'Malawi', 'Malaysia', 'Maldives', 'Mauritius',
    'Morocco', 'Netherlands', 'Palestine', 'Réunion', 'Russia', 'Singapore', 'South Korea',
    'Spain', 'Sri Lanka', 'Switzerland', 'Thailand', 'Vietnam'
];

const hosSortedCountries = () => {
    const awake = [];
    const sleeping = [];

    hosCountries.forEach(country => {
        const foundCountry = countries.find(flagCountry => flagCountry.name === country);
        const zones = moment.tz.zonesForCountry(foundCountry.iso2);
        for (const zone of zones) {
            if (moment().tz(zone).isAfter(moment().tz(zone).set('hour', 9).set('minute', 0)) && moment().tz(zone).isBefore(moment().tz(zone).set('hour', 17).set('minute', 0))){
                awake.push(country);
                break;
            }
        }
        if (!awake.includes(country)){
            sleeping.push(country);
        }

    })
    return {awake,sleeping};
}
const countryTooltip = (country) => {
    const foundCountry = countries.find(flagCountry => flagCountry.name === country);
    const zones = moment.tz.zonesForCountry(foundCountry.iso2);
    return (
        <React.Fragment>
            <strong>{country}</strong>
            {
                zones.map(zone => <Grid container justify="space-between" spacing={2}>
                    <Grid item>{zone}</Grid>
                    <Grid item>{moment().tz(zone).format('hh:mm a')}</Grid>
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
                {hosSortedCountries().awake.map(country =>
                    <Grid item>
                        <Tooltip title={countryTooltip(country)}>
                            <img src={findFlagUrlByCountryName(country)} alt={country} style={{ width: '3rem', border: '1px solid gold', boxShadow: '2px 2px gold' }} />
                        </Tooltip>
                    </Grid>)}
                    {hosSortedCountries().sleeping.map(country =>
                    <Grid item>
                        <Tooltip title={countryTooltip(country)}>
                            <img src={findFlagUrlByCountryName(country)} alt={country} style={{ width: '3rem', border: '1px solid black', boxShadow: '3px 3px lightgray' }} />
                        </Tooltip>
                    </Grid>)}
            </Grid>
        </Container>
    )
}

export default Countries


