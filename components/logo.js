import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="logo text-2xl text-[#000] bg-[#f5c518] py-1 px-2 rounded-md mr-1">
            FIMDb
        </Link>
    )
}