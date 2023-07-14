'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  
  return (
    <div>
      <Link
        className={`m-4 hover:text-[#f5c518] font-semibold p-2 ${
          genre &&
          genre === param &&
          'underline underline-offset-4 decoration-2 decoration-[#f5c518] rounded-lg hover:text-inherit'
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}