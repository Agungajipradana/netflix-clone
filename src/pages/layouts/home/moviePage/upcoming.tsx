import { useEffect, useState } from "react";
import { getGenreMovieList, getMovieUpcomingList } from "@/utils";
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

const UpcomingPage = () => {
  const [popularMovies, setPopularMovies] = useState<MovieProps[]>([]);
  const [genreMovies, setGenreMovies] = useState<GenreMovieProps[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieProps | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const zIndex = isHovered ? 1001 : 1;

  useEffect(() => {
    getMovieUpcomingList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  useEffect(() => {
    getGenreMovieList().then((result) => {
      setGenreMovies(result);
    });
  }, []);

  const handleOpenModal = (movie: MovieProps) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

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

  // console.log(settings);

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
          <figure className=" group">
            <Image className=" w-full h-full " src={`${process.env.NEXT_PUBLIC_BASEIMAGEURL}/${movie.backdrop_path}`} alt="" width={300} height={300} quality={90} priority />
            <h3 className="font-bold text-md absolute bottom-2 left-2">{movie.title}</h3>
          </figure>

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
              </div>
              <div className="flex justify-start items-start text-start gap-2 mt-4">
                <p className="text-sm text-green-500 font-bold">{`${movie.vote_average * 10}% Match`}</p>
                {/* <p className="text-sm text-green-500 font-bold">{`${movie.vote_average} Match`}</p>
                <p className="text-sm text-green-500 font-bold">{`${movie.vote_average} Match`}</p> */}
              </div>
              <div className="flex justify-start items-start text-start gap-2 mt-2">
                {/* <p className="text-sm">{movie.release_date}</p> */}
                {movie.genre_ids.map((genreId) => (
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
      <h1 className="text-2xl font-semibold ml-4 mb-5 pt-20 md:text-3xl md:pt-5 relative">Upcoming on Netflix</h1>
      <div className="flex justify-center items-center text-center">
        <div className="w-full mt-2 ">
          <Slider {...settings} className="ml-[40px] mt-4 relative z-0">
            {popularMovies.map((movie, i) => (
              <div className={`carousel-item group relative ${hoverIndex === i ? "hovered" : ""}`} key={i}>
                <div className={`${hoverIndex === i ? "hovered" : ""}`} onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(null)}>
                  <Image className="relative pl-2" src={`${process.env.NEXT_PUBLIC_BASEIMAGEURL}/${movie.backdrop_path}`} alt="" width={300} height={300} quality={90} priority />
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

export default UpcomingPage;
