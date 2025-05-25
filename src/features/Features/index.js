import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const svgIcons = {
  dove: (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12l10 10L22 2" stroke="#2D5BFF" strokeWidth="2" fill="none"/>
    </svg>
  ),
  passportReader: (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#4C6FFF" />
      <path d="M7 9h10v6H7z" fill="white" />
    </svg>
  ),
  ministry: (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#2D5BFF" strokeWidth="2" fill="#E5ECFF"/>
      <path d="M8 12h8M12 8v8" stroke="#2D5BFF" strokeWidth="2" />
    </svg>
  ),
  masarUmrah: (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12l7-7 4 4 7-7" stroke="#4C6FFF" strokeWidth="2" fill="none"/>
    </svg>
  ),
  masarHajj: (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12h20L12 2z" fill="#2D5BFF" />
    </svg>
  ),
  visitVisa: (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="#4C6FFF" />
      <circle cx="12" cy="12" r="4" fill="white" />
    </svg>
  ),
  additional: (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14M12 5v14" stroke="#2D5BFF" strokeWidth="2"/>
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
    title: "Masar Umrah",
    icon: svgIcons.masarUmrah,
    description: "features.wtu-sender-description",
  },
  {
    title: "Masar Hajj",
    icon: svgIcons.masarHajj,
    description: "features.bau-sender-description",
  },
  {
    title: "Visit Visa",
    icon: svgIcons.visitVisa,
    description: "features.gma-sender-description",
  },
  {
    title: "Much More",
    icon: svgIcons.additional,
    description: "features.twf-sender-description",
  },
];

const Features = () => {
  const [index, setIndex] = useState(-1);
  return (
    <div id="features" style={{ padding: "1rem", backgroundColor: "#f0f1f3" }}>
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
              <Grid item key={idx}>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid item onClick={() => setIndex(idx)}>{player.icon}</Grid>
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