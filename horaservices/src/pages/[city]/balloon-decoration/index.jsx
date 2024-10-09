// import React, { useState, useEffect } from "react";
// import Head from 'next/head';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import axios from 'axios';
// import { useParams } from "react-router-dom";
// import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM } from '../../../utils/apiconstants';
// import BirthdayImage from '../../../assets/Birthday_dec_cat.jpeg';
// import FirstnightImage from '../../../assets/first_night_cat_dec.jpeg'
// import AnniversaryImage from '../../../assets/aniversary_Cat_Dec.jpeg'
// import KidsbirthdayImage from '../../../assets/kids_birthday_decoration.jpeg'
// import BabyShowerImage from '../../../assets/baby-shower-dec-cat.jpeg'
// import WelcomebabyImage from '../../../assets/welcome_baby_dec.jpeg'
// import PremiumImage from '../../../assets/preminumdecor.jpeg'
// import CarbootImage from '../../../assets/car_boot.jpg'
// import BallonBImage from '../../../assets/Balloon-B-new.jpeg'
// import { getDecorationOrganizationSchema } from '../../../utils/schema';
// import { setState } from '../../../actions/action';
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { useDispatch } from "react-redux";
// import '../../../css/decoration.css'

// const Decoration = () => {
//     const dispatch = useDispatch();
//     const router = useRouter();
//     // const navigate = useNavigate();
//   const schemaOrg = getDecorationOrganizationSchema();
//   const scriptTag = JSON.stringify(schemaOrg);
//   let { city } = router.query;
//   const hasCityPageParam = city ? true : false;
//     const [catalogueData, setCatalogueData] = useState([]);
//     const [decCat, setDecCat] = useState([
//         { id: '2', image: BirthdayImage, name: 'Birthday', subCategory: "Birthday" , catValue:"birthday-decoration" , imgAlt:"A Gorgeous Candy Birthday Decoration Surprise!" },
//         { id: '3', image: FirstnightImage, name: 'First Night', subCategory: "FirstNight" , catValue:"first-night-decoration" , imgAlt:"Add extra happiness quotient to your wedding night with our exclusive décor package"},
//         { id: '4', image: AnniversaryImage, name: 'Anniversary', subCategory: "Anniversary"  , catValue:"anniversary-decoration" , imgAlt:"Immerse yourself in a world of romance with our mesmerizing anniversary decorations."},
//         { id: '5', image: KidsbirthdayImage, name: 'Kids Birthday', subCategory: "KidsBirthday" , catValue:"kids-birthday-decoration" , imgAlt:"Flutter into a world of whimsy with our exclusive Whimsical Flutter-themed Welcome Baby Decorations." },
//         { id: '6', image: BabyShowerImage, name: 'Baby Shower', subCategory: "BabyShower" , catValue:"baby-shower-decoration" , imgAlt:"Celebrate the transformation into motherhood with Our Gilded Baby Shower Decorations." },
//         { id: '7', image: WelcomebabyImage, name: 'Welcome Baby', subCategory: "WelcomeBaby" , catValue:"welcome-baby-decoration" , imgAlt:"A Pastel Theme Oh Baby Decor for your Baby Shower Celebrations!"},
//         { id: '8', image: PremiumImage, name: 'premium Decoration', subCategory: "PremiumDecoration"  , catValue:"premium-decoration" , imgAlt:"Birthday party decoration ideas for adults" },
//         { id: '9', image: BallonBImage, name: 'Ballon Bouquets', subCategory: "BallonBouquets" , catValue:"balloon-bouquets-decoration" , imgAlt:"Balloon Bouquet" },
//        // { id: '10', image: CarbootImage, name: 'Car Boot', subCategory: "CarBoot" , catValue:"carboot-decoration"},
//     //     { id: '11', image: BachelorPartyImage, name: 'Bachelor Party', subCategory: "BachelorParty" , catValue:"bachelorparty-decoration"},
//     //     { id: '12', image: CandlelightdinnerImage, name: 'Candlelight Dinner', subCategory: "CandlelightDinner" , catValue:"candle-light-dinner-decoration"},
//     //     { id: '13', image: PartySupplyImage, name: 'Party Supply', subCategory: "PartySupply" , catValue:"party-supply-decoration"},
//     //     { id: '14', image: EntertainerImage, name: 'Entertainer', subCategory: "Entertainer" , catValue:"entainer-decoration"},
//     ]);

