"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigateLinks = [
        {
            label: "Home",
            path: "/home",
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
    return (
        <nav
            className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-coffee`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
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
                    {navigateLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                className={`text-sm transition-colors hover:opacity-100`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
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

                <button className={`md:hidden p-2 `}>
                    {menuOpen ? (
                        <CgClose className="w-5 h-5" />
                    ) : (
                        <BiMenu className="w-5 h-5" />
                    )}
                </button>
            </div>

            {menuOpen && (
                <ul className="md:hidden bg-background border-t border-border py-4 px-6 shadow-lg">
                    {navigateLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                className={`text-sm transition-colors hover:opacity-100`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <div className="flex gap-3 mt-4 pt-2">
                        {isLoggedIn ? (
                            <button className="flex-1 py-2.5 border border-border text-black text-sm hover:bg-secondary transition-colors">
                                Log Out
                            </button>
                        ) : (
                            <>
                                <button className="flex-1 py-2.5 border border-border text-black text-sm">
                                    Login
                                </button>
                                <button className="flex-1 py-2.5 text-white text-sm">
                                    Register
                                </button>
                            </>
                        )}
                    </div>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
