import React, { useState, useEffect } from "react";
import Head from 'next/head';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM } from '../../utils/apiconstants';
import BirthdayImage from '../../assets/Birthday_dec_cat.jpeg';
import FirstnightImage from '../../assets/first_night_cat_dec.jpeg'
import AnniversaryImage from '../../assets/aniversary_Cat_Dec.jpeg'
import KidsbirthdayImage from '../../assets/kids_birthday_decoration.jpeg'
import BabyShowerImage from '../../assets/baby-shower-dec-cat.jpeg'
import WelcomebabyImage from '../../assets/welcome_baby_dec.jpeg'
import PremiumImage from '../../assets/preminumdecor.jpeg'
import BallonBImage from '../../assets/Balloon-B-new.jpeg'
import { getDecorationOrganizationSchema } from '../../utils/schema';
import { setState } from '../../actions/action';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import '../../css/decoration.css';
import '../../components/DecorationLandingSlider/decorationladingslider.css';
import DecorationLandingSlider from  '../../components/DecorationLandingSlider';
import HaldiImage from '../../assets/HaldiImage.png';
import MehendiImage from '../../assets/MehendiImage.png';
import BacheloretteImage from '../../assets/Bachelorette.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sendGTMEvent  } from '@next/third-parties/google';

import { GoogleTagManager } from '@next/third-parties/google';


