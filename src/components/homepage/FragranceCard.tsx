import { Fragrance } from "@/types/fragrance";
import Image from "next/image";
import { BiStar } from "react-icons/bi";
import Link from "next/link";
import { Chip } from "@heroui/react";

const FragranceCard = ({ frag }: { frag: Fragrance }) => {
    return (
        <div className="bg-card border border-border group cursor-pointer hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="relative overflow-hidden aspect-square bg-stone-100 shrink-0">
                <Image
                    src={frag.image}
                    alt={frag.name}
                    width={300}
                    height={300}
                    loading="eager"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 tracking-widest uppercase">
                    {frag.concentration}
                </span>
            </div>
            <div className="p-4 flex flex-col flex-1 relative">
                <p className="absolute top-3 right-4 text-xl font-bold">
                    ${frag.price}
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1 text-accent">
                    {frag.brand}
                </p>
                <h3 className="font-semibold text-black mb-2 line-clamp-1 text-base capitalize">
                    {frag.name}
                </h3>
                <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                    {frag.seasons.map((s) => (
                        <span
                            key={s}
                            className="text-[10px] px-2 py-0.5 bg-secondary border border-border text-coffee tracking-wider"
                        >
                            {s}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                        <BiStar />
                        {frag.rating || (
                            <span className="uppercase text-[10px] tracking-widest relative top-px">
                                N/A
                            </span>
                        )}
                    </div>

                    <Chip
                        color="success"
                        variant="primary"
                        className="rounded-full  font-bold text-[10px] uppercase"
                    >
                        <Chip.Label>{frag.family}</Chip.Label>
                    </Chip>
                </div>
                <Link
                    href={`/explore/${frag._id}`}
                    className="mt-auto w-full text-center text-sm py-2.5 border border-foreground text-black hover:bg-foreground hover:text-background transition-colors duration-200"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default FragranceCard;
