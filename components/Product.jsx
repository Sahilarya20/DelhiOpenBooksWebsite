import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/Client'
const Product = ({product:{image ,name,slug,price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img
          src={urlFor(image &&image[0])}
          width={120}
          height={180}
          className="product-image"
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'> &#x20B9; {price}</p>

        
        </div>
      </Link>
    </div>
  )
}

export default Product