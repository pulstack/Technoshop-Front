import Category from '@/components/Category'
import Hero from '@/components/Hero'
import Product from '@/components/Product'
import Section from '@/components/Section'
import React from 'react'

const Home = () => {
  return (
    <div className='text-black w-full'> 
      <Hero />
      <Category />
      <Product />
      <Section  />
    </div>
  )
}

export default Home