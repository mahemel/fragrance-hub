import SectionHeader from "@/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const SeasonalPicks = () => {
    const SEASONS = [
        {
            name: "Summer",
            desc: "Fresh · Aquatic · Citrus",
            image: "photo-1507525428034-b723cf961d3e",
            overlay: "from-sky-500/60 to-blue-900/80",
        },
        {
            name: "Winter",
            desc: "Woody · Amber · Leather",
            image: "photo-1491002052546-bf38f186af56",
            overlay: "from-slate-600/60 to-slate-900/85",
        },
        {
            name: "Spring",
            desc: "Floral · Green · Light",
            image: "photo-1462275646964-a0e3386b89fa",
            overlay: "from-emerald-400/60 to-teal-800/80",
        },
        {
            name: "Autumn",
            desc: "Spicy · Sweet · Warm",
            image: "photo-1508739773434-c26b3d09e071",
            overlay: "from-amber-500/60 to-orange-900/80",
        },
    ];
    return (
        <section className="section-padding bg-secondary">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    label="Time & Season"
                    title="Seasonal Picks"
                    subtitle="Find the perfect fragrance for every season, expertly curated by our community."
                />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {SEASONS.map((s) => (
                        <Link
                            href="/explore"
                            key={s.name}
                            className="relative overflow-hidden aspect-3/4 group block"
                        >
                            <div className="absolute inset-0 bg-stone-700">
                                <Image
                                    src={`https://images.unsplash.com/${s.image}`}
                                    width={400}
                                    height={300}
                                    alt={`${s.name} fragrances`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                                />
                            </div>
                            <div
                                className={`absolute inset-0 bg-linear-to-t ${s.overlay}`}
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-3 text-left">
                                <p className="text-white text-xl font-bold mb-1">
                                    {s.name}
                                </p>
                                <p className="text-white text-sm font-medium tracking-wider">
                                    {s.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeasonalPicks;
