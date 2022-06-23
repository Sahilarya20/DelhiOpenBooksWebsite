import React , {useState} from 'react';
import {client,urlFor } from '../../lib/Client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {Product} from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({product,products}) => {
    const { image, name, details, price ,author,language,publisher,pages,isbn,binding,dimension ,originalprice} = product;

    const [index,setIndex]=useState(0);
    const { decQty, incQty, qty,onAdd} = useStateContext();


    let discountedPrice={price};
    let OriginalPrice={originalprice}
    const discount=(discountedPrice,OriginalPrice)=>{
      return ((OriginalPrice-discountedPrice)/OriginalPrice)*100;
    }
    const discountPri=discount(OriginalPrice,discountedPrice);
    // const s=parseInt(discountPri,10);

    // console.log(discountPri)

  return (
    <div >
        <div className='product-detail-container' >
            <div>
                <div className='image-container'>
                    <img  src={urlFor(image && image[index])}
                    
                    className="product-detail-image"
                    width={250}
                    height={250} 
                    />
                </div>
                <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>

            </div>
                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                        </div>
                        <p>(20)</p>
                    </div>
                    {/* <h4>Details:</h4>
                    <p>{details}</p> */}
                    <span><b>Author: </b>{author}</span><br></br>
                    <p className='price'> &#x20B9; {price} </p> 
                    <span className='discount'> &nbsp; <del> &#x20B9;398 </del></span>
                    {/* <span> &nbsp; {discountPri}</span>s */}
                    
                    <div className="quantity">
                    <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
          <button type="button" className="buy-now" onClick="">Buy Now</button><br></br>
          <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
          
          </div>
          
        </div>
        {/* <div className='right-desc'>
                   <center> <span className='title'>About the Book</span></center>
                   <div className='details'>Details:
                   <p>{details}</p>
                   </div>
            </div>  */}
      </div>
    
    <div className='highlights-container'>
      <h4>Book Highlights:  </h4>
      <div className='highlights-details'>
        <p> &#x2022;Language:&nbsp; {language}</p>
        <p> &#x2022;Publisher:&nbsp; {publisher}</p>
        <p> &#x2022;ISBN:&nbsp; {isbn}</p>
        <p> &#x2022;Pages:&nbsp; {pages}</p>
        <p> &#x2022;Binding:&nbsp; {binding}</p>
        <p> &#x2022;Author:&nbsp; {author}</p>
        <p> &#x2022;Dimenson:&nbsp; {dimension}</p>

      </div>
      <div className='highlights-details2'>
      <h4>Book details:  </h4>
      <p>{details}</p>
      </div>
      
    </div>


      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
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