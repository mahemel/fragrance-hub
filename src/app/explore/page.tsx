import FragranceCard from "@/components/homepage/FragranceCard";
import { getFragrances } from "@/lib/actions/getFragrances";
import SectionHeader from "@/ui/SectionHeader";

const ExplorePage = async () => {
    const fragrances = await getFragrances();

    return (
        <div>
            <section className="section-padding bg-coffee text-white">
                <SectionHeader
                    label="Explore"
                    title="Discover Fragrances"
                    subtitle="Search our curated database of 8+ perfumes by notes, brand, family, and more."
                    center
                ></SectionHeader>
            </section>

            <div className="max-w-7xl mx-auto px-4 section-padding">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fragrances.map((frag, index) => (
                        <FragranceCard key={index} frag={frag} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExplorePage;
