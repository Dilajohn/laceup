import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { getAllProducts } from '@/utils/api'

export default function ProductListingPage() {
  const [products, setProducts] = useState([])
  const [sort, setSort] = useState('popularity')

  useEffect(() => {
    async function fetchProducts() {
      const data = await getAllProducts()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Head>
        <title>All Shoes - Laceup</title>
        <meta name="description" content="Browse all shoes on Laceup" />
      </Head>

      <Header />
      <main className="p-4 md:p-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold">All Products</h1>
          <select
            className="border border-gray-300 rounded px-3 py-2"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="popularity">Sort by Popularity</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
