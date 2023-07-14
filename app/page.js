import { Suspense } from "react";
import Loading from "./loading";
import MovieList from "@/components/movieList";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'popular';
  const res = await fetch(`https://api.themoviedb.org/3/movie/${genre}`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN}`
    },
    // next: { revalidate: 86400 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch the data.');
  }

  const data = await res.json();
  const movies = data.results;

  const subTitles = {
    popular: 'Popular',
    top_rated: 'Top Rated',
    now_playing: 'Now Playing'
  }

  return (
      <div>
        <h1>{subTitles[`${genre}`]}</h1>
          <Suspense fallback={<Loading />}>
            <MovieList movies={movies} />
          </Suspense>
      </div>
  )
}

