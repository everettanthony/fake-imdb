'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import { monthNames } from '@/utils/months';
import ImagePlaceholder from './imagePlaceholder';

export default function Movie({ item }) {
    const movieDate = new Date(item.release_date);
    const year = movieDate.getFullYear();
    const month = movieDate.getMonth();
    const day = movieDate.getDate()+1;
    const movieImg = item.backdrop_path || item.poster_path;

    return (
        <div className="movie">
            <Link href={`/movie/${item.id}`} className="movie-link">
                {!movieImg ? <ImagePlaceholder /> : (
                    <Image 
                        src={`https://image.tmdb.org/t/p/original/${
                            item.backdrop_path || item.poster_path
                        }`} 
                        width={260}
                        height={146}
                        className="w-full"
                        alt={item.title}
                    />
                )}
        
                <div className="flex flex-col grow mt-auto p-4">
                    <div className="font-medium leading-tight mb-2">
                        {item.title || item.name}
                    </div>
                    <div className="flex justify-between items-center text-sm mt-auto">
                        <div className="movie-date">
                            {`${monthNames[month]} ${day}, ${year}`}
                        </div>
                        <div className="movie-votes flex items-center">
                            <HandThumbUpIcon className="h-5 mr-2" /> {item.vote_count}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}