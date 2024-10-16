import React, { useState, useEffect } from "react";
import Head from 'next/head';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM } from '../../utils/apiconstants';
import { getDecorationOrganizationSchema } from '../../utils/schema';
import { setState } from '../../actions/action';
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from '../../assets/new_logo_light.png.png';
import { useDispatch } from "react-redux";
import '../../css/decoration.css';
import '../../components/DecorationLandingSlider/decorationladingslider.css';
import DecorationLandingSlider from  '../../components/DecorationLandingSlider';
import HaldiImage from '../../assets/HaldiImage.png';
import MehendiImage from '../../assets/MehendiImage.png';
import BacheloretteImage from '../../assets/Bachelorette.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import decorationLandingWhatsapp from '../../assets/wahtsapp-decoration-redirection.jpeg';
import 'slick-carousel/slick/slick-theme.css';
import { sendGTMEvent  } from '@next/third-parties/google';
import dec1 from '../../assets/dec1.png';
import dec2 from '../../assets/dec3.png';


const decCat = [
    { id: '2', image: "https://horaservices.com/api/uploads/Birthday_dec_cat.webp", name: 'Birthday', subCategory: "Birthday", catValue: "birthday-decoration", imgAlt: "A Gorgeous Candy Birthday Decoration Surprise!" },
    { id: '3', image: "https://horaservices.com/api/uploads/first_night_cat_dec.webp", name: 'First Night', subCategory: "FirstNight", catValue: "first-night-decoration", imgAlt: "Add extra happiness quotient to your wedding night with our exclusive décor package" },
    { id: '4', image: "https://horaservices.com/api/uploads/aniversary_Cat_Dec.webp", name: 'Anniversary', subCategory: "Anniversary", catValue: "anniversary-decoration", imgAlt: "Immerse yourself in a world of romance with our mesmerizing anniversary decorations." },
    { id: '5', image: "https://horaservices.com/api/uploads/kids_birthday_decoration.webp", name: 'Kids Birthday', subCategory: "KidsBirthday", catValue: "kids-birthday-decoration", imgAlt: "Flutter into a world of whimsy with our exclusive Whimsical Flutter-themed Welcome Baby Decorations." },
    { id: '6', image: "https://horaservices.com/api/uploads/baby-shower-dec-cat.webp", name: 'Baby Shower', subCategory: "BabyShower", catValue: "baby-shower-decoration", imgAlt: "Celebrate the transformation into motherhood with Our Gilded Baby Shower Decorations." },
    { id: '7', image: "https://horaservices.com/api/uploads/welcome_baby_dec.webp", name: 'Welcome Baby', subCategory: "WelcomeBaby", catValue: "welcome-baby-decoration", imgAlt: "A Pastel Theme Oh Baby Decor for your Baby Shower Celebrations!" },
    { id: '8', image: "https://horaservices.com/api/uploads/preminumdecor.webp	", name: 'premium Decoration', subCategory: "PremiumDecoration", catValue: "premium-decoration", imgAlt: "Birthday party decoration ideas for adults" },
    { id: '9', image: "https://horaservices.com/api/uploads/Balloon-B-new.webp", name: 'Ballon Bouquets', subCategory: "BallonBouquets", catValue: "balloon-bouquets-decoration", imgAlt: "Balloon Bouquet" },
    {id: '10', Image: "", name: "Haldi Event", subCategory: "Haldi-Mehandi", catValue: "haldi-mehendi-decoration", imgAlt: "Haldi Event"},  
    {id: '11', Image: "", name: "Mehendi Event", subCategory: "Haldi-Mehandi", catValue: "haldi-mehendi-decoration", imgAlt: "Mehendi Event"},
    {id: '11', Image: "", name: "Bachelorette Decoration", subCategory: "bachelorette", catValue: "bachelorette-decoration", imgAlt: "Bachelorette"},
    {id: '11', Image: "", name: "proposal decorations", subCategory: "Proposal-Decoration", catValue: "Proposal-Decorations", imgAlt: "proposal decorations"},
  
];

