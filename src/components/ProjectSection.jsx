'use client';

import Image from 'next/image';

const projects = [
  {
    title: 'App Development',
    category: 'DEVELOPMENT',
    image: '/images/project4.png',
  },
  {
    title: 'CMS Development',
    category: 'SOFTWARE',
    image: '/images/project4.png',
  },
  {
    title: 'Project for Marketing',
    category: 'MARKETING',
    image: '/images/project4.png',
  },
  {
    title: 'App Development',
    category: 'DEVELOPMENT',
    image: '/images/project4.png',
  },
  // {
  //   title: 'Product Design',
  //   category: 'DESIGN',
  //   image: '/images/project2.png',
  // },
];

export default function ProjectSection() {
  return (
    <section className="bg-[#04081C] py-15 px-2 sm:px-10 sm:py-15  max-w-7xl mx-auto mt-20">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Explore Our Recent <span className="text-orange-500">Projects.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-auto scrollbar-hide">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#171a2b] rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                <span className="bg-[#050a1e] text-white text-[9px] px-5 py-2 rounded-full inline-block">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
