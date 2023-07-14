import Link from "next/link";

export default function NavItem({ title, address, Icon }) {
    return (
        <div>
            <Link href={address} className="flex flex-col justify-center items-center mx-3 sm:mx-4 
                lg:mx-6 text-white hover:text-[#f5c518]">
                <Icon className="text-2xl h-7 w-7 sm:hidden" />
                <span className="hidden sm:inline my-2 text-sm uppercase">{title}</span>
            </Link>
        </div>
    )
}