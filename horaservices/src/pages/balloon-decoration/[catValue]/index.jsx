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

import LOGOIMAGE from "../../../assets/new_logo_light.png.png";

const dummyItems = [
  {
    name: 'Product 1',
    discountPrice: "₹800",
    rating: 4.5,
    userCount: 120,
  }
];


const birthdayCatDescription = {
  "birthday-decoration": [
    {
      "title": "The Art of Birthday Decoration - Hora Services Style!",
      "htmlContent": `<p>
      Birthdays are more than just a celebration of growing up. They are moments to stop, breathe, and take in the life you lived the past year. To reminisce, to be thankful, and most of all, to feel loved. And what better way to celebrate these auspicious new beginnings than amidst your loved ones in a place decked up like a palace!
      </p><p>We, at CherishX, have been in the business of birthday decorations for years now, and each celebration still brings a smile to our faces. To be able to make such a special occasion even more special with our unique birthday decorations is a blessing and we do not take it for granted. Over the years, we have perfected this art so that you can have Instaworthy events in the comfort of your homes.</p>
      <p>We aim to make sure you can enjoy these special moments to the fullest without any stress. So leave the planning and decorating to us as we liven up your event. We are here to provide experiences that, and it is a promise, will last you a lifetime!</p>`
    },
    {
      "title": "Birthday Decoration at home in Delhi NCR",
      "htmlContent": `<p>One for Everyone!</p>
      <p>Every person is unique in their own way, and so should their celebrations! This is a list of tried and tested ideas for an amazing birthday bash to tickle your brain. Pick and choose to find the best combination that works for you, and make it a reality with our customisable birthday decorations!</p>
      <p>If you fancy a party where excitement knows no bounds, we are here to plan it with you!</p>`
    },
    {
      "title": "Simple Birthday Decorations",
      "htmlContent": `<p>Some folks like to have low-key lives, and we should give them what they want. For souls who do not like to complicate things, these  are simplistic, convenient, and extremely affordable.</p>
      <p>As they often say, Less is More!</p>`
    },
    {
      "title": "Aesthetic Birthday Decorations",
      "htmlContent": `<p>You can always base a birthday decoration at home around a single material that the birthday person likes. Some have an affinity for balloons while some people really dig flowers. And there are some who like the chic vibes of neon signs that make pictures futuristic! Find an aesthetic that suits your taste, be it balloon decorations or a bed of flowers, and just make the party come alive!</p>`
    },
    {
      "title": "Romantic Birthday Decorations",
      "htmlContent": `<p>Never forget, you get brownie points if you remember your partner’s birthday and you can amass even more if you plan them a surprise! Romance them off their feet with a great dining experience, or decorate their room like a floating castle, so you can make their smiles go wider than their eyes on the special day.</p>
      <p>For the love you hold for your significant other, here are some amazing birthday decorations, some for him annd of course, some for her!</p>
      <p>what's a birthday without a present! Find the perfect gift here to match the occasion!
      <a href="http://localhost:3000/balloon-decoration/" target="_blank" style="color: blue; text-decoration: underline;">understand</a></p>`
    },
    {
      "title": "Kids Birthday Decorations",
      "htmlContent": `<p>When it comes to kids, you have to make the day as special as it can be so that when they grow up and celebrate even more, they will always remember the birthdays they had in their childhood. Nothing better than making it a memory as loving as it would be nostalgic.</p>
      <p>These are some ideas for first birthdays that they might not remember but will definitely look back to in pictures. So do well!</p>
      <p>If your kid loved the Boss Baby movie or has an intense love for unicorns or simply cannot stop humming the latest Cocomelon jingle, these kids themed decorations  are just the thing for you. Greet them with a birthday celebration as wonderful as the adventures of Spider-Man and we promise, their happiness will be at an all-time high!</p>
      <p>You can also book exciting birthday activities like magic shows and tattoo parlors (temporary and safe, don’t worry!) here for a birthday as happening as the stories they tell when they are back from school!</p>`
    },
    {
      "title": "Pet-safe Decoration for Paw-fect Birthdays",
      "htmlContent": `<p>Pets are a part of the family, and every pet parent will agree with us. So don’t forget to celebrate their birthdays with a party as joyous as their smiles!</p>`
    },
    {
      "title": "Open Space Decorations",
      "htmlContent": `<p>Some celebrations should best happen under the open sky so you can feel the breeze as it flickers the candle on the cake and makes it a scene right out of the movies! So plan a party on your terrace or garden, or even the boot space of a car, the possibilities are simply endless!</p>
      <p>Remember, you can share with us the plans in your mind and our team of experts will try their best to make it happen for a spectacular birthday celebration!</p>`
    },
    {
      "title": "Where Can You Find Us?",
      "htmlContent": `<p>CherishX is available online at all times and at our headquarters during office hours in Delhi. Our services extend all over India in every major state and city like
      Delhi NCR, Mumbai, Bangalore, Hyderabad, and more. So you can be planning an event in Delhi NCR and we will be there in a jiffy.</p>
      <p>Our support team is always ready to assist you with any and every decoration need. You can contact us through calls, WhatsApp, mail, and many other social media channels.</p>
      <p>We would love to hear from you about our services and even be a part of your tags on social media.</p>
      <p>Also, feel free to find out the services available in Delhi NCR on our website by simply navigating to it in the location section. Our team of experts are available PAN - India so you can be in Jammu or Chennai or Kolkata , we will be there with our best foot forward.</p>
      <p>Here’s to beautiful celebrations!</p>
      <p>Want birthday decorations at your home in Delhi NCR? Look no further than at CherishX!</p>`
    },
    {
      "title": "Why Choose Us?",
      "htmlContent": `<ul>
  <li style="font-weight:400" aria-level="1">We have an extensive catalogue of birthday decorations to choose what suits your needs.</li>
  <li style="font-weight:400" aria-level="1">Expect on-time delivery of our services always!</li>
  <li style="font-weight:400" aria-level="1">Our team of expert decorators have an experience of more than 7 years on the job.</li>
  <li style="font-weight:400" aria-level="1">Our PAN India availability means the chance of an amazing birthday party is always near you!</li>
  <li style="font-weight:400" aria-level="1">We provide not decorations, but beautiful experiences at affordable rates that you can customise to your heart’s desire.</li>
</ul>`
    },
    {
      "title": "Book Your Dates Now!",
      "htmlContent": `<p>The way forward is extremely simple!</p>
      <ol>
  <li style="font-weight:400" aria-level="1">Pick your favourite experience from the vast number of choices.</li>
  <li style="font-weight:400" aria-level="1">Set your area and date to check for availability.</li>
  <li style="font-weight:400" aria-level="1">Customise according to your wants and needs.</li>
  <li style="font-weight:400" aria-level="1">And you are done! With a press of a button, you are now promised the most beautiful of birthday celebrations.</li>
</ol>
<p>Our team will visit promptly at the desired time and set everything up, so you can relax and focus on enjoying the special day with your loved ones.</p>`
    }
  ],
  "kids-birthday-decoration": [
    {
      "title": "Trending Kids Birthday Party Decorations Other Activities",
      "htmlContent": `<p>Children bring boundless energy and a perpetual spirit of celebration wherever they go. When it comes to their birthdays, the excitement is unparalleled, making it imperative to organize a spectacular party. Recognizing the sensitivity and enthusiasm that children have for their special day, we present the Kids Birthday Party Decoration and Celebration. With this comprehensive birthday package, you can effortlessly enhance your child's birthday festivities, ensuring a truly memorable experience for them and their guests.</p>
      <p>When you think of a kids' birthday party, a plethora of ideas, vibrant colors, exciting themes, and character-infused decorations likely come to mind. It's no secret that children adore games and activities, making party entertainers a crucial element for a successful celebration. However, staying within a budget while planning such an event can be quite challenging. Enter our Kids Birthday Party Decorations Activities, designed to make the process seamless. Featuring gender-based decoration themes and a range of styles, you can explore various options. Personalize your party with engaging activities, delectable cakes, and even thoughtful return gifts – it's the ultimate package for an unforgettable celebration!</p>
      <p>We recognize that you may have additional questions, and simply presenting our perspective might not cover all your inquiries. To bridge this gap, we've conducted thorough research and assembled a comprehensive list of frequently asked questions. This compilation serves as a valuable resource to provide answers to common queries, offering clarity and making it easier for you to navigate and understand our services.</p>`
    },
    {
      "title": "How can I plan kids birthday party under budget near me?",
      "htmlContent": `<p>Organizing kids birthday party can be quite a challenge, especially when considering various factors, with budget being the foremost concern. Our Kids Birthday Party Decorations offer a thoughtfully planned and budget-friendly package, encompassing all essential elements for hosting a remarkable celebration for your little one. With a diverse range of options, from decorations to activities and even return gifts, we present a comprehensive selection at your fingertips with just one click.</p>
      <p>Themed parties play a crucial role in fostering creativity and imagination in children. By immersing them in a world filled with their favorite characters or concepts, kids are encouraged to explore their imaginations, enhancing cognitive development and problem-solving skills. The joy and excitement experienced during a kids birthday party celebration contribute to a positive and happy childhood, creating a sense of wonder and curiosity.</p>
      <p>We understand the importance of every detail in bringing a theme to life, from decorations to activities and even personalized elements. What sets us apart is our dedication to providing a hassle-free experience for parents. We, along with our party entertainers, take care of the meticulous planning, leaving you free to enjoy the celebration with your child. Our themes are not just visually appealing but are also designed to align with age-appropriate content, ensuring that the experience is both enjoyable and safe for all the young participants.</p>`
    },
    {
      "title": "Where can I find the best 6 month birthday decoration near me?",
      "htmlContent": `<p>Celebrating your baby's six-month milestone is a precious moment, and we're here to make it extraordinary! With our Sweet Donor 6 Month Birthday Decoration, we ensure your little one's celebration is filled with joy and wonder. Trust us to bring forth an atmosphere so delightful that your kid's half-birthday will radiate absolute fun and create lasting memories.</p>
      <p>At this tender age, every milestone is a significant achievement, and we understand the importance of commemorating it in a special way. Our half birthday decor is infused with elements that go beyond the ordinary, creating a magical ambiance that perfectly complements this unique occasion. From charming decorations to interactive elements, we've got everything covered to make your baby's half-birthday celebration truly memorable.</p>`
    },
    {
      "title": "Suggest some birthday party organizers for my kids birthday party decoration.",
      "htmlContent": `<p>Secure the perfect celebration for your child's birthday by booking our expert services. Our team comprises skilled and professional birthday party organizers including experienced decorators who are committed to bringing your envisioned decor to life. Take advantage of the convenience of our one-stop booking platform, where you can not only reserve exquisite decorations but also add on exciting activities, personalized e-invites, and a delectable cake. Experience the ease of having an entire celebration package at your fingertips – a delightful deal that ensures your child's special day is filled with joy and memorable moments.Where can I find good first birthday party decoration near me?</p>
      <p>At CherishX, we proudly present the finest and most adorable first birthday party decoration for baby boy and baby girl both. Our premium decorations are designed for longevity and create a picturesque aura that sets the stage for a memorable celebration. Choose from a diverse range of decoration themes, including popular characters like Boss Baby, Spiderman, Cocomelon, Mini Mouse, Barbie, and the famous Birthday Princess Theme Decoration, and many more.</p>
      <p>For those who prefer non-character-based themes, we also offer balloon decoration for 1st birthday party boy and girl both. Our meticulously designed decoration backdrops are poised to transform your space into a joyous and vibrant scene, ensuring smiles are guaranteed throughout the entire celebration. Cherish the special moments with our enchanting 1st birthday party decorations, where every detail is crafted to make your little one's milestone truly magical.</p>`
    },
    {
      "title": "Where can I get childrens birthday decorations near me?",
      "htmlContent": `<p>Experience the pinnacle of childrens birthday decorations with our theme-based offerings, promising to take your little one's celebration to new heights. From the charming Boss Baby theme to the enchanting world of unicorns, we offer a diverse array of themes to suit every preference. Our booking process is exceptionally user-friendly, organized by gender-specific themes to ensure a hassle-free experience. No complications, just seamless decoration booking for your kids birthday party.</p>
      <p>But that's not all – we go beyond decorations. If you're on the lookout for additional services like engaging kids birthday activities, personalized e-invites, or even delicious cakes, look no further. Everything you need is conveniently available on our website, just a tap away. Elevate your little one's birthday celebration effortlessly with our comprehensive services. Book the best in children's birthday decorations and create magical memories that will be cherished for years to come.</p>`
    },
    {
      "title": "What All Areas Do you Service in Pune for Kids Birthday Party Decoration Delivery?",
      "htmlContent": `<p>We cover ALL localities in  We cover ALL areas in Pune- Kothrud, Viman Nagar, Wadgaon Sheri, Kharadi, Hinjewadi, Hadapsar, Karve Nagar, Koregaon Park, Kalyani Nagar, Wagholi,Boat Club Road, Model Colony, Aundh, Erandwane, Senapati Bapat Road, Wakad, Baner, Bavdhan, Balewadi, Ravet, Sinhagad Road, Undri, Mundhwa, Viman Nagar, Amanora Park Town, Magarpatta City, Lohgaon, Keshav Nagar, Pimpri-Chinchwad, and more. </p>`
    },
    {
      "title": "What are the Major Cities where you provide the Kids Birthday Party Decoration Delivery Service?",
      "htmlContent": `<p>What are the Major Cities where you provide the Kids Birthday Party Decoration Delivery Service?</p>
      <p>Delhi</p>
      <p>Bangalore</p>
      <p>Kolkata</p>
      <p>Pune</p>
      <p>Indore</p>
      <p>Mumbai</p>
      <p>Hyderabad</p>
      <p>Jaipur</p>
      <p>Lucknow</p>`
    },
    {
      "title": "Why choose CherishX for your Kids Birthday Party decoration in Pune ?",
      "htmlContent": `<p>We empathize with your emotions! Recognizing the significance of your event, we go the extra mile to provide you with top-notch decorations, the finest gifts, and enchanting candlelight dinners. Our goal is to create an unforgettable experience for you, ensuring every detail is meticulously arranged. Explore our collection of unique kids birthday party decorations online to surprise your boyfriend, girlfriend, mother, father, wife, or husband. We are committed to ensuring both you and your loved ones are delighted and happy with our efforts!</p>
      <p>Our commitment to quality is unwavering—we consistently use fresh, premium items. However, we believe our customers are the best advocates. Feel free to peruse our reviews before booking any birthday or anniversary cakes or gift combos from our website. Their experiences will speak volumes about our dedication to delivering excellence.</p>`
    },
    {
      "title": "How do I Book Kids Birthday Party Decorations Online in Pune with CherishX?",
      "htmlContent": `<p>Follow the steps below to book with us:</p>
      <ul>
<li font-weight:="" aria-level="">Choose a Gift online according to your choice.</li>
<li font-weight:="" aria-level="">Select the date and time for the delivery.</li>
<li font-weight:="" aria-level="">Fill in the required details like your address, requirements, customizations, etc.</li>
<li font-weight:="" aria-level="">Complete the payment process.</li>
</ul>
<p>Sit back and relax – our team has everything under control, and you're all set!</p>`
    }
  ]
};

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

