import Movie from "./movie";

export default function MovieList({ movies }) {
    return (
        <div className="movies">
            {movies.map((movie) => (
                <Movie key={movie.id} item={movie} />
            ))}
        </div>
    )
}