import NavbarItem from "./navBarItem";

export default function NavBar() {
    return (
        <div className="dark:bg-[#252525] bg-[#414141]">
            <div className="flex justify-center items-center max-w-6xl mx-auto py-3">
                <NavbarItem title="Trending" param="popular" />
                <NavbarItem title="Top Rated" param="top_rated" />
                <NavbarItem title="Now Playing" param="now_playing" />
            </div>
        </div>
    )
}