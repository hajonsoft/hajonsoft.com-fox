import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import useInView from "../../util/useInView";

const svgIcons = {
  dove: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Online Sales">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#E9F5EF" />
      <path d="M17 22h31l-2 12H22l-2-12z" fill="#1F7A5A" />
      <path d="M24 22c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#145A43" strokeWidth="3" strokeLinecap="round" />
      <circle cx="28" cy="44" r="3.5" fill="#145A43" />
      <circle cx="42" cy="44" r="3.5" fill="#145A43" />
      <path d="M32 30v-7" stroke="#F5FBF8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28.5 33.5L32 30l3.5 3.5" stroke="#F5FBF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  passportReader: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Passport Scanning">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#EAF0FF" />
      <rect x="14" y="17" width="26" height="30" rx="4" fill="#2B4E9A" />
      <path d="M21 24h12" stroke="#DDE7FF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="27" cy="32" r="5" stroke="#DDE7FF" strokeWidth="2" />
      <path d="M22.5 32h9" stroke="#DDE7FF" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M27 27.5v9" stroke="#DDE7FF" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="41" y="20" width="9" height="24" rx="3" fill="#6D8FE0" />
      <path d="M44.5 24v16M47 24v16" stroke="#F8FAFF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  ministry: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="eHaj Integration">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#EEF3E7" />
      <path d="M18 43h28" stroke="#486B2C" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 43V31h16v12" fill="#6D9443" />
      <path d="M22 31h20L32 22 22 31z" fill="#486B2C" />
      <circle cx="48" cy="39" r="8" fill="#2A7B4B" />
      <path d="M44.5 39.5l2.3 2.3 4.7-5.2" stroke="#F4FBF6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  masarUmrah: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Masar Umrah">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#EEF8F8" />
      <circle cx="19" cy="45" r="4.5" fill="#1E7D7A" />
      <circle cx="32" cy="30" r="4.5" fill="#249B94" />
      <circle cx="46" cy="20" r="4.5" fill="#1E7D7A" />
      <path d="M22.5 42L28 35.8c1.5-1.7 4-1.9 5.7-.5l3.6 2.9c1.8 1.5 4.5 1.2 6-.6L49 30" stroke="#166563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  masarHajj: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Masar Hajj">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#F7F1E8" />
      <rect x="22" y="23" width="20" height="20" rx="2" fill="#1C232B" />
      <rect x="22" y="23" width="20" height="5" fill="#D7B46A" />
      <path d="M17 46h30" stroke="#A17A37" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="16" r="3" fill="#A17A37" />
    </svg>
  ),
  visitVisa: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Visit Visa">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#F0F4FF" />
      <rect x="14" y="15" width="36" height="34" rx="5" fill="#3C5AA6" />
      <circle cx="26" cy="29" r="5" fill="#E7EEFF" />
      <path d="M35 26h9M35 31h11M19 39h26" stroke="#E7EEFF" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M48 14v11" stroke="#6B86CC" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  additional: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Additional Features">
      <rect x="6" y="6" width="52" height="52" rx="14" fill="#EEF2F6" />
      <circle cx="21" cy="32" r="5" fill="#3A6B8C" />
      <circle cx="32" cy="21" r="5" fill="#2F5A77" />
      <circle cx="43" cy="32" r="5" fill="#3A6B8C" />
      <circle cx="32" cy="43" r="5" fill="#2F5A77" />
      <path d="M24.5 29.5l5-5M39.5 29.5l-5-5M24.5 34.5l5 5M39.5 34.5l-5 5" stroke="#22455C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

