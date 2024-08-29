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
          Image: 'https://horaservices.com/api/uploads/attachment-1705579946309.png',
          title: 'Simple Room Decoration',
          price: '₹1199',
          rating: 4.7,
          link:"https://horaservices.com/balloon-decoration/birthday-decoration",
        },
        {
        Image: 'https://horaservices.com/api/uploads/attachment-1711601912449.png',
        title: 'Elegant Vibes Happy Birthday',
        price: '₹3500',
        rating: 4.6,
        link:"https://horaservices.com/balloon-decoration/birthday-decoration",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1706464222384.png',
          title: 'Golden & Silver Ring Decoration',
          price: '₹3000',
          rating: 4.1,
          link:"https://horaservices.com/balloon-decoration/birthday-decoration",
        },
        {
          Image: 'https://horaservices.com/api/uploads/attachment-1706463835447.png',
          title: 'Multi Balloon Round Ring',
          price: '₹4670',
          rating: 4.4,
          link:"https://horaservices.com/balloon-decoration/birthday-decoration",
        },
      ];
      
      
      const firstNightData = [
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1705582807178.png',
            title: 'Romantic Heart Balloon',
            price: '₹1429',
            rating: 4.5,
            link:"https://horaservices.com/balloon-decoration/first-night-decoration",
          },
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1706470026330.png',
            title: 'Wedding Night Room',
            price: '₹1900',
            rating: 4.5,
            link:"https://horaservices.com/balloon-decoration/first-night-decoration",
          },
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1706470815566.png',
            title: 'Wedding Night Decoration',
            price: '₹2250',
            rating: 4.5,
            link:"https://horaservices.com/balloon-decoration/first-night-decoration",
          },
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1711614540709.png',
            title: 'Lightning With Heart Room Decor',
            price: '₹1450',
            rating: 4.3,
            link:"https://horaservices.com/balloon-decoration/first-night-decoration",
          },
        ];
      
      
        const haldiAndMehndiData = [
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1722688345222.png',
            title: 'Mehendi Decoration Green Look',
            price: '₹16200',
            rating: 4.6,
            link:"https://horaservices.com/balloon-decoration/haldi-mehendi-decoration",
          },
          {
              Image: 'https://horaservices.com/api/uploads/attachment-1722692831708.png',
            title: 'Haldi With Green Backdrop',
            price: '₹9680',
            rating: 4.5,
            link:"https://horaservices.com/balloon-decoration/haldi-mehendi-decoration",
          },
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1722935098782.png',
            title: 'Mehendi Decoration Look',
            price: '₹17200',
            rating: 4.6,
            link:"https://horaservices.com/balloon-decoration/haldi-mehendi-decoration",
          },
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1722969484208.png',
            title: 'Mehendi With Orange Theme',
            price: '₹7000',
            rating: 4.6,
            link:"https://horaservices.com/balloon-decoration/haldi-mehendi-decoration",
          },
        ];
      
      
        const AnniversaryData = [
          {
            Image: 'https://horaservices.com/api/uploads/attachment-1705947179768.png',
            title: 'Roseate Radiance Anniversary Decor',
            price: '₹1999',
            rating: 4.6,
            link:"https://horaservices.com/balloon-decoration/anniversary-decoration",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1706442984306.png',
            title: 'Love You Room Decor',
            price: '₹1250',
            rating: 4.2,
            link:"https://horaservices.com/balloon-decoration/anniversary-decoration",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1706443182006.png',
            title: 'Rose Gold Anniversary Decor',
            price: '₹1599',
            rating: 4.5,
            link:"https://horaservices.com/balloon-decoration/anniversary-decoration",
          },
         {
            Image: 'https://horaservices.com/api/uploads/attachment-1706459807177.png',
            title: 'Canopy Red Heart Decor',
            price: '₹4286',
            rating: 4.5,
            link:"https://horaservices.com/balloon-decoration/anniversary-decoration",
          },
        ];

        const KidsBirthdayData = [
            {
              Image: 'https://horaservices.com/api/uploads/attachment-1705948416594.png',
              title: 'Minnie Mouse Theme Decor',
              price: '₹1549',
              rating: 4.6,
              link:"https://horaservices.com/balloon-decoration/kids-birthday-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1705948813744.png',
              title: 'Unicorn Backdrop Decor',
              price: '₹4399',
              rating: 4.4,
              link:"https://horaservices.com/balloon-decoration/kids-birthday-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1706520101383.png',
              title: 'Multi color Birthday Balloon',
              price: '₹1299',
              rating: 4.3,
              link:"https://horaservices.com/balloon-decoration/kids-birthday-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1706810405540.png',
              title: 'Cute and Simple Birthday Decor',
              price: '₹2299',
              rating: 4.7,
              link:"https://horaservices.com/balloon-decoration/kids-birthday-decoration",
            },
          ];
        
        
          const BabyShowerData= [
            {
              Image: 'https://horaservices.com/api/uploads/attachment-1705598818463.png',
              title: 'Cloudy Theme Baby Shower',
              price: '₹1899',
              rating: 4.2,
              link:"https://horaservices.com/balloon-decoration/baby-shower-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1705598937315.png',
              title: 'Golden, Pink and Blue Baby Shower',
              price: '₹2299',
              rating: 4.5,
              link:"https://horaservices.com/balloon-decoration/baby-shower-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1705599152481.png',
              title: 'Baby Pink Baby Shower',
              price: '₹2700',
              rating: 4.2,
              link:"https://horaservices.com/balloon-decoration/baby-shower-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1711520474508.png',
              title: 'OH BABY Light Decoration',
              price: '₹3399',
              rating: 4.8,
              link:"https://horaservices.com/balloon-decoration/baby-shower-decoration",
            },
          ];
        
          const WelcomebabyData= [
            {
              Image: 'https://horaservices.com/api/uploads/attachment-1706471308375.png',
              title: 'Pink Theme Welcome Baby',
              price: '₹2070',
              rating: 4.8,
              link:"https://horaservices.com/balloon-decoration/welcome-baby-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1706471595779.png',
              title: 'Blue Theme Welcome Baby Boy',
              price: '₹1899',
              rating: 4.5,
              link:"https://horaservices.com/balloon-decoration/welcome-baby-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1711458529679.png',
              title: 'Oh Baby Classy Decoration',
              price: '₹2999',
              rating: 4.7,
              link:"https://horaservices.com/balloon-decoration/welcome-baby-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1711555526222.png',
              title: 'Welcome Baby Decoration',
              price: '₹1899',
              rating: 4.2,
              link:"https://horaservices.com/balloon-decoration/welcome-baby-decoration",
            },
          ];
        
          const PremiumData= [
            {
              Image: 'https://horaservices.com/api/uploads/attachment-1705586477880.png',
              title: 'Open Area Birthday Decoration',
              price: '₹6999',
              rating: 4.4,
              link:"https://horaservices.com/balloon-decoration/premium-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1706528142518.png',
              title: 'Canopy Birthday Decoration',
              price: '₹4999',
              rating: 4.6,
              link:"https://horaservices.com/balloon-decoration/premium-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1706534258221.png',
              title: 'Multi-Colored Baby Shower',
              price: '₹6120',
              rating: 4.7,
              link:"https://horaservices.com/balloon-decoration/premium-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1711540983547.png',
              title: 'Car Theme With Mickey Mouse',
              price: '₹6235',
              rating: 4.6,
              link:"https://horaservices.com/balloon-decoration/premium-decoration",
            },
          ];
          
          const BallonBData= [
            {
              Image: 'https://horaservices.com/api/uploads/attachment-1705949316251.png',
              title: 'I Love You Balloon Bouquet',
              price: '₹1800',
              rating: 4.3,
              link:"https://horaservices.com/balloon-decoration/balloon-bouquets-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1705949583322.png',
              title: 'LOVE Balloon Bouquet',
              price: '₹1350',
              rating: 4.6,
              link:"https://horaservices.com/balloon-decoration/balloon-bouquets-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1711542379923.png',
              title: 'Barbie Balloon Bouquet',
              price: '₹1450',
              rating: 4.1,
              link:"https://horaservices.com/balloon-decoration/balloon-bouquets-decoration",
            },
           {
              Image: 'https://horaservices.com/api/uploads/attachment-1712305355842.png',
              title: 'Baby Shark Bouquet',
              price: '₹1420',
              rating: 4.5,
              link:"https://horaservices.com/balloon-decoration/balloon-bouquets-decoration",
            },
          ];
        

    return (
        <div>
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
                <meta property="og:url" content="https://horaservices.com/balloon-decoration" />
                <meta property="og:type" content="website" />
            </Head>
                <div  className="decContainerSec decPage">
                {decCat
        .filter(item => item.image) // Filter out items without images
        .map((item, index) => (
          <div key={index} className="imageContainer">
            <Image
              src={item.image}
              className="decCatimage"
              alt={item.imgAlt}
              onClick={() => openCatItems(item)}
            />
          </div>
        ))}
                </div>
<div className="page-width decorationlanding-slider">
<div className="slider-container">
  <div className="slider-header">
    <h2>Kids Birthday Decoration</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("KidsBirthday")}
    >
    View More
    </button>
    </div>
  <DecorationLandingSlider data={KidsBirthdayData} category="KidsBirthday" handleViewMore={handleViewMore} />
