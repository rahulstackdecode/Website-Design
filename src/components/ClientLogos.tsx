'use client';

import Image from 'next/image';

const logos = [
  { src: '/images/brand-img.png', alt: 'Technology Logo' },
  { src: '/images/brand-img1.png', alt: 'Grameen' },
  { src: '/images/brand-img2.png', alt: 'Walmart' },
  { src: '/images/brand-img4.png', alt: 'Deluxon' },
];

export default function ClientLogos() {
  return (
    <div className="bg-[#FF3C00] rounded-b-[40px] py-6 px-4 max-w-7xl mx-auto ">
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10">
        {logos.map((logo, index) => (
          <div key={index} className="relative w-[120px] h-[40px]">
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"

            />
          </div>
        ))}
      </div>
    </div>
  );
}
