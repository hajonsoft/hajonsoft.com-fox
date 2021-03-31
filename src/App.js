import Header from './features/Header'
import GetStarted from './features/GetStarted'
import Countries from './features/Countries'
import Features from './features/Features'
import Pricing from './features/Pricing'
import Demo from './features/Demo'
import Contact from './features/Contact'
import Why from './features/Why'
import Footer from './features/Footer'


import { useState } from 'react';

import { IntlProvider } from 'react-intl';
// import locale_ar from 'react-intl/locale-data/ar';
// import locale_en from 'react-intl/locale-data/en';
// import locale_fr from 'react-intl/locale-data/fr';
import messages_en from './lang/en.json';
import messages_fr from './lang/fr.json';
import messages_ar from './lang/ar.json';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


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

function App() {

  const [language, setLanguage] = useState(navigatorLanguage || 'en')
  const [dir, setDir] = useState("ltr")

  const handleLanguageChange = (lang) => {
    if (lang === "ar" && dir !== "rtl") {
      setDir("rtl")
    } 

    if (lang !== "ar" && dir === "rtl") {
      setDir("ltr")
    } 
    setLanguage(lang);
  };

  document.dir = dir;
  return (
    <div>
      <ThemeProvider theme={theme}>
        <IntlProvider messages={messages[language]} locale={language} >
          <Header onLanguageChange={handleLanguageChange} />
          <GetStarted />
          <Countries />
          <Features />
          <Pricing />
          <Demo />
          <Contact />
          <Why />
          <Footer />
        </IntlProvider>
      </ThemeProvider>

    </div>
  );
}

export default App;
