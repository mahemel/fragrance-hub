import FragranceReviews from "@/components/fragranceDeatil/FragranceReviews";
import { getFragranceDetail } from "@/lib/actions/getFragrances";
import { Review } from "@/types/review";
import Image from "next/image";
import { BiStar } from "react-icons/bi";

interface FragranceDetailProps {
    params: Promise<{
        id: string;
    }>;
}
const FragranceDetail = async ({ params }: FragranceDetailProps) => {
    const { id } = await params;
    const frag = await getFragranceDetail(id);

    const reviews: Review[] = [
        {
            user: "Alexandra M.",
            rating: 5,
            date: "June 10, 2024",
            comment:
                "Absolutely stunning. The dry-down is pure sophistication — warm, woody, and unforgettable. I get compliments every single time I wear this. My signature scent for over a year now.",
        },
        {
            user: "James K.",
            rating: 4,
            date: "June 3, 2024",
            comment:
                "Excellent longevity and projection. Slightly linear but that is not necessarily a bad thing — this makes it a reliable, no-thinking-required office scent that stays polished all day.",
        },
        {
            user: "Sophie L.",
            rating: 5,
            date: "May 28, 2024",
            comment:
                "My go-to for winter evenings. Nothing else comes close for that combination of warmth and understated sophistication. The base notes are particularly beautiful — rich and enveloping.",
        },
        {
            user: "Marcus T.",
            rating: 4,
            date: "May 20, 2024",
            comment:
                "The opening is a bit sharp but the heart and base are where this fragrance truly shines. Give it 20 minutes and you will be rewarded with something genuinely special and worth the price.",
        },
    ];
    return (
        <div className="section-padding">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
                    <div className="aspect-square bg-stone-100 overflow-hidden">
                        <Image
                            src={frag.image}
                            width={800}
                            height={800}
                            alt={frag.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-xs tracking-[0.25em] uppercase mb-2 text-accent font-bold">
                            {frag.brand}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-title font-bold text-foreground mb-5 leading-tight">
                            {frag.name}
                        </h1>

                        <div className="flex items-center mb-7 gap-2">
                            <BiStar />
                            {frag.rating || (
                                <span className="uppercase text-[10px] tracking-widest relative top-px">
                                    No Reviews Available
                                </span>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-px bg-border border border-border mb-7">
                            <div className="bg-card p-3.5">
                                <p className="text-[10px] text-accent tracking-[0.15em] font-bold uppercase mb-1">
                                    Release Year
                                </p>
                                <p className="text-sm font-medium text-foreground">
                                    {frag.releaseYear}
                                </p>
                            </div>
                            <div className="bg-card p-3.5">
                                <p className="text-[10px] text-accent tracking-[0.15em] font-bold uppercase mb-1">
                                    Concentration
                                </p>
                                <p className="text-sm font-medium text-foreground">
                                    {frag.concentration}
                                </p>
                            </div>
                            <div className="bg-card p-3.5">
                                <p className="text-[10px] text-accent tracking-[0.15em] font-bold uppercase mb-1">
                                    Family
                                </p>
                                <p className="text-sm font-medium text-foreground">
                                    {frag.family}
                                </p>
                            </div>
                            <div className="bg-card p-3.5">
                                <p className="text-[10px] text-accent tracking-[0.15em] font-bold uppercase mb-1">
                                    Gender
                                </p>
                                <p className="text-sm font-medium text-foreground">
                                    {frag.gender}
                                </p>
                            </div>
                            <div className="bg-card p-3.5">
                                <p className="text-[10px] text-accent tracking-[0.15em] font-bold uppercase mb-1">
                                    Approximate Price
                                </p>
                                <p className="text-sm font-medium text-foreground">
                                    ${frag.price}
                                </p>
                            </div>
                            <div className="bg-card p-3.5">
                                <p className="text-[10px] text-accent tracking-[0.15em] font-bold uppercase mb-1">
                                    Seasons
                                </p>
                                <p className="text-sm font-medium text-foreground flex gap-1 flex-wrap">
                                    {frag.seasons.map((season, index) => (
                                        <span key={season}>
                                            {season}
                                            {index < frag.seasons.length - 1 &&
                                                ", "}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mb-7">
                            {frag.occasions.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-[10px] px-2.5 py-1 bg-secondary border border-border tracking-wider uppercase"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="border-t border-stone-300 pt-5">
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                About This Fragrance
                            </h2>
                            <p className="leading-relaxed text-base">
                                {frag.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-12 pb-12 border-b border-border">
                    <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                        Fragrance Pyramid
                    </h2>
                    <div className="flex flex-col items-center gap-0 max-w-xl mx-auto">
                        <div className="w-52 border border-stone-300 bg-white p-5 text-center">
                            <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-3">
                                Top Notes · 0-30 min
                            </p>

                            <div className="flex flex-wrap gap-1.5 justify-center">
                                {frag.topNotes.map((n) => (
                                    <span
                                        key={n}
                                        className="text-xs text-amber-800 bg-amber-100 border border-amber-200 px-2.5 py-1"
                                    >
                                        {n}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="w-px h-3 bg-stone-300" />
                        <div className="w-72 border border-stone-300 bg-white p-5 text-center">
                            <p className="text-[10px] font-bold text-rose-600 tracking-[0.25em] uppercase mb-3">
                                Heart Notes · 30 min-2 hrs
                            </p>
                            <div className="flex flex-wrap gap-1.5 justify-center">
                                {frag.heartNotes.map((n) => (
                                    <span
                                        key={n}
                                        className="text-xs text-rose-800 bg-rose-100 border border-rose-200 px-2.5 py-1"
                                    >
                                        {n}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="w-px h-3 bg-rose-200" />
                        <div className="w-96 border border-stone-300 bg-white p-5 text-center">
                            <p className="text-[10px] font-bold text-stone-600 tracking-[0.25em] uppercase mb-3">
                                Base Notes · 2+ hrs (dry-down)
                            </p>
                            <div className="flex flex-wrap gap-1.5 justify-center">
                                {frag.baseNotes.map((n) => (
                                    <span
                                        key={n}
                                        className="text-xs text-stone-900 bg-white border border-stone-200 px-2.5 py-1"
                                    >
                                        {n}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <FragranceReviews reviews={reviews} />
            </div>
        </div>
    );
};

export default FragranceDetail;
