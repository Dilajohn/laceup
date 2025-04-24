import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CategoryCard from '@/components/CategoryCard'
import OfferSection from '@/components/OfferSection'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Laceup | Find Your Perfect Pair</title>
        <meta name="description" content="Premium shoes for every style. Explore Laceup now." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="space-y-12 p-4 md:p-8">
        <Hero />

        <section>
          <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <CategoryCard
              title="Sneakers"
              image="/sneakers.jpg"
              link="/products?category=sneakers"
            />
            <CategoryCard
              title="Boots"
              image="/boots.jpg"
              link="/products?category=boots"
            />
            <CategoryCard
              title="Everyday Kicks"
              image="/everyday-kicks.jpg"
              link="/products?category=everyday"
            />
          </div>
        </section>

        <OfferSection />

        <section>
          <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
          <Carousel />
        </section>
      </main>
      <Footer />
    </>
  )
}
