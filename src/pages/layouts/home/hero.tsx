import { GenreMovieProps, MovieProps } from "@/types";
import { getGenreMovieList, getMovieList } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import playIcon from "../../../assets/images/home/play.svg";
import informationIcon from "../../../assets/images/heroPage/information-icon.svg";
import plusIcon from "../../../assets/images/home/plus.svg";
import likeIcon from "../../../assets/images/home/like.svg";

const HeroPage = () => {
  const [popularMovies, setPopularMovies] = useState<MovieProps[]>([]);
  const [genreMovies, setGenreMovies] = useState<GenreMovieProps[]>([]);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState<number>(0);
  const [showModalInfo, setShowModalInfo] = useState<boolean>(false);
  const [moreLikeThisMovies, setMoreLikeThisMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
      setCurrentBackgroundIndex(Math.floor(Math.random() * result.length));
    });
  }, []);

  useEffect(() => {
    getGenreMovieList().then((result) => {
      setGenreMovies(result);
    });
  }, []);

  const handlerShowModalInfo = () => {
    setShowModalInfo(true);
    const randomMovies = getRandomMovies();
    setMoreLikeThisMovies(randomMovies);
  };

  const handlerCloseModalInfo = () => {
    setShowModalInfo(false);
  };

  const currentMovie = popularMovies[currentBackgroundIndex];

  const backgroundStyles = {
    backgroundImage: `url(${process.env.NEXT_PUBLIC_BASEIMAGEURL_ORIGINAL}/${currentMovie?.backdrop_path})`,
  };

  const getRandomMovies = () => {
    const currentMovieId = currentMovie?.id;
    const remainingMovies = popularMovies.filter((movie) => movie.id !== currentMovieId);
    const randomMovies = [];

    while (randomMovies.length < 6 && remainingMovies.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingMovies.length);
      randomMovies.push(remainingMovies.splice(randomIndex, 1)[0]);
    }

    return randomMovies;
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={backgroundStyles}>
      <div className="flex items-center justify-center">
        <div className="max-w-lg mx-auto p-4 text-slate-200 absolute bottom-[100px] left-2 font-bebas-neue">
          <h1 className="text-4xl font-semibold mb-4 ">{currentMovie?.title}</h1>
          <p className="text-lg">{currentMovie?.overview.substring(0, 150)}...</p>
          <div className="mt-5">
            <button className="btn text-black font-bold text-lg">
              <Image src={playIcon} alt="" className="w-5 h-5" />
              <p>Play</p>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handlerShowModalInfo();
              }}
              className="btn text-slate-200 bg-[#141414] opacity-75 hover:bg-[#141414] hover:opacity-40 hover:text-white ml-2  font-bold text-lg"
            >
              <Image src={informationIcon} alt="" className="w-5 h-5" />
              <p>More Info</p>
            </button>
            {showModalInfo && (
              <div className="absolute -mt-[400px] z-[9999]">
                <div className="card w-[900px] h-[1220px] bg-[#141414]  shadow-xl mx-40">
                  <figure className="">
                    <Image src={`${process.env.NEXT_PUBLIC_BASEIMAGEURL_ORIGINAL}/${currentMovie?.backdrop_path}`} width={900} height={300} quality={100} priority alt="" className=" w-[1000px]" />

                    <div className="absolute -top-1 right-2 mt-3">
                      <button
                        type="button"
                        className="btn btn-circle btn-outline"
                        onClick={(e) => {
                          e.preventDefault();
                          handlerCloseModalInfo();
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="absolute bottom-[670px] left-4">
                      <h1 className="text-4xl font-semibold mb-4 ">{currentMovie?.title}</h1>
                      <div className="space-x-3 flex mb-5">
                        <button className="btn  text-black font-bold text-lg">
                          <Image src={playIcon} alt="" className="w-5 h-5" />
                          <p>Play</p>
                        </button>
                        <button>
                          <Image src={plusIcon} alt="" className="border rounded-full py-2 px-2  w-12 h-12" />
                        </button>
                        <button>
                          <Image src={likeIcon} alt="" className="border rounded-full py-2 px-2  w-12 h-12" />
                        </button>
                      </div>

                      <div className="space-x-3 flex">
                        <p className="text-md text-green-500 font-bold">{`${currentMovie?.vote_average * 10}% Match`}</p>
                        <p className="text-md text-slate-200 font-bold">{`${currentMovie?.release_date.substring(0, 4)}`}</p>
                        <p className="text-xs text-slate-200 font-bold border rounded-lg py-1 px-1">HD</p>
                      </div>

                      <div className="flex flex-col text-left">
                        <p className="text-md text-slate-200 font-bold">{`${currentMovie?.overview}`}</p>
                      </div>

                      <div className="flex w-full text-md text-slate-200 font-bold gap-2 mt-3 mb-10">
                        <p>Genre:</p>
                        {currentMovie?.genre_ids.map((genreId) => {
                          const genre = genreMovies.find((genre) => genre.id === genreId);
                          return (
                            <div key={genreId} className="">
                              <p className="">{genre?.name}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div className="text-xl font-semibold text-slate-200">
                        <h1>More Like This</h1>
                      </div>
                    </div>
                  </figure>

                  <div className="card-body items-center text-center absolute mt-[550px] ">
                    <div className="grid grid-cols-3 gap-8 mx-14 ">
                      {moreLikeThisMovies.map((movie, i) => (
                        <div className="card card-compact w-[240px] bg-[#141414] shadow-xl" key={i}>
                          <figure>
                            <Image src={`${process.env.NEXT_PUBLIC_BASEIMAGEURL_ORIGINAL}/${movie.backdrop_path}`} width={900} height={300} quality={100} priority alt="" className=" w-[240px] h-[130px]" />
                            <h2 className="absolute bottom-[170px] left-2 font-bold">{movie.title.length > 26 ? `${movie.title.substring(0, 26)}...` : movie.title}</h2>
                          </figure>
                          <div className="card-body">
                            <div className="grid grid-cols-2">
                              <div className="flex flex-col text-left">
                                <p className="text-md text-green-500 font-bold">{`${movie.vote_average * 10}% Match`}</p>
                                <p className="text-md text-slate-200 font-bold">{movie.release_date.substring(0, 4)}</p>
                              </div>
                              <div className="text-right">
                                <button>
                                  <Image src={plusIcon} alt="" className="border rounded-full py-2 px-2  w-10 h-10" />
                                </button>
                              </div>
                            </div>
                            <div className="text-left">
                              <p>{`${movie.overview.substring(0, 100)}...`}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
