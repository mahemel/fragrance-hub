"use client";

import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { LuShieldAlert } from "react-icons/lu";

export default function UnauthorizedPage() {
    return (
        <div className="flex flex-col items-center justify-cente py-20 text-center">
            <div className="max-w-md w-full space-y-6">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="rounded-full bg-red-100 p-4 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                        <LuShieldAlert className="h-12 w-12" />
                    </div>
                    <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                        401
                    </h1>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        Unauthorized Access
                    </h2>
                </div>

                <p className="text-base text-gray-600 dark:text-gray-400">
                    Oops! You don&apos;t have permission to access this page.
                    Please sign in with an authorized account.
                </p>

                <div className="flex flex-col gap-3 items-center pt-4">
                    <Link href="/login" className="btn-accent w-full">
                        Sign In
                    </Link>

                    <Link href="/" className="flex items-center gap-2">
                        <BsArrowLeft className="h-4 w-4" />
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
