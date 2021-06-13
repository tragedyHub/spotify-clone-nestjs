import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Button, Card, Grid, Box } from "@material-ui/core";
import { useRouter } from "next/router";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
  const router = useRouter()

  const tracks: ITrack[] = [
    {
      _id: "1",
      name: "Crimsin Skies",
      artist: "Black Veil Brides",
      text: "Какой-то текст",
      listens: 5,
      picture: "http://localhost:5000/image/3b4decea-f8a6-443e-ae61-eba20f644268.jpg",
      audio: "http://localhst:5000/audio/cd256bf9-3ab1-4008-beaa-814bad6ad4b5.mp3",
      comments: []
    },
    {
      _id: "2",
      name: "Трек 2",
      artist: "Исполнитель 2",
      text: "Какой-то текст",
      listens: 5,
      audio: "http://localhst:5000/audio/2.mp3",
      picture: "http://localhost:5000/image/2.jpg",
      comments: []
    },
    {
      _id: "3",
      name: "Трек 3",
      artist: "Исполнитель 3",
      text: "Какой-то текст",
      listens: 2,
      audio: "http://localhst:5000/audio/3.mp3",
      picture: "http://localhost:5000/image/3.jpg",
      comments: []
    },
  ]

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
