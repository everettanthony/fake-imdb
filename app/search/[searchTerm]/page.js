import MovieList from "@/components/movieList";

export default async function SearchPage({ params }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
    );

    if (!res.ok) {
        throw new Error("Error: search failed");
    }

    const data = await res.json();
    const movies = data.results;

    return (
        <div>
            {movies && movies.length === 0 && (
                <h1 className="text-center pt-6">No results found</h1>
            )}

            {movies && <MovieList movies={movies}/>}
        </div>
    )
}