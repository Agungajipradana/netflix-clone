export interface AppShellProps {
  children: React.ReactNode;
}

export interface MovieProps {
  title: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface GenreMovieProps {
  genreId: number;
  id: number;
  name: string;
}
