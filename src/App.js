import { createMuiTheme, Grid, ThemeProvider, Button, makeStyles } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useState } from 'react'
import { IntlProvider } from 'react-intl'
import Contact from './features/Contact'
import Countries from './features/Countries'
import Demo from './features/Demo'
import Features from './features/Features'
import Footer from './features/Footer'
import GetStarted from './features/GetStarted'
import Header from './features/Header'
import Pricing from './features/Pricing'
import Why from './features/Why'
import messages_ar from './lang/ar.json'
// import locale_ar from 'react-intl/locale-data/ar';
// import locale_en from 'react-intl/locale-data/en';
// import locale_fr from 'react-intl/locale-data/fr';
import messages_en from './lang/en.json'
import messages_fr from './lang/fr.json'




// addLocaleData([...locale_en, ...locale_ar, ...locale_fr]);

const messages = {
  "fr": messages_fr,
  "ar": messages_ar,
  "en": messages_en
}
const navigatorLanguage = navigator.language.split(/[-_]/)[0];
const theme = createMuiTheme({
  direction: "ltr",
});

const handleScrolltopClick = () => {
  const element = document.getElementById("home");
  if (element) {
    element.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
};

onscroll = function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 300) {
    document.getElementById('back-to-top').style.visibility = "visible"
  } else {
    document.getElementById('back-to-top').style.visibility = "hidden"
  }
};

const useStyles = makeStyles({
  containerStyle: {
    minHeight: "412px"
  }
});

function App() {

  const [language, setLanguage] = useState(localStorage.getItem('langOverride') || navigatorLanguage)
  const [dir, setDir] = useState(localStorage.getItem('langOverride') === "ar" ? "rtl" : "ltr")
  const classes = useStyles()

  const handleLanguageChange = (lang) => {
    if (lang === "ar" && dir !== "rtl") {
      setDir("rtl")
    }

    if (lang !== "ar" && dir === "rtl") {
      setDir("ltr")
    }
    setLanguage(lang);
    localStorage.setItem('langOverride', lang);
  };

  document.dir = dir;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <IntlProvider messages={messages[language]} locale={language} >
          <Header onLanguageChange={handleLanguageChange} lang={language} />
          <Grid container spacing={2} direction="column">
            <Grid item>
              <GetStarted />
            </Grid>
            <Grid item>
              <Countries />
            </Grid>
            <Grid item>
              <Features />
            </Grid>
            <Grid item className={classes.containerStyle}>
              <Pricing />
            </Grid>
            <Grid item>
              <Demo />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Why />
            </Grid>
            <Grid item>
              <Footer />
            </Grid>
          </Grid>

        </IntlProvider>
      </ThemeProvider>
      <div id="back-to-top" style={{ position: 'fixed', bottom: '6rem', right: 0, padding: '1rem' , visibility: 'hidden'}} onClick={handleScrolltopClick}><Button><ArrowUpwardIcon fontSize="large" color="#69A2CC"/></Button></div>
    </div>
  );
}

export default App;