const decCat = [
    { id: '2', image: BirthdayImage, name: 'Birthday', subCategory: "Birthday", catValue: "birthday-decoration", imgAlt: "A Gorgeous Candy Birthday Decoration Surprise!" },
    { id: '3', image: FirstnightImage, name: 'First Night', subCategory: "FirstNight", catValue: "first-night-decoration", imgAlt: "Add extra happiness quotient to your wedding night with our exclusive décor package" },
    { id: '4', image: AnniversaryImage, name: 'Anniversary', subCategory: "Anniversary", catValue: "anniversary-decoration", imgAlt: "Immerse yourself in a world of romance with our mesmerizing anniversary decorations." },
    { id: '5', image: KidsbirthdayImage, name: 'Kids Birthday', subCategory: "KidsBirthday", catValue: "kids-birthday-decoration", imgAlt: "Flutter into a world of whimsy with our exclusive Whimsical Flutter-themed Welcome Baby Decorations." },
    { id: '6', image: BabyShowerImage, name: 'Baby Shower', subCategory: "BabyShower", catValue: "baby-shower-decoration", imgAlt: "Celebrate the transformation into motherhood with Our Gilded Baby Shower Decorations." },
    { id: '7', image: WelcomebabyImage, name: 'Welcome Baby', subCategory: "WelcomeBaby", catValue: "welcome-baby-decoration", imgAlt: "A Pastel Theme Oh Baby Decor for your Baby Shower Celebrations!" },
    { id: '8', image: PremiumImage, name: 'premium Decoration', subCategory: "PremiumDecoration", catValue: "premium-decoration", imgAlt: "Birthday party decoration ideas for adults" },
    { id: '9', image: BallonBImage, name: 'Ballon Bouquets', subCategory: "BallonBouquets", catValue: "balloon-bouquets-decoration", imgAlt: "Balloon Bouquet" },
    {id: '10', Image: "", name: "Haldi Event", subCategory: "Haldi-Mehandi", catValue: "haldi-mehendi-decoration", imgAlt: "Haldi Event"},  
    {id: '11', Image: "", name: "Mehendi Event", subCategory: "Haldi-Mehandi", catValue: "haldi-mehendi-decoration", imgAlt: "Mehendi Event"},
    
    {id: '12', image: "", name: "Bachelorette Decoration", subCategory: "bachelorette", catValue: "bachelorette-decoration", imgAlt: "Bachelorette"},
    {id: '13', image: "", name: "proposal decorations", subCategory: "Proposal-Decoration", catValue: "Proposal-Decoration", imgAlt: "proposal decorations"},


     
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
        price: '₹1650',
        rating: 4.7,
        link:"/balloon-decoration/birthday-decoration/product/Blushing-Celebration-Birthday-Decor",
      },
      {
      Image: 'https://horaservices.com/api/uploads/attachment-1711727911194.png',
      title: 'Delightful White & Golden Decoration',
      price: '₹4650',
      rating: 4.6,
      link:"/balloon-decoration/birthday-decoration/product/Delightful-White-&-Golden-Decoration",
      },
      {
        Image: 'https://horaservices.com/api/uploads/attachment-1725181762865.png',
        title: 'Maroon White Birthday Decor',
        price: '₹3250',
        rating: 4.1,
        link:"/balloon-decoration/birthday-decoration/product/Maroon-White-Birthday-Decor",
      },
      {
        Image: 'https://horaservices.com/api/uploads/attachment-1711568028341.png',
        title: 'Birthday Party at Home Black & White',
        price: '₹1999',
        rating: 4.4,
        link:"/balloon-decoration/birthday-decoration/product/Birthday-Party-at-Home-Black-&-White",
      },
      {
        Image: 'https://horaservices.com/api/uploads/attachment-1706520980436.png',
        title: 'Classic Attractive Decoration',
        price: '₹6499',
        rating: 4.7,
        link:"/balloon-decoration/birthday-decoration/product/Classic-Attractive-Decoration",
      },
      {
        Image: 'https://horaservices.com/api/uploads/attachment-1725541669342.png',
        title: 'Purple Pink n Gold Shimmer Decor',
        price: '₹7420',
        rating: 4.8,
        link:"/balloon-decoration/birthday-decoration/product/Purple-Pink-n-Gold-Shimmer-Decor",
      },
      {
        Image: 'https://i.ibb.co/CBpdDWV/VIEW-ALL.png',
        title: 'VIEW ALL',
        price: '',
        rating: 100,
        link:"/balloon-decoration/birthday-decoration",
      },
    ];
    
    
    const firstNightData = [
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1712942470417.png',
          title: 'Bed Decor With Love Moment',
          price: '₹2400',
          rating: 4.5,
          link:"/balloon-decoration/first-night-decoration/product/Bed-Decor-With-Love-Moment-",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1713196298004.png',
          title: 'Heart Room With Decor Rose Petal',
          price: '₹5700',
          rating: 4.5,
          link:"/balloon-decoration/first-night-decoration/product/Heart-Room-With-Decor-Rose-Petal--",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1713195839177.png',
          title: 'First Night With Rose Decoration',
          price: '₹1570',
          rating: 4.5,
          link:"/balloon-decoration/first-night-decoration/product/First-Night-With-Rose-Decoration",
        },
        {
          Image: '',  // No image for this slide
          title: 'View more from First Night Decorations',
          price: '',  // No price
          rating: '',  // No rating
          link: "/balloon-decoration/kids-birthday-decoration",  // Link to the full section
          isViewMore: true  // Flag to indicate it's a "View more" slide
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1706470671060.png',
          title: 'Romantic Wedding Room Decor',
          price: '₹1600',
          rating: 4.3,
          link:"/balloon-decoration/first-night-decoration/product/Romantic-Wedding-Room-Decor",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1713178826666.png',
          title: 'First Night With Dim Light Decor',
          price: '₹1550',
          rating: 4.3,
          link:"/balloon-decoration/first-night-decoration/product/First-Night-With-Dim-Light-Decor",
        },
        {
          Image: 'https://i.ibb.co/CBpdDWV/VIEW-ALL.png',
          title: 'VIEW ALL',
          price: '',
          rating: 100,
          link:"/balloon-decoration/first-night-decoration",
        },
      
      ];
    
    
      const haldiAndMehndiData = [
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1723290555708.png',
          title: 'Haldi Decoration Ring Look',
          price: '₹14080',
          rating: 4.6,
          link:"/balloon-decoration/haldi-mehendi-decoration/product/Haldi-Decoration-Ring-Look",
        },
        {
            Image: 'https://horaservices.com/api/uploads/attachment-1723290234806.png',
          title: 'Haldi Decoration Yellow Looks',
          price: '₹8700',
          rating: 4.5,
          link:"/balloon-decoration/haldi-mehendi-decoration/product/Haldi-Decoration-Yellow-Looks",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1722693437219.png',
          title: 'Mehendi Decoration Green Style',
          price: '₹13500',
          rating: 4.6,
          link:"/balloon-decoration/haldi-mehendi-decoration/product/Mehendi-Decoration-Green-Style",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1723209813542.png',
          title: 'Mehendi Decoration Look Yellow',
          price: '₹6600',
          rating: 4.6,
          link:"/balloon-decoration/haldi-mehendi-decoration/product/Mehendi-Decoration-Look-Yellow",
        },
        {
          Image: '',  // No image for this slide
          title: 'View more from Haldi Mehandi Decorations',
          price: '',  // No price
          rating: '',  // No rating
          link: "/balloon-decoration/kids-birthday-decoration",  // Link to the full section
          isViewMore: true  // Flag to indicate it's a "View more" slide
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1723290772620.png',
          title: 'Haldi Decoration Stage',
          price: '₹13920',
          rating: 4.3,
          link:"/balloon-decoration/haldi-mehendi-decoration/product/Haldi-Decoration-Stage",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1722969101388.png',
          title: 'Mehendi Decoration Attractive Look',
          price: '₹17800',
          rating: 4.1,
          link:"/balloon-decoration/haldi-mehendi-decoration/product/Mehendi-Decoration-Attractive-Look",
        },
        {
          Image: 'https://i.ibb.co/CBpdDWV/VIEW-ALL.png',
          title: 'VIEW ALL',
          price: '',
          rating: 100,
          link:"/balloon-decoration/haldi-mehendi-decoration",
        },
      ];
    
    
      const AnniversaryData = [
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1706461267921.png',
          title: 'Lavender Rose Extravaganza Anniversary Decor',
          price: '₹2999',
          rating: 4.6,
          link:"/balloon-decoration/anniversary-decoration/product/Lavender-Rose-Extravaganza-Anniversary-Decor",
        },
       {
          Image: 'https://horaservices.com/api/uploads/attachment-1706460114319.png',
          title: 'White & Gold Enchantment Anniversary Decoration',
          price: '₹2499',
          rating: 4.2,
          link:"/balloon-decoration/anniversary-decoration/product/White-&-Gold-Enchantment-Anniversary-Decoration",
        },
       {
          Image: 'https://horaservices.com/api/uploads/attachment-1713965416898.png',
          title: 'Anniversary Decoration With Ring Shape',
          price: '₹4250',
          rating: 4.5,
          link:"/balloon-decoration/anniversary-decoration/product/Anniversary-Decoration-With-Ring-Shape",
        },
       {
          Image: 'https://horaservices.com/api/uploads/attachment-1725953653670.png',
          title: 'Rose and Gold Heaven Balloon Decor',
          price: '₹8350',
          rating: 4.5,
          link:"/balloon-decoration/anniversary-decoration/product/Rose-and-Gold-Heaven-Balloon-Decor",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1713189291302.png',
          title: 'Bed Decoration For First Night',
          price: '₹2840',
          rating: 4.0,
          link:"/balloon-decoration/anniversary-decoration/product/Bed-Decoration-For-First-Night",
        },
        // {
        //   Image: 'https://horaservices.com/api/uploads/attachment-1718046543520.png',
        //   title: 'Floral Anniversary Decor',
        //   price: '₹4400',
        //   rating: 4.5,
        //   link:"/balloon-decoration/anniversary-decoration/product/Floral-Anniversary-Decor",
        // },
        // {
        //   Image: 'https://horaservices.com/api/uploads/attachment-1725951536862.png',
        //   title: 'Golden n White Petals Balloon decor',
        //   price: '₹2870',
        //   rating: 4.8,
        //   link:"/balloon-decoration/anniversary-decoration/product/Golden-n-White-Petals-Balloon-decor",
        // },
     
      ];

      const bacheloretteData = [
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1724160189321.png',
          title: 'Pastel Bride to be Decoration',
          price: '₹2320',
          rating: 4.7,
          link:"/balloon-decoration/bachelorette-decoration/product/Pastel-Bride-to-be-Decoration",
        },
  {
          Image: 'https://horaservices.com/api/uploads/attachment-1724162849757.png',
          title: 'Classy Bachelorette Wall',
          price: '₹1870',
          rating: 4.0,
          link:"/balloon-decoration/bachelorette-decoration/product/Classy-Bachelorette-Wall",
        },
  
  {
          Image: 'https://horaservices.com/api/uploads/attachment-1724161735052.png',
          title: 'Bachelorette Ring Backdrop',
          price: '₹3550',
          rating: 4.0,
          link:"/balloon-decoration/bachelorette-decoration/product/Bachelorette-Ring-Backdrop",
        },
  {
          Image: 'https://horaservices.com/api/uploads/attachment-1724415811393.png',
          title: 'Bride to be Balloon Arch',
          price: '₹2390',
          rating: 4.0,
          link:"/balloon-decoration/bachelorette-decoration/product/Bride-to-be-Balloon-Arch",
        },
  ];

      const KidsBirthdayData = [
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1726056840221.png',
          title: 'Metallic Blue n White Glow Balloon Decor',
          price: '₹2560',
          rating: 4.5,
          link:"/balloon-decoration/kids-birthday-decoration/product/Metallic-Blue-n-White-Glow-Balloon-Decor",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1705948416594.png',
          title: 'Minnie Mouse Theme Decoration',
          price: '₹1549',
          rating: 4.5,
          link:"/balloon-decoration/kids-birthday-decoration/product/Minnie-Mouse-Theme-Decoration",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1713198322285.png',
          title: 'Cocomelon Theme For Birthday Kids',
          price: '₹2299',
          rating: 4.5,
          link:"/balloon-decoration/kids-birthday-decoration/product/Cocomelon-Theme-For-Birthday-Kids",
        },
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1706464928126.png',
            title: 'Mickey Ring Birthday Decoration',
            price: '₹2699',
            rating: 4.6,
            link:"/balloon-decoration/kids-birthday-decoration/product/Mickey-Ring-Birthday-Decoration",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1711527333610.png',
            title: 'Cocomelon theme With Shining Balloons',
            price: '₹6570',
            rating: 4.4,
            link:"/balloon-decoration/kids-birthday-decoration/product/Cocomelon-theme-With-Shining-Balloons",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1711535459259.png',
            title: 'Mermaid Theme Birthday Ring Decor',
            price: '₹5999',
            rating: 4.3,
            link:"/balloon-decoration/kids-birthday-decoration/product/Mermaid-Theme-Birthday-Ring-Decor",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1711525915897.png',
            title: '4th Birthday Cocomelon Theme Ring Decor',
            price: '₹7560',
            rating: 4.7,
            link:"/balloon-decoration/kids-birthday-decoration/product/4th-Birthday-Cocomelon-Theme-Ring-Decor",
          },
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1726057785648.png',
            title: 'Sea Shell by Sea Shore Decor',
            price: '₹2740',
            rating: 4.4,
            link:"/balloon-decoration/kids-birthday-decoration/product/Sea-Shell-by-Sea-Shore-Decor",
          },
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1713185070655.png',
            title: 'Mermaid Theme With Birthday Decor',
            price: '₹3550',
            rating: 4.8,
            link:"/balloon-decoration/kids-birthday-decoration/product/Mermaid-Theme-With-Birthday-Decor",
          },
          {
            Image: '',  // No image for this slide
            title: 'View more from Kids Birthday Decorations',
            price: '',  // No price
            rating: '',  // No rating
            link: "/balloon-decoration/kids-birthday-decoration",  // Link to the full section
            isViewMore: true  // Flag to indicate it's a "View more" slide
          },
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1706521327374.png',
            title: 'Charming Birthday Decoration',
            price: '₹1250',
            rating: 4.2,
            link:"/balloon-decoration/kids-birthday-decoration/product/Charming-Birthday-Decoration",
          },
        ];
      

        // https://drive.google.com/file/d/1zSUd5itXLDv1E4NplF5Eo6U7OYnVCArd/view?usp=sharing
      
        const BabyShowerData= [
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1713010630004.png',
            title: 'Oh Baby Decor With Baby Feet',
            price: '₹3000',
            rating: 4.2,
            link:"/balloon-decoration/baby-shower-decoration/product/Oh-Baby-Decor-With-Baby-Feet",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1705598937315.png',
            title: 'Golden, Pink and Blue Baby Shower',
            price: '₹2299',
            rating: 4.5,
            link:"/balloon-decoration/baby-shower-decoration/product/Golden,-Pink-and-Blue-Baby-Shower",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1711536118870.png',
            title: 'Rosy Whispers Baby Shower',
            price: '₹6120',
            rating: 4.2,
            link:"/balloon-decoration/baby-shower-decoration/product/Rosy-Whispers-Baby-Shower",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1713379165376.png',
            title: 'Oh Baby With Green Decoration',
            price: '₹6270',
            rating: 4.8,
            link:"/balloon-decoration/baby-shower-decoration/product/Oh-Baby-With-Green-Decoration",
          },
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1726062561916.png',
            title: 'Oh Baby With Green Decoration',
            price: '₹5860',
            rating: 4.5,
            link:"/balloon-decoration/baby-shower-decoration/product/Teddy%27s-Wonderland-Pink-Decor",
          },
        ];
      
        const WelcomebabyData= [
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1713382130916.png',
            title: 'Welcome Baby By Teddy Theme',
            price: '₹4150',
            rating: 4.8,
            link:"/balloon-decoration/welcome-baby-decoration/product/Welcome-Baby-By-Teddy-Theme",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1713010968590.png',
            title: 'Light Baby Decoration',
            price: '₹3750',
            rating: 4.5,
            link:"/balloon-decoration/welcome-baby-decoration/product/Light-Baby-Decoration-",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1706471168212.png',
            title: 'Pastel Theme Baby Welcome',
            price: '₹1999',
            rating: 4.7,
            link:"/balloon-decoration/welcome-baby-decoration/product/Pastel-Theme-Baby-Welcome",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1706471308375.png',
            title: 'Pink Theme Welcome Baby',
            price: '₹2070',
            rating: 4.2,
            link:"/balloon-decoration/welcome-baby-decoration/product/Pink-Theme-Welcome-Baby",
          },
          {
            Image: '',  // No image for this slide
            title: 'View more from Welcome Baby Decorations',
            price: '',  // No price
            rating: '',  // No rating
            link: "/balloon-decoration/kids-birthday-decoration",  // Link to the full section
            isViewMore: true  // Flag to indicate it's a "View more" slide
          },
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1711599827419.png',
            title: 'Golden & Pink Theme Baby Welcome',
            price: '₹2599',
            rating: 4.8,
            link:"/balloon-decoration/welcome-baby-decoration/product/Golden-&-Pink-Theme-Baby-Welcome",
          },
          //  {
          //   Image: 'https://i.ibb.co/CBpdDWV/VIEW-ALL.png',
          //   title: 'VIEW ALL',
          //   price: '',
          //   rating: '',
          //   link:"/balloon-decoration/welcome-baby-decoration",
          // },
        ];
      
        const PremiumData= [
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1713005111181.png',
            title: 'Birthday Decor With Cocomelon Setup',
            price: '₹8770',
            rating: 4.4,
            link:"/balloon-decoration/premium-decoration/product/Birthday-Decor-With-Cocomelon-Setup",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1712938054361.png',
            title: 'Boy & Girl Baby Shower Theme',
            price: '₹7650',
            rating: 4.6,
            link:"/balloon-decoration/premium-decoration/product/Boy-&-Girl-Baby-Shower-Theme",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1706463835447.png',
            title: 'Multi Balloon Round Ring',
            price: '₹4670',
            rating: 4.7,
            link:"/balloon-decoration/premium-decoration/product/Multi-Balloon-Round-Ring",
          },
      
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1711528712533.png',
            title: 'Unicorn Theme Birthday Surprise',
            price: '₹7399',
            rating: 4.6,
            link:"/balloon-decoration/premium-decoration/product/Unicorn-Theme-Birthday-Surprise",
          },
           
        ];
        
        const BallonBData= [
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1705949316251.png',
            title: 'I Love You Balloon Bouquet',
            price: '₹1800',
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
          {
            Image: '',  // No image for this slide
            title: 'View more from Ballon Bouquet',
            price: '',  // No price
            rating: '',  // No rating
            link: "/balloon-decoration/kids-birthday-decoration",  // Link to the full section
            isViewMore: true  // Flag to indicate it's a "View more" slide
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1712305355842.png',
            title: 'Baby Shark Bouquet',
            price: '₹1420',
            rating: 4.5,
            link:"/balloon-decoration/balloon-bouquets-decoration",
          },
          
        ];

    
    return (
        <div>
          <GoogleTagManager gtmId="GTM-K3SCKLTZ" />;
        <div className="decoration-city-page-sec">
            <Head>
                <title>HORA Decorations : Professional Balloon & Flower Decorations for Birthdays, Parties, & Weddings – Starting at ₹1199</title>
                <meta name="description" content="🎉 Explore a wide range of stunning decoration designs for every event and party, including 🎂 birthdays, 🧸 kids' parties, 💍 anniversaries, 💃 bachelorette parties, 👶 baby showers, 🍼 naming ceremonies, and 🌙 first nights. Choose your ideal design and book directly through our website for a seamless experience. Need help? Reach out to us at 7338584828 for friendly support and personalised assistance. 😊" />
                <meta name="keywords" content="Balloon and Flower Decoration @999" />
                <meta property="og:title" content="Balloon and Flower Decoration by Professional Decorators" />
                <meta property="og:description" content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
                <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png" />
                <script type="application/ld+json">{scriptTag}</script>
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Hora Services" />
                <link rel="icon" href="https://horaservices.com/api/uploads/logo-icon.png" type="image/x-icon" />
                <meta property="og:url" content="https://horaservices.com/balloon-decoration" />
                <meta property="og:type" content="website" />

                <GoogleTagManager gtmId="GTM-K3SCKLTZ" />
            
            </Head>
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
    />
    </a>

    </div>
    ))}
