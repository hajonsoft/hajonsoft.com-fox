import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import passportReader from "../../images/3m-passport-reader.png";
import bau from "../../images/bab-al-umrah.png";
import gma from "../../images/gabul-ya-haj.png";
import mohu from "../../images/ministry-of-hajj-and-umrah.jpg";
import twf from "../../images/tawaf.png";
import wtu from "../../images/way-to-umrah.png";
import dove from "../../images/dove.svg";

const players = [
  {
    title: "features.sell",
    img: dove,
    description: "features.sell-description",
  },
  {
    title: "features.quality-passport-reader",
    img: passportReader,
    description: "features.quality-passport-reader-description",
    downloads: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/breno-tours.appspot.com/o/scanner-software%2FAT9000.zip?alt=media&token=a3f5feda-b7ef-44b7-b3a2-be09530c3355",
        name: "3M AT9000 Mk2",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/breno-tours.appspot.com/o/scanner-software%2FComboSmart2.zip?alt=media&token=03e85505-600a-40a2-8d97-813d6c98f04a",
        name: "ARH Combo Smart",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/breno-tours.appspot.com/o/scanner-software%2FGemalto.zip?alt=media&token=61c1fdc5-9076-440f-a852-c2e3dde787a5",
        name: "Gemalto 32 bit",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/breno-tours.appspot.com/o/scanner-software%2FGemalto64.zip?alt=media&token=ee83bdcd-a25b-4c17-993a-eea92dd5067a",
        name: "Gemalto 64 bit",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/breno-tours.appspot.com/o/scanner-software%2FOCR640.zip?alt=media&token=82c4ff45-f2ad-41f7-97bb-9acc8cc1a0ae",
        name: "OCR640",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/breno-tours.appspot.com/o/scanner-software%2FCR100.zip?alt=media&token=860eaca3-f86c-4d81-a6cb-0df4232a8d56",
        name: "CR100",
      },
    ],
  },
  {
    title: "features.ehaj-integration",
    img: mohu,
    description: "features.ehaj-integration-description",
  },
  {
    title: "features.wtu-sender",
    img: wtu,
    description: "features.wtu-sender-description",
  },
  {
    title: "features.bau-sender",
    img: bau,
    description: "features.bau-sender-description",
  },
  {
    title: "features.gma-sender",
    img: gma,
    description: "features.gma-sender-description",
  },
  {
    title: "features.twf-sender",
    img: twf,
    description: "features.twf-sender-description",
  },
];

const Features = () => {
  const [index, setIndex] = useState(-1);
  return (
    <div id="features" style={{ padding: "1rem", backgroundColor: "#f0f1f3" }}>
      <Grid container justify="center" spacing={4}>
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
            justify="center"
            spacing={2}
            alignItems="center"
          >
            {players.map((player, idx) => (
              <Grid item>
                <Grid container justify="center" alignItems="space-around">
                  <Grid item>
                    <img
                      src={player.img}
                      alt={<FormattedMessage id={player.title} />}
                      width="64px"
                      height="64px"
                      onClick={() => setIndex(idx)}
                    />
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
            <Grid item xs={2}>
              <Grid container justify="center" alignItems="space-around">
                <Grid item>
                  <img
                    src={players[index].img}
                    alt={<FormattedMessage id={players[index].title} />}
                    width="64px"
                    height="64px"
                    onClick={() => setIndex(-1)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography align="center" variant="h6">
                    <FormattedMessage id={players[index].title} />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">
                <FormattedMessage id={players[index].description} />
              </Typography>
              {players[index].downloads &&
                players[index].downloads.map((download) => (
                  <a
                    style={{ marginLeft: "2rem", marginTop: "1rem" }}
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
