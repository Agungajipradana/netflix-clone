import React from "react";
import NowPlayingPage from "./nowPlaying";
import PopularMovie from "./popular";
import TopRatedPage from "./topRated";
import UpcomingPage from "./upcoming";
import ActionMoviePage from "./actionMovie";
import HorrorMoviePage from "./horrorMovie";
import ComedyMoviePage from "./comedyMovie";

const Moviepage = () => {
  return (
    <>
      <NowPlayingPage />
      <UpcomingPage />
      <PopularMovie />
      <TopRatedPage />
      <ActionMoviePage />
      <HorrorMoviePage />
      <ComedyMoviePage />
    </>
  );
};

export default Moviepage;
