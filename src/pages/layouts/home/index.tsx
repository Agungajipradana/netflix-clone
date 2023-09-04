import HeroPage from "./hero";
import Moviepage from "./moviePage";
import NowPlayingPage from "./moviePage/nowPlaying";
import PopularMovie from "./moviePage/popular";
import TopRatedPage from "./moviePage/topRated";
import SeriesPage from "./seriesPage";

const Home = () => {
  return (
    <>
      <HeroPage />
      <Moviepage />
      <SeriesPage />
    </>
  );
};

export default Home;
