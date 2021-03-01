import React from 'react'
import { Button, Container, Grid, Typography } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import getStartedImage from './get-started.png'
import { FormattedMessage } from 'react-intl';
const GetStarted = () => {
    return (
        <div style={{ background: 'linear-gradient(90deg, rgba(56,134,176,1) 0%, rgba(71,161,177,1) 100%)', marginTop: '1rem', color: 'white' }}>

            <Container>

                <Grid container justify="center" spacing={6}>
                    <Grid item container direction="column" justify="space-around" xs={6}>
                        <Grid item>
                            <Typography variant="h4" gutterBottom><FormattedMessage id="more-than-software" /></Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" ><FormattedMessage id="we-are-team" /></Typography>
                        </Grid>
                        <Grid item container justify="center" spacing={4}>
                            <Grid item>
                                <Button variant="contained" color="primary" style={{ textTransform: 'none', backgroundColor: 'white', color: 'black' }}>
                                <FormattedMessage id="get-started" />
</Button>
                            </Grid>

                            <Grid item>
                                <Button variant="outlined" style={{ textTransform: 'none', color: 'white', border: '1px solid white' }} startIcon={<PlayCircleOutlineIcon />}>
                                <FormattedMessage id="see-platform" />
</Button>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={5}>
                        <img src={getStartedImage} alt="hajonsoft software" width="300px" />
                    </Grid>

                </Grid>
            </Container>
        </div>

    )
}

export default GetStarted