</div>

<div className="page-width decorationlanding-slider">
{/* <div className="slider-container">
  <div className="slider-header">
  <a  onClick={() => handleViewMore("KidsBirthday")}>
    <h2>Kids Birthday Decoration</h2>
    </a>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("KidsBirthday")}
    >
    View More
    </button>
    </div>
  <DecorationLandingSlider data={KidsBirthdayData} category="KidsBirthday"  />
</div> */}

<div className="slider-container">
  <div className="slider-header">
  <h2  onClick={() => handleViewMore("KidsBirthday")} style={{ cursor:"pointer"}}>Kids Birthday Decoration</h2>
  <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("KidsBirthday")}
    >
    View More
    </button>
    </div>
    <div>
    <DecorationLandingSlider data={KidsBirthdayData} category="KidsBirthday"  />
    </div>
 
</div>
    

<div className="slider-container ">
    <div className="slider-header">
    <h2  onClick={() => handleViewMore("Birthday")} style={{ cursor:"pointer"}}>Birthday Decoration</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("Birthday")}
    >
    View More
    </button>
    </div>
    <div className="slider-container slider-decoration-inner decoration-item-grid">
    {birthdayData.map((item, index) => (
        <a key={index} className="slider-item" href={item.link}> 
        <Image 
        src={item.Image} 
        alt={item.title} 
        className="slider-image"
        width={200}
        height={250}
        />

        <div className="slider-item-details">
        <h3>{item.title}</h3>
        <div style={{ justifyContent:"space-between" , alignItems:"center" , display:"flex" , flexDirection:"row"}}>
        <p style={{ color: "#9252AA", fontWeight: 'bold', fontSize: '17px' , margin:"0" }}>{item.price}</p>
        <p style={{ fontSize: '17px', color: 'rgb(146, 82, 170)' }}>  {/* Adjust the font size as needed */}
        {item.rating}
        <FontAwesomeIcon 
        style={{ 
        marginBottom: '2px',
        marginLeft: '8px',  /* Adjust the margin as needed */
        height: "14px", 
        color: "#ffc107" 
        }} 
        icon={faStar} 
        />
        </p>
        </div>

        </div>


        </a>
    ))}
