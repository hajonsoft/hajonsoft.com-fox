import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { sitePalette } from "../../util/siteTheme";
import useInView from "../../util/useInView";

const HIJRI_LOCALE = "en-u-ca-islamic-umalqura-nu-latn";
const USER_TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

const getNumericPart = (parts, type) => {
  const value = parts.find((part) => part.type === type)?.value;
  return value ? Number.parseInt(value, 10) : NaN;
};

const getHijriDateParts = (date, timeZone) => {
  const parts = new Intl.DateTimeFormat(HIJRI_LOCALE, {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);

  return {
    year: getNumericPart(parts, "year"),
    month: getNumericPart(parts, "month"),
    day: getNumericPart(parts, "day"),
  };
};

const getHijriMonthDayParts = (date, timeZone, locale) => {
  const parts = new Intl.DateTimeFormat(`${locale}-u-ca-islamic-umalqura`, {
    timeZone,
    month: "long",
    day: "numeric",
  }).formatToParts(date);

  return {
    month: parts.find((part) => part.type === "month")?.value || "",
    day: parts.find((part) => part.type === "day")?.value || "",
  };
};

const getGregorianYmdInTimeZone = (date, timeZone) => {
  const parts = new Intl.DateTimeFormat("en-u-nu-latn", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);

  return {
    year: getNumericPart(parts, "year"),
    month: getNumericPart(parts, "month"),
    day: getNumericPart(parts, "day"),
  };
};

const ymdToUtcMs = ({ year, month, day }) => Date.UTC(year, month - 1, day);

const fromYmdToNoonUtcDate = ({ year, month, day }) => new Date(Date.UTC(year, month - 1, day, 12));

const addOneDayUtc = (date) => {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + 1);
  return next;
};

const lastDayOfMonth = (year, month) => new Date(Date.UTC(year, month, 0)).getUTCDate();

const addMonthsToYmd = (ymd, monthsToAdd) => {
  const baseIndex = ymd.year * 12 + (ymd.month - 1) + monthsToAdd;
  const year = Math.floor(baseIndex / 12);
  const month = (baseIndex % 12) + 1;
  const day = Math.min(ymd.day, lastDayOfMonth(year, month));

  return { year, month, day };
};

const dayDiffFromYmd = (startYmd, endYmd) => {
  const ms = ymdToUtcMs(endYmd) - ymdToUtcMs(startYmd);
  return Math.round(ms / 86400000);
};

const diffAsMonthsAndDays = (startYmd, endYmd) => {
  const totalDays = dayDiffFromYmd(startYmd, endYmd);
  if (totalDays === 0) {
    return { months: 0, days: 0, isNegative: false };
  }

  const isNegative = totalDays < 0;
  const safeStart = isNegative ? endYmd : startYmd;
  const safeEnd = isNegative ? startYmd : endYmd;

  let months = (safeEnd.year - safeStart.year) * 12 + (safeEnd.month - safeStart.month);
  const monthAnchor = addMonthsToYmd(safeStart, months);
  if (dayDiffFromYmd(monthAnchor, safeEnd) < 0) {
    months -= 1;
  }

  const adjustedAnchor = addMonthsToYmd(safeStart, months);
  const days = dayDiffFromYmd(adjustedAnchor, safeEnd);

  return { months, days, isNegative };
};

const findGregorianForHijriDate = ({ hijriYear, hijriMonth, hijriDay, searchStart, searchEnd, timeZone }) => {
  let cursor = fromYmdToNoonUtcDate(searchStart);
  const end = fromYmdToNoonUtcDate(searchEnd);

  while (cursor <= end) {
    const parts = getHijriDateParts(cursor, timeZone);
    if (parts.year === hijriYear && parts.month === hijriMonth && parts.day === hijriDay) {
      return new Date(cursor);
    }
    cursor = addOneDayUtc(cursor);
  }

  return null;
};