const [showAll, setShowAll] = useState(false); // State to track if all items should be shown

 // Toggle function to show/hide more items
 const toggleShowAll = () => {
  setShowAll((prev) => !prev);
};


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

  // const currentCategoryContent = birthdayCatDescription[catValue];
  const currentCategoryContent = birthdayCatDescription[catValue] || []; // Get content based on catValue


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
                      <div style={{ position: "absolute", bottom: 6, right: 20, borderRadius: "50%", padding: 10 }}>
                      <Image src={LOGOIMAGE} alt="Hora" style={{ width: "80px", height: "80px", opacity: 0.6 }} />

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
        

        {/* <div className="category-content">
  {currentCategoryContent ? (
    currentCategoryContent.map((item, index) => (
      <div key={index} className="category-item">
        <h1>{item.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: item.htmlContent }}></div>
      </div>
    ))
  ) : (
    <p className="no-content-message">No content available for this category.</p>
  )}
</div> */}

<div className="category-content">
      {currentCategoryContent.length > 0 ? (
        currentCategoryContent
          .slice(0, showAll ? currentCategoryContent.length : 2) // Show all if `showAll` is true, otherwise show first 2
          .map((item, index) => (
            <div key={index} className="category-item">
              <h1>{item.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: item.htmlContent }} />
            </div>
          ))
      ) : (
        <p className="no-content-message">No content available for this category.</p>
      )}
      {currentCategoryContent.length > 2 && ( // Only show button if there are more than 2 items
        <button onClick={toggleShowAll} className="toggle-btn">
          {showAll ? 'See Less' : 'See More'}
        </button>
      )}
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