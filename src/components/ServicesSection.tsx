"use client";
import Image from "next/image";

const services = [
    {
        title: "Digital Marketing",
        icon: "/images/service1.png",
        description: "Marketing repurpose success in professions whereas in services sapien maximus design.",
    },
    {
        title: "Database Security",
        icon: "/images/service2.png",
        description: "Marketing repurpose success in professions whereas in services sapien maximus design.",
    },
    {
        title: "IT Solution",
        icon: "/images/service3.png",
        description: "Marketing repurpose success in professions whereas in services sapien maximus design.",
    },
    {
        title: "Technology Consult",
        icon: "/images/service4.png",
        description: "Marketing repurpose success in professions whereas in services sapien maximus design.",
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-gray-100 py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    How Professional IT Services <br />
                    Can Drive <span className="text-orange-500">Success.</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                        >
                            <div className="flex justify-start mb-4">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={40}
                                    height={40}
                                    className="text-orange-500"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-black mb-2 text-left">{service.title}</h3>
                            <p className="text-sm text-gray-600 text-left">{service.description}</p>
                            <div className="mt-6 flex justify-start">
                                <div className="w-7 h-7 rounded-full bg-gray-100 text-orange-500 flex items-center justify-center text-xl font-bold">
                                    +
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
