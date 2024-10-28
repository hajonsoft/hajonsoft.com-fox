import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';
import seePlatform from '../../../images/see-platform.svg';

const GetStartedSee = ({ onStart, onSee }) => {
    return (
        <Box pt={5}>
            <Grid2 container justifyContent="space-around" alignItems="center">
                <Grid2 item>
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
                </Grid2>
                <Grid2 item>
                    <img src={seePlatform} alt="hajonsoft university" width="300px" />
                    <Typography variant="body1" align="center">
                        Click here to begin
                    </Typography>
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default GetStartedSee;
