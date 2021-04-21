import { AppBar, Grid, Select, Toolbar, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import logo from '../../images/logo.png';
import Styled from './components/styled-components';

const Header = ({ onLanguageChange, lang }) => {
    const [language, setLanguage] = useState(lang);
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        onLanguageChange(e.target.value);
    }

    const handleBookmarkClick = (bookmark) => {
        const element = document.getElementById(bookmark);
        if (element){
            element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        }
    }
    return (
        <AppBar id="home" position="static" color="inherit">
            <Styled.TopBar>
                <Grid container spacing={2} justify="flex-end" style={{ marginRight: '6rem' }}>
                    <Grid item>
                        <Typography variant="body2">hajonsoft@gmail.com</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2"><FormattedMessage id="header.telephone"></FormattedMessage></Typography>
                    </Grid>
                </Grid>
            </Styled.TopBar>
            <Toolbar >
                <img src={logo} alt="logo" width="64" />
                <Grid container justify="center" alignItems="center" spacing={2} >
                    <Grid item>
                        <Styled.HeaderButton color="primary" onClick={() => handleBookmarkClick("home")}>
                            <Typography variant="body1">
                                <FormattedMessage id="header.home" />
                            </Typography>
                        </Styled.HeaderButton>
                    </Grid>
                    <Grid item>
                        <Styled.HeaderButton color="primary" onClick={() => handleBookmarkClick("features")}>
                            <Typography variant="body1"><FormattedMessage id="header.features" /></Typography>
                        </Styled.HeaderButton>
                    </Grid>
                    <Grid item>
                        <Styled.HeaderButton color="primary" onClick={() => handleBookmarkClick("pricing")}>
                            <Typography variant="body1"><FormattedMessage id="header.pricing" /></Typography>
                        </Styled.HeaderButton>
                    </Grid>
                    <Grid item>
                        <Styled.HeaderButton color="primary" onClick={() => handleBookmarkClick("demo")}>
                            <Typography variant="body1"><FormattedMessage id="header.demo" /></Typography>
                        </Styled.HeaderButton>
                    </Grid>
                    <Grid item>
                        <Styled.HeaderButton color="primary" onClick={() => handleBookmarkClick("downloads")}>
                            <Typography variant="body1"><FormattedMessage id="header.downloads" /></Typography>
                        </Styled.HeaderButton>
                    </Grid>
                    <Grid item>
                        <Styled.HeaderButton color="primary" onClick={() => handleBookmarkClick("contact-us")}>
                            <Typography variant="body1"><FormattedMessage id="header.contact-us" /></Typography>
                        </Styled.HeaderButton>
                    </Grid>
                </Grid>
                <Select value={language} onChange={handleLanguageChange} variant="standard">
                    <MenuItem value="en"><Typography variant="body1">English</Typography></MenuItem>
                    <MenuItem value="ar"><Typography variant="body1">اللغه العربيه</Typography></MenuItem>
                    <MenuItem value="fr"><Typography variant="body1">Française</Typography></MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
    )
}

export default Header
