import React from 'react'
import { Container, Grid, Typography, Tooltip, Box } from '@material-ui/core';
import { findFlagUrlByCountryName } from 'country-flags-svg'
import { FormattedMessage } from 'react-intl';

const countries = ['United States', 'Canada', 'United Kingdom', 'Denmark', 'Sweden', 'Norway', 'India', 'Pakistan', 'Australia',
    'South Africa', 'Niger', 'Mali', 'Egypt', 'Liberia', 'Côte d\'Ivoire',
    'Afghanistan', 'Azerbaijan', 'Bangladesh', 'Brunei', 'Cameroon', 'Djibouti', 'France', 'Germany',
    'Hong Kong', 'Indonesia', 'Italy', 'Japan', 'Jordan', 'Malawi', 'Malaysia', 'Maldives', 'Mauritius',
    'Morocco', 'Netherlands', 'Palestine', 'Réunion', 'Russia', 'Singapore', 'South Korea',
    'Spain', 'Sri Lanka', 'Switzerland', 'Thailand', 'Vietnam'
];

const Countries = () => {
    return (
        <Container style={{ marginTop: '2rem' }}>
            <Typography variant="body1" align="center" letterSpacing={20} gutterBottom>
                <Box letterSpacing={5} fontSize={32}>
                    <FormattedMessage
                        id="in-countries"
                        values={{ countries: countries.length }}
                    />
                </Box>
            </Typography>
            <Grid container spacing={2} alignItems="center" justify="center">
                {countries.map(country =>
                    <Grid item>
                        <Tooltip title={country}>
                            <img src={findFlagUrlByCountryName(country)} alt={country} style={{ width: '3rem', border: '1px solid #589aae' }} />
                        </Tooltip>
                    </Grid>)}
            </Grid>
        </Container>
    )
}

export default Countries
