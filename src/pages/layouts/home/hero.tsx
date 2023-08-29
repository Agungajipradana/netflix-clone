import { MovieProps } from "@/types";
import { getMovieList } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import playIcon from "../../../assets/images/home/play.svg";
import informationIcon from "../../../assets/images/heroPage/information-icon.svg";

const HeroPage = () => {
  const [popularMovies, setPopularMovies] = useState<MovieProps[]>([]);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState<number>(0);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
      setCurrentBackgroundIndex(Math.floor(Math.random() * result.length));
    });
  }, []);

  const currentMovie = popularMovies[currentBackgroundIndex];

  const backgroundStyles = {
    backgroundImage: `url(${process.env.NEXT_PUBLIC_BASEIMAGEURL}/${currentMovie?.backdrop_path})`,
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen mt-5" style={backgroundStyles}>
      <div className="flex items-center justify-center bottom-2 left-2 h-full">
        <div className="max-w-lg mx-auto p-4 text-white">
          <h1 className="text-4xl font-semibold mb-4">{currentMovie?.title}</h1>
          <p className="text-lg">{currentMovie?.overview.substring(0, 150)}...</p>
          <div className="mt-2  ">
            <button className="btn text-black font-bold text-lg">
              <Image src={playIcon} alt="" className="w-5 h-5" />
              <p>Play</p>
            </button>
            <button className="btn text-white bg-[#141414] opacity-75 hover:bg-[#141414] hover:opacity-40 hover:text-white ml-2  font-bold text-lg">
              <Image src={informationIcon} alt="" className="w-5 h-5" />
              <p>More Info</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
