import { AppBar, Grid, Select, Toolbar, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Styled from './components/styled-components';
import logo from '../../images/logo.png';

const Header = ({ onLanguageChange }) => {
    const [language, setLanguage] = useState('en');
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        onLanguageChange(e.target.value);
    }
    return (
        <AppBar position="static" color="inherit">
            <Styled.TopBar>
                <Grid container spacing={2} justify="flex-end" style={{ marginRight: '6rem' }}>
                    <Grid item>
                        <Typography variant="body2">hajonsoft@gmail.com</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">1 (949) 522-1879</Typography>
                    </Grid>
                </Grid>
            </Styled.TopBar>
            <Toolbar >
                <img src={logo} alt="logo" width="64"></img>

                <Grid container justify="center" alignItems="center" spacing={2} >

                    <Grid item>
                        <Styled.HeaderButton color="primary">
                            <Typography variant="h6">
                                <FormattedMessage id="home" />
                            </Typography>
                        </Styled.HeaderButton>
                    </Grid>
                    <Grid item>
                        <Styled.HeaderButton color="primary">
                            <Typography variant="h6"><FormattedMessage id="features" /></Typography>
                        </Styled.HeaderButton>
                    </Grid>
                    <Grid item>
                        <Styled.HeaderButton color="primary">
                            <Typography variant="h6"><FormattedMessage id="pricing" /></Typography>
                        </Styled.HeaderButton>
                    </Grid>
                    <Grid item>
                        <Styled.HeaderButton color="primary">
                            <Typography variant="h6"><FormattedMessage id="demo" /></Typography>
                        </Styled.HeaderButton>
                    </Grid>
                    <Grid item>
                        <Styled.HeaderButton color="primary">
                            <Typography variant="h6"><FormattedMessage id="downloads" /></Typography>
                        </Styled.HeaderButton>
                    </Grid>
                    <Grid item>
                        <Styled.HeaderButton color="primary">
                            <Typography variant="h6"><FormattedMessage id="contact-us" /></Typography>
                        </Styled.HeaderButton>
                    </Grid>
                </Grid>
                <Select value={language} onChange={handleLanguageChange} >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="ar"><Typography variant="h6">اللغه العربيه</Typography></MenuItem>
                    <MenuItem value="fr"><Typography variant="body1">Française</Typography></MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
    )
}

export default Header
