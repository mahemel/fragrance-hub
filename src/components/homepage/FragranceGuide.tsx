import SectionHeader from "@/ui/SectionHeader";

const FragranceGuide = () => {
    const GUIDES = [
        {
            title: "Understanding Fragrance Notes",
            desc: "Top, heart, and base notes — how they work together to tell a story",
            icon: "🎵",
        },
        {
            title: "EDP vs EDT Explained",
            desc: "Concentration differences and which to choose for your lifestyle",
            icon: "💧",
        },
        {
            title: "Make Perfume Last Longer",
            desc: "Pro tips for maximizing longevity on any skin type",
            icon: "⏳",
        },
        {
            title: "Choosing a Signature Scent",
            desc: "Find the fragrance that truly represents who you are",
            icon: "✨",
        },
        {
            title: "Layering Fragrances",
            desc: "Create unique, personal combinations with multiple scents",
            icon: "🎨",
        },
    ];
    return (
        <section className="section-padding bg-secondary">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    label="Learn"
                    title="Fragrance Guide"
                    subtitle="Everything you need to become a confident fragrance enthusiast."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {GUIDES.map((g) => (
                        <div
                            key={g.title}
                            className="bg-card text-center items-center border border-border p-6 hover:shadow-md transition-shadow cursor-pointer group"
                        >
                            <span className="text-3xl block mb-4">
                                {g.icon}
                            </span>
                            <h3 className="font-semibold text-black mb-2 text-sm lg:text-base leading-tight">
                                {g.title}
                            </h3>
                            <p className="text-sm text-coffee leading-relaxed mb-4">
                                {g.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FragranceGuide;
