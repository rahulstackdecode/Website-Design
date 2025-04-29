"use client";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="bg-[#0A0D1C] text-white py-10 px-6 lg:pl-6 lg:py-0 lg:pr-0">
            <div className="grid md:grid-cols-2 items-center gap-10 max-w-[1800px] mx-auto overflow-hidden">

                <div className="heroleft-content">
                    <div className="relative">
                        <div className="text-banner z-10">
                        <p className="text-sm text-orange-500 font-semibold uppercase mb-4 flex items-center gap-2">
                            <span className="w-6 h-1 bg-orange-500 inline-block rounded"></span>
                            Best IT Solution Provider
                        </p>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Elevate Your <span className="text-orange-500">Business</span> with <br />
                            IT Excellence
                        </h1>

                        <p className="mt-6 text-gray-400 max-w-md">
                            We have been operating for over a decade prvid have beens
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 items-center">
                            <button className="bg-orange-600 text-white px-12 py-4 rounded-full font-semibold shadow-md hover:bg-orange-600 transition">
                                Get Started
                            </button>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/images/hero-pro.png"
                                    alt="Expert"
                                    width={60}
                                    height={60}
                                    className="rounded-full border-2 border-orange-600"
                                />
                                <span className="text-white">
                                    <span className="text-orange-500 font-semibold">Meet</span> Our Experts
                                </span>
                            </div>
                        </div>
                        </div>

                        <div className="absolute -top-[50px] -left-[154px] z-[12] animate-rotateme">
                            <Image
                                src="/images/hero-geo.png"
                                alt="Presentation"
                                width={500}
                                height={500}
                                className="rounded-lg ml-auto"
                            />
                        </div>
                     </div>

                </div>
                <div className="relative hidden sm:flex">
                    <Image
                        src="/images/hero-thum.png"
                        alt="Presentation"
                        width={800}
                        height={500}
                        className="rounded-lg relative z-12 ms-auto"
                    />
                </div>
            </div>
        </section>
    );
}
