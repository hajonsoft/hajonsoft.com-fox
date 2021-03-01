import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import passportReader from './3m-passport-reader.png';
import bau from './bab-al-umrah.png';
import gma from './gabul-ya-haj.png';
import mohu from './ministry-of-hajj-and-umrah.jpg';
import twf from './tawaf.png';
import wtu from './way-to-umrah.png';
const Features = () => {
    return (
        <div style={{ paddingTop: '5rem' }}>
            <Grid container justify="center" spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h5" align="center"><FormattedMessage id="manage-effortlessly" /></Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center"><FormattedMessage id="complete-software" /></Typography>
                </Grid>
                <Grid item xs={12} container justify="center" spacing={2} alignItems="center">
                    <Grid item>
                        <Grid container justify="center" alignItems="space-around">
                            <Grid item>
                                <img src={passportReader} alt="3m passport reader" width="64px" height="64px" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center" variant="body1">
                                    <FormattedMessage id="quality-passport-reader" />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justify="center" alignItems="space-around">
                            <Grid item>
                                <img src={mohu} alt="ministry of hajj and umrah" width="64px" height="64px" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center" variant="body1">
                                    <FormattedMessage id="ehaj-integration" />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justify="center" alignItems="space-around">
                            <Grid item>
                                <img src={wtu} alt="way to umrah" width="64px" height="64px" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center" variant="body1">
                                    <FormattedMessage id="wtu-sender" />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justify="center" alignItems="space-around">
                            <Grid item>
                                <img src={bau} alt="bab al umrah" width="64px" height="64px" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center" variant="body1">
                                    <FormattedMessage id="bau-sender" />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justify="center" alignItems="space-around">
                            <Grid item>
                                <img src={gma} alt="gabul ya hajj" width="64px" height="64px" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center" variant="body1">
                                    <FormattedMessage id="gma-sender" />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justify="center" alignItems="space-around">
                            <Grid item>
                                <img src={twf} alt="tawaf" width="64px" height="64px" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center" variant="body1">
                                    <FormattedMessage id="twf-sender" />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Features
