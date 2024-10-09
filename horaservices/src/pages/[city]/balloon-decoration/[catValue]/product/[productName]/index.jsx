import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import buynowImage from '../../../../../../assets/experts.png';
import buynowImage1 from '../../../../../../assets/secured.png';
import buynowImage2 from '../../../../../../assets/service.png';
import checkImage from '../../../../../../assets/tick.jpeg';
import { getDecorationProductOrganizationSchema, getProductFAQSchemaProductDetails } from "../../../../../../utils/schema";
import '../../../../../../css/decoration.css';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import  logo  from '../../../../../../assets/new_logo_light.png.png';
import { useRouter } from "next/router";
import Image from "next/image";

function DecorationCatDetails() {

  const [selCat, setSelCat] = useState("");
  const [orderType, setOrderType] = useState(1);
  const router = useRouter();
  const { subCategory: urlSubCategory, catValue: urlCatValue, productName } = router.query;
  
  const { city } = router.query;

   // Generate the FAQ schema with the dynamic city
   const faqSchema = getProductFAQSchemaProductDetails(city);

   // Convert schema object to JSON-LD
   const faqSchemaJSON = JSON.stringify(faqSchema);

  // You might also need to handle product name formatting (e.g., converting hyphens to spaces or similar)
  const formattedProductName = productName ? productName.replace(/-/g, ' ') : '';
  // Get state from Redux store
  const { subCategory: stateSubCategory, catValue: stateCatValue, product: stateProduct } = useSelector((state) => state.state || {});
  // Determine which values to use
  const subCategory = stateSubCategory || urlSubCategory;
  const catValue = stateCatValue || urlCatValue;
  const altTagCatValue = catValue.replace(/-/g, ' ');
  const product = stateProduct || formattedProductName;
  const schemaOrg = getDecorationProductOrganizationSchema(product);
  const scriptTag = JSON.stringify(schemaOrg);
  const [isClient, setIsClient] = useState(false);
  const handleCheckout = (subCategory, product) => {
    const stateData = { from: window.location.pathname, subCategory, product, orderType, catValue };

    if (localStorage.getItem("isLoggedIn") !== "true") {
      router.push({
        pathname: '/login',
        query: {
          from: window.location.pathname,
          subCategory,
          product: JSON.stringify(product),
          orderType,
          catValue,
        }
      });

    } else {
      router.push({
        pathname: '/checkout',
        query: {
          from: window.location.pathname,
          subCategory,
          product: JSON.stringify(product),
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


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getFaqData = (product) => [
    {
      question: "What does time slot mean?",
      answer: "Time slots are set times when you can book our services. If you choose the time slot of 1-4pm, then our decorators will be coming to your location between 1pm to 2pm and the decoration will be ready by 4pm.",
    },
    {
      question: "Can I customise the decoration according to my preference?",
      answer: "Yes, we provide customizations based on your preferences. You can change balloon colors, add name and age foils, and more. You can directly mention the details on the last page before payment or simply reach out to us to discuss your specific requirements.",
    },
    {
      question: "Do you offer same-day decoration service?",
      answer: "Yes, we offer same-day decoration service. It depends upon the slot availability and design selected by the customer. Please contact us to check slot availability.",
    },
    {
      question: "Do you only provide materials, or do you also decorate?",
      answer: "We provide materials and also handle the decoration. Our team will come to your given location with all the materials and complete the decoration on time.",
    },
    {
      question: "How much time do you take to set up the decoration?",
      answer: "The time needed depends on factors like the decor's complexity and the venue size. Simple setups take 40-45 minutes, while larger installations may need 1-2 hours. We ensure timely and efficient setup for every event.",
    },
    {
      question: "Tell us more about the design?",
      answer: `For an unforgettable kids birthday celebration, our expert decoration services are tailored to match your vision and budget. ${product.name} decoration under ₹${product.price} is designed to create a stunning atmosphere. Our designs are crafted to enhance your event, ensuring a memorable experience for you and your guests. This is one of the 1000+ designs under kids' birthday decoration for kids under 15 years.`,
    },
    {
      question: "How Early Should I Book Your Decoration Services?",
      answer: "To ensure a smooth experience, we recommend booking our decoration services at least 2 days in advance. This helps avoid any last-minute issues and ensures we can fully meet your needs. However, we also provide same-day delivery, depending on availability. For more information or to check availability, feel free to contact us.",
    },
    {
      question: "Tell us more about your designs and pricing?",
      answer: "We provide 1000+ decoration designs across all events like Birthdays, Baby Showers, Anniversaries, Baby Welcome, First Night, Mehandi, Haldi, Weddings, etc. Customers can choose the designs based on the event and spot of decoration, like room decoration, stage decoration, hall decoration, etc. The price of the decoration depends on the design selected, inclusions, and add-ons. The prices and inclusions are mentioned with each design.",
    },
    {
      question: "How does decoration service work?",
      answer: "Customers can directly select the design, fill in details like city, event date, time slot, and pincode on the next page, and place the order. The executor will be assigned after order finalization. The executor would come to the defined location at the given time slot and date with materials, execute the design, and leave the location after taking the balance payment.",
    },
    {
      question: "What all cities do we serve?",
      answer: "We serve decoration services in 7+ cities including Bangalore, Delhi NCR, Mumbai, Hyderabad, Indore, and more.",
    }
  ];
  

  const faqData = getFaqData(product);

      const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    const FAQSection = ({ faqData }) => {
      const [openIndex, setOpenIndex] = useState(null);
    
      const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      return (
        <div className="faqSection">
          <h2>Frequently Asked Questions</h2>
          {faqData.map((item, index) => (
            <div key={index} className="faqItem">
              <div onClick={() => handleToggle(index)}>
                <h3>{item.question}</h3>
                <span>{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && (
                <div>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 800);
      };
  
      handleResize(); // Set initial value
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

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
        <link rel="icon" href="https://horaservices.com/api/uploads/logo-icon.png" type="image/x-icon" />
        <meta property="og:url" content={`https://horaservices.com/balloon-decoration/${catValue}/product/${product.name}`} />
        <meta property="og:type" content="website" />
      </Head>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "10px", position: "relative" }} className="decDetails">
          <div style={{ width: "50%", textAlign: "center" }} className="decDetailsLeft">
         


            <div style={{ width: "80%", boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", margin: "0 auto", position: "relative" }} className="decDetailsImage">
              <Image src={`https://horaservices.com/api/uploads/${product.featured_image}`} alt={`balloon decoration ${altTagCatValue} ${product.name} ${product.price}`} style={{ width: "100%", height: "auto" }} width={300} height={300} />
              <div style={{ position: "absolute", bottom: 3, right: 3, borderRadius: "50%", padding: 10 }}>
                        <span style={{ color: "rgba(157, 74, 147, 0.6)", fontWeight: "600" }}>
                        <Image src={logo} style={{ width:"70px" , height:"80px"}} className="hora-watermark-image"/>  
                        </span>
                      </div>
              </div>
          </div>
          <div style={{ width: "50%", paddingLeft: "20px", paddingRight: "50px" }} className="decDetailsRight">
            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px", backgroundColor: "#fff" }}>
              <h2 style={{ fontSize: "12px", color: "#9252AA" }}>{'Home'}{' > '}{subCategory}{' > '}{product.name}</h2>
              <h1 style={{ fontSize: "16px", color: "#222", fontSize: "21px", fontWeight: "#222" }}>{product.name}</h1>
              {/* <h1>sohan {city}</h1> */}
              <p className='mb-2' style={{ fontSize: "18px", color: "#9252AA", fontWeight: "600" }}> ₹ {product.price}</p>
              {/* <div className="d-flex align-items-center pro-rating-sec">
              <p className="m-0 p-0 pe-3 pro-rating-sec1" style={{ fontWeight: '500', fontSize: 17, margin: "0px", color:"#9252AA" }}>{getRandomRating()}<span className='px-1 m-0 py-0 img-fluid' style={{ color: '#FFBF00' }}><FontAwesomeIcon style={{ margin: 0 }} icon={faStar} /></span></p>
              <p className="m-0 p-0" style={{ color: '#9252AA', fontWeight: '500', fontSize: 17, margin: "0px", padding: "0 0 0 10px" }}>({getRandomNumber(20, 500)})</p>
            </div> */}
            </div>

            <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px", backgroundColor: "#fff" }}>
              {getItemInclusion(product.inclusion)}
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
            {isMobile && <FAQSection faqData={faqData} />}
          </div>
        </div>
      </div>

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
