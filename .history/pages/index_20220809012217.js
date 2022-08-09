import React from 'react'

const index = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>Best Selling Products</h2>
        <p>speaker There are many variations passages</p>
      </div>
      <div>
        {['product 1', 'product 2', 'product 3'].map((pr))}
      </div>
    </>
  );
}

export default index