import { Fragrance } from "@/types/fragrance";
import SectionHeader from "@/ui/SectionHeader";
import Link from "next/link";
import { TbArrowRightDashed } from "react-icons/tb";
import FragranceCard from "./FragranceCard";

const Trending = () => {
    const FRAGRANCES: Fragrance[] = [
        {
            id: "2",
            name: "Black Orchid",
            brand: "Tom Ford",
            year: 2006,
            perfumer: "David Apel",
            concentration: "EDP",
            family: "Oriental",
            gender: "Unisex",
            season: ["Fall", "Winter"],
            occasion: ["Evening", "Night Out"],
            topNotes: ["Black Truffle", "Ylang-Ylang", "Bergamot"],
            heartNotes: ["Black Orchid", "Lotus", "Spices"],
            baseNotes: ["Patchouli", "Sandalwood", "Dark Chocolate"],
            longevity: 9,
            projection: 8,
            sillage: 9,
            versatility: 6,
            value: 6,
            rating: 4.8,
            reviewCount: 987,
            image: "photo-1587017539504-67cfbddac569",
            description:
                "A luxurious and sensual fragrance of rich, dark accords and an alluring potion of black orchids and forbidden flowers. Black Orchid is voluptuous, dark, and utterly intriguing — a scent that provokes the senses and lingers in memory long after the encounter.",
            price: "$150–$220",
        },
        {
            id: "3",
            name: "La Vie Est Belle",
            brand: "Lancôme",
            year: 2012,
            perfumer: "Anne Flipo",
            concentration: "EDP",
            family: "Gourmand",
            gender: "Feminine",
            season: ["Fall", "Spring"],
            occasion: ["Casual", "Date Night"],
            topNotes: ["Black Currant", "Pear"],
            heartNotes: ["Iris", "Jasmine", "Orange Blossom"],
            baseNotes: ["Praline", "Vanilla", "Sandalwood"],
            longevity: 8,
            projection: 7,
            sillage: 7,
            versatility: 8,
            value: 8,
            rating: 4.5,
            reviewCount: 1567,
            image: "photo-1592945403244-b3fbafd7f539",
            description:
                "La Vie Est Belle — life is beautiful. A declaration of happiness rendered in iris and gourmand notes. A free and generous fragrance for a woman who has chosen her own path to happiness, uncompromising and radiant.",
            price: "$80–$130",
        },
        {
            id: "4",
            name: "Sauvage",
            brand: "Dior",
            year: 2015,
            perfumer: "François Demachy",
            concentration: "EDT",
            family: "Aromatic",
            gender: "Masculine",
            season: ["Spring", "Summer", "Fall"],
            occasion: ["Casual", "Office", "Date Night"],
            topNotes: ["Calabrian Bergamot", "Pepper"],
            heartNotes: ["Lavender", "Star Anise", "Vetiver"],
            baseNotes: ["Ambroxan", "Cedar", "Labdanum"],
            longevity: 8,
            projection: 8,
            sillage: 8,
            versatility: 9,
            value: 8,
            rating: 4.6,
            reviewCount: 2103,
            image: "photo-1615634260167-c8cdede054de",
            description:
                "A radically fresh composition, both mineral and pure. Sauvage evokes wide open Southwestern spaces — a freedom in a world of wildness, nature, and a rush of pure air under the open blue sky.",
            price: "$90–$140",
        },
        {
            id: "5",
            name: "Flowerbomb",
            brand: "Viktor & Rolf",
            year: 2005,
            perfumer: "Carlos Benaim",
            concentration: "EDP",
            family: "Floral",
            gender: "Feminine",
            season: ["Spring", "Summer"],
            occasion: ["Casual", "Romantic"],
            topNotes: ["Tea", "Bergamot", "Osmanthus"],
            heartNotes: ["Jasmine", "Centifolia Rose", "Freesia"],
            baseNotes: ["Musk", "Patchouli", "Vanilla"],
            longevity: 8,
            projection: 7,
            sillage: 8,
            versatility: 8,
            value: 7,
            rating: 4.5,
            reviewCount: 1432,
            image: "photo-1523293182086-7651a899d37f",
            description:
                "An explosion of flowers — a fragrant bomb to make the world a more beautiful place. Flowerbomb is an intoxicating blend of countless flowers that overwhelms everything in its luminous, optimistic path.",
            price: "$85–$145",
        },
        {
            id: "6",
            name: "Aventus",
            brand: "Creed",
            year: 2010,
            perfumer: "Erwin Creed",
            concentration: "EDP",
            family: "Fruity",
            gender: "Masculine",
            season: ["Spring", "Summer", "Fall"],
            occasion: ["Office", "Formal", "Date Night"],
            topNotes: ["Pineapple", "Bergamot", "Black Currant"],
            heartNotes: ["Rose", "Birch", "Jasmine"],
            baseNotes: ["Musk", "Oak Moss", "Ambergris"],
            longevity: 9,
            projection: 8,
            sillage: 8,
            versatility: 9,
            value: 6,
            rating: 4.9,
            reviewCount: 876,
            image: "photo-1585386959984-a4155224a1ad",
            description:
                "Creed Aventus celebrates strength, power, vision, and success. A bold, sophisticated fragrance inspired by the dramatic life of a historic emperor — a scent of triumph, ambition, and legacy.",
            price: "$300–$500",
        },
        {
            id: "7",
            name: "Mon Paris",
            brand: "YSL",
            year: 2016,
            perfumer: "Dominique Ropion",
            concentration: "EDP",
            family: "Floral",
            gender: "Feminine",
            season: ["Spring", "Summer"],
            occasion: ["Casual", "Romantic", "Date Night"],
            topNotes: ["Strawberry", "Pear", "Raspberry"],
            heartNotes: ["White Peony", "Datura", "Jasmine"],
            baseNotes: ["White Musk", "Patchouli", "Ambrette"],
            longevity: 7,
            projection: 6,
            sillage: 6,
            versatility: 8,
            value: 7,
            rating: 4.4,
            reviewCount: 1189,
            image: "photo-1548304836-cef9bd02b5a9",
            description:
                "Mon Paris tells the story of a passionate Parisian love affair. An iconic and romantic fragrance with a modern twist — for the free-spirited, luminous woman who leaves a trail of joy wherever she walks.",
            price: "$80–$120",
        },
        {
            id: "8",
            name: "Oud Wood",
            brand: "Tom Ford",
            year: 2007,
            perfumer: "Pierre Negrin",
            concentration: "EDP",
            family: "Woody",
            gender: "Unisex",
            season: ["Fall", "Winter"],
            occasion: ["Evening", "Formal", "Night Out"],
            topNotes: ["Oud", "Rosewood", "Cardamom"],
            heartNotes: ["Sandalwood", "Vetiver", "Amber"],
            baseNotes: ["Tonka Bean", "Vanilla", "Musk"],
            longevity: 9,
            projection: 7,
            sillage: 8,
            versatility: 7,
            value: 5,
            rating: 4.7,
            reviewCount: 654,
            image: "photo-1594035910387-fea47794261f",
            description:
                "Rare oud wood from Thailand combined with the finest aromatics and rare woods to create this unparalleled fragrance — forging a new olfactive trail through the ancient and the rigorously modern.",
            price: "$200–$350",
        },
    ];
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
                        className="hidden md:flex items-center gap-1.5 text-sm text-dark-gold hover:text-black transition-colors mb-5"
                    >
                        View all <TbArrowRightDashed className="w-3.5 h-3.5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FRAGRANCES.slice(0, 4).map((frag, index) => (
                        <FragranceCard key={index} frag={frag} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trending;