//     const getCatData = async (subCategory) => {
//         try {
//             const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ID + subCategory);
//             const categoryId = response.data.data._id;
//             const result = await axios.get(BASE_URL + GET_DECORATION_CAT_ITEM + categoryId);
//             setCatalogueData(result.data.data);
//         } catch (error) {
//             console.log("Error:", error.message);
//         }
//     };

//     const openCatItems = (item) => {
//         dispatch(setState(item.subCategory, item.imgAlt));
//       if(hasCityPageParam){
//         router.push(`/${city}/balloon-decoration/${item.catValue}`);
//       }
//       else{
//       router.push(`/balloon-decoration/${item.catValue}`);
//       }
//     };
//     useEffect(() => {
//         decCat.forEach((item) => {
//             getCatData(item.subCategory); // Fetch catalogue data for each subcategory
//         });
//     }, []);

//     return (
//         <div>
//         <Head>
//         <title>Balloon and Flower Decoration @999</title>
//         <meta name="description" content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
//         <meta name="keywords" content="Balloon and Flower Decoration @999" />
//         <meta property="og:title" content="Balloon and Flower Decoration by Professional Decorators" />
//         <meta property="og:description" content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations" />
//         <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png" />
//         <script type="application/ld+json">{scriptTag}</script>
//         <meta name="robots" content="index, follow" />
//         <meta name="author" content="Hora Services" />
//         <meta property="og:url" content="https://horaservices.com/balloon-decoration" />
//         <meta property="og:type" content="website" />
//       </Head>
//             <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", margin: "20px auto 0", width: "70%" , justifyContent:"space-between"}} className="decContainerSec decPage">
//                 {decCat.map((item, index) => (
//                     <div key={index} className="imageContainer">
//                         <Image src={item.image} className="decCatimage" alt={item.name}  onClick={() => openCatItems(item)} />
//                     </div>
//                 ))} 
//             {/* <div>
//             {decCat.map((item, index) => (
//             <url>
//             <loc>{`https://horaservices.com/balloon-decoration/${item.catValue}`}</loc>
//             <priority>1.00</priority>
//             </url>
//             ))} 
//             </div> */}
//             </div>
//         </div>
//     );
// }


// export default Decoration;




import React, { useState, useEffect } from "react";
import Head from 'next/head';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios';
// import { useParams } from "react-router-dom";
import { BASE_URL, GET_DECORATION_CAT_ID, GET_DECORATION_CAT_ITEM } from '../../../utils/apiconstants';
import BirthdayImage from '../../../assets/Birthday_dec_cat.jpeg';
import FirstnightImage from '../../../assets/first_night_cat_dec.jpeg'
import AnniversaryImage from '../../../assets/aniversary_Cat_Dec.jpeg'
import KidsbirthdayImage from '../../../assets/kids_birthday_decoration.jpeg'
import BabyShowerImage from '../../../assets/baby-shower-dec-cat.jpeg'
import WelcomebabyImage from '../../../assets/welcome_baby_dec.jpeg'
import PremiumImage from '../../../assets/preminumdecor.jpeg'
import BallonBImage from '../../../assets/Balloon-B-new.jpeg'
import { getDecorationOrganizationSchema, getProductFAQSchema } from '../../../utils/schema';
import { setState } from '../../../actions/action';
// import { useRouter } from "next/navigation";
import { useRouter } from 'next/router';  // Use Next.js router
import Image from "next/image";
import { useDispatch } from "react-redux";
import '../../../css/decoration.css';
import '../../../components/DecorationLandingSlider/decorationladingslider.css';
import DecorationLandingSlider from  '../../../components/DecorationLandingSlider';
import HaldiImage from '../../../assets/HaldiImage.png';
import MehendiImage from '../../../assets/MehendiImage.png';
import BacheloretteImage from '../../../assets/Bachelorette.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Link from "next/link";

import cityData from '../../../utils/cityData';

// Function to get the locality names for a given city
const getLocalitiesForCity = (city) => {
  const cityInfo = cityData[city];
  if (cityInfo && cityInfo.cityLocalitiesList) {
      return cityInfo.cityLocalitiesList.map(locality => locality.name).join(", ");
  }
  return "the listed areas";
};


