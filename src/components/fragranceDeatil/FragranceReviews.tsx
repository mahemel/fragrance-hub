"use client";

import { authClient } from "@/lib/auth-client";
import { Review } from "@/types/review";

interface FragranceReviewsProps {
    reviews: Review[];
}

const FragranceReviews = ({ reviews }: FragranceReviewsProps) => {
    const { data: session } = authClient.useSession();
    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                    Community Reviews
                </h2>
            </div>

            {!session?.user && (
                <div className="mb-5 p-4 border border-dashed border-border text-center">
                    <p className="text-sm text-black font-bold mb-2">
                        Sign in to write a review
                    </p>
                    <button className="text-sm text-foreground underline hover:no-underline">
                        Sign In
                    </button>
                </div>
            )}

            <div className="space-y-4">
                {reviews.map((r, i) => (
                    <div key={i} className="border border-border bg-card p-5">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 flex bg-accent rounded-full items-center justify-center text-white text-xs font-medium shrink-0">
                                    {r.user.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-foreground">
                                        {r.user}
                                    </p>
                                    <p className="text-[10px] text-accent font-bold">
                                        {r.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-black leading-relaxed">
                            {r.comment}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FragranceReviews;