const Decoration = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    // const navigate = useNavigate();
    const schemaOrg = getDecorationOrganizationSchema();
    const scriptTag = JSON.stringify(schemaOrg);
    let { city } = useParams();
    const hasCityPageParam = city ? true : false;


    const openCatItems = (item) => {
     // sendGTMEvent('event', 'titleClicked', { value: `/balloon-decoration/${item.catValue}` });
        dispatch(setState(item.subCategory, item.imgAlt));
        if (hasCityPageParam) {
            router.push(`/${city}/balloon-decoration/${item.catValue}`);
        }
        else {
            router.push(`/balloon-decoration/${item.catValue}`);
        }
    };

   const openWahtsappRedirection = (catTitle) =>{
    window.open('https://wa.me/917338584828?text=Hello%20I%20have%20seen%20decoration%20design%20on%20your%20website.%20Please%20help%20me%20for%20more%20customization%20and%20more%20details.', '_blank');
   }

    const handleViewMore = (category) => {
        const categoryItem = decCat.find(cat => cat.subCategory === category);
        console.log('Category Item:', categoryItem); 
        if (categoryItem) {
            openCatItems(categoryItem);
        } else {
            console.log('No matching category item found.');
        }
    };

    const birthdayData = [
      {
        Image: 'https://horaservices.com/api/uploads/attachment-1705585784757.png',
        title: 'Blushing Celebration Birthday Decor',
        price: '₹1782',
        rating: 4.7,
        link:"/balloon-decoration/birthday-decoration/product/Blushing-Celebration-Birthday-Decor",
      },
      {
      Image: 'https://horaservices.com/api/uploads/attachment-1711727911194.png',
      title: 'Delightful White & Golden Decoration',
      price: '₹5022',
      rating: 4.6,
      link:"/balloon-decoration/birthday-decoration/product/Delightful-White-&-Golden-Decoration",
      },
      {
        Image: 'https://horaservices.com/api/uploads/attachment-1725181762865.png',
        title: 'Maroon White Birthday Decor',
        price: '₹2624',
        rating: 4.1,
        link:"/balloon-decoration/birthday-decoration/product/Maroon-White-Birthday-Decor",
      },
      {
        Image: 'https://horaservices.com/api/uploads/attachment-1711568028341.png',
        title: 'Birthday Party at Home Black & White',
        price: '₹2159',
        rating: 4.4,
        link:"/balloon-decoration/birthday-decoration/product/Birthday-Party-at-Home-Black-&-White",
      },
      {
        Image: 'https://horaservices.com/api/uploads/attachment-1706520980436.png',
        title: 'Classic Attractive Decoration',
        price: '₹7019',
        rating: 4.7,
        link:"/balloon-decoration/birthday-decoration/product/Classic-Attractive-Decoration",
      },
      // {
      //   Image: 'https://horaservices.com/api/uploads/attachment-1725541669342.png',
      //   title: 'Purple Pink n Gold Shimmer Decor',
      //   price: '₹7290',
      //   rating: 4.8,
      //   link:"/balloon-decoration/birthday-decoration/product/Purple-Pink-n-Gold-Shimmer-Decor",
      // },
      {
        Image: 'https://horaservices.com/api/uploads/wahtsapp-decoration-redirection.jpeg',
        title: '',
        price: '',
        rating: '',
        link:"/balloon-decoration/kids-birthday-decoration/product/Mermaid-Sea-Shell-Shore-Decor",
        isViewMore:true,
      },
    ];
    
    
    const firstNightData = [
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1712942470417.png',
          title: 'Bed Decor With Love Moment',
          price: '₹2592',
          rating: 4.5,
          link:"/balloon-decoration/first-night-decoration/product/Bed-Decor-With-Love-Moment-",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1713196298004.png',
          title: 'Heart Room With Decor Rose Petal',
          price: '₹6159',
          rating: 4.5,
          link:"/balloon-decoration/first-night-decoration/product/Heart-Room-With-Decor-Rose-Petal--",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1713195839177.png',
          title: 'First Night With Rose Decoration',
          price: '₹1696',
          rating: 4.5,
          link:"/balloon-decoration/first-night-decoration/product/First-Night-With-Rose-Decoration",
        },

        // {
        //   Image: '',  // No image for this slide
        //   title: 'View more from First Night Decorations',
        //   price: '',  // No price
        //   rating: '',  // No rating
        //   link: "/balloon-decoration/first-night-decoration",  // Link to the full section
        //   isViewMore: true  // Flag to indicate it's a "View more" slide
        // },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1706470671060.png',
          title: 'Romantic Wedding Room Decor',
          price: '₹1738',
          rating: 4.3,
          link:"/balloon-decoration/first-night-decoration/product/Romantic-Wedding-Room-Decor",
        },
      
      ];
    
    
      const haldiAndMehndiData = [
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1723290555708.png',
          title: 'Haldi Decoration Ring Look',
          price: '₹15206',
          rating: 4.6,
          link:"/balloon-decoration/haldi-mehendi-decoration/product/Haldi-Decoration-Ring-Look",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1722693437219.png',
          title: 'Mehendi Decoration Green Style',
          price: '₹14580',
          rating: 4.6,
          link:"/balloon-decoration/haldi-mehendi-decoration/product/Mehendi-Decoration-Green-Style",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1723209813542.png',
          title: 'Mehendi Decoration Look Yellow',
          price: '₹7128',
          rating: 4.6,
          link:"/balloon-decoration/haldi-mehendi-decoration/product/Mehendi-Decoration-Look-Yellow",
        },
        // {
        //   Image: '',  // No image for this slide
        //   title: 'View more from Haldi Mehandi Decorations',
        //   price: '',  // No price
        //   rating: '',  // No rating
        //   link: "/balloon-decoration/haldi-mehendi-decoration ",  // Link to the full section
        //   isViewMore: true  // Flag to indicate it's a "View more" slide
        // },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1723290772620.png',
          title: 'Haldi Decoration Stage',
          price: '₹15034',
          rating: 4.3,
          link:"/balloon-decoration/haldi-mehendi-decoration/product/Haldi-Decoration-Stage",
        },
      ];
    
    
      const AnniversaryData = [
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1706461267921.png',
          title: 'Lavender Rose Extravaganza Anniversary Decor',
          price: '₹3239',
          rating: 4.6,
          link:"/balloon-decoration/anniversary-decoration/product/Lavender-Rose-Extravaganza-Anniversary-Decor",
        },
       {
          Image: 'https://horaservices.com/api/uploads/attachment-1706460114319.png',
          title: 'White & Gold Enchantment Anniversary Decoration',
          price: '₹2699',
          rating: 4.2,
          link:"/balloon-decoration/anniversary-decoration/product/White-&-Gold-Enchantment-Anniversary-Decoration",
        },
       {
          Image: 'https://horaservices.com/api/uploads/attachment-1713965416898.png',
          title: 'Anniversary Decoration With Ring Shape',
          price: '₹4590',
          rating: 4.5,
          link:"/balloon-decoration/anniversary-decoration/product/Anniversary-Decoration-With-Ring-Shape",
        },
       {
          Image: 'https://horaservices.com/api/uploads/attachment-1725953653670.png',
          title: 'Rose and Gold Heaven Balloon Decor',
          price: '₹9018',
          rating: 4.5,
          link:"/balloon-decoration/anniversary-decoration/product/Rose-and-Gold-Heaven-Balloon-Decor",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1713189291302.png',
          title: 'Bed Decoration For First Night',
          price: '₹3067',
          rating: 4.0,
          link:"/balloon-decoration/anniversary-decoration/product/Bed-Decoration-For-First-Night",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1718046543520.png',
          title: 'Floral Anniversary Decor',
          price: '₹4400',
          rating: 4.5,
          link:"/balloon-decoration/anniversary-decoration/product/Floral-Anniversary-Decor",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1725951536862.png',
          title: 'Golden n White Petals Balloon decor',
          price: '₹2870',
          rating: 4.8,
          link:"/balloon-decoration/anniversary-decoration/product/Golden-n-White-Petals-Balloon-decor",
        },
        {
          Image: 'https://horaservices.com/api/uploads/wahtsapp-decoration-redirection.jpeg',
          title: '',
          price: '',
          rating: '',
          link:"/balloon-decoration/kids-birthday-decoration/product/Mermaid-Sea-Shell-Shore-Decor",
          isViewMore:true,
        },
     
      ];

      const bacheloretteData = [
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1724160189321.png',
          title: 'Pastel Bride to be Decoration',
          price: '₹2560',
          rating: 4.7,
          link:"/balloon-decoration/bachelorette-decoration/product/Pastel-Bride-to-be-Decoration",
        },
  {
          Image: 'https://horaservices.com/api/uploads/attachment-1724162849757.png',
          title: 'Classy Bachelorette Wall',
          price: '₹2020',
          rating: 4.0,
          link:"/balloon-decoration/bachelorette-decoration/product/Classy-Bachelorette-Wall",
        },
  
  {
          Image: 'https://horaservices.com/api/uploads/attachment-1724161735052.png',
          title: 'Bachelorette Ring Backdrop',
          price: '₹3834',
          rating: 4.0,
          link:"/balloon-decoration/bachelorette-decoration/product/Bachelorette-Ring-Backdrop",
        },
  {
          Image: 'https://horaservices.com/api/uploads/attachment-1724415811393.png',
          title: 'Bride to be Balloon Arch',
          price: '₹2581',
          rating: 4.0,
          link:"/balloon-decoration/bachelorette-decoration/product/Bride-to-be-Balloon-Arch",
        },
  ];

      const KidsBirthdayData = [
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1705948416594.png',
          title: 'Minnie Mouse Theme Decoration',
          price: '₹1673',
          rating: 4.5,
          link:"/balloon-decoration/kids-birthday-decoration/product/Minnie-Mouse-Theme-Decoration",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1713198322285.png',
          title: 'Cocomelon Theme For Birthday Kids',
          price: '₹2483',
          rating: 4.5,
          link:"/balloon-decoration/kids-birthday-decoration/product/Cocomelon-Theme-For-Birthday-Kids",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1706464928126.png',
          title: 'Mickey Ring Birthday Decoration',
          price: '₹2915',
          rating: 4.6,
          link:"/balloon-decoration/kids-birthday-decoration/product/Mickey-Ring-Birthday-Decoration",
        },
       {
          Image: 'https://horaservices.com/api/uploads/attachment-1711527333610.png',
          title: 'Cocomelon theme With Shining Balloons',
          price: '₹7096',
          rating: 4.4,
          link:"/balloon-decoration/kids-birthday-decoration/product/Cocomelon-theme-With-Shining-Balloons",
        },
       {
          Image: 'https://horaservices.com/api/uploads/attachment-1711535459259.png',
          title: 'Mermaid Theme Birthday Ring Decor',
          price: '₹6479',
          rating: 4.3,
          link:"/balloon-decoration/kids-birthday-decoration/product/Mermaid-Theme-Birthday-Ring-Decor",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1726057785648.png',
          title: 'Mermaid Sea Shell Shore Decor',
          price: '₹2117',
          rating: 4.4,
          link:"/balloon-decoration/kids-birthday-decoration/product/Mermaid-Sea-Shell-Shore-Decor",
        },
        {
          Image: 'https://horaservices.com/api/uploads/wahtsapp-decoration-redirection.jpeg',
          title: '',
          price: '',
          rating: '',
          link:"/balloon-decoration/kids-birthday-decoration/product/Mermaid-Sea-Shell-Shore-Decor",
          isViewMore:true,
        },
        ];
      

      
        const BabyShowerData= [
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1713010630004.png',
            title: 'Oh Baby Decor With Baby Feet',
            price: '₹3240',
            rating: 4.2,
            link:"/balloon-decoration/baby-shower-decoration/product/Oh-Baby-Decor-With-Baby-Feet",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1705598937315.png',
            title: 'Golden, Pink and Blue Baby Shower',
            price: '₹2483',
            rating: 4.5,
            link:"/balloon-decoration/baby-shower-decoration/product/Golden,-Pink-and-Blue-Baby-Shower",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1711536118870.png',
            title: 'Rosy Whispers Baby Shower',
            price: '₹6610',
            rating: 4.2,
            link:"/balloon-decoration/baby-shower-decoration/product/Rosy-Whispers-Baby-Shower",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1713379165376.png',
            title: 'Oh Baby With Green Decoration',
            price: '₹6772',
            rating: 4.8,
            link:"/balloon-decoration/baby-shower-decoration/product/Oh-Baby-With-Green-Decoration",
          },
          {
            Image: 'https://horaservices.com/api/uploads/wahtsapp-decoration-redirection.jpeg',
            title: '',
            price: '',
            rating: '',
            link:"/balloon-decoration/kids-birthday-decoration/product/Mermaid-Sea-Shell-Shore-Decor",
            isViewMore:true,
          },
          // {
          //   Image: 'https://horaservices.com/api/uploads/attachment-1726062561916.png',
          //   title: 'Teddys wonderLand pink deocr',
          //   price: '₹6329',
          //   rating: 4.5,
          //   link:"/balloon-decoration/baby-shower-decoration/product/Teddy%27s-Wonderland-Pink-Decor",
          // },
          
        ];
      
        const WelcomebabyData= [
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1713382130916.png',
            title: 'Welcome Baby By Teddy Theme',
            price: '₹4482',
            rating: 4.8,
            link:"/balloon-decoration/welcome-baby-decoration/product/Welcome-Baby-By-Teddy-Theme",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1713010968590.png',
            title: 'Light Baby Decoration',
            price: '₹4050',
            rating: 4.5,
            link:"/balloon-decoration/welcome-baby-decoration/product/Light-Baby-Decoration-",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1706471168212.png',
            title: 'Pastel Theme Baby Welcome',
            price: '₹2159',
            rating: 4.7,
            link:"/balloon-decoration/welcome-baby-decoration/product/Pastel-Theme-Baby-Welcome",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1706471308375.png',
            title: 'Pink Theme Welcome Baby',
            price: '₹2236',
            rating: 4.2,
            link:"/balloon-decoration/welcome-baby-decoration/product/Pink-Theme-Welcome-Baby",
          },
          // {
          //   Image: '',  // No image for this slide
          //   title: 'View more from Welcome Baby Decorations',
          //   price: '',  // No price
          //   rating: '',  // No rating
          //   link: "/balloon-decoration/welcome-baby-decoration",  // Link to the full section
          //   isViewMore: true  // Flag to indicate it's a "View more" slide
          // },
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1711599827419.png',
            title: 'Golden & Pink Theme Baby Welcome',
            price: '₹2807',
            rating: 4.8,
            link:"/balloon-decoration/welcome-baby-decoration/product/Golden-&-Pink-Theme-Baby-Welcome",
          },
        ];
      
        const PremiumData= [
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1713005111181.png',
            title: 'Birthday Decor With Cocomelon Setup',
            price: '₹9472',
            rating: 4.4,
            link:"/balloon-decoration/premium-decoration/product/Birthday-Decor-With-Cocomelon-Setup",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1712938054361.png',
            title: 'Boy & Girl Baby Shower Theme',
            price: '₹8262',
            rating: 4.6,
            link:"/balloon-decoration/premium-decoration/product/Boy-&-Girl-Baby-Shower-Theme",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1706463835447.png',
            title: 'Multi Balloon Round Ring',
            price: '₹5044',
            rating: 4.7,
            link:"/balloon-decoration/premium-decoration/product/Multi-Balloon-Round-Ring",
          },
      
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1711528712533.png',
            title: 'Unicorn Theme Birthday Surprise',
            price: '₹7991',
            rating: 4.6,
            link:"/balloon-decoration/premium-decoration/product/Unicorn-Theme-Birthday-Surprise",
          },
           
        ];
        
        const BallonBData= [
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1705949316251.png',
            title: 'I Love You Balloon Bouquet',
            price: '₹1944',
            rating: 4.3,
            link:"/balloon-decoration/balloon-bouquets-decoration",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1705949583322.png',
            title: 'LOVE Balloon Bouquet',
            price: '₹1350',
            rating: 4.6,
            link:"/balloon-decoration/balloon-bouquets-decoration",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1711542379923.png',
            title: 'Barbie Balloon Bouquet',
            price: '₹1450',
            rating: 4.1,
            link:"/balloon-decoration/balloon-bouquets-decoration",
          },
          // {
          //   Image: '',  // No image for this slide
          //   title: 'View more from Ballon Bouquet',
          //   price: '',  // No price
          //   rating: '',  // No rating
          //   link: "/balloon-decoration/kids-birthday-decoration",  // Link to the full section
          //   isViewMore: true  // Flag to indicate it's a "View more" slide
          // },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1712305355842.png',
            title: 'Baby Shark Bouquet',
            price: '₹1420',
            rating: 4.5,
            link:"/balloon-decoration/balloon-bouquets-decoration",
          },
          
        ];


        const getDiscountedPrice = (price) => {
          // Trim and remove currency symbol
          price = parseFloat(price.replace(/[^0-9.-]+/g, '')); // Removes non-numeric characters
        
          // Check if the price is a valid number
          if (isNaN(price) || price < 0) {
              return { error: "Please enter a valid price." };
          }
        
          let discount;
        
          // Determine the discount percentage based on the item price
          if (price < 3000) {
              discount = 20; // 20% discount
          } else if (price >= 3000 && price <= 5000) {
              discount = 27; // 27% discount
          } else {
              discount = 35; // 35% discount for prices above 5000
          }
        
          const discountedPrice = price * (1 + discount / 100); // Calculate the discounted price
          const discountDifference = price - discountedPrice; // Difference in original and discounted price
        
          return  Math.floor(discountedPrice) ; // Return both discount percentage and discounted price
        };
        
        
        const getDiscountedDifference = (price) => {
          // Trim and remove currency symbol
          price = parseFloat(price.replace(/[^0-9.-]+/g, '')); // Removes non-numeric characters
        
          // Check if the price is a valid number
          if (isNaN(price) || price < 0) {
              return { error: "Please enter a valid price." };
          }
        
          let discount;
        
          // Determine the discount percentage based on the item price
          if (price < 3000) {
              discount = 20; // 20% discount
          } else if (price >= 3000 && price <= 5000) {
              discount = 27; // 27% discount
          } else {
              discount = 35; // 35% discount for prices above 5000
          }
          const discountedPrice = Math.floor(price * (1 - discount / 100)); // Calculate the discounted price and round down
          const discountDifference = Math.floor(price - discountedPrice); // Difference in original and discounted price, rounded down
        
          return  discountDifference ; // Return both discount percentage and discounted price
        };
        
        const handleSliderViewMore = (link , city) =>{
          if(city){
            router.push(`/${city}/${link}`); 
          }
          else{
            router.push(`/${link}`);
          }
        
        }


        const SliderSection = ({ title, data, handleViewMore , viewLink }) => (
        <div className="slider-container dec-grid-section">
          <div className="slider-header">
            <h2 onClick={() => handleViewMore(viewLink)} style={{ cursor: "pointer" }}>{title}</h2>
            <button className="viewbtn btn btn-primary" onClick={() => handleViewMore(viewLink)}>View More</button>
          </div>
          <div className="slider-container slider-decoration-inner decoration-item-grid">
          {data.map((item, index) => {
        if (item.isViewMore) {
        return (
        <a 
        key={index} 
        className="view-more-slide slider-item" 
        onClick={() => openWahtsappRedirection(item.title)}
        >
        <Image 
          src={item.Image} 
          alt={item.title} 
          className="slider-image" 
          width={200} 
          height={250} 
        />
        <div class="button-whatspp-decoration-cta">
          <button class="button-sec"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle icon-cta">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>Chat with Us</button>
          </div>
        </a>
        );
        } else {
        return (
        <a key={index} className="slider-item" href={item.link}>
        <div style={{ position: "relative" }}>
        <Image 
          src={item.Image} 
          alt={item.title} 
          className="slider-image" 
          width={200} 
          height={250} 
        />
        <div style={{ position: "absolute", bottom: 3, right: 3, borderRadius: "50%", padding: 10 }}>
          <span style={{ color: "rgba(157, 74, 147, 0.6)", fontWeight: "600" }}>
            <Image src={logo} style={{ width: "70px", height: "80px" }} className="hora-watermark-image" />
          </span>
        </div>
        </div>
        <div className="decorationdiscount">
        ₹{getDiscountedDifference(item.price)} {'off'}
        </div>
        <div className="slider-item-details">
        <h3>{item.title}</h3>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "top" }} className='pri_details'>
          <div style={{ display: "flex", alignItems: 'left', justifyContent: 'space-between' }} className='pro_price'>
            <p style={{ fontWeight: '700', fontSize: 15, color: '#9252AA', textAlign: "left", margin: "10px 10px 7px 0" }}>
              {item.price}
            </p>
            <p style={{ color: '#444', fontWeight: '700', fontSize: 15, textAlign: "left", margin: "10px 0px 7px", textDecoration: 'line-through' }}>
              ₹{getDiscountedPrice(item.price)}
            </p>
          </div>
        </div>
        </div>
        </a>
        );
        }
        })}

          </div>
        </div>
        );
        
     
    
    return (
        <div className="decoration-city-page-sec">
          
            <div  className="decContainerSec decPage">
    {decCat
    .filter(item => item.image) // Filter out items without images
    .map((item, index) => (
    <div key={index} className="imageContainer">
    <a href={item.link}>
    <Image
    src={item.image}
    className="decCatimage"
    alt={item.imgAlt}
    onClick={() => openCatItems(item)}
    width={300}
    height={300}
    />
    </a>

    </div>
    ))}
</div>
<div className="page-width decorationlanding-slider">


<SliderSection 
  title="Kids Birthday Decoration" 
  data={KidsBirthdayData} 
  handleViewMore={handleViewMore}  
  viewLink={'KidsBirthday'} 
/>

<SliderSection title="Birthday Decoration" data={birthdayData} handleViewMore={handleViewMore}  viewLink={'Birthday'}  />
    

<div className="slider-container">
  <div className="slider-header">
    <h2  onClick={() => handleViewMore("Haldi-Mehandi")} style={{ cursor:"pointer"}}>Haldi & Mehndi Decoration</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("Haldi-Mehandi")}
    >
    View More
    </button>
    </div>
    <div>
    <DecorationLandingSlider data={haldiAndMehndiData} category="haldi-mehandi"  />
    </div>
 