</div>
    </div>

    <div className="slider-container">
  <div className="slider-header">
  <a  onClick={() => handleViewMore("FirstNight")}>
    <h2>First Night Decoration</h2>
    </a>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("FirstNight")}
    >
    View More
    </button>
    </div>
  <DecorationLandingSlider data={firstNightData} category="FirstNight" handleViewMore={handleViewMore} />
</div>

    <div className="slider-container">
  <div className="slider-header">
  <a  onClick={() => handleViewMore("Haldi-Mehandi")}>
    <h2>Haldi & Mehandi Decoration</h2>
    </a>
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
    
<div className="slider-container">
  <div className="slider-header">
  <a  onClick={() => handleViewMore("BabyShower")}>
    <h2>Baby Shower</h2>
    </a>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("BabyShower")}
    >
    View More
    </button>
    </div>

  <DecorationLandingSlider data={BabyShowerData} category="BabyShower" handleViewMore={handleViewMore} />
</div>


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


<div className="slider-container">
  <div className="slider-header">
    <h2  onClick={() => handleViewMore("Anniversary")} style={{ cursor:"pointer"}}>Anniversary Decoration</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("Anniversary")}
    >
    View More
    </button>
    </div>

    <div className="slider-container slider-decoration-inner decoration-item-grid">
    {AnniversaryData.map((item, index) => (
        <a key={index} className="slider-item" href={item.link}>
        <Image 
        src={item.Image} 
        alt={item.title} 
        className="slider-image"
        width={200}
        height={250}
        />

        <div className="slider-item-details">
        <h3>{item.title}</h3>
        <div style={{ justifyContent:"space-between" , alignItems:"center" , display:"flex" , flexDirection:"row"}}>
        <p style={{ color: "#9252AA", fontWeight: 'bold', fontSize: '17px' , margin:"0" }}>{item.price}</p>
        <p style={{ fontSize: '17px', color: 'rgb(146, 82, 170)' }}>  {/* Adjust the font size as needed */}
        {item.rating}
        <FontAwesomeIcon 
        style={{ 
        marginBottom: '2px',
        marginLeft: '8px',  /* Adjust the margin as needed */
        height: "14px", 
        color: "#ffc107" 
        }} 
        icon={faStar} 
        />
        </p>
        </div>
        </div>
        </a>
    ))}
