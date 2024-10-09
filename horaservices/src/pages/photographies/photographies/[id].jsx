import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const { name } = router.query; // Get the product name from the URL
  const product = useSelector((state) => state.product);

  return (
    <div>
      <h1>Product Details</h1>
      {product && product.name === name ? (
        <>
          <h2>{product.name}</h2>
          <p>{product.caption}</p>
        </>
      ) : (
        <p>No product selected.</p>
      )}
    </div>
  );
};

export default ProductDetail;
