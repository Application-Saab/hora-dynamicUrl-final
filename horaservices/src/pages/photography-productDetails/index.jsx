import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import buynowImage from '../../assets/experts.png';
import buynowImage1 from '../../assets/secured.png';
import buynowImage2 from '../../assets/service.png';
import checkImage from '../../assets/tick.jpeg';
import { getDecorationProductOrganizationSchema, getProductFAQSchema } from "../../utils/schema";
import '../../css/decoration.css';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { useRouter } from "next/router";
import Image from "next/image";
import { BASE_URL, GET_DECORATION_BY_NAME } from "@/utils/apiconstants";
import axios from 'axios';


function DecorationCatDetails() {
  const [selCat, setSelCat] = useState("");
  const [orderType, setOrderType] = useState(1);
  const router = useRouter();
  const [product, setProduct] = useState('');
  const [apiProduct , setApiProduct] = useState('');
  const [isFetched , setIsFetched ] = useState(false)
  const [subCategory, setSubCategory] = useState('');
  const [catValue, setCatValue] = useState('');




//   // Use useEffect to handle router query
//   useEffect(() => {
//     if (router.isReady) {
//       const { subCategory: urlSubCategory, catValue: urlCatValue, productName } = router.query;
//       const formattedProduct = productName ? productName.replace(/-/g, ' ') : '';
//       setApiProduct(formattedProduct);
//       setSubCategory(urlSubCategory || '');
//       setCatValue(urlCatValue || '');
//     }
//   }, [router.isReady, router.query]);
  
//   useEffect(() => {
//     if (apiProduct && !isFetched) {
//       const fetchDecorationDetails = async () => {
//         try {
//           const url = `${BASE_URL}${GET_DECORATION_BY_NAME}${apiProduct}`;
//           const response = await axios.get(url);
//           console.log("API Response:", response.data);  // Log the response
//           setProduct(response.data.data[0]);
//           setSubCategory(getSubCategory(catValue || ''));
//         } catch (error) {
//           console.error("Error:", error.message);  // Log the error
//         }
//       };
  
//       fetchDecorationDetails();
//     }
//   }, [apiProduct, catValue]);
  
  
  const schemaOrg = getDecorationProductOrganizationSchema(product);
  const scriptTag = JSON.stringify(schemaOrg);
  const [isClient, setIsClient] = useState(false);
  const handleCheckout = (subCategory, product) => {
    const stateData = { 
      from: window.location.pathname,
      subCategory,
      product: JSON.stringify(product),
      orderType,
      catValue 
    };

    if (localStorage.getItem("isLoggedIn") !== "true") {
      router.push({
        pathname: '/login',
        query: {
          from: window.location.pathname,
          subCategory,
          product: JSON.stringify(product),
          orderType,
          catValue 
        }
      });
    } else {
      router.push({
        pathname: '/photography-checkout',
        query: {
          from: window.location.pathname,
          subCategory,
          product: JSON.stringify(product1),
          orderType,
          catValue
        }
      });
    }
  };

  function addSpaces(subCategory) {
    let result = "";
    for (let i = 0; i < subCategory?.length; i++) {
      if (i !== 0 && subCategory[i] === subCategory[i].toUpperCase()) {
        result += " ";
      }
      result += subCategory[i];
    }
    setSelCat(result);
  }

//   function getSubCategory(catValue) {
//     if (catValue === 'birthday-decoration') {
//       return 'Birthday';
//     } else if (catValue === 'anniversary-decoration') {
//       return 'Anniversary';
//     } else {
//       const parts = catValue.split('-'); // Split by hyphens
//       return parts.slice(0, 2) // Take only the first two parts
//         .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()) // Capitalize each part
//         .join(''); // Join parts together without spaces
//     }
//   }



  useEffect(() => {
    addSpaces(subCategory);
  }, [subCategory]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getItemInclusion = (inclusion) => {
    if (!Array.isArray(inclusion) || inclusion.length === 0) {
      return null;
    }
    const htmlString = inclusion[0];
    const withoutTags = htmlString.replace(/<[^>]*>/g, ''); // Remove HTML tags
    const withoutSpecialChars = withoutTags.replace(/&#[^;]*;/g, ' '); // Replace &# sequences with space
    const statements = withoutSpecialChars.split('<div>');
    const inclusionItems = statements.flatMap(statement => statement.split("-").filter(item => item.trim() !== ''));
    const inclusionList = inclusionItems.map((item, index) => (
      <li key={index} className="inclusionstyle">
        <Image src={checkImage} alt="Info" style={{ height: 13, width: 13, marginRight: 10 }} />
        {item.trim()}
      </li>
    ));
    return (
      <div>
        <div style={{ fontSize: "21px", borderBottom: "1px solid #e7eff9", marginBottom: "10px" }}>Inclusions</div>
        <ul>
          {inclusionList}
        </ul>
      </div>

    );
  };

  // Function to generate a random number between min and max (inclusive)
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Function to generate a random rating between 4.1 to 4.8
  const getRandomRating = () => {
    return (Math.random() * (4.8 - 4.1) + 4.1).toFixed(1);
  };

  const [product1, setProduct1] = useState(null); // Initial state is null

  useEffect(() => {
    // Ensure product is present in query params
    if (router.query.product) {
      try {
        const parsedProduct = JSON.parse(router.query.product); // Parse the product string back to an object
        setProduct1(parsedProduct); // Set the product state
      } catch (error) {
        console.error("Failed to parse product:", error);
      }
    }
  }, [router.query.product]);

  return (
    <div className="App" style={{ backgroundColor: "#EDEDED" }}>
      <Head>
        <title>Balloon and Flower Decoration @999</title>
        <meta name="description" content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
        <meta name="keywords" content="Balloon and Flower Decoration @999" />
        <meta property="og:title" content="Balloon and Flower Decoration by Professional Decorators" />
        <meta property="og:description" content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
        <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png" />
        <script type="application/ld+json">{scriptTag}</script>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Hora Services" />
        <meta property="og:url" content={`https://horaservices.com/balloon-decoration/${catValue}/product/${product.name}`} />
        <meta property="og:type" content="website" />
      </Head>
      {product1 && product1.featured_image ? (
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "10px", position: "relative" }} className="decDetails">
          <div style={{ width: "50%", textAlign: "center" }} className="decDetailsLeft">
            <div style={{ width: "80%", boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", margin: "0 auto", position: "relative" }} className="decDetailsImage">
              {/* <Image src={product1.featured_image} alt="decoration-image" style={{ width: "100%", height: "auto" }} width={300} height={300} /> */}
             
    <Image 
      src={product1.featured_image} 
      alt="decoration-image" 
      style={{ width: "100%", height: "auto" }} 
      width={300} 
      height={300} 
    /> 
 
               <div style={{ position: "absolute", bottom: 20, right: 20, borderRadius: "50%", padding: 10 }}>
                <span style={{ color: "rgba(157, 74, 147, 0.6)", fontWeight: "600" }}>Hora</span>
              </div>
            </div>
          </div>
          <div style={{ width: "50%", paddingLeft: "20px", paddingRight: "50px" }} className="decDetailsRight">
            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px", backgroundColor: "#fff" }}>
              <h2 style={{ fontSize: "12px", color: "#9252AA" }}>{'Home'}{' > '}{subCategory}{' > '}{product1.name}</h2>
              <h1 style={{ fontSize: "16px", color: "#222", fontSize: "21px", fontWeight: "#222" }}>{product1.name}</h1>
              <p className='mb-2' style={{ fontSize: "18px", color: "#9252AA", fontWeight: "600" }}> ₹ {product1.price}</p>
             {/* <div className="d-flex align-items-center pro-rating-sec">
              <p className="m-0 p-0 pe-3 pro-rating-sec1" style={{ fontWeight: '500', fontSize: 17, margin: "0px", color:"#9252AA" }}>{getRandomRating()}<span className='px-1 m-0 py-0 img-fluid' style={{ color: '#FFBF00' }}><FontAwesomeIcon style={{ margin: 0 }} icon={faStar} /></span></p>
              <p className="m-0 p-0" style={{ color: '#9252AA', fontWeight: '500', fontSize: 17, margin: "0px", padding: "0 0 0 10px" }}>({getRandomNumber(20, 500)})</p>
            </div> */}
            </div>

            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px", backgroundColor: "#fff" }}>
              {getItemInclusion(product1.inclusion)}
              {/* {isClient && window.innerWidth > 800 ? */}
                <button style={styles.Buttonstyle} className="dec-continueButton" onClick={() => handleCheckout(subCategory, product)}>Continue</button>
                {/* : null} */}
            </div>

            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "10px", backgroundColor: "#fff" }} className="whyHoraSec">
              <p style={{ fontSize: "21px", color: "rgb(34, 34, 34)", borderBottom: "1px solid #e7eff9" }} className="whyHoraHeading">Why Hora</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className="whyHoraSecInner">
                <div className="whyHoraSecBox">
                  <Image src={buynowImage} alt="buy-now" style={{ height: "auto" }} />
                  <p style={{ color: "gray", fontSize: "12px" }} className="whyHoraSubheading">Experts Decorations</p>
                </div>
                <div className="whyHoraSecBox">
                  <Image src={buynowImage1} alt="buy-now" style={{ height: "auto" }} />
                  <p style={{ color: "gray", fontSize: "12px" }} className="whyHoraSubheading">Secured Transactions</p>
                </div>
                <div className="whyHoraSecBox">
                  <Image src={buynowImage2} alt="buy-now" style={{ height: "auto" }} />
                  <p style={{ color: "gray", fontSize: "12px" }} className="whyHoraSubheading">100% Service Guaranteed</p>
                </div>
              </div>
            </div>

            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", backgroundColor: "#fff" }} className="canceltionPolicy">
              <p style={{ fontSize: "21px", color: "rgb(34, 34, 34)", borderBottom: "1px solid #e7eff9" }} className="cancelltionPolicySecHeading">Cancellation and Order Change Policy:</p>
              <p className="cancelltionPolicySecSubHeading">- Till the order is not assigned to service provider, 100% of the amount will be refunded, otherwise 50% of advance will be deducted as cancellation charges to compensate the service provider.</p>
              <p className="cancelltionPolicySecSubHeading">- The order cannot be edited after paying advance. Customer can cancel the order and replace the new order with required changes.</p>
            </div>
          </div>
        </div>
      </div>
) : (
    <p>Loading image...</p> // Show a loading message while product1 is not set
  )}
      {/* {isClient && window.innerWidth < 800 ?
        <div style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          borderTop: "1px solid #efefef",
          backgroundColor: "#EDEDED"
        }}
        >
          <button style={styles.Buttonstyle} className="dec-continueButton" onClick={() => handleCheckout(subCategory, product)}>Continue</button>
        </div>
        :
        null
      } */}
    </div>
    
  );
};

const styles = {
  Buttonstyle: {
    border: "2px solid rgb(157, 74, 147)",
    backgroundColor: "rgb(157, 74, 147)",
    color: "#fff",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "23px auto 14px",
    width: "93%",
  },
};

export default DecorationCatDetails;
