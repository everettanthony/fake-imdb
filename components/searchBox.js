"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    }

    return (
        <form
            className="flex max-w-6xl mx-auto justify-between items-center px-6"
            onSubmit={handleSubmit}>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search keywords..."
                className="w-full h-14 rounded-sm placeholder-[rgba(255,255,255,.7)] outline-none bg-transparent flex-1 focus:placeholder-transparent"
            />
            <button
                disabled={!search}
                type="submit"
                className="text-white disabled:text-[rgba(255,255,255,.7)] cursor-pointer hover:bg-transparent">
                <MagnifyingGlassIcon className="text-2xl h-6 w-6" />
            </button>
        </form>
    )
}