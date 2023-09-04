export interface AppShellProps {
  children: React.ReactNode;
}

export interface MovieProps {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  overview: string;
}

export interface GenreMovieProps {
  genreId: number;
  id: number;
  name: string;
}

export interface ArrowProps {
  onClick: () => void;
}