</div>
    
<SliderSection title="Baby Shower" data={BabyShowerData} handleViewMore={handleViewMore} viewLink={'BabyShower'} />

<div className="slider-container">
  <div className="slider-header">
    <h2  onClick={() => handleViewMore("FirstNight")} style={{ cursor:"pointer"}}>First Night Decoration</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("FirstNight")}
    >
    View More
    </button>
    </div>
  <div>
  <DecorationLandingSlider data={firstNightData} category="Birthday" />

  </div>
</div>

<SliderSection title="Anniversary Decoration" data={AnniversaryData} handleViewMore={handleViewMore} viewLink={'Anniversary'}/>

<div className="slider-container">
  <div className="slider-header">
    <h2  onClick={() => handleViewMore("WelcomeBaby")} style={{ cursor:"pointer"}}>Welcome baby</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("WelcomeBaby")}
    >
    View More
    </button>
    </div>
  <DecorationLandingSlider data={WelcomebabyData} category="WelcomeBaby"  />
</div>
<SliderSection title="Premium Decors" data={PremiumData} handleViewMore={handleViewMore} viewLink={'PremiumDecoration'} />
<SliderSection title="Bachelorette Decoration" data={bacheloretteData} handleViewMore={handleViewMore} viewLink={'bachelorette'} />
 
</div>
</div>
    );    
};

// Fetching the data at build time
export async function getStaticProps() {
    try {
        const catalogueData = await Promise.all(decCat.map(async (item) => {
            const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ID + item.subCategory);
            const categoryId = response.data.data._id;
            const result = await axios.get(BASE_URL + GET_DECORATION_CAT_ITEM + categoryId);
            return {
                ...item,
                data: result.data.data,
            };
        }));

        return {
            props: {
                catalogueData,
            },
        };
    } catch (error) {
        console.log("Error fetching data:", error.message);
        return {
            props: {
                catalogueData: [],
            },
        };
    }
}

export default Decoration;
