const SUPPORTED_LANGUAGES = [
  "en",
  "ar",
  "fr",
  "de",
  "hi",
  "it",
  "ja",
  "ms",
  "ru",
  "th",
  "tr",
  "zh",
];

/** Map BCP-47 / region tags to our supported language codes. */
const LANGUAGE_ALIASES = {
  eng: "en",
  ara: "ar",
  fra: "fr",
  fre: "fr",
  deu: "de",
  ger: "de",
  hin: "hi",
  ita: "it",
  jpn: "ja",
  msa: "ms",
  may: "ms",
  rus: "ru",
  tha: "th",
  tur: "tr",
  zho: "zh",
  cmn: "zh",
  "zh-cn": "zh",
  "zh-hans": "zh",
  "zh-sg": "zh",
  "zh-tw": "zh",
  "zh-hant": "zh",
  "zh-hk": "zh",
  nb: "en",
  nn: "en",
  no: "en",
  pt: "en",
  es: "en",
  nl: "en",
  id: "ms",
  fil: "en",
  tl: "en",
  uk: "en",
  ur: "ar",
  fa: "ar",
};

/**
 * Country ISO2 → preferred site language when browser locale is weak (English-only
 * or unsupported). Prefer unambiguous single-language markets. Multilingual
 * countries (CA, CH, BE, etc.) are omitted so an English browser stays English
 * unless the browser already lists a supported local language.
 */
const COUNTRY_LANGUAGE = {
  SA: "ar",
  AE: "ar",
  EG: "ar",
  JO: "ar",
  KW: "ar",
  QA: "ar",
  BH: "ar",
  OM: "ar",
  IQ: "ar",
  LY: "ar",
  SD: "ar",
  YE: "ar",
  MA: "ar",
  DZ: "ar",
  TN: "ar",
  LB: "ar",
  SY: "ar",
  PS: "ar",
  MR: "ar",
  FR: "fr",
  SN: "fr",
  CI: "fr",
  ML: "fr",
  NE: "fr",
  BF: "fr",
  TG: "fr",
  BJ: "fr",
  GN: "fr",
  DE: "de",
  AT: "de",
  LI: "de",
  IT: "it",
  SM: "it",
  VA: "it",
  TR: "tr",
  RU: "ru",
  BY: "ru",
  KZ: "ru",
  JP: "ja",
  CN: "zh",
  TW: "zh",
  HK: "zh",
  MY: "ms",
  BN: "ms",
  ID: "ms",
  TH: "th",
  IN: "hi",
  NP: "hi",
  US: "en",
  GB: "en",
  AU: "en",
  NZ: "en",
  IE: "en",
  ZA: "en",
  PH: "en",
  PK: "en",
  BD: "en",
  NG: "en",
  KE: "en",
  SG: "en",
};

/** IANA timezone → likely language cue (used when browser is English/empty). */
const TIMEZONE_LANGUAGE = {
  "Asia/Riyadh": "ar",
  "Asia/Dubai": "ar",
  "Asia/Qatar": "ar",
  "Asia/Kuwait": "ar",
  "Asia/Bahrain": "ar",
  "Asia/Muscat": "ar",
  "Asia/Baghdad": "ar",
  "Africa/Cairo": "ar",
  "Africa/Casablanca": "ar",
  "Africa/Tunis": "ar",
  "Africa/Algiers": "ar",
  "Asia/Amman": "ar",
  "Asia/Beirut": "ar",
  "Asia/Damascus": "ar",
  "Asia/Gaza": "ar",
  "Asia/Hebron": "ar",
  "Europe/Paris": "fr",
  "Europe/Berlin": "de",
  "Europe/Vienna": "de",
  "Europe/Rome": "it",
  "Europe/Istanbul": "tr",
  "Europe/Moscow": "ru",
  "Asia/Tokyo": "ja",
  "Asia/Shanghai": "zh",
  "Asia/Hong_Kong": "zh",
  "Asia/Taipei": "zh",
  "Asia/Kuala_Lumpur": "ms",
  "Asia/Jakarta": "ms",
  "Asia/Bangkok": "th",
  "Asia/Kolkata": "hi",
  "Asia/Calcutta": "hi",
  "America/New_York": "en",
  "America/Los_Angeles": "en",
  "America/Chicago": "en",
  "America/Toronto": "en",
  "Europe/London": "en",
  "Australia/Sydney": "en",
  "Asia/Singapore": "en",
};

const isSupported = (code) => SUPPORTED_LANGUAGES.includes(code);

export const normalizeLanguage = (raw) => {
  if (!raw || typeof raw !== "string") return null;
  const value = raw.trim().replace(/_/g, "-").toLowerCase();
  if (!value) return null;

  if (LANGUAGE_ALIASES[value]) {
    const mapped = LANGUAGE_ALIASES[value];
    return isSupported(mapped) ? mapped : null;
  }

  const primary = value.split("-")[0];
  if (LANGUAGE_ALIASES[primary]) {
    const mapped = LANGUAGE_ALIASES[primary];
    return isSupported(mapped) ? mapped : null;
  }

  return isSupported(primary) ? primary : null;
};

