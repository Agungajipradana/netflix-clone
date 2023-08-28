import { useEffect, useState } from "react";
import { getGenreMovieList, getMovieList } from "@/utils";
import Image from "next/image";
import { GenreMovieProps, MovieProps } from "@/types";
import Link from "next/link";
import playIcon from "../../../assets/images/home/play.svg";
import plusIcon from "../../../assets/images/home/plus.svg";
import likeIcon from "../../../assets/images/home/like.svg";
import arrowDownIcon from "../../../assets/images/home/arrow-down.svg";

const PopularMovie = () => {
  const [popularMovies, setPopularMovies] = useState<MovieProps[]>([]);
  const [genreMovies, setGenreMovies] = useState<GenreMovieProps[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieProps | null>(null);

  useEffect(() => {
    getMovieList().then((result) => {
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

  const MovieHoverCard = ({ movie }: { movie: MovieProps }) => {
    return (
      <div className="absolute hidden group-hover:flex flex-col items-center justify-center text-white max-w-full max-h-full transition-transform transform-gpu hover:scale-110">
        <div className="card card-compact ">
          <figure className="relative">
            <Image className="w-full h-full" src={`${process.env.NEXT_PUBLIC_BASEIMAGEURL}/${movie.backdrop_path}`} alt="" width={300} height={300} quality={90} />
            <h3 className="font-bold text-md absolute bottom-2 left-2">{movie.title}</h3>
          </figure>

          <div className="card-body bg-[#141414] w-full h-full">
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
    <div className="bg-black text-white min-h-screen">
      <h4 className="font-semibold pt-20 ml-4">Popular on Netflix</h4>
      <div className="flex justify-center items-center text-center">
        <div className="carousel carousel-center max-w-full space-x-4 ml-4 mt-2">
          {popularMovies.map((movie, i) => (
            <div className="carousel-item group relative" key={i} id={`slide${i + 1}`}>
              <Image className="w-full h-full" src={`${process.env.NEXT_PUBLIC_BASEIMAGEURL}/${movie.backdrop_path}`} alt="" width={300} height={300} quality={90} />
              <MovieHoverCard movie={movie} />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                {i > 0 && (
                  <a href={`#slide${i}`} className="btn btn-circle">
                    ❮
                  </a>
                )}
                {i < popularMovies.length - 1 && (
                  <a href={`#slide${i + 2}`} className="btn btn-circle">
                    ❯
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMovie;
