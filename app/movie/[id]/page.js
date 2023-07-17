import Image from 'next/image';
import ImagePlaceholder from '@/components/imagePlaceholder';

async function getMovie(movieId) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );

    return await res.json();
}
  
export default async function MoviePage({ params }) {
    const movieId = params.id;
    const movie = await getMovie(movieId);
    const movieImg = movie.backdrop_path || movie.poster_path;

    return (
        <div className="w-full">
            <div className="p-4 md:pt-8 flex flex-col md:flex-row max-w-6xl mx-auto md:space-x-6">
                {!movieImg ? <ImagePlaceholder /> : (
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${
                            movie.backdrop_path || movie.poster_path
                        }`}
                        width={500}
                        height={300}
                        className="rounded-lg"
                        style={{
                            maxWidth: "100%",
                            height: "100%",
                            marginTop: '0.5rem'
                        }}
                        placeholder="blur"
                        blurDataURL="/spinner.svg"
                        alt={movie.title || movie.name}
                    />
                )}

                <div className="p-2">
                    <h1>
                        {movie.title || movie.name}
                    </h1>
                    <p className="text-lg mb-3">
                        <span className="font-semibold mr-1">Overview:</span>
                        {movie.overview}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">Date Released:</span>
                        {movie.release_date || movie.first_air_date}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">Rating:</span>
                        {movie.vote_count}
                    </p>
                </div>    
            </div>
        </div>
    )
}