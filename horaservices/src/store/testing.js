import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, GET_DECORATION_CAT_ITEM, API_SUCCESS_CODE } from '../utils/apiconstants';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const TestingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const router = useRouter();
  const categoryId = localStorage.getItem('categoryId');
  const catValue = 'birthday-decoration'; 

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${GET_DECORATION_CAT_ITEM}${categoryId}`);
      if (response.status === API_SUCCESS_CODE) {
        const limitedProducts = response.data.data.slice(0, 5).map(item => ({
          ...item,
          rating: (Math.random() * (4.8 - 4.1) + 4.1).toFixed(1),
          userCount: Math.floor(Math.random() * (500 - 20 + 1)) + 20
        }));
        setProducts(limitedProducts);
      }
    } catch (error) {
      console.log('Error fetching products:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductClick = (productName) => {
    const formattedProductName = encodeURIComponent(productName).replace(/%20/g, '-');
    router.push(`/balloon-decoration/${catValue}/product/${formattedProductName}`);
  };

  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: '#9252AA' }}>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.length > 0 ? (
            products.map((item) => (
              <div
                key={item._id}
                style={{ width: '200px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => handleProductClick(item.name)}
              >
                <div style={{ position: 'relative' }}>
                  <Image src={`https://horaservices.com/api/uploads/${item.featured_image}`} alt={item.name} width={200} height={200} style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: '5px', borderRadius: '5px' }}>
                    Hora
                  </div>
                </div>
                <div style={{ padding: '10px' }}>
                  <h2 style={{ fontSize: '16px', color: '#9252AA' }}>{item.name}</h2>
                  <p style={{ color: '#9252AA', fontWeight: '700' }}>₹ {item.price}</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                    <p style={{ fontWeight: '500', margin: '0' }}>{item.rating}</p>
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ffc107', marginLeft: '5px' }} />
                    <p style={{ color: '#9252AA', fontWeight: '600', margin: '0', paddingLeft: '5px' }}>({item.userCount})</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )
        )}
      </div>
    </div>
  );
};

export default TestingPage;
