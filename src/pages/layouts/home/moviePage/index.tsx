import React from "react";
import NowPlayingPage from "./nowPlaying";
import PopularMovie from "./popular";
import TopRatedPage from "./topRated";

const Moviepage = () => {
  return (
    <>
      <NowPlayingPage />
      <PopularMovie />
      <TopRatedPage />
    </>
  );
};

export default Moviepage;
