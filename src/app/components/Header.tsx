import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">Laceup</span>
        </Link>
        <nav className="space-x-4">
          <Link href="/products">Shop</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/profile">Profile</Link>
        </nav>
      </div>
    </header>
  );
}