import { useEffect, useState } from "react";
import { getGenreMovieList, getMovieNowPlayingList } from "@/utils";
import Image from "next/image";
import { ArrowProps, GenreMovieProps, MovieProps } from "@/types";
import Link from "next/link";
import playIcon from "./../../../../assets/images/home/play.svg";
import plusIcon from "./../../../../assets/images/home/plus.svg";
import likeIcon from "./../../../../assets/images/home/like.svg";
import arrowDownIcon from "./../../../../assets/images/home/arrow-down.svg";
import arrowNext from "./../../../../assets/images/home/arrow-right.svg";
import arrowPrev from "./../../../../assets/images/home/arrow-left.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NowPlayingPage = () => {
  const [popularMovies, setPopularMovies] = useState<MovieProps[]>([]);
  const [genreMovies, setGenreMovies] = useState<GenreMovieProps[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieProps | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [moreLikeThisMovies, setMoreLikeThisMovies] = useState<MovieProps[]>([]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlerShowModalInfo = (movie: MovieProps) => {
    setSelectedMovie(movie);
    setShowModal(true);
    const randomMovies = getRandomMovies(movie);
    setMoreLikeThisMovies(randomMovies);
  };

  const handlerCloseModalInfo = () => {
    setShowModal(false);
  };

  const getRandomMovies = (currentMovie: MovieProps) => {
    const currentMovieId = currentMovie?.id;
    const remainingMovies = popularMovies.filter((movie) => movie.id !== currentMovieId);
    const randomMovies = [];

    while (randomMovies.length < 6 && remainingMovies.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingMovies.length);
      randomMovies.push(remainingMovies.splice(randomIndex, 1)[0]);
    }

    return randomMovies;
  };

  const zIndex = isHovered ? 1001 : 1;

  useEffect(() => {
    getMovieNowPlayingList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  useEffect(() => {
    getGenreMovieList().then((result) => {
      setGenreMovies(result);
    });
  }, []);

  // const handleOpenModal = (movie: MovieProps) => {
  //   setSelectedMovie(movie);
  //   setShowModal(true);
  // };

  const getGenreNameById = (genreId: number) => {
    const genre = genreMovies.find((genre) => genre.id === genreId);
    return genre ? genre.name : "Unknown Genre";
  };

  const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <button
        className="absolute z-[9999] top-1/2 -left-4 transform -translate-y-1/2 text-white  hover:bg-black 
      hover:h-full hover:w-[25px] hover:opcatiy-60 hover:transition hover:ease-in-out hover:duration-300 hover:rounded-l-lg hover:-mt-1"
        onClick={onClick}
      >
        <Image src={arrowPrev} alt="" className="w-5 h-5" />
      </button>
    );
  };

  const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white hover:bg-black 
      hover:h-full hover:w-[25px] hover:opcatiy-60 hover:transition hover:ease-in-out hover:duration-300 hover:rounded-r-lg hover:-mt-1"
        onClick={onClick}
      >
        <Image src={arrowNext} alt="" className="w-5 h-5 opacity-60" />
      </button>
    );
  };

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow onClick={() => NextArrow} />,
    prevArrow: <PrevArrow onClick={() => PrevArrow} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const MovieHoverCard = ({ movie, index }: { movie: MovieProps; index: number }) => {
    return (
      <div
        className={`absolute font-bebas-neue group-hover:flex flex-col items-center justify-center text-white max-w-full max-h-full top-0 left-0 right-0 bottom-0 ${index !== hoverIndex ? "hidden" : ""} z-[9999]`}
        onMouseEnter={() => {
          handleMouseEnter();
          setHoverIndex(index);
        }}
        onMouseLeave={() => {
          handleMouseLeave();
          setHoverIndex(null);
        }}
        style={{ zIndex: isHovered && hoverIndex === index ? 1001 : 1 }}
      >
        <div className="card">
          {/* <h3 className="font-bold text-md absolute top-8 left-2">{movie.title}</h3> */}
          {/* <figure className=" group">
            <Image className=" w-full h-full " src={`${process.env.NEXT_PUBLIC_BASEIMAGEURL}/${movie.backdrop_path}`} alt="" width={300} height={300} quality={90} priority />
          </figure> */}

          <div className="card-body bg-[#141414] w-full h-full ">
            <div className=" p-4">
              <div className="flex justify-between">
                <div className="flex justify-center items-center gap-2">
                  <Link href={{}} className="border rounded-full ">
                    <Image src={playIcon} alt="" className="border rounded-full py-1 px-1  w-8 h-8" />
                  </Link>
                  <Link href={{}} className="border rounded-full ">
                    <Image src={plusIcon} alt="" className="border rounded-full py-1 px-1  w-8 h-8" />
                  </Link>
                  <Link href={{}} className="border rounded-full ">
                    <Image src={likeIcon} alt="" className="border rounded-full py-1 px-1  w-8 h-8" />
                  </Link>
                </div>
                <Link href={{}} className="border rounded-full ">
                  <Image src={arrowDownIcon} alt="" className="border rounded-full py-1 px-1  w-8 h-8" />
                </Link>

                {/* {showModal && (
                  <div className="fixed inset-0 z-[9999]">
                    {popularMovies.map((movie, i) => (
                      <div className="card w-[900px] h-[1220px] bg-[#141414]  shadow-xl mx-40" key={i}>
                        <figure className="">
                          <Image src={`${process.env.NEXT_PUBLIC_BASEIMAGEURL_ORIGINAL}/${movie.backdrop_path}`} width={900} height={300} quality={100} priority alt="" className=" w-[1000px]" />

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
                            <h1 className="text-4xl font-semibold mb-4 ">{movie.title}</h1>
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
                              <p className="text-md text-green-500 font-bold">{`${movie.vote_average * 10}% Match`}</p>
                              <p className="text-md text-slate-200 font-bold">{`${movie.release_date.substring(0, 4)}`}</p>
                              <p className="text-xs text-slate-200 font-bold border rounded-lg py-1 px-1">HD</p>
                            </div>

                            <div className="flex flex-col text-left">
                              <p className="text-md text-slate-200 font-bold">{`${movie.overview}`}</p>
                            </div>

                            <div className="flex w-full text-md text-slate-200 font-bold gap-2 mt-3 mb-10">
                              <p>Genre:</p>
                              {movie.genre_ids.map((genreId) => {
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
                    ))}
                  </div>
                )} */}
              </div>
              <div className="flex justify-start items-start text-start gap-2 mt-4">
                <p className="text-sm text-green-500 font-bold">{`${movie.vote_average * 10}% Match`}</p>
              </div>
              <div className="flex justify-start items-start text-start gap-2 mt-2">
                {movie.genre_ids.slice(0, 3).map((genreId) => (
                  <ul key={genreId}>
                    <li>{getGenreNameById(genreId)}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#141414] text-white  font-bebas-neue">
      <h1 className="text-2xl font-semibold ml-4 mb-5 pt-20 md:text-3xl md:pt-5 relative">Now Playing</h1>
      <div className="flex justify-center items-center text-center">
        <div className="w-full mt-2 ">
          <Slider {...settings} className="ml-[40px] mt-4 relative z-0">
            {popularMovies.map((movie, i) => (
              <div className={`carousel-item group relative ${hoverIndex === i ? "hovered" : ""}`} key={i}>
                <div className={`${hoverIndex === i ? "hovered" : ""}`} onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(null)}>
                  <Image className="relative pl-2" src={`${process.env.NEXT_PUBLIC_BASEIMAGEURL}/${movie.backdrop_path}`} alt="" width={300} height={300} quality={90} priority />
                  <div className="absolute bottom-0 left-4">
                    <h4>{movie.title}</h4>
                  </div>
                  <MovieHoverCard movie={movie} index={i} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingPage;
