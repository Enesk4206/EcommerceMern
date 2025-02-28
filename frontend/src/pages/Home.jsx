import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturedSection from '../components/Products/FeaturedSection'

const placeholdProducts = [
  {
    _id: 1,
    name: "Product A",
    price: 100,
    images: [{ url: "https://picsum.photos/id/101/500/500" }]
  },
  {
    _id: 2,
    name: "Product B",
    price: 120,
    images: [{ url: "https://picsum.photos/id/102/500/500" }]
  },
  {
    _id: 3,
    name: "Product C",
    price: 90,
    images: [{ url: "https://picsum.photos/id/103/500/500" }]
  },
  {
    _id: 4,
    name: "Product D",
    price: 110,
    images: [{ url: "https://picsum.photos/id/104/500/500" }]
  },
  {
    _id: 5,
    name: "Product E",
    price: 95,
    images: [{ url: "https://picsum.photos/id/106/500/500" }]
  },
  {
    _id: 6,
    name: "Product F",
    price: 130,
    images: [{ url: "https://picsum.photos/id/106/500/500" }]
  },
  {
    _id: 7,
    name: "Product G",
    price: 105,
    images: [{ url: "https://picsum.photos/id/107/500/500" }]
  },
  {
    _id: 8,
    name: "Product H",
    price: 115,
    images: [{ url: "https://picsum.photos/id/108/500/500" }]
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller */}
      <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
      <ProductDetails />
      <div className='md:max-w-7xl max-3xl mx-auto'>
        <h2 className='text-3xl text-center font-bold mb-4'>Top Wears for Women</h2>
        <ProductGrid products={placeholdProducts} />
      </div>

      <FeaturedCollection />
      <FeaturedSection/>
    </div>


  )
}

export default Home