const players = [
  {
    title: "features.sell",
    icon: svgIcons.dove,
    description: "features.sell-description",
  },
  {
    title: "features.quality-passport-reader",
    icon: svgIcons.passportReader,
    description: "features.quality-passport-reader-description",
    downloads: [
      { url: "https://firebasestorage.googleapis.com/v0/b/breno-tours.appspot.com/o/scanner-software%2FAT9000.zip?alt=media&token=a3f5feda-b7ef-44b7-b3a2-be09530c3355", name: "3M AT9000 Mk2" },
      { url: "https://firebasestorage.googleapis.com/v0/b/breno-tours.appspot.com/o/scanner-software%2FComboSmart2.zip?alt=media&token=03e85505-600a-40a2-8d97-813d6c98f04a", name: "ARH Combo Smart" },
      { url: "https://firebasestorage.googleapis.com/v0/b/breno-tours.appspot.com/o/scanner-software%2FGemalto.zip?alt=media&token=61c1fdc5-9076-440f-a852-c2e3dde787a5", name: "Gemalto 32 bit" },
      { url: "https://firebasestorage.googleapis.com/v0/b/breno-tours.appspot.com/o/scanner-software%2FGemalto64.zip?alt=media&token=ee83bdcd-a25b-4c17-993a-eea92dd5067a", name: "Gemalto 64 bit" },
      { url: "https://firebasestorage.googleapis.com/v0/b/breno-tours.appspot.com/o/scanner-software%2FOCR640.zip?alt=media&token=82c4ff45-f2ad-41f7-97bb-9acc8cc1a0ae", name: "OCR640" },
      { url: "https://firebasestorage.googleapis.com/v0/b/breno-tours.appspot.com/o/scanner-software%2FCR100.zip?alt=media&token=860eaca3-f86c-4d81-a6cb-0df4232a8d56", name: "CR100" },
    ],
  },
  {
    title: "features.ehaj-integration",
    icon: svgIcons.ministry,
    description: "features.ehaj-integration-description",
  },
  {
    title: "features.masar-umrah",
    icon: svgIcons.masarUmrah,
    description: "features.wtu-sender-description",
  },
  {
    title: "features.masar-hajj",
    icon: svgIcons.masarHajj,
    description: "features.bau-sender-description",
  },
  {
    title: "features.visit-visa",
    icon: svgIcons.visitVisa,
    description: "features.gma-sender-description",
  },
  {
    title: "features.much-more",
    icon: svgIcons.additional,
    description: "features.twf-sender-description",
  },
];

const Features = () => {
  const [index, setIndex] = useState(-1);
  const [sectionRef, sectionInView] = useInView();

  return (
    <div
      id="features"
      ref={sectionRef}
      style={{
        padding: "1rem",
        backgroundColor: "#f0f1f3",
        opacity: sectionInView ? 1 : 0,
        transform: sectionInView ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            <FormattedMessage id="features.manage-effortlessly" />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            <FormattedMessage id="features.complete-software" />
          </Typography>
        </Grid>
        {index === -1 && (
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            spacing={2}
            alignItems="center"
          >
            {players.map((player, idx) => (
              <Grid
                item
                key={idx}
                className="anim-hover-lift"
                style={{
                  cursor: "pointer",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  // Staggered entrance when section is in view
                  opacity: sectionInView ? 1 : 0,
                  animation: sectionInView
                    ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${Math.min(idx * 0.1, 0.6)}s both`
                    : "none",
                }}
              >
                <Grid container justifyContent="center" alignItems="center">
                  <Grid item onClick={() => setIndex(idx)}>
                    {player.icon}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="center" variant="body1">
                      <FormattedMessage id={player.title} />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
        {index !== -1 && (
          <Grid item xs={12} container alignItems="center">
            <Grid item xs={2} onClick={() => setIndex(-1)}>
              {players[index].icon}
              <Typography align="center" variant="h6">
                <FormattedMessage id={players[index].title} />
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">
                <FormattedMessage id={players[index].description} />
              </Typography>
              {players[index].downloads &&
                players[index].downloads.map((download, i) => (
                  <a
                    key={i}
                    style={{ display: "block", marginTop: "1rem" }}
                    href={download.url}
                  >
                    {download.name}
                  </a>
                ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Features;