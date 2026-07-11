import { Fragrance } from "@/types/fragrance";
import Image from "next/image";
import { BiHeart, BiStar } from "react-icons/bi";
import Link from "next/link";

const FragranceCard = ({ frag }: { frag: Fragrance }) => {
    return (
        <div className="bg-card border border-border group cursor-pointer hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="relative overflow-hidden aspect-3/4 bg-stone-100 shrink-0">
                <Image
                    src={`https://images.unsplash.com/${frag.image}`}
                    alt={frag.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors">
                    <BiHeart className={`w-4 h-4`} />
                </button>

                <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 tracking-widest uppercase">
                    {frag.concentration}
                </span>
            </div>
            <div className="p-4 flex flex-col flex-1">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                    {frag.brand}
                </p>
                <h3 className="font-semibold text-black mb-2 line-clamp-1 text-base">
                    {frag.name}
                </h3>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                        <BiStar />
                        {frag.rating}
                        <span className="text-xs text-black">
                            ({frag.reviewCount.toLocaleString()})
                        </span>
                    </div>
                    <span className="text-xs text-coffee">{frag.family}</span>
                </div>
                <div className="flex items-center gap-1.5 mb-4 flex-wrap">
                    {frag.season.map((s) => (
                        <span
                            key={s}
                            className="text-[10px] px-2 py-0.5 bg-secondary border border-border text-coffee tracking-wider"
                        >
                            {s}
                        </span>
                    ))}
                </div>
                <Link
                    href={`/explore/detail`}
                    className="mt-auto w-full text-center text-sm py-2.5 border border-foreground text-black hover:bg-foreground hover:text-background transition-colors duration-200"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default FragranceCard;
