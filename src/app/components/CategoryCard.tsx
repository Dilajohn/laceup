import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  image: string;
}

export default function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className="shadow rounded overflow-hidden text-center">
      <Image src={image} alt={title} width={300} height={200} className="w-full object-cover" />
      <div className="p-2 font-semibold">{title}</div>
    </div>
  );
}