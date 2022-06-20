import React from 'react';
import {client,urlFor } from '../../lib/Client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ProductDetails = ({product,products}) => {
    const { image, name, details, price } = product;

  return (
    <div >
        <div className='product-detail-container' >
            <div>
                <div className='image-container'>
                    <img  src={urlFor(image && image[0])}
                    width={250}
                    height={250}
                    />
                </div>
                {/* <div className='small-images-container'>
                    {image?.map((item,i)=>(
                        <img
                        src={urlfor(item)}
                        className=""
                        onMouseEnter=""
                        />
                    ))}

                </div> */}

            </div>
                <div className='products-details-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                        </div>
                    </div>

                </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
          slug {
              current
          }
      }`
    const products = await client.fetch(query)
    const paths = products.map((product) => ({
      params: { slug: product.slug.current }
    }))
  
    return {
      paths,
      fallback: 'blocking'
    }
  }

  export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`
    const product = await client.fetch(query)
  
    const productsQuery = `*[_type == "product"]`
    const products = await client.fetch(productsQuery)
  
    return {
      props: { products, product }
    }
  }

export default ProductDetails