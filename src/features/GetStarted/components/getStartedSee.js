import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import seePlatform from '../../../images/see-platform.svg';

const GetStartedSee = ({ onStart, onSee }) => {
    return (
        <Box pt={5}>
            <Grid container justify="space-around" alignItems="center">
                <Grid item>
                    <Typography variant="h6" gutterBottom>How to</Typography>
                    <ul>
                        <li>
                            Scan passports
                        </li>
                        <li>
                            Apply for visa
                        </li>
                        <li>
                            Sell online
                        </li>
                        <li>
                            and much more ...
                        </li>
                    </ul>
                </Grid>
                <Grid item>
                    <img src={seePlatform} alt="hajonsoft university" width="300px" />
                    <Typography variant="body1" align="center">
                        Click here to begin
                    </Typography>
                </Grid>
            </Grid>
        </Box>

    )
}

export default GetStartedSee
