import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ToastContainer } from "react-toastify";

const cormorant_garamond = Cormorant_Garamond({
    variable: "--font-cormorant_garamond",
    subsets: ["latin"],
});

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ESSENCIO",
    description:
        "FragranceHub is a community-driven perfume discovery platform where fragrance enthusiasts can explore thousands of perfumes, read authentic reviews, compare scent profiles, build personal collections, and share their favorite fragrances with others.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${cormorant_garamond.variable} ${manrope.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col bg-light-cream">
                <Navbar />
                {children}
                <Footer />
                <ToastContainer position="top-center" />
            </body>
        </html>
    );
}
