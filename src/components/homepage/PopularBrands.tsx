import SectionHeader from "@/ui/SectionHeader";

const PopularBrands = () => {
    const BRANDS = [
        { name: "Dior", country: "France", initials: "D" },
        { name: "Chanel", country: "France", initials: "C" },
        { name: "Creed", country: "UK", initials: "CR" },
        { name: "Tom Ford", country: "USA", initials: "TF" },
        { name: "YSL", country: "France", initials: "YSL" },
        { name: "Versace", country: "Italy", initials: "V" },
        { name: "Armani", country: "Italy", initials: "A" },
        { name: "MFK", country: "France", initials: "MFK" },
    ];
    return (
        <section className="section-padding">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    label="Prestige Houses"
                    title="Popular Brands"
                    center
                />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {BRANDS.map((b) => (
                        <div
                            key={b.name}
                            className="border border-border bg-light-cream p-6 text-center hover:border-foreground/25 hover:shadow-md transition-all duration-200 group"
                        >
                            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-black">
                                <span className="text-light-cream text-xs font-bold">
                                    {b.initials}
                                </span>
                            </div>
                            <p className="font-bold text-black text-sm">
                                {b.name}
                            </p>
                            <p className="text-[10px] text-coffee font-medium  mt-1 tracking-widest uppercase">
                                {b.country}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularBrands;
