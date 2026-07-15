import SectionHeader from "@/ui/SectionHeader";
import Link from "next/link";
import { TbArrowRightDashed } from "react-icons/tb";
import FragranceCard from "./FragranceCard";
import { getFragrances } from "@/lib/actions/getFragrances";

const Trending = async () => {
    const fragrances = await getFragrances();

    return (
        <section className="section-padding">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-end justify-between">
                    <SectionHeader
                        label="Community Favorites"
                        title="Trending Fragrances"
                        subtitle="The most loved fragrances this month, rated by our community."
                    />
                    <Link
                        href="/explore"
                        className="hidden md:flex items-center gap-1.5 text-sm text-coffee hover:text-black transition-colors mb-5"
                    >
                        View all <TbArrowRightDashed className="w-3.5 h-3.5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fragrances.slice(0, 4).map((frag, index) => (
                        <FragranceCard key={index} frag={frag} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trending;
