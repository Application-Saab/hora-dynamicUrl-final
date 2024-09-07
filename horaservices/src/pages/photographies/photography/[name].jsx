import axios from 'axios';
import { useRouter } from 'next/router';

const ProductDetails = ({ product }) => {
  const router = useRouter();
  const { name } = router.query;
  console.log(name, "name");

  console.log("Product Details Page");
  console.log("Router Query:", router.query);
  console.log("Product Data:", product);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.featured_images.large}
        alt={product.caption}
        width={300}
      />
      <p>{product.caption}</p>
      <p>Price: ₹{product.price}</p>
      <p>Cost Price: ₹{product.cost_price}</p>
      <p>Inclusions: {product.inclusion.join(", ")}</p>
    </div>
  );
};

export async function getStaticPaths() {
  console.log("Fetching Static Paths");

  const res = await axios.get('https://horaservices.com:3000/api/photography/searchByTag/64b8c4e8f5a4c9e341234568');
  const products = res.data.data;

  console.log("Fetched Products:", products);

  const paths = products.map((product) => ({
    params: { name: encodeURIComponent(product.name) }, // Encode the product name
  }));

  console.log("Generated Paths:", paths);

  return {
    paths,
  };
}

export async function getStaticProps({ params }) {
  const { name } = params;

  console.log("Fetching Static Props for Name:", name);

  try {
    const res = await axios.get(`https://horaservices.com:3000/api/photography/searchByName/${name}`); 
    
    const product = res.data;

    console.log("Fetched Product Data:", product);

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error Fetching Product Data:", error);

    return {
      notFound: true,
    };
  }
}

export default ProductDetails;
