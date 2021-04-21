import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import passportReader from '../../images/3m-passport-reader.png';
import bau from '../../images/bab-al-umrah.png';
import gma from '../../images/gabul-ya-haj.png';
import mohu from '../../images/ministry-of-hajj-and-umrah.jpg';
import twf from '../../images/tawaf.png';
import wtu from '../../images/way-to-umrah.png';
const Features = () => {
    return (
        <div id="features" style={{ padding: '1rem' , backgroundColor: '#f0f1f3'}}>
            <Grid container justify="center" spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center"><FormattedMessage id="features.manage-effortlessly" /></Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" align="center"><FormattedMessage id="features.complete-software" /></Typography>
                </Grid>
                <Grid item xs={12} container justify="center" spacing={2} alignItems="center">
                    <Grid item>
                        <Grid container justify="center" alignItems="space-around">
                            <Grid item>
                                <img src={passportReader} alt="3m passport reader" width="64px" height="64px" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center" variant="body1">
                                    <FormattedMessage id="features.quality-passport-reader" />
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
                                    <FormattedMessage id="features.ehaj-integration" />
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
                                    <FormattedMessage id="features.wtu-sender" />
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
                                    <FormattedMessage id="features.bau-sender" />
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
                                    <FormattedMessage id="features.gma-sender" />
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
                                    <FormattedMessage id="features.twf-sender" />
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
