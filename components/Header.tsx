import Image from "next/image";
import Link from "next/link";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

// images 
import netflixLogo from '../public/assets/Netflix_2015_logo.svg';
import userIcon from '../public/assets/user_icon.png';


const Header = (): JSX.Element => {

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header className={`${isScrolled ? 'bg-[#141414]' : ''}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <Image 
                    src={netflixLogo}
                    width={100}
                    height={36}
                    objectFit="contain"
                    className="cursor-pointer object-contain"
                    alt="Netflix Logo"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New &amp; Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>

            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className="hidden sm:inline h-6 w-6"/>
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h-6 w-6"/>
                <Link href="/account">
                    <a>
                        <Image 
                            src={userIcon} 
                            alt="" 
                            className="cursor-pointer rounded"
                        />
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header;