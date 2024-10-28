import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import hajonsoftLMS from '../../../images/hajonsoft-lms.svg';

const GetStartedLearn = () => {
    return (
        <Box pt={5}>
            <Grid container justify="space-around" alignItems="center">
                <Grid item>
                    <Typography variant="h6" gutterBottom>To get started</Typography>
                    <ul>
                        <li>
                            Sign up to a Firebase
                        </li>
                        <li>
                            Verify your site (in 24 hours)
                        </li>
                        <li>
                            Join slack (hajonsoft.slack.com)
                        </li>
                        <li>
                            and much more ...
                        </li>
                    </ul>
                </Grid>
                <Grid item>
                    <img src={hajonsoftLMS} alt="hajonsoft university" width="300px" />
                    <Typography variant="body1" align="center">
                        Click here to begin
                    </Typography>
                </Grid>
            </Grid>
        </Box>

    )
}

export default GetStartedLearn
