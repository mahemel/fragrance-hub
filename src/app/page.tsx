import Banner from "@/components/homepage/Banner";
import FragranceFamily from "@/components/homepage/FragranceFamily";
import FragranceGuide from "@/components/homepage/FragranceGuide";
import LatestBlogs from "@/components/homepage/LatestBlogs";
import PopularBrands from "@/components/homepage/PopularBrands";
import SeasonalPicks from "@/components/homepage/SeasonalPicks";
import Trending from "@/components/homepage/Trending";

export default function Home() {
    return (
        <>
            <Banner />
            <Trending />
            <FragranceFamily />
            <SeasonalPicks />
            <PopularBrands />
            <FragranceGuide />
            <LatestBlogs />
        </>
    );
}
