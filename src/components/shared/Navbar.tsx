"use client";
import { authClient } from "@/lib/auth-client";
import { Session } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const { data, isPending } = authClient.useSession();

    const session = data as Session | null;
    const user = session?.user;

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
            label: "About",
            path: "/about",
        },
    ];

    if (user) {
        navigateLinks.push(
            {
                label: "Add Items",
                path: "/explore/items/add",
            },
            {
                label: "Manage Items",
                path: "/explore/items/manage",
            },
        );
    }
    const linkItem = navigateLinks.map((link, index) => (
        <li key={index}>
            <Link
                href={link.path}
                className={`text-xs lg:text-sm transition-colors hover:opacity-100 ${pathname === link.path ? "text-accent" : "text-white"} hover:text-accent`}
            >
                {link.label}
            </Link>
        </li>
    ));

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");
                },
            },
        });
    };
    return (
        <nav
            className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-coffee border-b border-white/15`}
        >
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex">
                    <Image
                        className="w-24 lg:w-30"
                        src={"/assets/logo-white.svg"}
                        alt="Logo"
                        width={600}
                        height={92}
                    />
                </Link>

                <ul className="hidden md:flex items-center gap-4 lg:gap-7 font-bold text-white">
                    {linkItem}
                </ul>

                <div className="flex gap-3">
                    <div className="flex items-center gap-3 text-white">
                        {isPending ? (
                            ""
                        ) : user ? (
                            <div className="flex items-center gap-1">
                                <Avatar className="rounded-full">
                                    <AvatarImage
                                        src={user?.image || ""}
                                        alt={user?.name}
                                    />
                                    <AvatarFallback>
                                        {user.name
                                            ?.split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                            .toUpperCase() || "U"}
                                    </AvatarFallback>
                                </Avatar>
                                <button
                                    onClick={handleSignOut}
                                    className={`p-2 transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold tracking-wider uppercase hover:text-accent `}
                                >
                                    <FiLogOut className="w-4 h-4" /> Logout
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link
                                    href={"/login"}
                                    className={`text-sm font-bold transition-colors `}
                                >
                                    Login
                                </Link>
                                <Link
                                    href={"/register"}
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
            </div>

            {menuOpen && (
                <div className="md:hidden bg-coffee text-white py-4 px-4 shadow-lg">
                    <ul>{linkItem}</ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
