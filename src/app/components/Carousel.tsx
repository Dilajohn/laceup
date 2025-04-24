import { useEffect, useState } from 'react';

const slides = ['/product-1.jpg', '/product-2.jpg', '/product-3.jpg', '/product-4.jpg'];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Featured product"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
}