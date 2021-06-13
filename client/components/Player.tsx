import { Grid, IconButton } from "@material-ui/core";
import { PlayArrow, Pause, VolumeUp } from "@material-ui/icons";
import React from "react";
import styles from "../styles/Player.module.scss";
import { ITrack } from "../types/track";
import TrackProgress from "./TrackProgress";

const Player = () => {
  const active = false;
  const track: ITrack = {
    _id: "1",
    name: "Crimsin Skies",
    artist: "Black Veil Brides",
    text: "Какой-то текст",
    listens: 5,
    picture:
      "http://localhost:5000/image/3b4decea-f8a6-443e-ae61-eba20f644268.jpg",
    audio:
      "http://localhst:5000/audio/cd256bf9-3ab1-4008-beaa-814bad6ad4b5.mp3",
    comments: [],
  };

  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {!active ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})}/>
      <VolumeUp style={{marginLeft: 'auto'}}/>
      <TrackProgress left={0} right={100} onChange={() => ({})}/>
    </div>
  );
};

export default Player;
