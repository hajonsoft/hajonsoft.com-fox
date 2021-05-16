import { Button, Container, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import getStartedImage from '../../images/get-started.png';

const GetStarted = () => {

    const theme = useTheme();
    const aboveSmall = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div style={{ background: 'linear-gradient(90deg, rgba(56,134,176,1) 0%, rgba(71,161,177,1) 100%)', marginTop: '1rem', color: 'white' }}>
            <Container>
                <Grid container justify="center" spacing={6}>
                    <Grid item container direction="column" justify="space-around" alignItems="center" md={6} sm={12}>
                        <Grid item>
                            <Typography variant="h4" gutterBottom><FormattedMessage id="get-started.more-than-software" /></Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" ><FormattedMessage id="get-started.we-are-team" /></Typography>
                        </Grid>
                        <Grid item container justify="center" spacing={4}>
                            <Grid item>
                                <Button variant="contained" color="primary" style={{ textTransform: 'none', backgroundColor: 'white', color: 'black', height: '3rem', width: '15rem' }}>
                                    <Typography variant="h6">
                                        <FormattedMessage id="get-started" />
                                    </Typography>
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button variant="outlined" style={{ textTransform: 'none', color: 'white', border: '1px solid white', height: '3rem', width: '15rem' }}  startIcon={<PlayCircleOutlineIcon fontSize="large"/>}>
                                    <Typography variant="body1" align="center">
                                        <FormattedMessage id="get-started.see-platform" />
                                    </Typography>
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>

                    {aboveSmall && <Grid item xs={5}>
                        <img src={getStartedImage} alt="hajonsoft software" width="300px" />
                    </Grid>}

                </Grid>
            </Container>
        </div>

    )
}

export default GetStarted
