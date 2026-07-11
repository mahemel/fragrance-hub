"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigateLinks = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Explore Fragrances",
            path: "/explore",
        },
        {
            label: "Blog",
            path: "/blog",
        },
        {
            label: "About Us",
            path: "/about",
        },
    ];
    const linkItem = navigateLinks.map((link, index) => (
        <li key={index}>
            <Link
                href={link.path}
                className={`text-sm transition-colors hover:opacity-100 ${pathname === link.path ? "text-accent" : "text-white"} hover:text-accent`}
            >
                {link.label}
            </Link>
        </li>
    ));
    return (
        <nav
            className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-coffee`}
        >
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex">
                    <Image
                        className="w-30"
                        src={"/assets/logo-white.svg"}
                        alt="Logo"
                        width={600}
                        height={92}
                    />
                </Link>

                <ul className="hidden md:flex items-center gap-7 font-bold text-white">
                    {linkItem}
                </ul>

                <div className="hidden md:flex items-center gap-3 text-white">
                    {isLoggedIn ? (
                        <div className="flex items-center gap-1">
                            <button className={`p-2 transition-colors `}>
                                <FaUser className="w-4 h-4" />
                            </button>
                            <button className={`p-2 transition-colors `}>
                                <FiLogOut className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link
                                href={"login"}
                                className={`text-sm font-bold transition-colors `}
                            >
                                Login
                            </Link>
                            <Link
                                href={"register"}
                                className={`text-sm transition-colors btn-accent_sm`}
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`md:hidden text-white`}
                >
                    {menuOpen ? (
                        <CgClose className="w-5 h-5" />
                    ) : (
                        <BiMenu className="w-5 h-5" />
                    )}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-coffee text-white py-4 px-4 shadow-lg">
                    <ul>{linkItem}</ul>
                    <div className="flex gap-3 mt-4 pt-2 text-center">
                        {isLoggedIn ? (
                            <button className="flex-1 py-2.5 border border-border text-black text-sm hover:bg-secondary transition-colors">
                                Log Out
                            </button>
                        ) : (
                            <>
                                <Link
                                    href={"/login"}
                                    className="flex-1 py-2.5 border border-white text-white text-sm"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={"/register"}
                                    className="flex-1 py-2.5 border border-white text-white text-sm"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
