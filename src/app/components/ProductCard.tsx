import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="block border rounded p-4 hover:shadow-md">
      <Image src={image} alt={name} width={300} height={200} className="w-full object-cover mb-2" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">${price}</p>
    </Link>
  );
}