const languagesFromNavigator = () => {
  const list = [];
  if (Array.isArray(navigator.languages)) {
    list.push(...navigator.languages);
  }
  if (navigator.language) list.push(navigator.language);
  if (navigator.userLanguage) list.push(navigator.userLanguage);

  const seen = new Set();
  const ordered = [];
  for (const item of list) {
    const code = normalizeLanguage(item);
    if (code && !seen.has(code)) {
      seen.add(code);
      ordered.push(code);
    }
  }
  return ordered;
};

/**
 * Prefer the first supported language in the browser preference list.
 * If Arabic appears anywhere in the top preferences (common for bilingual
 * MENA browsers that list en first), prefer Arabic for this audience.
 */
const pickFromBrowserLanguages = () => {
  const ordered = languagesFromNavigator();
  if (!ordered.length) return null;

  const top = ordered.slice(0, 3);
  if (top.includes("ar") && top[0] === "en") {
    return "ar";
  }
  return ordered[0];
};

const languageFromTimezone = () => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) return null;
    if (TIMEZONE_LANGUAGE[tz]) return TIMEZONE_LANGUAGE[tz];

    if (tz.includes("Riyadh") || tz.includes("Dubai") || tz.includes("Qatar")) {
      return "ar";
    }
    if (tz.startsWith("Europe/Istanbul")) return "tr";
    if (tz.startsWith("Asia/Tokyo")) return "ja";
    if (tz.startsWith("Asia/Shanghai") || tz.startsWith("Asia/Chongqing")) {
      return "zh";
    }
    if (tz.startsWith("Asia/Bangkok")) return "th";
    if (tz.startsWith("Asia/Kolkata") || tz.startsWith("Asia/Calcutta")) {
      return "hi";
    }
    if (tz.startsWith("Asia/Kuala_Lumpur") || tz.startsWith("Asia/Jakarta")) {
      return "ms";
    }
  } catch {
    // ignore
  }
  return null;
};

const languageFromLocaleRegion = () => {
  try {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    return normalizeLanguage(locale);
  } catch {
    return null;
  }
};

/** True when browser offers no supported language, or only English. */
const isWeakEnglishPreference = (browserLangs) =>
  !browserLangs.length ||
  (browserLangs[0] === "en" && !browserLangs.slice(1, 3).some((l) => l !== "en"));

/**
 * Synchronous best-effort preferred language.
 * Priority: explicit override > browser languages > Intl locale >
 * timezone cue (when English-only) > English.
 */
export const detectPreferredLanguageSync = () => {
  const override = localStorage.getItem("langOverride");
  if (override && isSupported(override)) return override;

  const fromBrowser = pickFromBrowserLanguages();
  if (fromBrowser) {
    if (fromBrowser !== "en") return fromBrowser;

    // English-first browser: timezone can refine for Hajj/Umrah markets.
    const tzLang = languageFromTimezone();
    if (tzLang && tzLang !== "en" && isWeakEnglishPreference(languagesFromNavigator())) {
      return tzLang;
    }
    return "en";
  }

  const intlLang = languageFromLocaleRegion();
  if (intlLang) return intlLang;

  const tzLang = languageFromTimezone();
  if (tzLang && isSupported(tzLang)) return tzLang;

  return "en";
};

/**
 * Strengthen detection with visitor country (IP geolocation).
 * Only applied when the user has not manually chosen a language.
 * Returns a promise of a supported language code.
 */
export const detectPreferredLanguageAsync = async () => {
  const override = localStorage.getItem("langOverride");
  if (override && isSupported(override)) return override;

  const browserLangs = languagesFromNavigator();
  const syncGuess = detectPreferredLanguageSync();

  // Strong non-English browser preference wins over geo.
  if (browserLangs[0] && browserLangs[0] !== "en") {
    return browserLangs[0];
  }
  if (syncGuess && syncGuess !== "en") {
    return syncGuess;
  }

  let countryLang = null;
  try {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 2500);
    const response = await fetch("https://ipapi.co/json/", {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    window.clearTimeout(timer);

    if (response.ok) {
      const data = await response.json();
      const country = (data.country_code || data.country || "").toUpperCase();
      if (COUNTRY_LANGUAGE[country] && isSupported(COUNTRY_LANGUAGE[country])) {
        countryLang = COUNTRY_LANGUAGE[country];
      }

      if (!countryLang && typeof data.languages === "string" && data.languages) {
        const first = normalizeLanguage(data.languages.split(",")[0]);
        if (first) countryLang = first;
      }
    }
  } catch {
    // Network blocked / timeout — fall back quietly
  }

  if (
    countryLang &&
    countryLang !== "en" &&
    isWeakEnglishPreference(browserLangs)
  ) {
    return countryLang;
  }

  const tzLang = languageFromTimezone();
  if (tzLang && tzLang !== "en" && isWeakEnglishPreference(browserLangs)) {
    return tzLang;
  }

  return syncGuess;
};

export const supportedLanguages = SUPPORTED_LANGUAGES;
