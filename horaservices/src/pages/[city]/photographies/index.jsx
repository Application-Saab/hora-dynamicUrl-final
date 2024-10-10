import { useDispatch } from 'react-redux';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import './photographies.css';

const Photographies = ({ products }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { city } = router.query;  // Directly destructure city from the router's query

  console.log(city, "city12e2");

  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    dispatch({
      type: 'SET_PRODUCT',
      payload: product,
    });
  };

  // const sendToCheckoutPage = (product) => {
  //   router.push({
  //     pathname: '/photography-productDetails',
  //     query: {
  //       product: JSON.stringify(product),
  //       city: city,  // Pass the current city dynamically
  //     },
  //   });
  // };


  const sendToCheckoutPage = (product) => {
    router.push({
      pathname: `/${city}/photography-productDetails`,  // Include city in the pathname
      query: {
        product: JSON.stringify(product),  // Send product as a query parameter
      },
    });
  };
  

  return (
    <div className="decContainerSec decPage">
      {products?.length > 0 ? (
        products.map((product) => (
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
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
  
};

export async function getStaticPaths() {
  return {
    paths: [], // Leave this empty since we are using dynamic city
    fallback: false,  // Use true or 'blocking' for dynamic cities
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get('https://horaservices.com:3000/api/photography/searchByTag/64b8c4e8f5a4c9e341234568');
  const products = res.data.data;

  return {
    props: {
      products,
    },
  };
}

export default Photographies;


// import { useDispatch } from 'react-redux';
// import Image from 'next/image';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import './photographies.css';

// const Home = ({ products }) => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const [city, setCity] = useState(null);

//   useEffect(() => {
//     if (router.query.city) {
//       setCity(router.query.city);
//     }
//   }, [router.query.city]);

//   console.log(city, "city1234567");

//   const handleProductClick = (product) => {
//     console.log('Product clicked:', product);
//     dispatch({
//       type: 'SET_PRODUCT',
//       payload: product,  // Store the entire product
//     });
//   };

//   const sendToCheckoutPage = (product) => {
//     const city = router.query.city;  // Get the city from the query
//     router.push({
//       pathname: '/photography-productDetails',
//       query: {
//         product: JSON.stringify(product),  // Send the product object
//         city: city,  // Pass the current city dynamically
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
