import React from 'react';

import Link from 'next/link';
// import { urlFor } from '../lib/client'
import { GrLocation } from 'react-icons/gr';

const FooterBanner = ({footerBanner:{
  discount,largeText1,largeText2,saleTime,smallText,midText,product,buttonText,image,desc}}) => {
  return (
    
    <div className='footer-banner-container'>
      <div className="banner-desc">
  
        <div className="left">  
          {/* <p>{discount}</p> */}
          {/* <h3>{largeText1}</h3> */}
          {/* <h3>{largeText2}</h3> */}
          {/* <h3>Books</h3> */}

          {/* <p>{saleTime}</p> */}
          <h2> Contact Us:</h2>
          <p>&#9906; Ground Floor, 4771, 23, Bharat Ram Rd, Daryaganj, New Delhi, Delhi 110002  </p>
         
          <p>&#9993; Delhiopenbooks2016@gmail.com</p>
          <p>&#9990; 992129419</p>
        </div>
        <div className="right">
          {/* /<p>{smallText}</p> */}
          {/* <h3>{midText}</h3> */}
          {/* <p>{desc}</p> */}
          {/* <Link href={`/product/${product}`}> */}
            {/* <button type='button'>{buttonText}</button> */}
          {/* </Link> */}
          <h2>About the Company</h2><br></br>
          <p>We are a book publisher and distributor based at Daryaganj in New Delhi. We have a catalog of 1000+ books. We distribute all kinds of original general books.</p>
        </div>
        {/*footer image*/}
        {/* <img src={urlFor(image)}
        className="footer-banner-image"
        width={350}
          height={350}
        /> */}
      </div>

    </div>
  )
}

export default FooterBanner