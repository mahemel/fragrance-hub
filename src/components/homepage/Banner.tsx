"use client";

import { useState } from "react";
import { motion } from "motion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Slider, { type Settings } from "react-slick";

interface Slide {
    id: string;
    image: string;
}

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides: Slide[] = [
        {
            id: "1",
            image: "/assets/slide-1.jpg",
        },
        {
            id: "2",
            image: "/assets/slide-2.jpg",
        },
        {
            id: "3",
            image: "/assets/slide-3.jpg",
        },
    ];

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        beforeChange: (_: number, next: number) => {
            setActiveSlide(next);
        },
    };

    return (
        <div className="relative overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={slide.id} className="relative block!">
                        <div className="h-130 md:h-auto md:aspect-16/7 relative w-full pointer-events-none overflow-hidden">
                            <motion.div
                                animate={
                                    activeSlide === index
                                        ? {
                                              scale: 1.08,
                                          }
                                        : {
                                              scale: 1,
                                          }
                                }
                                transition={{
                                    duration: 6,
                                    ease: "linear",
                                }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={slide.image}
                                    alt={slide.image}
                                    width={1600}
                                    height={900}
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                            </motion.div>

                            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                    </div>
                ))}
            </Slider>

            <div className="absolute inset-0 flex items-center pointer-events-none">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        className="text-white"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-none font-title">
                            Find Your
                            <br /> Signature Fragrance
                        </h1>

                        <p className="text-base md:text-lg mb-5 max-w-md">
                            Explore hundreds of perfumes, compare fragrance
                            notes, discover community favorites, and build your
                            own fragrance collection.
                        </p>

                        <div className="flex">
                            <Link
                                href="/explore"
                                className="flex items-center gap-2 pointer-events-auto btn-accent"
                            >
                                Explore Fragrance
                                <BsArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
