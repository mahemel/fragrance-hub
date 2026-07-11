import SectionHeader from "@/ui/SectionHeader";
import Link from "next/link";

const FragranceFamily = () => {
    const FAMILIES = [
        {
            name: "Floral",
            emoji: "🌹",
            bg: "bg-pink-50",
            border: "border-pink-200",
            text: "text-pink-700",
        },
        {
            name: "Citrus",
            emoji: "🍋",
            bg: "bg-yellow-50",
            border: "border-yellow-200",
            text: "text-yellow-700",
        },
        {
            name: "Woody",
            emoji: "🌲",
            bg: "bg-stone-50",
            border: "border-stone-300",
            text: "text-stone-700",
        },
        {
            name: "Gourmand",
            emoji: "🍦",
            bg: "bg-amber-50",
            border: "border-amber-200",
            text: "text-amber-700",
        },
        {
            name: "Fresh",
            emoji: "🌊",
            bg: "bg-sky-50",
            border: "border-sky-200",
            text: "text-sky-700",
        },
        {
            name: "Oriental",
            emoji: "🔥",
            bg: "bg-red-50",
            border: "border-red-200",
            text: "text-red-700",
        },
        {
            name: "Fruity",
            emoji: "🍎",
            bg: "bg-rose-50",
            border: "border-rose-200",
            text: "text-rose-700",
        },
        {
            name: "Aromatic",
            emoji: "🌿",
            bg: "bg-emerald-50",
            border: "border-emerald-200",
            text: "text-emerald-700",
        },
    ];
    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    label="Discover"
                    title="Explore by Fragrance Family"
                    center
                />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {FAMILIES.map((f) => (
                        <Link
                            href={`/explore`}
                            key={f.name}
                            className={`${f.bg} border ${f.border} p-6 text-center hover:shadow-md transition-all duration-200 group`}
                        >
                            <span className="text-3xl block mb-3">
                                {f.emoji}
                            </span>
                            <p
                                className={`text-xs tracking-widest uppercase font-bold ${f.text}`}
                            >
                                {f.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FragranceFamily;
