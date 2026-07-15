import { Button } from "@heroui/react";
import Link from "next/link";
import { TbInfoTriangle } from "react-icons/tb";

const NotFound = () => {
    return (
        <>
            <div className="flex items-center justify-center py-20">
                <div className="text-center px-4">
                    <div className="mb-8">
                        <div className="flex justify-center">
                            <TbInfoTriangle className="text-7xl text-coffee" />
                        </div>
                        <h1 className="text-9xl font-bold mb-4 text-coffee">
                            404
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-black/70 max-w-md mx-auto">
                            Oops! The page you&apos;re looking for doesn&apos;t
                            exist. It might have been moved or deleted.
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <Link href="/">
                            <Button
                                size="lg"
                                className="bg-accent rounded-none"
                            >
                                Go Home
                            </Button>
                        </Link>
                        <Link href="/explore">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-accent rounded-none"
                            >
                                Explore Fragrances
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