const formatGregorianDateTime = (date, timeZone, locale) =>
  new Intl.DateTimeFormat(locale, {
    timeZone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

const formatGregorianDate = (date, timeZone, locale) =>
  new Intl.DateTimeFormat(locale, {
    timeZone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

const formatHijriDateTime = (date, timeZone, locale) =>
  new Intl.DateTimeFormat(`${locale}-u-ca-islamic-umalqura`, {
    timeZone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

const formatHijriDate = (date, timeZone, locale) =>
  new Intl.DateTimeFormat(`${locale}-u-ca-islamic-umalqura`, {
    timeZone,
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

const buildSectionData = (now, timeZone, locale) => {
  const todayHijri = getHijriDateParts(now, timeZone);
  const todayGregorianYmd = getGregorianYmdInTimeZone(now, timeZone);

  const searchStart = addMonthsToYmd(todayGregorianYmd, -14);
  const searchEnd = addMonthsToYmd(todayGregorianYmd, 14);

  const hijriYearStartDate = findGregorianForHijriDate({
    hijriYear: todayHijri.year,
    hijriMonth: 1,
    hijriDay: 1,
    searchStart,
    searchEnd,
    timeZone,
  });

  const dhuAlQadah25Date = findGregorianForHijriDate({
    hijriYear: todayHijri.year,
    hijriMonth: 11,
    hijriDay: 25,
    searchStart,
    searchEnd,
    timeZone,
  });

  const arafahDate = findGregorianForHijriDate({
    hijriYear: todayHijri.year,
    hijriMonth: 12,
    hijriDay: 9,
    searchStart,
    searchEnd,
    timeZone,
  });

  const hijriYearStartYmd = hijriYearStartDate ? getGregorianYmdInTimeZone(hijriYearStartDate, timeZone) : null;
  const dhuAlQadah25Ymd = dhuAlQadah25Date ? getGregorianYmdInTimeZone(dhuAlQadah25Date, timeZone) : null;
  const arafahYmd = arafahDate ? getGregorianYmdInTimeZone(arafahDate, timeZone) : null;

  const daysInsideUmrahSeason = hijriYearStartYmd
    ? dayDiffFromYmd(hijriYearStartYmd, todayGregorianYmd) + 1
    : null;

  const umrahReadable = hijriYearStartYmd
    ? diffAsMonthsAndDays(hijriYearStartYmd, todayGregorianYmd)
    : null;

  const untilDhuAlQadah = dhuAlQadah25Ymd
    ? diffAsMonthsAndDays(todayGregorianYmd, dhuAlQadah25Ymd)
    : null;
  const untilDhuAlQadahDays = dhuAlQadah25Ymd
    ? Math.abs(dayDiffFromYmd(todayGregorianYmd, dhuAlQadah25Ymd))
    : null;

  const untilArafah = arafahYmd
    ? diffAsMonthsAndDays(todayGregorianYmd, arafahYmd)
    : null;
  const untilArafahDays = arafahYmd ? Math.abs(dayDiffFromYmd(todayGregorianYmd, arafahYmd)) : null;

  return {
    hijriYear: todayHijri.year,
    nowHijri: formatHijriDateTime(now, timeZone, locale),
    nowGregorian: formatGregorianDateTime(now, timeZone, locale),
    hijriYearStartDate,
    hijriYearStartYmd,
    daysInsideUmrahSeason,
    umrahReadable,
    dhuAlQadah25Date,
    untilDhuAlQadah,
    untilDhuAlQadahDays,
    arafahDate,
    untilArafah,
    untilArafahDays,
  };
};

const formatDuration = (intl, diff) => {
  if (!diff) return intl.formatMessage({ id: "season.not-available" });

  return intl.formatMessage(
    { id: "season.duration.months-days" },
    {
      months: diff.months,
      days: diff.days,
    }
  );
};

const formatCountdown = (intl, diff) => {
  if (!diff) return intl.formatMessage({ id: "season.not-available" });
  if (diff.months === 0 && diff.days === 0) {
    return intl.formatMessage({ id: "season.countdown.today" });
  }

  const duration = formatDuration(intl, diff);
  if (diff.isNegative) {
    return intl.formatMessage({ id: "season.countdown.passed" }, { duration });
  }

  return intl.formatMessage({ id: "season.countdown.remaining" }, { duration });
};

const badgeStyles = {
  liveChip: {
    height: "auto",
    minWidth: 104,
    maxWidth: 152,
    alignItems: "stretch",
    borderRadius: 2.5,
    border: `1px solid ${sitePalette.primaryHover}`,
    backgroundColor: sitePalette.primary,
    boxShadow: "0 10px 22px rgba(18,44,74,0.12)",
    "& .MuiChip-icon": {
      color: sitePalette.white,
      ml: 1,
      mr: 0,
      fontSize: 18,
      alignSelf: "center",
    },
    "& .MuiChip-label": {
      display: "block",
      px: 1,
      py: 0.8,
      maxWidth: 116,
      whiteSpace: "normal",
    },
  },
  counterChip: {
    height: 38,
    minWidth: 68,
    maxWidth: 86,
    borderRadius: 999,
    display: "inline-flex",
    alignItems: "center",
    boxShadow: "0 10px 22px rgba(24,42,66,0.12)",
    border: `1px solid ${sitePalette.primaryHover}`,
    backgroundColor: sitePalette.primary,
    color: sitePalette.white,
    "& .MuiChip-label": {
      display: "flex",
      alignItems: "center",
      gap: 0.45,
      justifyContent: "center",
      width: "100%",
      paddingLeft: 8,
      paddingRight: 8,
      fontSize: "0.9rem",
      fontWeight: 800,
      lineHeight: 1,
    },
  },
};

const SeasonCardBadge = ({ badge, isRtl }) => {
  if (!badge) return null;

  if (badge.variant === "live") {
    return (
      <Chip
        icon={<CalendarMonthRoundedIcon />}
        label={
          <Box sx={{ textAlign: isRtl ? "right" : "left" }}>
            <Typography sx={{ fontSize: "0.67rem", lineHeight: 1.05, fontWeight: 700, color: "rgba(255,255,255,0.88)" }}>
              {badge.label}
            </Typography>
            <Typography sx={{ fontSize: "1.15rem", lineHeight: 1, fontWeight: 800, color: sitePalette.white }}>
              {badge.value}
            </Typography>
          </Box>
        }
        sx={badgeStyles.liveChip}
      />
    );
  }

  const isUp = badge.variant === "umrah";
  const ArrowIcon = isUp ? ArrowUpwardRoundedIcon : ArrowDownwardRoundedIcon;

  return (
    <Chip
      label={
        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.45 }}>
          <ArrowIcon sx={{ fontSize: 19, color: sitePalette.white }} />
          <Box component="span">{badge.value}</Box>
        </Box>
      }
      sx={{
        ...badgeStyles.counterChip,
        direction: isRtl ? "rtl" : "ltr",
      }}
    />
  );
};

const SeasonDates = () => {
  const intl = useIntl();
  const [now, setNow] = useState(new Date());
  const [sectionRef, sectionInView] = useInView({ threshold: 0.18 });
  const isRtl = intl.locale === "ar" || intl.locale.startsWith("ar-");

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const seasonData = useMemo(() => buildSectionData(now, USER_TIMEZONE, intl.locale), [intl.locale, now]);
  const todayMonthDay = useMemo(
    () => getHijriMonthDayParts(now, USER_TIMEZONE, intl.locale),
    [intl.locale, now]
  );

  const cards = [
    {
      eyebrow: intl.formatMessage({ id: "season.card.live.eyebrow" }),
      title: intl.formatMessage({ id: "season.card.live.title" }),
      badge: {
        variant: "live",
        label: todayMonthDay.month,
        value: todayMonthDay.day,
      },
      lines: [
        intl.formatMessage({ id: "season.line.hijri" }, { value: seasonData.nowHijri }),
        intl.formatMessage({ id: "season.line.gregorian" }, { value: seasonData.nowGregorian }),
        intl.formatMessage({ id: "season.line.timezone" }, { value: USER_TIMEZONE }),
      ],
    },
    {
      eyebrow: intl.formatMessage({ id: "season.card.umrah.eyebrow" }),
      title: intl.formatMessage({ id: "season.card.umrah.title" }, { year: seasonData.hijriYear }),
      badge:
        typeof seasonData.daysInsideUmrahSeason === "number"
          ? {
              variant: "umrah",
              value: seasonData.daysInsideUmrahSeason,
            }
          : null,
      lines: seasonData.hijriYearStartDate
        ? [
            intl.formatMessage(
              { id: "season.line.hijri-date" },
              { value: formatHijriDate(seasonData.hijriYearStartDate, USER_TIMEZONE, intl.locale) }
            ),
            intl.formatMessage(
              { id: "season.line.gregorian-date" },
              { value: formatGregorianDate(seasonData.hijriYearStartDate, USER_TIMEZONE, intl.locale) }
            ),
            intl.formatMessage(
              { id: "season.line.inside-umrah" },
              {
                days: seasonData.daysInsideUmrahSeason,
                duration: formatDuration(intl, seasonData.umrahReadable),
              }
            ),
          ]
        : [intl.formatMessage({ id: "season.not-available-timezone" })],
    },
    {
      eyebrow: intl.formatMessage({ id: "season.card.hajj-prep.eyebrow" }),
      title: intl.formatMessage({ id: "season.card.hajj-prep.title" }),
      badge:
        seasonData.untilDhuAlQadah
          ? {
              variant: "prep",
              value: seasonData.untilDhuAlQadahDays,
            }
          : null,
      lines: seasonData.dhuAlQadah25Date
        ? [
            intl.formatMessage(
              { id: "season.line.hijri-date" },
              { value: formatHijriDate(seasonData.dhuAlQadah25Date, USER_TIMEZONE, intl.locale) }
            ),
            intl.formatMessage(
              { id: "season.line.gregorian-date" },
              { value: formatGregorianDate(seasonData.dhuAlQadah25Date, USER_TIMEZONE, intl.locale) }
            ),
            intl.formatMessage(
              { id: "season.line.countdown" },
              { value: formatCountdown(intl, seasonData.untilDhuAlQadah) }
            ),
          ]
        : [intl.formatMessage({ id: "season.not-available-timezone" })],
    },
    {
      eyebrow: intl.formatMessage({ id: "season.card.arafah.eyebrow" }),
      title: intl.formatMessage({ id: "season.card.arafah.title" }),
      badge:
        seasonData.untilArafah
          ? {
              variant: "arafah",
              value: seasonData.untilArafahDays,
            }
          : null,
      lines: seasonData.arafahDate
        ? [
            intl.formatMessage(
              { id: "season.line.hijri-date" },
              { value: formatHijriDate(seasonData.arafahDate, USER_TIMEZONE, intl.locale) }
            ),
            intl.formatMessage(
              { id: "season.line.gregorian-date" },
              { value: formatGregorianDate(seasonData.arafahDate, USER_TIMEZONE, intl.locale) }
            ),
            intl.formatMessage(
              { id: "season.line.countdown" },
              { value: formatCountdown(intl, seasonData.untilArafah) }
            ),
          ]
        : [intl.formatMessage({ id: "season.not-available-timezone" })],
    },
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 8 },
        background:
          "radial-gradient(circle at 14% 22%, rgba(64,144,208,0.2), transparent 38%), radial-gradient(circle at 90% 14%, rgba(26,39,64,0.18), transparent 30%), linear-gradient(180deg, #f8fbff 0%, #eef5fb 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -60,
          right: -70,
          width: 220,
          height: 220,
          borderRadius: "40% 60% 60% 40%",
          background: "linear-gradient(145deg, rgba(64,144,208,0.22), rgba(142,188,230,0.08))",
          transform: "rotate(-18deg)",
          pointerEvents: "none",
        }}
      />

      <Container>
        <Stack spacing={1.25} sx={{ mb: 3.25 }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 2, fontWeight: 700, color: sitePalette.primaryHover }}
          >
            {intl.formatMessage({ id: "season.section.eyebrow" })}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: sitePalette.text,
              fontSize: { xs: "1.7rem", md: "2.15rem" },
              maxWidth: 920,
            }}
          >
            {intl.formatMessage({ id: "season.section.title" })}
          </Typography>
          <Typography sx={{ color: sitePalette.textMuted, maxWidth: 820 }}>
            {intl.formatMessage({ id: "season.section.subtitle" })}
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          {cards.map((card, idx) => (
            <Box
              key={card.title}
              sx={{
                position: "relative",
                backgroundColor: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(26,39,64,0.1)",
                borderRadius: 3,
                p: { xs: 2.2, md: 2.6 },
                boxShadow: "0 14px 28px rgba(24,42,66,0.08)",
                transform: sectionInView ? "translateY(0)" : "translateY(18px)",
                opacity: sectionInView ? 1 : 0,
                transition:
                  "transform 650ms cubic-bezier(0.22, 1, 0.36, 1), opacity 650ms ease, box-shadow 260ms ease",
                transitionDelay: `${0.08 + idx * 0.09}s`,
                "&:hover": {
                  boxShadow: "0 20px 34px rgba(24,42,66,0.15)",
                },
              }}
            >
              <Box sx={{ position: "absolute", top: 16, ...(isRtl ? { left: 16 } : { right: 16 }) }}>
                <SeasonCardBadge badge={card.badge} isRtl={isRtl} />
              </Box>
              <Typography
                variant="overline"
                sx={{
                  color: sitePalette.primaryHover,
                  letterSpacing: 1.4,
                  fontWeight: 700,
                  ...(isRtl ? { pl: 11 } : { pr: 11 }),
                }}
              >
                {card.eyebrow}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  fontWeight: 700,
                  color: sitePalette.dark,
                  ...(isRtl ? { pl: 11 } : { pr: 11 }),
                }}
              >
                {card.title}
              </Typography>
              <Stack spacing={0.7}>
                {card.lines.map((line) => (
                  <Typography key={line} variant="body2" sx={{ color: sitePalette.text, lineHeight: 1.6 }}>
                    {line}
                  </Typography>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        <Typography sx={{ mt: 2, color: sitePalette.textMuted, fontSize: "0.85rem" }}>
          {intl.formatMessage({ id: "season.section.note" })}
        </Typography>
      </Container>
    </Box>
  );
};

export default SeasonDates;
