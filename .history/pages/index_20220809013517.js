import React from 'react'
import {Product,FooterBanner,HeroBanner} from '../components'

const index = () => {
  return (
    <>
    <HeroBanner/>
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>speaker There are many variations passages</p>
      </div>
      <div className='products-container'>
        {['product 1', 'product 2', 'product 3'].map((product) =>product)}
      </div>


    </>
  );
}

export default index