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
        url: "https://s3.eu-west-1.amazonaws.com/hajonsoft.com/downloads/AT9000.zip",
        name: "3M AT9000 Mk2",
      },
      {
        url: "https://s3.eu-west-1.amazonaws.com/hajonsoft.com/downloads/ComboSmart2.zip",
        name: "ARH Combo Smart",
      },
      {
        url: "https://s3.eu-west-1.amazonaws.com/hajonsoft.com/downloads/Gemalto.zip",
        name: "Gemalto 32 bit",
      },
      {
        url: "https://s3.eu-west-1.amazonaws.com/hajonsoft.com/downloads/Gemalto64.zip",
        name: "Gemalto 64 bit",
      },
      {
        url: "https://s3.eu-west-1.amazonaws.com/hajonsoft.com/downloads/OCR640.zip",
        name: "OCR640",
      },
      {
        url: "https://s3.eu-west-1.amazonaws.com/hajonsoft.com/downloads/CR100.zip",
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

  // useEffect(() => {
  //     const timer = setInterval(() => {
  //         setIndex(prev => {
  //             if (prev < players.length - 1) {
  //                 return prev + 1;
  //             } else {
  //                 return -1
  //             }
  //         });
  //     }, 5000);
  //     return () => {
  //         // timer.clearInterval();
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
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
