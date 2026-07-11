import SectionHeader from "@/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsClock } from "react-icons/bs";

const LatestBlogs = () => {
    const BLOG_POSTS = [
        {
            id: "1",
            title: "Top 10 Summer Fragrances for 2024",
            excerpt:
                "Beat the heat with these fresh, airy scents that stay elegant as temperatures climb.",
            category: "Seasonal Picks",
            date: "June 12, 2024",
            readTime: "5 min",
            image: "photo-1507525428034-b723cf961d3e",
        },
        {
            id: "3",
            title: "Luxury vs Designer Fragrances: Is It Worth It?",
            excerpt:
                "We break down the real differences in quality, longevity, and value between niche and mass-market.",
            category: "Buying Guide",
            date: "May 28, 2024",
            readTime: "7 min",
            image: "photo-1587017539504-67cfbddac569",
        },
        {
            id: "4",
            title: "How to Choose Your First Perfume",
            excerpt:
                "A beginner's guide to fragrance families, notes, and finding a scent that feels like you.",
            category: "Beginner Guide",
            date: "May 20, 2024",
            readTime: "6 min",
            image: "photo-1592945403244-b3fbafd7f539",
        },
        {
            id: "5",
            title: "Understanding Perfume Notes: A Complete Guide",
            excerpt:
                "Top, heart, and base notes explained — and how they work together to tell a fragrance's story.",
            category: "Education",
            date: "May 15, 2024",
            readTime: "8 min",
            image: "photo-1615634260167-c8cdede054de",
        },
        {
            id: "6",
            title: "Building Your Perfume Collection",
            excerpt:
                "From your first signature scent to a curated collection — a roadmap for fragrance lovers.",
            category: "Collections",
            date: "May 8, 2024",
            readTime: "5 min",
            image: "photo-1523293182086-7651a899d37f",
        },
    ];
    return (
        <section className="section-padding">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-end justify-between">
                    <SectionHeader label="Editorial" title="Latest Articles" />
                    <Link
                        href="/blog"
                        className="hidden md:flex items-center gap-1.5 text-sm text-dark-gold hover:text-black transition-colors mb-12"
                    >
                        All articles <BsArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {BLOG_POSTS.slice(0, 3).map((post) => (
                        <Link
                            href={`/blog`}
                            key={post.id}
                            className="bg-card border border-border group text-left hover:shadow-lg transition-shadow"
                        >
                            <div className="relative overflow-hidden aspect-video bg-stone-100">
                                <Image
                                    src={`https://images.unsplash.com/${post.image}`}
                                    width={400}
                                    height={300}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs px-2 py-0.5 bg-secondary text-black tracking-wider">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-black flex items-center gap-1">
                                        <BsClock className="w-3 h-3" />{" "}
                                        {post.readTime}
                                    </span>
                                </div>
                                <h3 className="font-bold text-black mb-2 leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-black leading-relaxed tracking-wider line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <p className="text-[10px] text-black mt-4">
                                    {post.date}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;
