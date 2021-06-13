import { Button, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage = () => {
  const track: ITrack = {
    _id: "1",
    name: "Crimsin Skies",
    artist: "Black Veil Brides",
    text: "Какой-то текст",
    listens: 5,
    picture: "http://localhost:5000/image/3b4decea-f8a6-443e-ae61-eba20f644268.jpg",
    audio: "http://localhst:5000/audio/cd256bf9-3ab1-4008-beaa-814bad6ad4b5.mp3",
    comments: []
  }

  const router = useRouter();

  return (
    <MainLayout>
      <Button
        onClick={() => router.push("/tracks")}
        style={{ fontSize: 32 }}
        variant={"outlined"}
      >
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} width={200} height={200} />
        <div style={{ margin: "20px 0" }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова к песне</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="Комментарий" fullWidth multiline rows={4} />
        <Button>Отправить</Button>
      </Grid>
      <div>
          {track.comments.map(comment => {
              <div>
                  <div>Автор - {comment.username}</div>
                  <div>Комментарий - {comment.text}</div>
              </div>
          })}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
