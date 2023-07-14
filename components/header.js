import NavItem from "./navItem";
import { HomeIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import Logo from "./logo";
import DarkModeButton from "./darkModeButton";

export default function Header() {
    return (
        <header className="bg-[#121212]">
            <div className="flex justify-between items-center max-w-6xl mx-auto py-3">
                <nav className="flex">       
                    <NavItem title="Home" address="/" Icon={HomeIcon} />
                    <NavItem title="About" address="/about" Icon={InformationCircleIcon} />
                </nav>
                <div className="flex items-center mr-2 space-x-5">
                    <DarkModeButton />
                    <Logo />
                </div>
            </div>
        </header>
    )
}