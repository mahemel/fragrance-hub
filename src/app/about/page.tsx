import SectionHeader from "@/ui/SectionHeader";
import { FaUsers } from "react-icons/fa6";
import { GiMicroscope } from "react-icons/gi";
import { SiInfinityfree } from "react-icons/si";

export const metadata = {
    title: "ESSENCIO | About Us",
};
const AboutPage = () => {
    const aboutDetail = [
        {
            title: "Community First",
            desc: "Every review, rating, and recommendation comes from real fragrance lovers — not paid endorsements or sponsored content.",
            icon: <FaUsers />,
        },
        {
            title: "Expert Curation",
            desc: "Our editorial team verifies fragrance details and maintains the integrity of our database for accurate information.",
            icon: <GiMicroscope />,
        },
        {
            title: "Free Forever",
            desc: "FragranceHub is and will always be free to use. Discover, review, and collect without limits or paywalls.",
            icon: <SiInfinityfree />,
        },
    ];
    return (
        <div>
            <section className="section-top-padding bg-coffee text-white px-4">
                <SectionHeader
                    label="About Us"
                    title="Our Passion for Fragrance"
                    subtitle="FragranceHub was created to help enthusiasts discover, review, and organize fragrances in one beautiful platform."
                    center
                ></SectionHeader>
            </section>

            <section className="max-w-4xl mx-auto px-4 section-padding">
                <p className="text-lg leading-relaxed mb-6">
                    Whether you are buying your first bottle or expanding a
                    luxury collection, our mission is to make fragrance
                    discovery simple, enjoyable, and community-driven.
                </p>
                <p className="text-base leading-relaxed mb-12">
                    We believe that fragrance is one of the most intimate and
                    personal forms of self-expression. The right scent can evoke
                    memories, shift moods, and leave lasting impressions. Yet
                    navigating the world of perfumery — with thousands of
                    releases, complex terminology, and widely varying quality —
                    can feel overwhelming for beginners and seasoned collectors
                    alike. FragranceHub exists to change that.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {aboutDetail.map((v) => (
                        <div
                            key={v.title}
                            className="bg-card border border-border p-6"
                        >
                            <span className="text-2xl block mb-4">
                                {v.icon}
                            </span>
                            <h3 className="font-semibold text-foreground mb-2">
                                {v.title}
                            </h3>
                            <p className="text-sm leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