</div>
    
<div className="slider-container">
  <div className="slider-header">
    <h2>First Night Decoration</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("FirstNight")}
    >
    View More
    </button>
    </div>
  <div>
  <div className="slider-container slider-decoration-inner decoration-item-grid">
    {firstNightData.map((item, index) => (
        <a key={index} className="slider-item">
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
<div className="slider-container ">
    <div className="slider-header">
    <h2>Birthday Decoration</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("Birthday")}
    >
    View More
    </button>
    </div>
    <DecorationLandingSlider data={birthdayData} category="Birthday" handleViewMore={handleViewMore} />
    </div>
<div className="slider-container">
  <div className="slider-header">
    <h2>Haldi & Mehndi Decoration</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("Haldi-Mehandi")}
    >
    View More
    </button>
    </div>
    <div>
    <div className="slider-container slider-decoration-inner decoration-item-grid">
    {haldiAndMehndiData.map((item, index) => (
        <a key={index} className="slider-item">
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

<div className="slider-container">
  <div className="slider-header">
    <h2>Anniversary Decoration</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("Anniversary")}
    >
    View More
    </button>
    </div>

  <DecorationLandingSlider data={AnniversaryData} category="Anniversary" handleViewMore={handleViewMore} />
</div>
<div className="slider-container">
  <div className="slider-header">
    <h2>Baby Shower</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("BabyShower")}
    >
    View More
    </button>
    </div>
  <div className="slider-container slider-decoration-inner decoration-item-grid">
    {BabyShowerData.map((item, index) => (
        <a key={index} className="slider-item">
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
    <h2>Welcome baby</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("WelcomeBaby")}
    >
    View More
    </button>
    </div>
  <DecorationLandingSlider data={WelcomebabyData} category="WelcomeBaby" handleViewMore={handleViewMore} />
</div>
<div className="slider-container">
  <div className="slider-header">
    <h2>Premium Decors</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("PremiumDecoration")}
    >
    View More
    </button>
    </div>
  <div className="slider-container slider-decoration-inner decoration-item-grid">
    {PremiumData.map((item, index) => (
        <a key={index} className="slider-item">
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
    <h2>Ballon Bouquets</h2>
    <button 
    className="viewbtn  btn btn-primary" 
    onClick={() => handleViewMore("BallonBouquets")}
    >
    View More
    </button>
    </div>
  <DecorationLandingSlider data={BallonBData} category="BallonBouquets" handleViewMore={handleViewMore} />
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
