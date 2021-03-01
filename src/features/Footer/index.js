import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import logo from '../../images/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <div>

            <Container>
                <Grid container justify="center" spacing={2} alignItems="stretch">
                    <Grid item xs={3} container spacing={2}>
                        <Grid item xs={12}>
                            <img src={logo} alt="logo" width="128" />
                        </Grid>
                        <Grid item xs={12}>
                            hajonsoft@gmail.com
</Grid>
                        <Grid item xs={12}>
                            1 (949) 522 1879
</Grid>
                    </Grid>
                    <Grid item xs={2} container spacing={2} alignContent="flex-start">
                        <Grid item xs={12}>

                            <Typography variant="button">company</Typography>
                            <div style={{ border: '2px solid rgb(57,63,82)', width: '90%' }}></div>
                        </Grid>
                        <Grid item xs={12}>
                            About Us
                    </Grid>
                        <Grid item xs={12}>
                            Contact Us
                    </Grid>
                        <Grid item xs={12}>
                            Find
                    </Grid>
                    </Grid>
                    <Grid item xs={2} container spacing={2} alignContent="flex-start">
                        <Grid item xs={12}>

                            <Typography variant="button">resources</Typography>
                            <div style={{ border: '2px solid rgb(57,63,82)', width: '90%' }}></div>
                        </Grid>
                        <Grid item xs={12}>Demos</Grid>
                        <Grid item xs={12}>Common Questions</Grid>
                        <Grid item xs={12}>Insights</Grid>

                    </Grid>
                    <Grid item xs={2} container spacing={2} alignContent="flex-start">
                        <Grid item xs={12}>

                            <Typography variant="button">our product</Typography>
                            <div style={{ border: '2px solid rgb(57,63,82)', width: '90%' }}></div>
                        </Grid>
                        <Grid item xs={12}>Desktop</Grid>
                        <Grid item xs={12}>Web</Grid>
                        <Grid item xs={12}>Pricing</Grid>
                    </Grid>
                    <Grid item xs={2} container spacing={2} alignContent="flex-start">
                        <Grid item xs={12}>

                            <Typography variant="button">get the app</Typography>
                            <div style={{ border: '2px solid rgb(57,63,82)', width: '90%' }}></div>
                        </Grid>
                        <Grid item xs={12}>Coming soon...</Grid>
                        <Grid item xs={12}>App store</Grid>
                        <Grid item xs={12}>Google Play</Grid>

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
                    <Grid item style={{marginRight: '1rem'}}><Button variant="contained" color="primary" >Help</Button></Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
