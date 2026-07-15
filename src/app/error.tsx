"use client";
import Link from "next/link";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center py-16">
            <div className="text-center px-4">
                <div className="mb-8">
                    <h1 className="text-6xl font-bold text-black mb-4">
                        Oops!
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Something went wrong!
                    </h2>
                </div>

                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <Link href="/" className="btn-accent">
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
