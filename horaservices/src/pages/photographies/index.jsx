
// import { useDispatch } from 'react-redux';
// import Image from 'next/image';
// import axios from 'axios';
// import './photographies.css';

// import { useRouter } from 'next/router';

// const Home = ({ products }) => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleProductClick = (product) => {
//     console.log('Product clicked:', product);
//     dispatch({
//       type: 'SET_PRODUCT',
//       payload: {
//         name: product.name,
//         caption: product.caption,
//       },
//     });
//   };

//   const sendToCheckoutPage = (product) => {
//     router.push({
//       pathname: '/photography-checkout',
//       query: {
//         name: product.name,
//         caption: product.caption,
//         featured_image1: product.featured_image,
//       },
//     });
//   };

//   return (
//     <div className="decContainerSec decPage">
//       {products.map((product) => (
//         <div key={product._id} className="imageContainer">
//           <div className="product-card">
//             <div onClick={() => handleProductClick(product)} style={{ cursor: 'pointer' }}>
//               <Image
//                 src={product.featured_image}
//                 alt={product.caption}
//                 width={300}
//                 height={300}
//                 className="decCatimage"
//               />
//               <div className="product-details">
//                 <h3 className="product-name">{product.name}</h3>
//                 <h3 className="product-name">{product.caption}</h3>
//                 <h4 className="product-name">{product.inclusion}</h4>
//                 <p className="product-price">
//                   ₹{product.price} <span className="original-price">₹{product.originalPrice}</span>
//                 </p>
//                 <button onClick={() => sendToCheckoutPage(product)}>Book Now</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const res = await axios.get(
//     'https://horaservices.com:3000/api/photography/searchByTag/64b8c4e8f5a4c9e341234568'
//   );
//   const products = res.data.data;

//   return {
//     props: {
//       products,
//     },
//   };
// }

// export default Home;



import { useDispatch } from 'react-redux';
import Image from 'next/image';
import axios from 'axios';
import './photographies.css';

import { useRouter } from 'next/router';

const Home = ({ products }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    dispatch({
      type: 'SET_PRODUCT',
      payload: product,  // Store the entire product
    });
  };

  const sendToCheckoutPage = (product) => {
    router.push({
      pathname: '/photography-productDetails',
      query: {
        product: JSON.stringify(product),  // Send the entire product object as a string
      },
    });
  };

  return (
    <div className="decContainerSec decPage">
      {products.map((product) => (
        <div key={product._id} className="imageContainer">
          <div className="product-card">
            <div onClick={() => handleProductClick(product)} style={{ cursor: 'pointer' }}>
              <Image
                src={product.featured_image}
                alt={product.caption}
                width={300}
                height={300}
                className="decCatimage"
              />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <h3 className="product-name">{product.caption}</h3>
                <h4 className="product-name">{product.inclusion}</h4>
                <p className="product-price">
                  ₹{product.price} <span className="original-price">₹{product.originalPrice}</span>
                </p>
                <button onClick={() => sendToCheckoutPage(product)}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get(
    'https://horaservices.com:3000/api/photography/searchByTag/64b8c4e8f5a4c9e341234568'
  );
  const products = res.data.data;

  return {
    props: {
      products,
    },
  };
}

export default Home;
