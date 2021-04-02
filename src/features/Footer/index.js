import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import logo from '../../images/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { FormattedMessage } from 'react-intl';


const Footer = () => {
    return (
        <div>

            <Container>
                <Grid container justify="center" spacing={2} alignItems="stretch">
                    <Grid item sm={12} md={3} lg container  justify="center" spacing={2}>
                        <Grid item xs={12}>
                            <img src={logo} alt="logo" width="128" />
                        </Grid>
                        <Grid item sm md lg>
                            hajonsoft@gmail.com
                        </Grid>
                        <Grid item sm md lg>
                            <Typography variant="button"><FormattedMessage id="telephone" /></Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={12} md={2} lg container spacing={2} alignContent="flex-start">
                        <Grid item xs={12}>
                            <Typography variant="button"><FormattedMessage id="company" /></Typography>
                            <div style={{ border: '2px solid rgb(57,63,82)', width: '90%' }}></div>
                        </Grid>
                        <Grid item xs={12}>
                            <FormattedMessage id="about-us" />
                        </Grid>
                        <Grid item xs={12}>
                            <FormattedMessage id="contact-us" />
                        </Grid>
                        <Grid item xs={12}>
                            <FormattedMessage id="find" />
                        </Grid>
                    </Grid>
                    <Grid item sm={12} md={2} lg container spacing={2} alignContent="flex-start">
                        <Grid item xs={12}>
                            <Typography variant="button"><FormattedMessage id="resources" /></Typography>
                            <div style={{ border: '2px solid rgb(57,63,82)', width: '90%' }}></div>
                        </Grid>
                        <Grid item xs={12}><FormattedMessage id="demo" /></Grid>
                        <Grid item xs={12}><FormattedMessage id="common-questions" /></Grid>
                        <Grid item xs={12}><FormattedMessage id="insights" /></Grid>
                    </Grid>
                    <Grid item sm={12} md={2} lg container spacing={2} alignContent="flex-start">
                        <Grid item xs={12}>
                            <Typography variant="button"><FormattedMessage id="our-product" /></Typography>
                            <div style={{ border: '2px solid rgb(57,63,82)', width: '90%' }}></div>
                        </Grid>
                        <Grid item xs={12}><FormattedMessage id="desktop" /></Grid>
                        <Grid item xs={12}><FormattedMessage id="web" /></Grid>
                        <Grid item xs={12}><FormattedMessage id="pricing" /></Grid>
                    </Grid>
                    <Grid item sm={12} md={2} lg container spacing={2} alignContent="flex-start">
                        <Grid item xs={12}>
                            <Typography variant="button"><FormattedMessage id="get-the-app" /></Typography>
                            <div style={{ border: '2px solid rgb(57,63,82)', width: '90%' }}></div>
                        </Grid>
                        <Grid item xs={12}><FormattedMessage id="coming-soon" /></Grid>
                        <Grid item xs={12}><FormattedMessage id="app-store" /></Grid>
                        <Grid item xs={12}><FormattedMessage id="google-play" /></Grid>
                    </Grid>
                </Grid>
            </Container>
            <div style={{ width: '100%', height: '4rem', backgroundColor: 'rgb(57,63,82)', marginTop: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', color: 'white' }}>
                <Grid container justify="space-between" spacing={2} alignItems="center">
                    <Grid item style={{marginLeft: '2rem'}}>
                    2020 HAJonSoft
                    <span style={{marginLeft: '2rem'}}>Privacy & Terms</span>
                    </Grid>
                    <Grid item>
                    </Grid>
                    <Grid item></Grid>
                    <Grid item>
                        <FacebookIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                    </Grid>
                    <Grid item style={{marginRight: '1rem'}}><Button variant="contained" color="primary" ><FormattedMessage id="help" /></Button></Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
