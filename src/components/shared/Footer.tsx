import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
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
    const links = [
        {
            path: "/privacy",
            label: "Privacy Policy",
        },
        {
            label: "Contact",
            path: "/contact",
        },
    ];

    const families = [
        { name: "Floral", emoji: "🌹" },
        { name: "Citrus", emoji: "🍋" },
        { name: "Woody", emoji: "🌲" },
        { name: "Gourmand", emoji: "🍦" },
        { name: "Fresh", emoji: "🌊" },
        { name: "Oriental", emoji: "🔥" },
        { name: "Fruity", emoji: "🍎" },
        { name: "Aromatic", emoji: "🌿" },
    ];
    return (
        <footer className="bg-coffee mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 mb-12">
                    <div className="col-span-2">
                        <Link
                            href="/"
                            className="flex items-center gap-2.5 mb-4"
                        >
                            <Image
                                className="w-40"
                                src={"/assets/logo-white.svg"}
                                alt="Logo"
                                width={600}
                                height={92}
                            />
                        </Link>
                        <p className="text-white text-sm leading-relaxed mb-5">
                            Discover, review, and collect the world&apos;s
                            finest fragrances.
                        </p>
                        <div className="flex gap-2.5">
                            <Link
                                href="https://www.instagram.com/@example"
                                target="_blank"
                                className="w-8 h-8 border border-white flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-colors"
                            >
                                <FaInstagram className="w-3.5 h-3.5" />
                            </Link>

                            <Link
                                href="https://www.x.com/example"
                                target="_blank"
                                className="w-8 h-8 border border-white flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-colors"
                            >
                                <BsTwitterX className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-4">
                            Navigate
                        </h4>
                        <ul className="space-y-2.5">
                            {navigateLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.path}
                                        className="block text-sm text-white/85 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-4">
                            Families
                        </h4>
                        <ul className="space-y-2.5">
                            {families.slice(0, 5).map((f, i) => (
                                <li key={i}>
                                    <Link
                                        href="/explore"
                                        className="block text-sm text-white/85 hover:text-white transition-colors"
                                    >
                                        {f.emoji} {f.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-4">
                            Legal & Help
                        </h4>
                        <ul className="space-y-2.5">
                            {links.map((p, l) => (
                                <li key={l}>
                                    <Link
                                        href={p.path}
                                        className="block text-sm text-white/85 hover:text-white transition-colors"
                                    >
                                        {p.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-white/65">
                        &copy; {new Date().getFullYear()} FragranceHub. All
                        rights reserved.
                    </p>
                    <p className="text-xs text-white/65">
                        Crafted with love for fragrance enthusiasts.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
