import FragranceListingContainer from "@/components/explore/FragranceListingContainer";
import { getFilteredFragrances } from "@/lib/actions/getFragrances";
import SectionHeader from "@/ui/SectionHeader";
interface ExplorePageProps {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}
export const metadata = {
    title: "ESSENCIO | Explore Fragrances",
};
const ExplorePage = async ({ searchParams }: ExplorePageProps) => {
    const filters = await searchParams;
    const page = Number(filters.page || 1);
    const perPage = 8;

    const querySearch = new URLSearchParams({
        ...filters,
        page: page.toString(),
        limit: perPage.toString(),
    });
    const queryString = querySearch.toString();

    // const { artWorks = [], total = 0 } = await getFilteredArtworks(queryString);
    const { fragrances = [], total = 0 } =
        await getFilteredFragrances(queryString);

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 section-padding">
                <SectionHeader
                    label="Explore"
                    title="Discover Fragrances"
                    subtitle="Search our curated collection of perfumes by brand, gender, and more."
                    center
                ></SectionHeader>

                <FragranceListingContainer
                    filters={filters}
                    fragrances={fragrances || []}
                    total={total}
                />
            </div>
        </div>
    );
};

export default ExplorePage;
