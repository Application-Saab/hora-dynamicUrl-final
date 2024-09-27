import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM, API_SUCCESS_CODE } from '../../../utils/apiconstants';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { CardSkeleton } from "../../../components/CardSkeleton";
import { getDecorationCatOrganizationSchema } from "../../../utils/schema";
import '../../../css/decoration.css';
import { setState } from '../../../actions/action';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { sendGTMEvent  } from '@next/third-parties/google';
import BabyDecoration from '../../../assets/baby_boy_kids.jpg';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const dummyItems = [
  {
    name: 'Product 1',
    discountPrice: "₹800",
    rating: 4.5,
    userCount: 120,
  }
];


const DecorationCatPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  //   let { city } = useParams();
  const [city, setCity] = useState('');
  const [catValue, setCatValue] = useState('');
  useEffect(() => {
    if (router.isReady) {
      const { catValue: queryCatValue, city: queryCity } = router.query;

      if (queryCatValue) {
        setCatValue(queryCatValue);
        //alert(`catValue: ${queryCatValue}`);
      }

      if (queryCity) {
        setCity(queryCity);
        ///alert(`city: ${queryCity}`);
      }
    }
  }, [router.isReady, router.query]);
  const altTagCatValue = catValue.replace(/-/g, ' ');
  const [orderType, setOrderType] = useState(1);
  const hasCityPageParam = city ? true : false;
  //   const { catValue } = useParams();
  const [selCat, setSelCat] = useState("");
  const [catId, setCatId] = useState("");
  const [loading, setLoading] = useState(true);
  const [catalogueData, setCatalogueData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered container index
  //   const navigate = useNavigate();
  const [priceFilter, setPriceFilter] = useState("all"); // Default: Show all
  const [themeFilter, setThemeFilter] = useState("all"); // Default: Show all
  const schemaOrg = getDecorationCatOrganizationSchema(catValue);
  const scriptTag = JSON.stringify(schemaOrg);
  const themeFilters = [
    { label: 'Select Theme', value: 'all' },
    { label: 'Astronaut space theme', value: 'Astronaut-space' },
    { label: 'Avengers theme', value: 'Avengers' },
    { label: 'Boss baby theme', value: 'Boss' },
    { label: 'Baby shark theme', value: 'shark' },
    { label: 'Barbie theme', value: 'Barbie' },
    { label: 'Cocomelon Theme', value: 'Cocomelon' },
    { label: 'Car Theme', value: 'car' },
    { label: 'Circus Theme', value: 'Circus' },
    { label: 'Dinosaur Theme', value: 'Dinosaur' },
    { label: 'Elsa Theme', value: 'Elsa' },
    { label: 'Flamingo Theme', value: 'Flamingo' },
    { label: 'Jungle Theme', value: 'Jungle' },
    { label: 'Kitty Theme', value: 'Kitty' },
    { label: 'Lion King', value: 'Lion' },
    { label: 'Mickey Mouse Theme', value: 'Mickey-Mouse' },
    { label: 'Mickey and Minnie Theme', value: 'Mickey-Minnie' },
    { label: 'Minecraft Theme', value: 'Minecraft' },
    { label: 'Mermaid Theme', value: 'Mermaid' },
    { label: 'Pokemon and Pikachu theme', value: 'Pikachu-Pokemon' },
    { label: 'Princess Theme', value: 'Princess' },
    { label: 'Panda Theme', value: 'Panda' },
    { label: 'Traffic Theme', value: 'Traffic' },
    { label: 'Super dogs theme', value: 'dogs' },
    { label: 'Super Hero theme', value: 'Hero' },
    { label: 'Sport Football theme', value: 'Football' },
    { label: 'Unicorn Theme', value: 'Unicorn' },
    {label: 'Super Hero', value: 'Hero'},
    {label: 'Flamingo', value: 'Flamingo'},
    {label: 'Sport Football', value: 'Football'},
  ];
// Set themeFilter based on query parameter when component mounts or query changes
useEffect(() => {
  if (router.isReady) {
    const theme = router.query.theme || "all";
    console.log("Setting themeFilter to:", theme); // Log the theme value
    setThemeFilter(theme);
  }
}, [router.isReady, router.query.theme]);

// Update URL whenever the themeFilter changes
useEffect(() => {
  if (themeFilter !== "all") {
    console.log("Current pathname:", router.pathname); // Log the current pathname
    console.log("Current query (before update):", router.query); // Log the current query before updating
    console.log("Updating URL with themeFilter:", themeFilter); // Log the themeFilter value
    router.push(
      {
        pathname: router.pathname, // Current page path
        query: { ...router.query, theme: themeFilter }, // Add or update the theme in the query
        
      },
      undefined,
      { shallow: true } // Prevents full page reload
    );
  }
}, [themeFilter]);



       // Save the theme filter to localStorage
       localStorage.setItem('selectedTheme12', themeFilter);
       console.log('selectedTheme12', themeFilter);
  
  function getSubCategory(catValue) {
    if (!catValue) return ''; // Handle cases where catValue is null or undefined

    if (catValue === 'birthday-decoration') {
      return 'Birthday';
    } else if (catValue === 'anniversary-decoration') {
      return 'Anniversary';
    } else {
      const parts = catValue.split('-'); // Split by hyphens
      return parts.slice(0, 2) // Take only the first two parts
        .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()) // Capitalize each part
        .join(''); // Join parts together without spaces
    }
  }

  // UseSelector to get state from Redux
  const { subCategory: stateSubCategory, imgAlt: stateImgAlt } = useSelector((state) => state.state || {});
  // Determine the value for subCategory and imgAlt
  const subCategory = stateSubCategory || getSubCategory(catValue);
  const imgAlt = stateImgAlt || 'default alt text'; // Replace with a default alt text if needed
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Function to generate a random rating between 4.1 to 4.8
  const getRandomRating = () => {
    return (Math.random() * (4.8 - 4.1) + 4.1).toFixed(1);
  };


  useEffect(() => {
    addSpaces(subCategory);
    getSubCatId(subCategory); // Fetch category ID based on the selected subcategory
    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, [subCategory]);

  const handleScroll = () => {
    const filterElement = document.querySelector('.filterdropdown');
    if (filterElement) {
      if (window.scrollY > 50) {
        filterElement.classList.add('sticky');
      } else {
        filterElement.classList.remove('sticky');
      }
    }
  };

  
  const filteredData = catalogueData.filter(item => {
    let priceCondition = true;
    let themeCondition = true;
  
    // Filter by price
    if (priceFilter === "under2000") {
      priceCondition = item.price < 2000;
    } else if (priceFilter === "2000to5000") {
      priceCondition = item.price >= 2000 && item.price <= 5000;
    } else if (priceFilter === "above5000") {
      priceCondition = item.price > 5000;
    }
  
    // Filter by theme
    if (themeFilter !== "all") {
      const formattedThemeFilter = themeFilter.toLowerCase().split('-')[0];
      const formattedItemName = item.name.toLowerCase().split('-')[0];
      themeCondition = formattedItemName.includes(formattedThemeFilter);
    }
  
    // Return true if both conditions are met
    return priceCondition && themeCondition;
  });
  
  // Apply sorting
  const sortedData = filteredData.sort((a, b) => {
    if (priceFilter === 'lowToHigh') {
      return a.price - b.price;
    } else if (priceFilter === 'highToLow') {
      return b.price - a.price;
    }
    return 0; // Default sort (no sorting)
  });
  

  function addSpaces(subCategory) {
    let result = "";
    for (let i = 0; i < subCategory.length; i++) {
      if (i !== 0 && subCategory[i] === subCategory[i].toUpperCase()) {
        result += " ";
      }
      result += subCategory[i];
    }
    setSelCat(result);
  }

  const getSubCatId = async (subCategory) => {
    try {
      const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ID + subCategory);
      const categoryId = response.data.data?._id;
      setCatId(categoryId);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const getSubCatItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ITEM + catId);
      if (response.status === API_SUCCESS_CODE) {
        const decoratedData = response.data.data.map(item => ({
          ...item,
          rating: getRandomRating(),
          userCount: getRandomNumber(20, 500)
        }));
        setCatalogueData(decoratedData);
      }
    } catch (error) {
      console.log('Error Fetching Data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // const handleViewDetails = (subCategory, catValue, product) => {
  //   const productName = product.name.replace(/ /g, "-");
  //   dispatch(setState(subCategory, orderType, catValue, product));
  //   if (hasCityPageParam) {
  //     router.push(`/${city}/balloon-decoration/${catValue}/product/${productName}`);
  //   }
  //   else {
  //     router.push(`/balloon-decoration/${catValue}/product/${productName}`);
  //   }
  // };

  const handleViewDetails = (subCategory, catValue, product, discountPrice) => {
    const productName = product.name.replace(/ /g, "-");
  
    // Construct the product data for GTM
    const productData = {
      event: 'view_item',  // Custom event name for GTM
      ecommerce: {
        items: [{
          item_name: product.name,    // Product name
          item_id: product.id,        // Product ID
          category: subCategory,      // Sub-category or main category
          category_value: catValue,   // Additional category data
          price: product.price,        // Product price (if applicable)
          discount_price: discountPrice // Add discount price to GTM data
        }]
      }
    };
  
    // Log the product data to the console for tracking/debugging
    console.log('GTM Product View Event Data:', productData);
  
    // Push the event data to the GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(productData);
  
    

    // Dispatch the state or perform your routing
    // dispatch(setState(subCategory, orderType, catValue, product));
    dispatch(setState(subCategory, orderType, catValue, {
      ...product,
      discountPrice: discountPrice
    }));
  
    if (hasCityPageParam) {
      router.push(`/${city}/balloon-decoration/${catValue}/product/${productName}`);
    } else {
      router.push(`/balloon-decoration/${catValue}/product/${productName}`);
    }
  };
  
  

  useEffect(() => {
    if (catId) {
      getSubCatItems();
    }
  }, [catId]);

  function trimText(text) {
    if (text.length > 60) {
      return text.slice(0, 60) + '...';
    }
    return text;
  }

  const PageTitle = (e) =>{
    if(catValue === "kids-birthday-decoration"){
      return "HORA Decorations : Kids' Parties Balloon & Flower Decoration Designs by Professionals Starting at ₹1199"
    }
    else if(catValue === "birthday-decoration"){
      return "HORA Decorations : Birthday Balloon & Flower Decoration Designs by Professionals Starting at ₹1199";
    }
    else if(catValue === "anniversary-decoration"){
      return "HORA Decorations :Anniversary Decorations with Balloon & Rose Petals Starting at ₹1199"
    }
    else if(catValue === "first-night-decoration"){
      return "HORA Decorations :Choose & Book Elegant First Night Decorations Starting at ₹1199"
    }
    else{
     return("HORA Decorations : Professional Balloon & Flower Decorations for Birthdays, Parties, & Weddings – Starting at ₹1199")
    }
  }

  const getPageMetaDescription = () =>{
    if(catValue === "kids-birthday-decoration"){
      return "At Hora, 🎉Explore popular themes like jungle 🌴, Cocomelon 🍉, candy 🍭, unicorn 🦄, dinosaur 🦖, superhero 🦸‍♂️, princess 👑, space 🚀, pirate 🏴‍☠, under the sea 🌊, Baby Boss 👔, Barbie 💖, and cars 🚗. Explore detailed pricing and inclusions, and let our professional team bring your chosen design to life. Book your perfect party decor today! 🎈✨"
    }
    else if(catValue === "birthday-decoration"){
      return "At Hora, 🎈 Explore our wide range of balloon and flower decorations for birthday parties, featuring ring, sequin, wall, and room designs. Discover pricing and inclusions for every balloon color and variety. Customise your celebration and make it unforgettable with our stunning decor. Book your perfect party setup today! 🎉🌟";
    }
    else if(catValue === "anniversary-decoration"){
      return "🎉 Explore top-notch anniversary decoration designs and book directly from our website 💖. Find elegant and customizable decor options for your special event. Browse our selection to choose the perfect theme and make your anniversary memorable with seamless online booking. ✨"
    }
    else if(catValue === "first-night-decoration"){
      return "🌟 Explore our selection of elegant decoration designs for your first night event 💖. Choose from a variety of styles and themes, and book your perfect decor directly through our website. Make your special night unforgettable with seamless online booking and beautiful, personalised decorations. ✨"
    }
    else{
     return("HORA Decorations : Professional Balloon & Flower Decorations for Birthdays, Parties, & Weddings – Starting at ₹1199")
    }
  }


  const data = [
    { title: "Avengers", image: "https://cheetah.cherishx.com/website_layout/Decoration-Themes-Boy's_Desktop_03-min.jpg?format=avif", link: "kids-birthday-decoration?theme=Avengers" },
    { title: "Baby Boss", image: BabyDecoration, link: "kids-birthday-decoration?theme=Boss" },
    { title: "Barbie", image: "https://cheetah.cherishx.com/website_layout/Decoration-Themes-Girl's_Desktop_08-min.jpg?format=avif", link: "kids-birthday-decoration?theme=Barbie"},
    { title: "Cocomelon", image: "https://cheetah.cherishx.com/website_layout/Decoration-Themes-Girl's_Desktop_06-min.jpg?format=avif", link: "kids-birthday-decoration?theme=Cocomelon"},
    { title: "Elsa", image: "https://cheetah.cherishx.com/website_layout/Decoration-Themes-Boy's_Desktop_21-min.jpg?format=avif", link: "kids-birthday-decoration?theme=Elsa" },
    { title: "Car", image: "https://cheetah.cherishx.com/website_layout/Decoration-Themes-Boy's_Desktop_21-min.jpg?format=avif", link: "kids-birthday-decoration?theme=Elsa" },
    { title: "Circle", image: "https://cheetah.cherishx.com/website_layout/Decoration-Themes-Boy's_Desktop_21-min.jpg?format=avif", link: "kids-birthday-decoration?theme=Elsa" },
    { title: "Jungle", image: "https://cheetah.cherishx.com/website_layout/Decoration-Themes-Boy's_Desktop_21-min.jpg?format=avif", link: "kids-birthday-decoration?theme=Elsa" },
    { title: "Kitty", image: "https://cheetah.cherishx.com/website_layout/Decoration-Themes-Boy's_Desktop_21-min.jpg?format=avif", link: "kids-birthday-decoration?theme=Elsa" },
    { title: "Mickey", image: "https://cheetah.cherishx.com/website_layout/Decoration-Themes-Boy's_Desktop_21-min.jpg?format=avif", link: "kids-birthday-decoration?theme=Elsa" },
    { title: "Sport", image: "https://cheetah.cherishx.com/website_layout/Decoration-Themes-Boy's_Desktop_21-min.jpg?format=avif", link: "kids-birthday-decoration?theme=Elsa" }
  ];

    // State to manage the number of visible items
  const [visibleItems, setVisibleItems] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to show more or fewer items
  const toggleItems = () => {
    if (isExpanded) {
      setVisibleItems(5);  // Reset to 5 items
    } else {
      setVisibleItems(data.length);  // Show all items
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ backgroundColor: "#EDEDED" }} className="decCatPage">
      <Head>
        <title>{PageTitle(catValue)}</title>
        <meta name="description" content={getPageMetaDescription()} />
        <meta name="keywords" content="Balloon and Flower Decoration @999" />
        <meta property="og:title" content="Balloon and Flower Decoration by Professional Decorators" />
        <meta property="og:description" content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
        <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png" />
        <script type="application/ld+json">{scriptTag}</script>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Hora Services" />
        <meta property="og:url" content={`https://horaservices.com/balloon-decoration/${catValue}`} />
        <meta property="og:type" content="website" />
      </Head>
      <>
        <div style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
          <div style={{ marginTop: "0px" }}>
            <h1 style={{ fontSize: "16px", color: "#000", padding: "14px 0 0", color: '#9252AA' }}>{selCat} {'Balloon Decoration'} </h1>
            <p style={{ padding: "0px 0px 16px", margin: "0px" }} className="subheading">{trimText('Balloon Decoration and Room Decoration Services for Anniversary, Birthdays, Kids Parties, Baby Showers and more!')}</p>
            <div className="filterdropdown d-flex flex-row flex-lg-row align-items-center justify-content-center gap-3">
  <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}
    style={{ fontSize: "16px", color: 'rgb(157, 74, 147)', padding: "7px 10px", borderWidth: 1, borderColor: "rgb(157, 74, 147)", borderRadius: "5px", marginLeft: "5px" }}>
    <option value="all">Sort By: Price</option>
    <option value="lowToHigh">Price: Low to High</option>
    <option value="highToLow">Price: High to Low</option>
    <option value="under2000">Under ₹ 2000</option>
    <option value="2000to5000">₹ 2000 - ₹ 5000</option>
    <option value="above5000">Above ₹ 5000</option>
   
  </select>

  {/* Theme filter */}
  {selCat === "Kids Birthday" ? (
    <select value={themeFilter} onChange={(e) => setThemeFilter(e.target.value)}
      style={{ fontSize: "16px", color: 'rgb(157, 74, 147)', padding: "7px 10px", borderWidth: 1, borderColor: "rgb(157, 74, 147)", borderRadius: "5px", marginLeft: "5px" }}>
      {themeFilters.map((filter) => (
        <option key={filter.value} value={filter.value}>{filter.label}</option>
      ))}
    </select>
  ) : null}
</div>

<div className="themes-container">
  <h1 className="page-title">Decoration Themes</h1>
  <div className="themes-grid">
    {data.map((item, index) => ( // Removed visibleItems to show all items
      <div key={index} className="theme-item">
        <a href={item.link} className="theme-link">
          <h3 className="theme-title">{item.title}</h3>
        </a>
      </div>
    ))}
  </div>
</div>


{/* 
<div className="themes-container">
      <h1 className="page-title">Decoration Themes</h1>
      <div className="themes-grid">
        {data.map((item, index) => (
          <div key={index} className="theme-item">
             <a href={item.link}>
            <Image src={item.image} alt={item.title} className="theme-image"  
             width={200}  // Add the desired width
             height={200} // Add the desired height
             />
             </a>
            <h3 className="theme-title">{item.title}</h3>
          </div>
        ))}
      </div>
    
      
    </div> */}
    


          </div>
        </div>
        
        <div style={styles.decContainer} className="decContainer">
          {loading ? ([1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div className="decimagecontainer" key={index} style={styles.imageContainer}>
              <CardSkeleton />
            </div>
          ))) :
            (
              (sortedData.length > 0) ? (
                sortedData.map((item, index) => (
                  <div
                    key={item._id}
                    style={{
                      ...styles.imageContainer,
                      cursor: "pointer",
                      ...(hoveredIndex === index && styles.zoomedContainer) // Apply zoom effect when hovered
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleViewDetails(subCategory, catValue, item)}
                    className="decimagecontainer"
                  >
                    <div style={{ position: "relative" }}>
                      <Image src={`https://horaservices.com/api/uploads/${item?.featured_image}`} alt={`balloon decoration ${altTagCatValue} ${item.name} ${item.price}`} style={styles.decCatimage} width={300} height={300} />
                      {/* Watermark */}
                      <div style={{ position: "absolute", bottom: 20, right: 20, borderRadius: "50%", padding: 10 }}>
                        <span style={{ color: "rgba(157, 74, 147, 0.6)", fontWeight: "600" }}>Hora</span>
                      </div>
                    </div>
                    {/* End of Watermark */}
                    {/* <div className='px-2 py-2'>
                      <p
                        style={{
                          marginHorizontal: 3,
                          textAlign: 'left',
                          fontWeight: '600',
                          fontSize: "16px",
                          marginTop: "4px",
                          color: '#9252AA',

                          lineHeight: "18px",
                          marginBottom: "0px",
                          textAlign: "left",
                        }}
                        className="pro_name"
                      >
                        {console.log(item.name)}
                        {item.name}
                        
                      </p>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "top" }} className="pri_details">
                        <div style={{ flexDirection: 'row', alignItems: 'left', justifyContent: 'space-between' }} className="pro_price">
                          <p style={{
                            color: '#9252AA',
                            fontWeight: '700',
                            fontSize: 17,
                            textAlign: "left",
                            margin: "10px 0px 7px",
                          }}
                            className="pro_price"
                          > ₹ {item.price}</p>
                        </div>
                        <div className="d-flex align-items-center rating-sec">
                          <p className="m-0 p-0" style={{ fontWeight: '500', fontSize: 17, margin: "0px", color: '#9252AA' }}>{item.rating}<span className='px-1 m-0 py-0 img-fluid' style={{ color: '#ffc107' }}><FontAwesomeIcon style={{ margin: 0, height: "14px" }} icon={faStar} /></span></p>
                          <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 17, margin: "0px", padding: "0 0 0 2px" }}>({item.userCount})</p>
                        </div>
                      </div>
                    </div> */}


<div>
  {dummyItems.map((items, index) => {
    const originalPrice = parseFloat(item.price.replace('₹', '').replace(',', ''));
    console.log(originalPrice, "originalPrice");
    const discountPrice = items.discountPrice ? parseFloat(items.discountPrice.replace('₹', '').replace(',', '')) : null;
    console.log(discountPrice, "discountPrice");
    const discountPercentage = discountPrice ? Math.round(((originalPrice - discountPrice) / originalPrice) * 100) : null;
    console.log(discountPercentage, "discountPercentage");

    return (
      <div key={index} className='px-2 py-2'>
        <p
          className="pro_name"
          style={{
            marginHorizontal: 3,
            textAlign: 'left',
            fontWeight: '600',
            fontSize: "16px",
            marginTop: "4px",
            color: '#9252AA',
            lineHeight: "18px",
            marginBottom: "0px",
          }}
        >
          {item.name}
        </p>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }} className="pri_details">
          <div style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }} className="pro_price">
            <div>
              {items.discountPrice ? (
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <p style={{
                    color: '#87A2FF',
                    fontWeight: '700',
                    fontSize: 15,
                    textAlign: "left",
                    margin: "10px 5px 7px 0px",
                    textDecoration: "line-through", // Strikethrough for original price
                  }}>
                    ₹ {item.price} 
                  </p>
                  <p style={{
                    color: '#9252AA', 
                    fontWeight: '700',
                    fontSize: 15,
                    textAlign: "left",
                    margin: "10px 0px 7px",
                  }}>
                    {items.discountPrice}
                  </p>
                  {/* Display discount percentage */}
                  <p style={{
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 13,
                    textAlign: "left",
                    marginLeft: "8px",
                    marginTop: "18px",
                  }}>
                    🔻 {discountPercentage}%
                  </p>
                </div>
              ) : (
                <p style={{
                  color: '#9252AA',
                  fontWeight: '700',
                  fontSize: 17,
                  textAlign: "left",
                  margin: "10px 0px 7px",
                }}>
                  ₹ {items.price}
                </p>
              )}
            </div>
          </div>
          <div style={{ marginTop: "15px" }} className="d-flex align-items-center rating-sec">
            <p className="m-0 p-0" style={{fontWeight: '500', fontSize: 15, margin: "0px", color: '#9252AA' }}>
              {items.rating}
              <span className='px-1 m-0 py-0 img-fluid' style={{ color: '#ffc107' }}>
                <FontAwesomeIcon style={{ margin: 0, height: "14px" }} icon={faStar} />
              </span>
            </p>
            <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 15, margin: "0px", padding: "0 0 0 2px" }}>
              ({items.userCount})
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>



                  </div>
                ))
              ) : (
                <div style={{ textAlign: "center", width: "100%", padding: "20px 0" }}>
                  <span>Reach out to our support team for this</span>
                  <span style={{ marginLeft: "10px" }}>
                    <Link className="conactus" href="https://wa.me/+917338584828/?text=Hi%2CI%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20the%20services" target="_blank">Click here</Link>
                  </span>
                </div>
              )
            )
          }
          {/* <div>
          {
          filteredData.map((item, index) => (
          <url key={index}>
          <loc>
          {`https://horaservices.com/balloon-decoration/${catValue}/product/${item.name.replace(/ /g, "-")}`}
          </loc>
          <priority>1.00</priority>
          </url>
          ))
          }
          </div> */}
        </div>
      </>
    </div>
  );
}

const styles = {
  decContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    display: "inline-flex",
    flexWrap: "wrap",
  },
  decCatimage: {
    width: "100%",
    height: "300px",
    borderRadius: "5px",
    objectFit: "cover",
  },
  imageContainer: {
    position: "relative",
    width: '270px',
    backgroundColor: "#fff",
    marginBottom: 40,
    boxShadow: "0 6px 16px 0 rgba(0,0,0,.14)",
    borderRadius: "5px",
    overflow: "hidden", // Ensure the image stays within the container
    transition: "transform 0.3s ease-in-out", // Smooth transition effect for zoom
    margin: "10px 12px 20px",
    padding: "6px 5px 10px",
  },
  zoomedContainer: {
    transform: "scale(1.1)", // Scale the container by 10% on hover
  },
  itemName: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "500",
    color: "#444",
    padding: "10px",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    fontSize: "17px",
    fontWeight: "500",
    color: "#444",
    margin: "0",
  },
};

export default DecorationCatPage;