import React from 'react';
import Link from 'next/link';

// import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">
          {/* {heroBanner.smallText} */}
          Small Text
          </p>
        <h3>
          {/* {heroBanner.midText} */}
          mid Text
        </h3>
        <h1>
          {/* {heroBanner.largeText1} */}
          semi mid text
        </h1>
        <img 
        // src={urlFor(heroBanner.image)} 
        
        alt="headphones" 
        className="hero-banner-image" />

        <div>
          <Link 
          // href={`/product/${heroBanner.product}`}
          href="/product/ID"
          >
            <button type="button">
              {/* {heroBanner.buttonText} */}
              click me
            </button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>
              {/* {heroBanner.desc} */}
              herooo
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner