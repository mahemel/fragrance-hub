"use client";

import { Fragrance } from "@/types/fragrance";
import FragranceCard from "../homepage/FragranceCard";
import FragranceFilters from "./FragranceFilter";
import FragrancePagination from "./FragrancePagination";

interface FragranceListingContainerProps {
    filters: Record<string, string | string[] | undefined>;
    fragrances: Fragrance[];
    total: number;
}

const FragranceListingContainer = ({
    filters,
    fragrances,
    total,
}: FragranceListingContainerProps) => {
    return (
        <>
            <FragranceFilters filters={filters} />

            <p className="text-base text-center mb-5">
                {total} Fragrances Available
            </p>
            {fragrances.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {fragrances.map((frag, index) => (
                            <FragranceCard key={index} frag={frag} />
                        ))}
                    </div>

                    <FragrancePagination total={total} perPage={8} />
                </>
            ) : (
                <div className="py-12">
                    <p className="text-center text-coffee text-xl">
                        No Fragrance found.
                    </p>
                </div>
            )}
        </>
    );
};

export default FragranceListingContainer;