const decCat = [
    { id: '2', image: BirthdayImage, name: 'Birthday', subCategory: "Birthday", catValue: "birthday-decoration", imgAlt: "A Gorgeous Candy Birthday Decoration Surprise!" },
    { id: '3', image: FirstnightImage, name: 'First Night', subCategory: "FirstNight", catValue: "first-night-decoration", imgAlt: "Add extra happiness quotient to your wedding night with our exclusive décor package" },
    { id: '4', image: AnniversaryImage, name: 'Anniversary', subCategory: "Anniversary", catValue: "anniversary-decoration", imgAlt: "Immerse yourself in a world of romance with our mesmerizing anniversary decorations." },
    { id: '5', image: KidsbirthdayImage, name: 'Kids Birthday', subCategory: "KidsBirthday", catValue: "kids-birthday-decoration", imgAlt: "Flutter into a world of whimsy with our exclusive Whimsical Flutter-themed Welcome Baby Decorations." },
    { id: '6', image: BabyShowerImage, name: 'Baby Shower', subCategory: "BabyShower", catValue: "baby-shower-decoration", imgAlt: "Celebrate the transformation into motherhood with Our Gilded Baby Shower Decorations." },
    { id: '7', image: WelcomebabyImage, name: 'Welcome Baby', subCategory: "WelcomeBaby", catValue: "welcome-baby-decoration", imgAlt: "A Pastel Theme Oh Baby Decor for your Baby Shower Celebrations!" },
    { id: '8', image: PremiumImage, name: 'premium Decoration', subCategory: "PremiumDecoration", catValue: "premium-decoration", imgAlt: "Birthday party decoration ideas for adults" },
    { id: '9', image: BallonBImage, name: 'Ballon Bouquets', subCategory: "BallonBouquets", catValue: "balloon-bouquets-decoration", imgAlt: "Balloon Bouquet" },
    // {id: '10', Image: "", name: "Haldi Event", subCategory: "Haldi-Mehandi", catValue: "haldi-mehendi-decoration", imgAlt: "Haldi Event"},  
    // {id: '11', Image: "", name: "Mehendi Event", subCategory: "Haldi-Mehandi", catValue: "haldi-mehendi-decoration", imgAlt: "Mehendi Event"},
     
];


