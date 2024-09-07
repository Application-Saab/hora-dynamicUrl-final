// import Image from 'next/image'
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './photographies.css';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch the data from the API
//     axios.get('https://horaservices.com:3000/api/photography/searchByName/Photographies')
//       .then(response => {
//         if (response.data && response.data.data) {
//           setProducts(response.data.data);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className="product-container">
//       {products.length > 0 ? (
//         products.map(product => (
//           <div key={product._id} className="product-card">
//             <Image
//               src={product.featured_images.url} 
//               alt={product.name} 
//               className="product-image" 
//               width={300}
//               height={300}
//             />
//             <h2>{product.name}</h2>
//             <p>{product.caption}</p>
//             <p>Price: ₹{product.price}</p>
//           </div>
//         ))
//       ) : (
//         <p>Loading products...</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;


import Link from 'next/link';
import axios from 'axios';

const Home = ({ products }) => {
  return (
    <div>
      <h1>Photography Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <Link href={`/photographies/${product.name}`}>
              
                <img
                  src={product.featured_images.thumbnail}
                  alt={product.caption}
                  width={100}
                />
                <h2>{product.name}</h2>
                <p>{product.caption}</p>
                <p>Price: ₹{product.price}</p>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get('https://horaservices.com:3000/api/photography/searchByTag/64b8c4e8f5a4c9e341234568');
  const products = res.data.data;

  return {
    props: {
      products,
    },
  };
}

export default Home;



// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import './photographies.css';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     axios
//       .get('https://horaservices.com:3000/api/photography/searchByTag/64b8c4e8f5a4c9e341234568')
//       .then((response) => {
//         if (response.data && response.data.data) {
//           setProducts(response.data.data);
//           console.log('Products:', response.data.data); // Log fetched products data
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const handleProductClick = (product) => {
    
//     console.log('Clicked product:', product._id); 
//     console.log('Clicked product:', product); // Log the clicked product
//     router.push(`/photographies/${product._id}`);
//   };

//   return (
//     <div className="product-container">
//       {products.length > 0 ? (
//         products.map((product) => (
//           <div
//             key={product._id}
//             className="product-card"
//             onClick={() => handleProductClick(product)}
//           >
//             <Image
//               src={product.featured_images.url}
//               alt={product.name}
//               className="product-image"
//               width={300}
//               height={300}
//             />
//             <h2>{product.name}</h2>
//             <p>{product.caption}</p>
//             <p>Price: ₹{product.price}</p>
//           </div>
//         ))
//       ) : (
//         <p>Loading products...</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;