</div></div>

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



<div className="slider-container">
  <div className="slider-header">
  <a  onClick={() => handleViewMore("PremiumDecoration")}>
    <h2>Premium Decors</h2>
    </a>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("PremiumDecoration")}
    >
    View More
    </button>
    </div>
  <DecorationLandingSlider data={PremiumData} category="PremiumDecoration" handleViewMore={handleViewMore} />
</div>



<div className="slider-container">
  <div className="slider-header">
    <h2 onClick={() => handleViewMore("BallonBouquets")} style={{ cursor:"pointer"}}>Balloon Bouquets</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("BallonBouquets")}
    >
    View More
    </button>
    </div>
  <DecorationLandingSlider data={BallonBData} category="BallonBouquets"  />
</div>

<div className="slider-container">
  <div className="slider-header">
    <h2  onClick={() => handleViewMore("bachelorette")} style={{ cursor:"pointer"}}>Bachelorette Decoration</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("bachelorette")}
    >
    View More
    </button>
    </div>
  <div className="slider-container slider-decoration-inner decoration-item-grid">
    {bacheloretteData.map((item, index) => (
        <a key={index} className="slider-item" href={item.link}>
        <Image 
        src={item.Image} 
        alt={item.title} 
        className="slider-image"
        width={200}
        height={250}
        />

        <div className="slider-item-details">
        <h3>{item.title}</h3>
        <div style={{ justifyContent:"space-between" , alignItems:"center" , display:"flex" , flexDirection:"row"}}>
        <p style={{ color: "#9252AA", fontWeight: 'bold', fontSize: '17px' , margin:"0" }}>{item.price}</p>
        <p style={{ fontSize: '17px', color: 'rgb(146, 82, 170)' }}>  {/* Adjust the font size as needed */}
        {item.rating}
        <FontAwesomeIcon 
        style={{ 
        marginBottom: '2px',
        marginLeft: '8px',  /* Adjust the margin as needed */
        height: "14px", 
        color: "#ffc107" 
        }} 
        icon={faStar} 
        />
        </p>
        </div>
        </div>
        </a>
    ))}
</div>
</div>
</div>
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