const Decoration = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { city } = router.query; // Get the city from the query parameters
    const schemaOrg = getDecorationOrganizationSchema();
    const scriptTag = JSON.stringify(schemaOrg);
    const hasCityPageParam = Boolean(city);

    const faqSchema = getProductFAQSchema(city);
    const faqSchemaJSON = JSON.stringify(faqSchema);

    const [activeIndex, setActiveIndex] = useState(null);
    
    const [showMore, setShowMore] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const paragraphs = [
    "Home Balloon Decoration in " + city?.toUpperCase() + " for Birthday Party celebrations",
    "Decorations and Gifts can make anybody happy. Who doesn’t love getting pampered? Everybody does, though all may not ask for it. A birthday is an occasion to rejoice with our friends and loved ones. These days’ birthday themes and decorations seem to play a major role in any birthday party. Balloons are a necessary thing when it comes to decorating for birthday parties not because Online balloon decoration is cheap and colorful but because balloon decoration adds warm fuzzies to the party which creates a blissful moment in the hearts of people. Balloons are party highlighters! They not only brighten up birthday parties but also bring the group together in balloon bursting activities. Balloon birthday themes have always been fun and easy. The bright and colorful balloons are an ideal choice for any birthday party. When people hear the name of balloons decoration, they anticipate a happy moment to come which makes them feel extremely happy from within. It enlightens the festive mood with its elegant design, color and pattern. There are so many things you can do to create the best balloon decoration with the help of the best party planner in Bangalore or balloon decorators in " + city?.toUpperCase() + ". These are the things you can do to make your birthday parties memorable.",
    "Birthday Balloon Decoration in " + city?.toUpperCase(),
    "Birthdays are memorable occasions for all of us. Who does not love celebrating their birthday, kids love gifts, youngsters love to get their dream stuff and grown-up loves to get all the attention and special treatment by their near and dear ones, birthday is the happiest day of one’s life. This day not only makes the birthday boy or girl happy but also injects the family members with cheerful vibes. That’s the reason everyone is so excited to celebrate birthdays. And this is the sole reason that in India and across the globe, birthdays are no less than festivals, So celebrate your birthday with beautiful balloon decoration at home in " + city?.toUpperCase() + ". Are you looking for the Best Balloon decorator in " + city?.toUpperCase() + "? You want to opt for the Professional balloon decoration services but at the same time wanted it to be budget friendly? Our on-site balloon decorating service in Bangalore by HORA had created a wow and stunning backdrop for your corporate as well as personal events. The variety of balloon designs includes Backdrop, Ring Decoration, Sequence photo booth and so on. If you want to introduce fun to your events and looking for some unique assortment of party decoration then book Best Balloon Decoration in " + city?.toUpperCase() + " from us.",
    "Online Balloon Decoration Shop in " + city?.toUpperCase(),
    "Organizing and managing an event yourself can be tedious and, not to mention, time consuming. With everyday activities becoming simpler, the fun-filled episodes in your life have become even more precious. Celebrating them in a fashionable and classy manner is what makes the best memories. Whenever people gather, regardless of their number or purpose, someone needs to handle the intricacies to ensure the celebration is a success. stands the vitality of time, cooperation, and every other aspect that surrounds the planning of an event. With a fresh team of skilled, creative and motivated professionals, HORA offers the coolest event planning services in more than 100+ Cities in India Being young in this business; we bring to you a blend of innovation and style that’s simply new. Our focus is to provide you with the latest in trend and to create new trends. Taking your personal preferences into consideration and mixing it with new-age design layouts and themes, our primary goal is to help you create amazing memories to cherish for a lifetime. So what are you waiting for? book your favourite occasion from the best balloon decoration shop near me in " + city?.toUpperCase() + ".",
    "Choose HORA for all your celebrations and parties at cheapest rates",
    "Get all your decoration requirements under one roof on HORA, from Baby Shower decoration to Welcome Baby decorations at home in " + city?.toUpperCase() + ". We specialize in creating dreamy and delightful setups for various events, ensuring every moment is special and memorable.",
    "Decorator near me in " + city?.toUpperCase() + ", Balloon Decorator near me in " + city?.toUpperCase() + ", Flower Decorator near me in " + city?.toUpperCase() + ", Decoration service near me in " + city?.toUpperCase() + ", Balloon Decoration service near me in " + city?.toUpperCase() + ", Flower Decoration service near me in " + city?.toUpperCase() + ", Birthday Decoration service near me in " + city?.toUpperCase() + ", Anniversary decoration service near me in " + city?.toUpperCase() + ", baby shower Decoration service near me in " + city?.toUpperCase() + ", Baby welcome Decoration service near me in " + city?.toUpperCase() + ", Online balloon decoration in " + city?.toUpperCase() + "; Best balloon decorations " + city?.toUpperCase() + "; Kids birthday decoration service near me in " + city?.toUpperCase(),
    "event planning certification,event organizing courses,event planner classes,event planner training,event planning course,event management certification,how to become a certified event planner,event certification,how to plan an event,event planning,event planners,helena paschal,how to plan an event houston,corporate event planner,business event planner,how to become an event planner,how to start an event planner business,event planning for beginners"
  ];

  console.log(city,"city");

  const questions = [
    {
      question: `What is the cost of Anniversary Balloon Decoration in ${city?.toUpperCase()}?`,
      answer: `The cost of our Anniversary Decoration services depends on various factors such as the type of decoration, the size of the event, and the location. We offer packages starting from Rs.1200 for a simple yet elegant Anniversary Decoration.`,
    },
    {
      question: `How can I arrange for Balloon Decoration at Home in ${city?.toUpperCase()} for any celebration?`,
      answer: `7eventzz makes it simple to bring the joy of Balloon Decoration to your doorstep for any celebration in ${city?.toUpperCase()}. Our website serves as your guide to planning memorable parties from the comfort of your own home. Choose the "Balloon Decoration at Home" option, enter the event details, modify your requirements, and complete the simple booking process. Our skilled team will handle all of the details, ensuring that your celebration is both seamless and extraordinary.`,
    },
    {
    
      question: `Areas we provide our services across ${city?.toUpperCase()}`,
            answer: `We provide decorations in all areas of ${city?.toUpperCase()} - ${getLocalitiesForCity(city)}.`,
    },
    {
      question: `Our Services in ${city?.toUpperCase()}`,
      answer: `We provide various decoration services in all areas of ${city?.toUpperCase()}. Our offerings include balloon decorations, flower decorations, and more for different events such as birthdays, anniversaries, baby showers, and more.`,
    },
    {
      question: `Do you provide Balloon Room Decoration Services in ${city?.toUpperCase()}`,
      answer: `Yes, we have a huge range of Room Balloon Decoration services in the vibrant city of ${city?.toUpperCase()}. Our skilled and well-experienced team can beautifully transform any room with balloons as per your occasion and your mood of celebration.`,
    },
    {
      question: `Do you offer same-day bookings for Birthday Decoration at Home in ${city?.toUpperCase()}`,
      answer: `Yes, we understand that plans can change, and sometimes you need decorations on short notice. At HORA, we strive to accommodate same-day birthday decoration bookings possible. Contact our customer support team, and we'll do our best to make your event special, even on short notice.`,
    },
    {
      question: `Can you provide me some budget-friendly suggestions for 1st Birthday Party Decorations?`,
      answer: `Of course! Consider themes for a first birthday such as Jungle Theme, Princess or Barbie Theme, Unicorn Theme, Space Theme, and many more. For wonderful photo options, add bright colors, balloons, customized banners, and a cake smash setup. Visit our website and explore a wide range of decoration options for the first birthday.`,
    },
    {
      question: `Decorator near me in ${city?.toUpperCase()}`,
      answer: `We offer a wide range of decoration services, including balloon and flower decorations, for various events such as birthdays, anniversaries, and baby showers in ${city?.toUpperCase()}.`,
    },
  ];
    

    const openCatItems = (item) => {
        dispatch(setState(item.subCategory, item.imgAlt));
        if (hasCityPageParam) {
            router.push(`/${city}/balloon-decoration/${item.catValue}`);
        } else {
            router.push(`/balloon-decoration/${item.catValue}`);
        }
    };

    const handleViewMore = (category) => {
        const categoryItem = decCat.find(cat => cat.subCategory === category);
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

{/* faq */}
<div>
<div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <h3 className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </h3>
          {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
    </div>


<div>

<h1 style={{
      fontSize: "50px",
      textTransform: "uppercase",
      fontWeight: "bold",
      color: "rgb(157, 74, 147)",
      margin: "35px 0 0px",
      textAlign: "center",
      letterSpacing: "1.5px",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
    }}>
      Description
    </h1>

      <div id="city-description" style={{ fontSize: "14px", padding: "0 60px" }}>
        {paragraphs.slice(0, showMore ? paragraphs.length : 2).map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
      <button
        style={{ display: 'block', margin: '20px auto', backgroundColor: 'rgb(157, 74, 147)', 
          color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: "20px" }}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
                            

                        <p id="city-seo-content" style={{ fontSize: "10px", padding: "0 80px" }}>

Online balloon decoration in {city}, Online decoration in {city}, Online balloon decorators in {city}, Online decorator in {city}; top balloon decorator in {city}; top balloon decorator in {city}; Excellent birthday party balloon decoration in {city}; event organising companies in {city}; beautiful theme balloon balloon decoration in {city}; beautiful theme flower balloon decoration in {city}; Hire balloon decoration at home in {city}; Best balloon decoration in {city}, Best decoration in {city}, Best balloon decorator in {city}; Best decorator in {city}; Balloon decoration at home in {city}; Balloon decorator at home in {city}; Best Balloon decorator at home in {city}; Best Balloon decoration at home in {city}; Professional balloon decoration services in {city}; Room Balloon Decoration; Hall Decoration; Large Decorations, Premium Decorations; Room decoration designs; Home Decoration; Stage decoration; Venue decoration; Best Room Balloon Decoration; Best Hall Decoration; Best Large Decorations, Best Premium Decorations; Best Room decoration designs; Best Home Decoration; Best Stage decoration; Best Venue decoration;
Same-day bookings for Birthday Decoration at Home in {city}; Same-day bookings for Anniversary Decoration at Home in {city}; Same-day bookings for Birthday Decoration at in {city}. Same-day bookings for Baby shower Decoration at Home in {city}; Same-day bookings for Car Decoration at Home in {city}; Same-day bookings for first night Decoration at Home in {city}; Same-day bookings for welcome baby Decoration at Home in {city}
Jungle Theme Decoration design, Jungle Theme Decorator near me; Jungle theme decoration under 1500; Jungle theme decoration under 5000; Jungle theme decoration under 10000; Jungle Theme balloon Decoration design; Jungle Theme balloon Decorator near me; Princess or Barbie Theme Decoration design, Princess or Barbie Theme Decorator near me; Princess or Barbie theme decoration under 1500; Princess or Barbie theme decoration under 5000; Jungle theme decoration under 10000; Princess or Barbie Theme balloon Decoration design; Princess or Barbie Theme balloon Decorator near me; Unicorn Theme Decoration design, Unicorn Theme Decorator near me; Unicorn theme decoration under 1500; Unicorn theme decoration under 5000; Unicorn theme decoration under 10000; Unicorn Theme balloon Decoration design; Unicorn Theme balloon Decorator near me; Space Theme Decoration design, Space Theme Decorator near me; Space theme decoration under 1500; Space theme decoration under 5000; Space theme decoration under 10000; Space Theme balloon Decoration design; Space Theme balloon Decorator near me;

First birthday decoration; Second year birthday decoration, 5th year birthday decoration, 10th Birthday decoration; Anniversary Balloon Decoration in Bangalore; Kids birthday decoration; Birthday decoration; Decoration starting 1200 Rs; Budget-friendly suggestions for 1st Birthday Party Decorations; Budget-friendly suggestions for 2nd Birthday Party Decorations; Budget-friendly suggestions for 5th Birthday Party Decorations; Budget-friendly suggestions for 10th Birthday Party Decorations; Best balloon decorator for small parties in {city}, Best balloon decoration for small parties in {city}; Mini Decoration in {city},
Book a decorator in {city}, Book a decoration in {city}, Book a balloon decorator in {city}, Book a flower decoration in {city}, Book a balloon decoration in {city}, Book a flower decorator in {city}; Book a trained verified decorator near you in {city}, Bookadecortor in {city},
Decoration for small parties in {city}, Top Decorator in {city}, Decoration services in {city}, Decorator at home service in {city}, Decorator for a night in {city}, Decoration for a night in {city}, Decorator for hire in {city}, Decoration at my home in {city}, Decorator near me in {city}, Balloon Decorator near me in {city}, Flower Decorator near me in {city}, Decoration service near me in {city}, Balloon Decoration service near me in {city}, Flower Decoration service near me in {city}, Birthday Decoration service near me in {city}, Anniversary decoration service near me in {city}, baby shower Decoration service near me in {city}, Baby welome Decoration service near me in {city}; Simple birthday decoration at home; Simple birthday decoration in {city};

Balloon Decoration for small parties in {city}, Top balloon Decorator in {city}, balloon Decoration services in {city}, balloon Decorator at home service in {city}, balloon Decorator for a night in {city}, Decorator for hire in {city}, balloon Decoration at my home in {city}, balloon Decorator near me in {city}, Balloon Decoration near me in {city}, Flower Decorator near me in {city}, Decoration service near me in {city}, Balloon Decoration service near me in {city}, Flower Decoration service near me in {city}, Birthday Decoration service near me in {city}, Anniversary decoration service near me in {city}, baby shower Decoration service near me in {city}, Baby welome Decoration service near me in {city}; balloon decoration for birthday at home in {city};
balloon decoration ideas; Astronaut Space Theme balloon decoration; Avenger Space Theme balloon decoration; Boss Baby Theme balloon decoration; Baby Shark Theme balloon decoration; Barbie Theme balloon decoration; Cocomelon Theme balloon decoration; Car Theme balloon decoration; Circus Theme balloon decoration; Dinosaur Theme balloon decoration; Jungle Theme balloon decoration; Kitty Theme balloon decoration; Lion Theme balloon decoration; Mickey Mouse Theme balloon decoration; Minecraft Theme balloon decoration; Mermail Theme balloon decoration; Pokemon Theme balloon decoration; Princess Theme balloon decoration; Panda Theme balloon decoration; Traffic Theme balloon decoration; Super Dog Theme balloon decoration; Unicorn Theme balloon decoration                    
</p>

      <section id="section7" class="sectionidsec">
                <div style={styles.pageWidth}>
                    <p 
                    style={{
                      fontSize: "43px",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      color: "rgb(157, 74, 147)",
                      margin: "35px 0 0px",
                      textAlign: "center",
                      letterSpacing: "1.5px",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
                    }}
                    className="other-cities">
                        Explore Other Decoration Category In {city}
                        </p>
                    <div class="tab-inner">
                        <ul style={{ listStyle: "none", padding: "20px 0" }}>
                            <li className="city-link" data-city={city} style={{ padding: "0 10px", display: "inline-block" }} >
                                <Link href="/balloon-decoration">Birthday Decoration in {city}</Link>
                            </li>
                            <li className="city-link" data-city="Gurugram" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">Baby Shower Decoration in {city}</Link>
                            </li>
                            <li className="city-link" data-city="Ghaziabad" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">Baby Welcome Decoration in {city}</Link>
                            </li>
                            <li className="city-link" data-city="Faridabad" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">First Night Decoration in {city}</Link>
                            </li>
                            <li className="city-link" data-city="Noida" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="balloon-decoration">Kids Birthday Decoration in  {city}</Link>
                            </li>
                            <li className="city-link" data-city="Bengaluru" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">Anniversary Decoration in {city}</Link>
                            </li>
                            <li className="city-link" data-city="Hyderabad" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">Candle Light Dinner in  {city}</Link>
                            </li>
                            <li className="city-link" data-city="Mumbai" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">Car Decoration in  {city}</Link>
                            </li>
                            <li className="city-link" data-city="Indore" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">Naming Ceremony Decoration in {city}</Link>
                            </li>
                            <li className="city-link" data-city="Chennai" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">Terrace Decoration in{city}</Link>
                            </li>
                            <li className="city-link" data-city="Pune" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">Proposal Decoration in {city}</Link>
                            </li>
                            <li className="city-link" data-city="Surat" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">Bride-to-be Decoration in {city}</Link>
                            </li>
                            <li className="city-link" data-city="Bhopal" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">Cabana Decoration in {city}</Link>
                            </li>
                            <li className="city-link" data-city="kanpur" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">Haldi Decoration in {city}</Link>
                            </li>
                            <li className="city-link" data-city="Lucknow" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration">Balloon Decoration in {city}</Link>
                            </li>
                            <li className="city-link" data-city="kolkata" style={{ padding: "0 10px", display: "inline-block" }}>
                                <Link href="/balloon-decoration" >Office Decoration in  {city}</Link>
                            </li>
                            <li className="city-link" data-city="Goa" style={{ padding: "0 10px", display: "inline-block" }}>

                                <Link href="/balloon-decoration">Engagement Ring Platter in {city}</Link>
                            </li>
                        </ul>

                    </div>
                    <p id="city-seo-content" style={{ fontSize: "5px", margin: "20px 0 20px " }}>

                        Online balloon decoration in {city}, Online decoration in {city}, Online balloon decorators in {city}, Online decorator in {city}; top balloon decorator in {city}; top balloon decorator in {city}; Excellent birthday party balloon decoration in {city}; event organising companies in {city}; beautiful theme balloon balloon decoration in {city}; beautiful theme flower balloon decoration in {city}; Hire balloon decoration at home in {city}; Best balloon decoration in {city}, Best decoration in {city}, Best balloon decorator in {city}; Best decorator in {city}; Balloon decoration at home in {city}; Balloon decorator at home in {city}; Best Balloon decorator at home in {city}; Best Balloon decoration at home in {city}; Professional balloon decoration services in {city}; Room Balloon Decoration; Hall Decoration; Large Decorations, Premium Decorations; Room decoration designs; Home Decoration; Stage decoration; Venue decoration; Best Room Balloon Decoration; Best Hall Decoration; Best Large Decorations, Best Premium Decorations; Best Room decoration designs; Best Home Decoration; Best Stage decoration; Best Venue decoration;
                        Same-day bookings for Birthday Decoration at Home in {city}; Same-day bookings for Anniversary Decoration at Home in {city}; Same-day bookings for Birthday Decoration at in {city}. Same-day bookings for Baby shower Decoration at Home in {city}; Same-day bookings for Car Decoration at Home in {city}; Same-day bookings for first night Decoration at Home in {city}; Same-day bookings for welcome baby Decoration at Home in {city}
                        Jungle Theme Decoration design, Jungle Theme Decorator near me; Jungle theme decoration under 1500; Jungle theme decoration under 5000; Jungle theme decoration under 10000; Jungle Theme balloon Decoration design; Jungle Theme balloon Decorator near me; Princess or Barbie Theme Decoration design, Princess or Barbie Theme Decorator near me; Princess or Barbie theme decoration under 1500; Princess or Barbie theme decoration under 5000; Jungle theme decoration under 10000; Princess or Barbie Theme balloon Decoration design; Princess or Barbie Theme balloon Decorator near me; Unicorn Theme Decoration design, Unicorn Theme Decorator near me; Unicorn theme decoration under 1500; Unicorn theme decoration under 5000; Unicorn theme decoration under 10000; Unicorn Theme balloon Decoration design; Unicorn Theme balloon Decorator near me; Space Theme Decoration design, Space Theme Decorator near me; Space theme decoration under 1500; Space theme decoration under 5000; Space theme decoration under 10000; Space Theme balloon Decoration design; Space Theme balloon Decorator near me;

                        First birthday decoration; Second year birthday decoration, 5th year birthday decoration, 10th Birthday decoration; Anniversary Balloon Decoration in Bangalore; Kids birthday decoration; Birthday decoration; Decoration starting 1200 Rs; Budget-friendly suggestions for 1st Birthday Party Decorations; Budget-friendly suggestions for 2nd Birthday Party Decorations; Budget-friendly suggestions for 5th Birthday Party Decorations; Budget-friendly suggestions for 10th Birthday Party Decorations; Best balloon decorator for small parties in {city}, Best balloon decoration for small parties in {city}; Mini Decoration in {city},
                        Book a decorator in {city}, Book a decoration in {city}, Book a balloon decorator in {city}, Book a flower decoration in {city}, Book a balloon decoration in {city}, Book a flower decorator in {city}; Book a trained verified decorator near you in {city}, Bookadecortor in {city},
                        Decoration for small parties in {city}, Top Decorator in {city}, Decoration services in {city}, Decorator at home service in {city}, Decorator for a night in {city}, Decoration for a night in {city}, Decorator for hire in {city}, Decoration at my home in {city}, Decorator near me in {city}, Balloon Decorator near me in {city}, Flower Decorator near me in {city}, Decoration service near me in {city}, Balloon Decoration service near me in {city}, Flower Decoration service near me in {city}, Birthday Decoration service near me in {city}, Anniversary decoration service near me in {city}, baby shower Decoration service near me in {city}, Baby welome Decoration service near me in {city}; Simple birthday decoration at home; Simple birthday decoration in {city};

                        Balloon Decoration for small parties in {city}, Top balloon Decorator in {city}, balloon Decoration services in {city}, balloon Decorator at home service in {city}, balloon Decorator for a night in {city}, Decorator for hire in {city}, balloon Decoration at my home in {city}, balloon Decorator near me in {city}, Balloon Decoration near me in {city}, Flower Decorator near me in {city}, Decoration service near me in {city}, Balloon Decoration service near me in {city}, Flower Decoration service near me in {city}, Birthday Decoration service near me in {city}, Anniversary decoration service near me in {city}, baby shower Decoration service near me in {city}, Baby welome Decoration service near me in {city}; balloon decoration for birthday at home in {city};
                        balloon decoration ideas; Astronaut Space Theme balloon decoration; Avenger Space Theme balloon decoration; Boss Baby Theme balloon decoration; Baby Shark Theme balloon decoration; Barbie Theme balloon decoration; Cocomelon Theme balloon decoration; Car Theme balloon decoration; Circus Theme balloon decoration; Dinosaur Theme balloon decoration; Jungle Theme balloon decoration; Kitty Theme balloon decoration; Lion Theme balloon decoration; Mickey Mouse Theme balloon decoration; Minecraft Theme balloon decoration; Mermail Theme balloon decoration; Pokemon Theme balloon decoration; Princess Theme balloon decoration; Panda Theme balloon decoration; Traffic Theme balloon decoration; Super Dog Theme balloon decoration; Unicorn Theme balloon decoration                    </p>
                </div>



            </section>

</div>
    );    
};

// // Fetching the data at build time
// export async function getStaticProps() {
//     try {
//         const catalogueData = await Promise.all(decCat.map(async (item) => {
//             const response = await axios.get(BASE_URL + GET_DECORATION_CAT_ID + item.subCategory);
//             const categoryId = response.data.data._id;
//             const result = await axios.get(BASE_URL + GET_DECORATION_CAT_ITEM + categoryId);
//             return {
//                 ...item,
//                 data: result.data.data,
//             };
//         }));

//         return {
//             props: {
//                 catalogueData,
//             },
//         };
//     } catch (error) {
//         console.log("Error fetching data:", error.message);
//         return {
//             props: {
//                 catalogueData: [],
//             },
//         };
//     }
// }

export default Decoration;

const styles = {
  homebanner: {
      marginTop: "-76px",
  },
  pageWidth: {
      maxWidth: "100%",
      width: "1200px",
      margin: "0 auto",
  },
  pageWidth: {
      maxWidth: "100%",
      width: "1200px",
      margin: "0 auto",
  },
  textContainer: {
      textAlign: "center",
      color: "white", // Adjust text color as needed
      margin: "0 0 70px 0",
  },
  bannerBottomSec: {
      display: "flex",
      justifyContent: "center",
      alignItems: "top",
      flexDirection: "row",
      padding: "0px 6%",
      margin: "0 auto",
      flexWrap: "wrap",
  },
  celebrateBottomSec: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "row",
      margin: "0 auto",
      flexWrap: "wrap",
  },
  celebrateBox: {
      margin: "0 1%",
      width: "20%",
  },
  bannerDecorationImage: {
      margin: "0 1%",
      width: "14%",
  },
  serviceSec: {
      backgroundColor: "rgba(230, 117, 107, 0.2)",
      borderRadius: "59px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "60px",
      marginBottom: "50px",
  },
  serviceSecRight: {
      width: "53%",
  },
  serviceSecLeft: {
      width: "40%",
  }

};
