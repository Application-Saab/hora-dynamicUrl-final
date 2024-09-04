// import React, { useState, useEffect } from "react";
// // import { useLocation } from 'react-router-dom';
// // import { Link } from 'react-router-dom';
// // import { useParams } from "react-router-dom";
// import service4Image from '../../assets/live-buffet-service.png';
// import bannerSvgImage from '../../../public/assets/banner-home-bg.svg';
// import bannerDecorationImage from '../../assets/decoration-home-banner.png';
// import bannerChefImage from '../../assets/chef-home-banner.png';
// import bannerHospitalityImage from '../../assets/hospitality.png';
// import bannerReturnGiftImage from '../../assets/return-gift-banner-home.png';
// import bannerEntertainmentImage from '../../assets/entertainment-banner-home.png';
// import bannerFoodDeliveryImage from '../../assets/food-delivery-home-banner.png';
// import Celebrate1Image from '../../assets/Birthday&Celebration.png';
// import Celebrate2Image from '../../assets/corporate-party.png';
// import Celebrate3Image from '../../assets/house-party.png';
// import Celebrate4Image from '../../assets/wedding-event.png';
// import Celebrate5Image from '../../assets/gathering.png';
// import Celebrate6Image from '../../assets/kids-event.png';
// import { useRouter } from "next/router";
// import Link from "next/link";
// import Image from "next/image";

// const DecorationCity = () => {
//     const [showButton, setShowButton] = useState(false);
//     const [city, setCity] = useState("");
//     const openLink = () => {
//         window.open("https://play.google.com/store/apps/details?id=com.hora", "_blank");
//     };
//     useEffect(() => {
//         setShowButton(window.innerWidth > 800);
//         function handleResize() {
//             setShowButton(window.innerWidth > 800);
//         };
//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);
//     const cityData = {
//         Delhi: {
//             bannerImage: "OIP1.jpg",
//             cityLocalitiesList:
//                 [
//                     { name: "Adarsh Nagar", },
//                     { name: "adchini", },
//                     { name: "Ajmeri Gate", },
//                     { name: "akshardham", },
//                     { name: "Alaknanda", },
//                     { name: "Aman Vihar", },
//                     { name: "Amar Colony", },
//                     { name: "Ambedkar Nagar", },
//                     { name: "Amrit Nagar", },
//                     { name: "Amritpuri", },
//                     { name: "Anand Lok", },
//                     { name: "Anand Niketan" },
//                     { name: "Anand Parbat" },
//                     { name: "Anand Vihar" },
//                     { name: "Andrews Ganj" },
//                     { name: "Ansari Nagar East" },
//                     { name: "Aradhna Enclave" },
//                     { name: "Arjun Garh" },
//                     { name: "Arjun Nagar" },
//                     { name: "Arya Nagar" },
//                     { name: "Ashok Nagar" },
//                     { name: "Ashok Vihar" },
//                     { name: "Ashoka Niketan" },
//                     { name: "Ashram" },
//                     { name: "Asiad Village" },
//                     { name: "Asola" },
//                     { name: "Aya Nagar" },
//                     { name: "Azad Nagar" },
//                     { name: "Azadpur" },
//                     { name: "Badarpur" },
//                     { name: "Batla house" },
//                     { name: "Bawana" },
//                     { name: "Bengali Market" },
//                     { name: "Ber Sarai" },
//                     { name: "Bhagya Vihar" },
//                     { name: "Bhajanpura" },
//                     { name: "Bhera Enclave" },
//                     { name: "Bhikaji Cama Place" },
//                     { name: "Budh Nagar" },
//                     { name: "Chanakya Place" },
//                     { name: "Chanakyapuri" },
//                     { name: "Chander Nagar" },
//                     { name: "Chandni Chowk" },
//                     { name: "Chattarpur" },
//                     { name: "Chawri Bazar" },
//                     { name: "Chirag Delhi" },
//                     { name: "Chirag Enclave" },
//                     { name: "Chittaranjan Park" },
//                     { name: "Civil Lines" },
//                     { name: "Commonwealth Games Village" },
//                     { name: "Connaught Place" },
//                     { name: "CR Park" },
//                     { name: "Dakshini Pitampura" },
//                     { name: "Dakshinpuri" },
//                     { name: "Darave" },
//                     { name: "Daryaganj" },
//                     { name: "Dayanand Colony" },
//                     { name: "Dayanand Vihar" },
//                     { name: "Defence Colony" },
//                     { name: "Defence Enclave" },
//                     { name: "Delhi Cantonment" },
//                     { name: "Deoli" },
//                     { name: "Dhansa" },
//                     { name: "Dharampura" },
//                     { name: "Dhaula Kuan" },
//                     { name: "Dilshad Garden" },
//                     { name: "Diplomatic Enclave" },
//                     { name: "Dr Ambedkar Nagar" },
//                     { name: "Dwarka" },
//                     { name: "East Of Kailash" },
//                     { name: "Fatehpuri" },
//                     { name: "Freedom Fighter Enclave" },
//                     { name: "Friends Colony" },
//                     { name: "G T Karnal Road Industrial Area" },
//                     { name: "Gagan Vihar" },
//                     { name: "Gandhi Nagar" },
//                     { name: "Gautam Nagar" },
//                     { name: "Geeta Colony" },
//                     { name: "Geetanjali Enclave" },
//                     { name: "Ghaffar Manzil Colony" }

//                 ]
//         },
//         Gurugram: {
//             bannerImage: "OIP1.jpg",
//             cityLocalitiesList: [
//                 { name: "Ardee city" },
//                 { name: "Arjun Nagar" },
//                 { name: "Ashok Vihar Phase I" },
//                 { name: "Badshapur" },
//                 { name: "Chakkarpur" },
//                 { name: "Dlf Phase 1" },
//                 { name: "Dlf Phase 2" },
//                 { name: "Dlf Phase 3" },
//                 { name: "Dlf Phase 4" },
//                 { name: "Dlf Phase 5" },
//                 { name: "Fazilpur" },
//                 { name: "Feroz Gandhi Colony" },
//                 { name: "Gandhi Nagar" },
//                 { name: "Garhi Harsaru" },
//                 { name: "Golf Course Extension" },
//                 { name: "Greenwood city" },
//                 { name: "Hans Enclave" },
//                 { name: "Hari Nagar" },
//                 { name: "Heera Nagar" },
//                 { name: "Islampur" },
//                 { name: "Jharsa" },
//                 { name: "Jyoti Park" },
//                 { name: "Kadipur" },
//                 { name: "Khandsa" },
//                 { name: "Krishna Colony" },
//                 { name: "Laxman Vihar" },
//                 { name: "Madan Puri" },
//                 { name: "Malibu Town" },
//                 { name: "Manesar Sector M1" },
//                 { name: "May Field Gardens" },
//                 { name: "MG road" },
//                 { name: "Model Town" },
//                 { name: "Mohyal Colony" },
//                 { name: "Nathupur" },
//                 { name: "New Basti" },
//                 { name: "New Colony" },
//                 { name: "New Palam Vihar" },
//                 { name: "Pace city" },
//                 { name: "Palam Vihar" },
//                 { name: "Pataudi Sector 1" },
//                 { name: "Patel Nagar" },
//                 { name: "Rajendra Park" },
//                 { name: "Rajiv Nagar" },
//                 { name: "Ram Nagar" },
//                 { name: "Ratan Vihar" },
//                 { name: "Ravi Nagar" },
//                 { name: "Rosewood city" },
//                 { name: "Sadar Bazar" },
//                 { name: "Saraswati Kunj" },
//                 { name: "Saraswati Vihar" },
//                 { name: "Sector 1" },
//                 { name: "Sector 10" },
//                 { name: "Sector 100" },
//                 { name: "Sector 101" },
//                 { name: "Sector 102" },
//                 { name: "Sector 103" },
//                 { name: "Sector 104" },
//                 { name: "Sector 105" },
//                 { name: "Sector 106" },
//                 { name: "Sector 107" },
//                 { name: "Sector 108" },
//                 { name: "Sector 109" },
//                 { name: "Sector 11" },
//                 { name: "Sector 110" },
//                 { name: "Sector 111" },
//                 { name: "Sector 112" },
//                 { name: "Sector 113" },
//                 { name: "Sector 114" },
//                 { name: "Sector 115" },
//                 { name: "Sector 12" },
//                 { name: "Sector 13" },
//                 { name: "Sector 14" },
//                 { name: "Sector 15 Part I" },
//                 { name: "Sector 16" },
//                 { name: "Sector 17" },
//                 { name: "Sector 18" },
//                 { name: "Sector 19" },
//                 { name: "Sector 2" },
//                 { name: "Sector 20" },
//                 { name: "Sector 21" },
//                 { name: "Sector 22" },
//                 { name: "Sector 23" },
//                 { name: "Sector 24" },
//                 { name: "Sector 25" },
//                 { name: "Sector 26" },
//                 { name: "Sector 27" },
//                 { name: "Sector 28" },
//                 { name: "Sector 29" },
//                 { name: "Sector 3" },
//                 { name: "Sector 30" },
//                 { name: "Sector 31" },
//                 { name: "Sector 32" },
//                 { name: "Sector 33" },
//                 { name: "Sector 34" },
//                 { name: "Sector 35" },
//                 { name: "Sector 36" },
//                 { name: "Sector 37 Part I Industrial" },
//                 { name: "Sector 38" },
//                 { name: "Sector 39" },
//                 { name: "Sector 4" },
//                 { name: "Sector 41" },
//                 { name: "Sector 42" },
//                 { name: "Sector 43" },
//                 { name: "Sector 44" },
//                 { name: "Sector 45" },
//                 { name: "Sector 46" },
//                 { name: "Sector 47" },
//                 { name: "Sector 48" },
//                 { name: "Sector 49" },
//                 { name: "Sector 5" },
//                 { name: "Sector 50" },
//                 { name: "Sector 51" },
//                 { name: "Sector 52" },
//                 { name: "Sector 53" },
//                 { name: "Sector 54" },
//                 { name: "Sector 55" },
//                 { name: "Sector 56" },
//                 { name: "Sector 57" },
//                 { name: "Sector 58" },
//                 { name: "Sector 59" }
//             ]
//         },
//         Ghaziabad: {
//             bannerImage: "OIP1.jpg",
//             cityLocalitiesList: [
//                 { "name": "Abhay Khand" },
//                 { "name": "Ahinsa Khand" },
//                 { "name": "Amrit Nagar" },
//                 { "name": "Ankur Vihar" },
//                 { "name": "Avantika" },
//                 { "name": "Baghpat" },
//                 { "name": "Bamheta" },
//                 { "name": "Behta Colony" },
//                 { "name": "Behta Hazipur" },
//                 { "name": "Bhim Nagar" },
//                 { "name": "Bhopura" },
//                 { "name": "Bhram Puri" },
//                 { "name": "Bhuapur" },
//                 { "name": "Brij Vihar" },
//                 { "name": "Budh Vihar" },
//                 { "name": "Chander Nagar" },
//                 { "name": "Chhapraula" },
//                 { "name": "Chipiyana Buzurg" },
//                 { "name": "Chiranjiv Vihar" },
//                 { "name": "Crossings Republik" },
//                 { "name": "Dadri" },
//                 { "name": "Dasna" },
//                 { "name": "Daulatpur" },
//                 { "name": "Defence Colony" },
//                 { "name": "Dilshad Garden" },
//                 { "name": "Duhai" },
//                 { "name": "Dundahera" },
//                 { "name": "Gagan Vihar" },
//                 { "name": "Gandhi Nagar" },
//                 { "name": "Ganeshpuri" },
//                 { "name": "Garhmukteshwar" },
//                 { "name": "Ghantaghar" },
//                 { "name": "Ghukna" },
//                 { "name": "Govindpuram" },
//                 { "name": "Gulab Vatika" },
//                 { "name": "Gyan Khand" },
//                 { "name": "Hapur" },
//                 { "name": "Hindan Residential Area" },
//                 { "name": "Indirapuram" },
//                 { "name": "Indraprastha" },
//                 { "name": "Jassipur" },
//                 { "name": "Jawahar Nagar" },
//                 { "name": "Judges Enclave" },
//                 { "name": "Kamla Nehru Nagar" },
//                 { "name": "Kaushambhi" },
//                 { "name": "Kavi Nagar" },
//                 { "name": "Kavi Nagar Industrial Area" },
//                 { "name": "Kot Gaon" },
//                 { "name": "Krishna Vihar" },
//                 { "name": "Lohia Nagar" },
//                 { "name": "Loni" },
//                 { "name": "Loni Industrial Area" },
//                 { "name": "Madhopura" },
//                 { "name": "Mahurali" },
//                 { "name": "Maliwara" },
//                 { "name": "Marium Nagar" },
//                 { "name": "Masuri" },
//                 { "name": "Meerut Road Industrial Area" },
//                 { "name": "Mirzapur" },
//                 { "name": "Model Town" },
//                 { "name": "Modi Nagar" },
//                 { "name": "Mohan Meakin Industrial Estate" },
//                 { "name": "Mohan Nagar" },
//                 { "name": "Morta" },
//                 { "name": "Morti" },
//                 { "name": "Murad Nagar" },
//                 { "name": "Nai Basti Dundahera" },
//                 { "name": "Nandgram" },
//                 { "name": "Nasbandi Colony" },
//                 { "name": "Naya Ganj" },
//                 { "name": "Neelmani Colony" },
//                 { "name": "Nehru Nagar" },
//                 { "name": "New Vijay Nagar" },
//                 { "name": "NH 24" },
//                 { "name": "Niti Khand I" },
//                 { "name": "Niti Khand-Indirapuram" },
//                 { "name": "Nyay Khand I" },
//                 { "name": "Pandav Nagar" },
//                 { "name": "Pasaunda" },
//                 { "name": "Patel Nagar I" }
//             ]
//         },
//         Faridabad: {
//             bannerImage: "OIP1.jpg",
//             cityLocalitiesList: [
//                 { "name": "Adarsh Colony" },
//                 { "name": "Agwanpur" },
//                 { "name": "Ajit Nagar" },
//                 { "name": "Ajronda" },
//                 { "name": "ALL SECTORS" },
//                 { "name": "Amru" },
//                 { "name": "Anangpur" },
//                 { "name": "Ankhir" },
//                 { "name": "Aravali" },
//                 { "name": "Aravali Vihar" },
//                 { "name": "Arya Nagar" },
//                 { "name": "Ashoka Enclave" },
//                 { "name": "Badarpur Border" },
//                 { "name": "Badkhal" },
//                 { "name": "Ballabhgarh" },
//                 { "name": "Barauli" },
//                 { "name": "Basantpur" },
//                 { "name": "Basilva Colony" },
//                 { "name": "Bhatia Colony" },
//                 { "name": "Bhoor Colony" },
//                 { "name": "Bhopani" },
//                 { "name": "Camp Market" },
//                 { "name": "Chandpur" },
//                 { "name": "Charmwood Village" },
//                 { "name": "Chawla Colony" },
//                 { "name": "Dabua Colony" },
//                 { "name": "Dayal Bagh" },
//                 { "name": "Dayal Basti" },
//                 { "name": "Dayalpur" },
//                 { "name": "Dhauj" },
//                 { "name": "Dher Colony" },
//                 { "name": "DLF Industrial Area" },
//                 { "name": "Faridpur" },
//                 { "name": "Friends Colony" },
//                 { "name": "Frontier Colony" },
//                 { "name": "Fruit Garden" },
//                 { "name": "Hodal" },
//                 { "name": "Housing Board colony" },
//                 { "name": "HUDA Sector 2" },
//                 { "name": "Indira Gandhi Colony" },
//                 { "name": "Indraprastha Colony" },
//                 { "name": "Jasna" },
//                 { "name": "Jawahar Colony" },
//                 { "name": "Jeevan Nagar" },
//                 { "name": "Jiwan Nagar" },
//                 { "name": "Kabulpur Bangar" },
//                 { "name": "Kanoongo Maholla" },
//                 { "name": "Kant Enclave" },
//                 { "name": "Kanungo Maholla" },
//                 { "name": "Kanwara" },
//                 { "name": "Kapra Colony" },
//                 { "name": "Karna" },
//                 { "name": "Katan Pahari" },
//                 { "name": "Krishna Colony" },
//                 { "name": "Lakewood city" },
//                 { "name": "Lakkarpur" },
//                 { "name": "Lane Pura" },
//                 { "name": "Lohagrah" },
//                 { "name": "Manjhawali" },
//                 { "name": "Mewla Maharajpur" },
//                 { "name": "Mohan Nagar" },
//                 { "name": "Moti Colony" },
//                 { "name": "Mujesar" },
//                 { "name": "Neelam Bata Colony" },
//                 { "name": "Neharpar" },
//                 { "name": "Nehru Colony" },
//                 { "name": "New Baselwa Colony" },
//                 { "name": "New Colony" },
//                 { "name": "Old Faridabad" },
//                 { "name": "Pali Village" },
//                 { "name": "Panchwati Colony" },
//                 { "name": "Panna Vihar" },
//                 { "name": "Piyala" },
//                 { "name": "Prakash Vihar" },
//                 { "name": "Prithla" },
//                 { "name": "Railway Colony" },
//                 { "name": "Rajeev Nagar" },
//                 { "name": "Rajiv Nagar" },
//                 { "name": "Rajpur Kalan" },
//                 { "name": "Ram Nagar" }
//                 // Add more localities here
//             ]

//         },
//         Noida: {
//             bannerImage: "OIP1.jpg",
//             cityLocalitiesList: [
//                 { "name": "Ambedkar city" },
//                 { "name": "Baraula" },
//                 { "name": "Bhangel" },
//                 { "name": "Hajipur" },
//                 { "name": "Indirapuram" },
//                 { "name": "Mamura" },
//                 { "name": "Noida Extension" },
//                 { "name": "Parthala Khanjarpur" },
//                 { "name": "Sarfbad" },
//                 { "name": "Sector 1" },
//                 { "name": "Sector 10" },
//                 { "name": "Sector 100" },
//                 { "name": "Sector 101" },
//                 { "name": "Sector 102" },
//                 { "name": "Sector 103" },
//                 { "name": "Sector 104" },
//                 { "name": "Sector 105" },
//                 { "name": "Sector 106" },
//                 { "name": "Sector 107" },
//                 { "name": "Sector 108" },
//                 { "name": "Sector 109" },
//                 { "name": "Sector 110" },
//                 { "name": "Sector 111" },
//                 { "name": "Sector 112" },
//                 { "name": "Sector 113" },
//                 { "name": "Sector 114" },
//                 { "name": "Sector 115" },
//                 { "name": "Sector 116" },
//                 { "name": "Sector 117" },
//                 { "name": "Sector 118" },
//                 { "name": "Sector 119" },
//                 { "name": "Sector 12" },
//                 { "name": "Sector 120" },
//                 { "name": "Sector 121" },
//                 { "name": "Sector 122" },
//                 { "name": "Sector 123" },
//                 { "name": "Sector 124" },
//                 { "name": "Sector 125" },
//                 { "name": "Sector 126" },
//                 { "name": "Sector 127" },
//                 { "name": "Sector 128" },
//                 { "name": "Sector 129" },
//                 { "name": "Sector 130" },
//                 { "name": "Sector 131" },
//                 { "name": "Sector 132" },
//                 { "name": "Sector 133" },
//                 { "name": "Sector 134" },
//                 { "name": "Sector 135" },
//                 { "name": "Sector 136" },
//                 { "name": "Sector 137" },
//                 { "name": "Sector 138" },
//                 { "name": "Sector 139" },
//                 { "name": "Sector 14" },
//                 { "name": "Sector 140" },
//                 { "name": "Sector 141" },
//                 { "name": "Sector 142" },
//                 { "name": "Sector 143" },
//                 { "name": "Sector 144" },
//                 { "name": "Sector 145" },
//                 { "name": "Sector 146" },
//                 { "name": "Sector 147" },
//                 { "name": "Sector 148" },
//                 { "name": "Sector 149" },
//                 { "name": "Sector 15" },
//                 { "name": "Sector 150" },
//                 { "name": "Sector 151" },
//                 { "name": "Sector 152" },
//                 { "name": "Sector 153" },
//                 { "name": "Sector 154" },
//                 { "name": "Sector 155" },
//                 { "name": "Sector 156" },
//                 { "name": "Sector 157" },
//                 { "name": "Sector 158" },
//                 { "name": "Sector 159" },
//                 { "name": "Sector 16" },
//                 { "name": "Sector 160" },
//                 { "name": "Sector 161" },
//                 { "name": "Sector 162" },
//                 { "name": "Sector 163" },
//                 { "name": "Sector 164" }
//                 // Add more localities here
//             ]

//         },
//         Bengaluru: {
//             bannerImage: "OIP1.jpg",
//             cityLocalitiesList:
//                 [
//                     { "name": "A Narayanapura" },
//                     { "name": "Akshya Nagar" },
//                     { "name": "Allalasandra" },
//                     { "name": "Ambalipura" },
//                     { "name": "Anagalapura" },
//                     { "name": "Anand Nagar" },
//                     { "name": "Azad Nagar" },
//                     { "name": "B Narayanapura" },
//                     { "name": "Babusapalaya" },
//                     { "name": "Bagalakunte" },
//                     { "name": "Bagalur" },
//                     { "name": "Bagaluru" },
//                     { "name": "Bagepalli" },
//                     { "name": "Baiyappanahalli" },
//                     { "name": "Balagere" },
//                     { "name": "Balaji Nagar" },
//                     { "name": "Baliganapalli" },
//                     { "name": "Banashankari" },
//                     { "name": "Banaswadi" },
//                     { "name": "Banjara Layout" },
//                     { "name": "Bank Avenue Colony" },
//                     { "name": "Bannerghatta" },
//                     { "name": "Bapuji Nagar" },
//                     { "name": "Basapura" },
//                     { "name": "Basavanagar" },
//                     { "name": "Basavanagudi" },
//                     { "name": "Basavanna Nagar" },
//                     { "name": "Basaveshwara Nagar" },
//                     { "name": "Battarahalli" },
//                     { "name": "Begur" },
//                     { "name": "Belathur" },
//                     { "name": "Bellahalli" },
//                     { "name": "Bellandur" },
//                     { "name": "Bennigana Halli" },
//                     { "name": "Benson Town" },
//                     { "name": "Bettahalasur" },
//                     { "name": "Bhoganhalli" },
//                     { "name": "Bhoopasandra" },
//                     { "name": "Bidadi" },
//                     { "name": "Bidrahalli" },
//                     { "name": "Bikkanahalli" },
//                     { "name": "Bilekahalli" },
//                     { "name": "Bommanahalli" },
//                     { "name": "Bommasandra" },
//                     { "name": "Bommenahalli" },
//                     { "name": "Brookefield" },
//                     { "name": "BTM Layout" },
//                     { "name": "Budigere" },
//                     { "name": "Budigere Cross" },
//                     { "name": "Byatarayanapura" },
//                     { "name": "Cambridge Layout" },
//                     { "name": "Carmelaram" },
//                     { "name": "Challaghatta" },
//                     { "name": "Chamarajpet" },
//                     { "name": "Channasandra" },
//                     { "name": "Cheemasandra" },
//                     { "name": "Chickpet" },
//                     { "name": "Chikballapur" },
//                     { "name": "Chikbanavara" },
//                     { "name": "Chikka Tirupathi" },
//                     { "name": "Chikkaballapur" },
//                     { "name": "Chikkabanavara" },
//                     { "name": "Chikkabidarakallu" },
//                     { "name": "Chikkalasandra" },
//                     { "name": "Chikkanagamangala" },
//                     { "name": "Chikkanahalli" },
//                     { "name": "Chikkasandra" },
//                     { "name": "Chinnapanahalli" },
//                     { "name": "Chintamani" },
//                     { "name": "Choodasandra" },
//                     { "name": "Cooke Town" },
//                     { "name": "Cottonpet" },
//                     { "name": "Cox Town" },
//                     { "name": "Cubbon Park" },
//                     { "name": "CV Raman Nagar" },
//                     { "name": "Dabaspete" },
//                     { "name": "Dasarahalli" },
//                     { "name": "Dayananda Nagar" },
//                     { "name": "Deepanjali Nagar" },
//                     { "name": "Defence Colony" }
//                     // Add more localities here
//                 ]
//         },
//         Hyderabad: {
//             bannerImage: "OIP1.jpg",
//             cityLocalitiesList:
//                 [
//                     { "name": "Aghapura" },
//                     { "name": "Ahmed Nagar" },
//                     { "name": "Aliabad" },
//                     { "name": "Ambedkar Nagar" },
//                     { "name": "Amber Nagar" },
//                     { "name": "Ameenpur" },
//                     { "name": "Ameerpet" },
//                     { "name": "Aminpur" },
//                     { "name": "Asif Nagar" },
//                     { "name": "Azamabad" },
//                     { "name": "Baber Bagh" },
//                     { "name": "Badangpet" },
//                     { "name": "Badi Chowdi" },
//                     { "name": "Bagh Amberpet" },
//                     { "name": "Bahadurpally" },
//                     { "name": "Bahadurpura" },
//                     { "name": "Balamrai" },
//                     { "name": "Balanagar" },
//                     { "name": "Balapur" },
//                     { "name": "Bandimet" },
//                     { "name": "Bandlaguda" },
//                     { "name": "Banjara Hills" },
//                     { "name": "Bapuji Nagar" },
//                     { "name": "Barkatpura" },
//                     { "name": "Basheer Bagh" },
//                     { "name": "Beeramguda" },
//                     { "name": "Begum Bazaar" },
//                     { "name": "Begumpet" },
//                     { "name": "Bhagya Nagar Colony" },
//                     { "name": "Bharat Nagar" },
//                     { "name": "Bholakpur" },
//                     { "name": "Bhuvanagiri" },
//                     { "name": "Bibinagar" },
//                     { "name": "BN Reddy Nagar" },
//                     { "name": "Boiguda" },
//                     { "name": "Bolarum" },
//                     { "name": "Borabanda" },
//                     { "name": "Bowenpally" },
//                     { "name": "Bowrampet" },
//                     { "name": "Brahim Patnam" },
//                     { "name": "Buddha Nagar" },
//                     { "name": "Chanda Nagar" },
//                     { "name": "Chandulal Baradari" },
//                     { "name": "Charlapally" },
//                     { "name": "Charminar" },
//                     { "name": "Chatta Bazar" },
//                     { "name": "Cherlapally" },
//                     { "name": "Chevalla" },
//                     { "name": "Chikkadpally" },
//                     { "name": "Chintal Basti" },
//                     { "name": "Chintapallyguda" },
//                     { "name": "Cyberabad" },
//                     { "name": "Dabeerpura North" },
//                     { "name": "Dammaiguda" },
//                     { "name": "Darul Shifa" },
//                     { "name": "Darus Salam" },
//                     { "name": "Dasarlapally" },
//                     { "name": "Dattatreya Colony" },
//                     { "name": "Devan Devdi" },
//                     { "name": "Dhoolpet" },
//                     { "name": "Dilshad Nagar" },
//                     { "name": "Dilsukh Nagar" },
//                     { "name": "Dundigal" },
//                     { "name": "Dwarkapuri Colony" },
//                     { "name": "East Marredpally" },
//                     { "name": "Falaknuma" },
//                     { "name": "Farooqnagar" },
//                     { "name": "Fateh Maidan" },
//                     { "name": "Fateh Nagar" },
//                     { "name": "Feelkhana" },
//                     { "name": "Film Nagar" },
//                     { "name": "Financial District" },
//                     { "name": "Gachibowli" },
//                     { "name": "Gagan Mahal" },
//                     { "name": "Gandhi Bhavan" },
//                     { "name": "Gandhi Nagar" },
//                     { "name": "Gandipet" },
//                     { "name": "Ghasmandi" },
//                     { "name": "Ghatkesar" },
//                     { "name": "Golconda" }
//                     // Add more localities here
//                 ]

//         },
//         Mumbai: {
//             bannerImage: "OIP1.jpg",
//             cityLocalitiesList:
//                 [
//                     { "name": "Aarey Milk Colony" },
//                     { "name": "Abhyudaya Nagar" },
//                     { "name": "Adharwadi" },
//                     { "name": "Agripada" },
//                     { "name": "Airport Area" },
//                     { "name": "Akurli Nagar" },
//                     { "name": "Alibag" },
//                     { "name": "Ambarnath" },
//                     { "name": "Ambedkar Nagar" },
//                     { "name": "Ambewadi" },
//                     { "name": "Ambivali" },
//                     { "name": "Amboli" },
//                     { "name": "Anand Nagar" },
//                     { "name": "Antop Hill" },
//                     { "name": "Apollo Bunder" },
//                     { "name": "Asangaon" },
//                     { "name": "Asha Nagar" },
//                     { "name": "August Kranti Maidan" },
//                     { "name": "Azad Nagar" },
//                     { "name": "Badlapur" },
//                     { "name": "Balkum" },
//                     { "name": "Ballard Estate" },
//                     { "name": "Bandra East" },
//                     { "name": "Bandra Kurla Complex" },
//                     { "name": "Bandra West" },
//                     { "name": "Bangur Nagar" },
//                     { "name": "Bazargate" },
//                     { "name": "Behram Baug" },
//                     { "name": "Beverly Park" },
//                     { "name": "Bhakti Park" },
//                     { "name": "Bhandup" },
//                     { "name": "Bharat Nagar" },
//                     { "name": "Bhayandar" },
//                     { "name": "Bhiwandi" },
//                     { "name": "Bhuleshwar" },
//                     { "name": "BN Bhavan" },
//                     { "name": "Boisar" },
//                     { "name": "Bolinj" },
//                     { "name": "Borivali" },
//                     { "name": "BPT Colony" },
//                     { "name": "Brahmand" },
//                     { "name": "Breach Candy" },
//                     { "name": "Byculla" },
//                     { "name": "CGS Colony" },
//                     { "name": "Chakala" },
//                     { "name": "Chamar Baug" },
//                     { "name": "Chandan Shanti" },
//                     { "name": "Chandivali" },
//                     { "name": "Charai" },
//                     { "name": "Charkop" },
//                     { "name": "Chembur" },
//                     { "name": "Chikholi" },
//                     { "name": "Chikuwadi" },
//                     { "name": "Chinch Bandar" },
//                     { "name": "Chincholi Bunder" },
//                     { "name": "Chinchpokli" },
//                     { "name": "Chiplun" },
//                     { "name": "Chira Bazaar" },
//                     { "name": "Chowk" },
//                     { "name": "Chowpatty" },
//                     { "name": "Chuna Bhatti" },
//                     { "name": "Churchgate" },
//                     { "name": "Colaba" },
//                     { "name": "Cotton Green" },
//                     { "name": "Cotton Green West" },
//                     { "name": "CP Tank" },
//                     { "name": "Crawford Market" },
//                     { "name": "CST Area" },
//                     { "name": "Cuffe Parade" },
//                     { "name": "Dadar" },
//                     { "name": "Dahisar" },
//                     { "name": "Dahivali" },
//                     { "name": "Dana Bunder" },
//                     { "name": "Danda" },
//                     { "name": "Dattapada" },
//                     { "name": "Deonar" },
//                     { "name": "Devdaya Nagar" },
//                     { "name": "Dharavi" },
//                     { "name": "Dhobi Ali" },
//                     { "name": "Dhobi Talao" },
//                     { "name": "Dhokali" },
//                     { "name": "Dindoshi" },
//                     { "name": "Dockyard" },
//                     { "name": "Dombivali" },
//                     { "name": "Dongri" },
//                     { "name": "Dronagiri" },
//                     { "name": "Eden Wood" },
//                     { "name": "Eksar" },
//                     { "name": "Ekvira Darshan" },
//                     { "name": "Evershine Nagar" },
//                     { "name": "Flora Fountain" },
//                     { "name": "Fort" },
//                     { "name": "Four Bungalows" },
//                     { "name": "Gamdevi" },
//                     { "name": "Gandhi Nagar" },
//                     { "name": "Gauripada" },
//                     { "name": "Gawand Baug" },
//                     { "name": "Ghati Pada" },
//                     { "name": "Ghatkopar" },
//                     { "name": "Girgaon" },
//                     { "name": "Girgaum" },
//                     { "name": "Gokul Township" },
//                     { "name": "Gokuldham" },
//                     { "name": "Gorai" },
//                     { "name": "Goregaon" },
//                     { "name": "Govandi" },
//                     { "name": "Government Colony" },
//                     { "name": "Gowalia Tank" },
//                     { "name": "Grant Road East" },
//                     { "name": "Green Park Extension" },
//                     { "name": "GTB Nagar" },
//                     { "name": "Gulalwadi" },
//                     { "name": "Haji Ali" },
//                     { "name": "Hanuman Nagar" },
//                     { "name": "Hatkesh Udhog Nagar" },
//                     { "name": "Horiman Circle" },
//                     { "name": "Hutatma Chowk" },
//                     { "name": "Huzefa Nagar" },
//                     { "name": "IC Colony" },
//                     { "name": "Industrial Area" }
//                 ]

//         },
//         Indore: {
//             bannerImage: "OIP1.jpg",
//         },
//         Chennai: {
//             bannerImage: "OIP1.jpg",
//         },
//         Pune: {
//             bannerImage: "OIP1.jpg",
//         },
//         Surat: {
//             bannerImage: "OIP1.jpg",
//         },
//         Bhopal: {
//             bannerImage: "OIP1.jpg",
//         },
//         kolkata: {
//             bannerImage: "OIP1.jpg",
//         },
//         Kanpur: {
//             bannerImage: "OIP1.jpg",
//         },
//         Lucknow: {
//             bannerImage: "OIP1.jpg",
//         },
//         Goa: {
//             bannerImage: "OIP1.jpg",
//         },
//         Jaipur: {
//             bannerImage: "OIP1.jpg",
//         },
//         Ahmedabad: {
//             bannerImage: "OIP1.jpg",
//         },
//         Chandigarh: {
//             bannerImage: "OIP1.jpg",
//         }
//     };
//     // const location = useLocation();
//     const router = useRouter();
//     // const { city } = router.query;
//     useEffect(() => {
//         if (router.isReady) {
//             const { city } = router.query;
//             if (city) {
//                 setCity(city);

//                 // Check if the city includes ".html" and perform redirection
//                 if (city.includes('.html')) {
//                     // Redirect to home page
//                     router.push('/');
//                 } else {
//                     // Handle cases where the city does not include ".html"
//                     console.log(`City: ${city}`); // For debugging
//                 }
//             }
//         }
//     }, [router.isReady, router.query]);

   

//     if (!router.isReady) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="p-0">
//             <div style={styles.homebanner} className="homebanner">
//                 <div style={styles.bgImg} className="bgImg">
//                     <div style={styles.pageWidth}>
//                         <div style={styles.textContainer} className="textContainerhome">
//                             <h1 style={{ fontSize: "40px", fontWeight: "500", margin: "0" }}>{"Simplifying and Enhancing celebrations."}</h1>
//                             <h2 style={{ fontSize: "72px", fontWeight: "900", margin: "0 0 10px", lineHeight: "77px", margin: "0px 0 10px", padding: "3px 14% 5px 14%", textTransform: "uppercase" }}>{"ALL PARTY SERVICE ONE PLATFORM"}</h2>
//                         </div>
//                     </div>
//                     <div style={styles.bannerBottomSec} className="bannerBottomSec">
//                         <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
//                             <Link href={`/${city}/balloon-decoration`} style={{ textDecoration: "none" }}>
//                                 <Image src={bannerDecorationImage} alt="Decoration Near me" style={{ height: 'auto' }} />
//                                 <h2 style={{ fontSize: "16px", fontWeight: "normal", color: "#fff", textAlign: "center" }}>Decoration</h2>
//                             </Link>
//                         </div>
//                         <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
//                             <Link href={`/${city}/book-chef-cook-for-party`} style={{ textDecoration: "none" }}>
//                                 <Image src={bannerChefImage} alt="Chef Near me" style={{ height: 'auto' }} />
//                                 <h2 style={{ fontSize: "18px", fontWeight: "normal", color: "#fff", textAlign: "center" }}>Hire Chef</h2>
//                             </Link>
//                         </div>
//                         <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
//                             <Link href="/party-food-delivery-live-catering-buffet/party-food-delivery" style={{ textDecoration: "none" }}>
//                                 <Image src={bannerFoodDeliveryImage} alt="Food Delivery Near me" style={{ height: 'auto' }} />
//                                 <h2 style={{ fontSize: "18px", fontWeight: "normal", color: "#fff", textAlign: "center" }}>Food Delivery</h2>
//                             </Link>
//                         </div>
//                         <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
//                             <Link href="/party-food-delivery-live-catering-buffet/party-live-buffet-catering" style={{ textDecoration: "none" }}>
//                                 <Image src={service4Image} alt="Return Gift Near me" style={{ height: 'auto' }} />
//                                 <h2 style={{ fontSize: "18px", fontWeight: "normal", color: "#fff", textAlign: "center" }}>Live Catering</h2>
//                             </Link>
//                         </div>
//                         <div style={styles.bannerDecorationImage} className="bannerDecorationImage">
//                             <Link href="/party-food-delivery-live-catering-buffet/party-food-delivery" style={{ textDecoration: "none" }}>
//                                 <Image src={bannerEntertainmentImage} alt="Entertainment Near me" style={{ height: 'auto' }} />
//                                 <h2 style={{ fontSize: "18px", fontWeight: "normal", color: "#fff", textAlign: "center" }}>Entertainment</h2>
//                             </Link>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//             <div style={styles.celebrateWithUs} className="celebrateWithUs">
//                 <div style={{ padding: "0 6%" }}>
//                     <h3 style={{ fontSize: "70px", fontWeight: "bold", color: "#E6756B", margin: "35px 0 20px", textAlign: "center" }}>CELEBRATE WITH US</h3>
//                     <div style={styles.celebrateBottomSec} className="celebrateBottomSec">
//                         <div style={styles.celebrateBox} className="celebrateBox">
//                             <Image src={Celebrate1Image} alt="Birthday and Anniversary" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
//                             <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Birthday and Anniversary'}</h3>
//                         </div>
//                         <div style={styles.celebrateBox} className="celebrateBox">
//                             <Image src={Celebrate2Image} alt="House Parties" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
//                             <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'House Parties'}</h3>
//                         </div>
//                         <div style={styles.celebrateBox} className="celebrateBox">
//                             <Image src={Celebrate3Image} alt="Corporate Events" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
//                             <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Corporate Events'}</h3>
//                         </div>
//                         <div style={styles.celebrateBox} className="celebrateBox">
//                             <Image src={Celebrate4Image} alt="Wedding Events" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
//                             <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Wedding Events'}</h3>
//                         </div>
//                         <div style={styles.celebrateBox} className="celebrateBox">
//                             <Image src={Celebrate5Image} alt="Gatherings" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
//                             <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Gatherings'}</h3>
//                         </div>
//                         <div style={styles.celebrateBox} className="celebrateBox">
//                             <Image src={Celebrate6Image} alt="Kids Events" style={styles.celebrateDecorationImage} className="celebrateDecorationImage" />
//                             <h3 style={{ fontSize: "16px", color: "#0f0f0f", fontWeight: "600", textAlign: "center", margin: "7px 0 20px 0" }}>{'Kids Events'}</h3>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section id="section6" class="sectionidsec">
//                 <div style={styles.pageWidth}>
//                     <div id="faqQ">
//                         <div>
//                             <h1 style={{ fontSize: "70px", textTransform: "uppercase", fontWeight: "bold", color: "#E6756B", margin: "35px 0 0px", textAlign: "center" }}>Faq</h1>
//                         </div>
//                         <div>
//                             <strong>1: Do you provide Balloon Room Decoration Services in {city?.toUpperCase()}?</strong>
//                             <p>A: Yes, we have a huge range to offer Room Balloon Decoration services in the vibrant city of  {city?.toUpperCase()} </p>
//                             <p>A: Our skilled and well-experienced team can beautifully transform any room with balloons as per your occasion and your mood of celebration.</p>
//                         </div>
//                         <div>
//                             <strong>2: Do you offer same-day bookings for Birthday Decoration at Home in {city?.toUpperCase()}?</strong>
//                             <p>A:Yes, we understand that plans can change, and sometimes you need decorations on short notice. At HORA, we strive to accommodate same-day birthday decoration bookings possible. Contact our customer support team, and we'll do our best to make your event special, even on short notice..</p>
//                         </div>
//                         <div>
//                             <strong>3: Can you provide me some budget-friendly suggestions for 1st Birthday Party Decorations?</strong>
//                             <p>A: Of course! Consider themes for a first birthday such as Jungle Theme, Princess or Barbie Theme, Unicorn Theme, Space Theme and many more. For wonderful photo options, add bright colors, balloons, customized banners, and a cake smash setup. Visit our website and explore a wide range of decoration options for first birthday.</p>
//                         </div>
//                         <div>
//                             <strong>4: What is the cost of Anniversary Balloon Decoration in  {city?.toUpperCase()}?</strong>
//                             <p>A: The cost of our Anniversary Decoration services depends on various factors such as the type of decoration, the size of the event, and the location. We offer packages starting from Rs.1200 for a simple yet elegant Anniversary Decoration.</p>
//                         </div>
//                         <div>
//                             <strong>5: How can I arrange for Balloon Decoration at Home in {city?.toUpperCase()} for any celebration?</strong>
//                             <p>A: 7eventzz makes it simple to bring the joy of Balloon Decoration to your doorstep for any celebration in Bangalore. Our website serves as your guide to planning memorable parties from the comfort of your own home. Choose the "Balloon Decoration at Home" option, enter the event details, modify your requirements, and complete the simple booking process. Our skilled team will handle all of the details, ensuring that your celebration is both seamless and extraordinary.</p>
//                         </div>
//                         <div>
//                             <strong>6: Areas we provide our services across {city?.toUpperCase()} </strong>
//                             <p>A: We provide decorations in all areas of Bengaluru- Sarjapur, Bellandur, Marathahalli, HSR Layout, Madiwala, MG Road, Kundalahalli, Brookefield, Defence Colony Bagalagunte, Bannerghatta, Azad Nagar, Banashankari, Banaswadi, Bapuji Nagar, Basavanagar, Bhuvaneshwari Nagar, Bidadi, Bommasandra, BTM Layout, Chandapura, Chandra Layout, Electronic City, Frazer Town, Ganga Nagar, HBR Layout, Hebbal, Hegde Nagar, Hennur, HRBR Layout, Indira Nagar, Jagajeevanram Nagar, Jayanagar, Jayamahal, Kalyan Nagar, Kammanahalli, Kanakapura, Hebbal Kempapura, Koramangala, Kothanur, LB Shastri Nagar, Mahadevpura, Malleshpalya, Malleshwaram, Sahakara Nagar, Sarjapur, Shanthi Nagar, Shivaji Nagar, Ulsoor, Uttarahalli, Whitefield, Williams Town, K R Puram, Vijayanagar, JP Nagar, Vittal Nagar, Bellandur, Prashanth Nagar, Vijaypura, Kamala Nagar, Gandhi Nagar, HSR Layout, Rajiv Gandhi Nagar, Chinnapa Garden, Raghavendra Colony, Madhava Nagar, Munireddypalya, Kartik Nagar, Bikasipura, Essel Gardens, Nehru Nagar, Shankarapura, Tilak Nagar, Ayyappa Nagar, ITPL, Budigere Cross and Nearby Locations in Bengaluru.</p>
//                         </div>
//                         <div>
//                             <strong>6: Our Services in  {city?.toUpperCase()} </strong>
//                             <p>A: We provide decorations in all areas of Bengaluru - Sarjapur, Bellandur, Marathahalli, HSR Layout, Madiwala, MG Road, Kundalahalli, Brookefield, Defence Colony Bagalagunte, Bannerghatta, Azad Nagar, Banashankari, Banaswadi, Bapuji Nagar, Basavanagar, Bhuvaneshwari Nagar, Bidadi, Bommasandra, BTM Layout, Chandapura, Chandra Layout, Electronic City, Frazer Town, Ganga Nagar, HBR Layout, Hebbal, Hegde Nagar, Hennur, HRBR Layout, Indira Nagar, Jagajeevanram Nagar, Jayanagar, Jayamahal, Kalyan Nagar, Kammanahalli, Kanakapura, Hebbal Kempapura, Koramangala, Kothanur, LB Shastri Nagar, Mahadevpura, Malleshpalya, Malleshwaram, Sahakara Nagar, Sarjapur, Shanthi Nagar, Shivaji Nagar, Ulsoor, Uttarahalli, Whitefield, Williams Town, K R Puram, Vijayanagar, JP Nagar, Vittal Nagar, Bellandur, Prashanth Nagar, Vijaypura, Kamala Nagar, Gandhi Nagar, HSR Layout, Rajiv Gandhi Nagar, Chinnapa Garden, Raghavendra Colony, Madhava Nagar, Munireddypalya, Kartik Nagar, Bikasipura, Essel Gardens, Nehru Nagar, Shankarapura, Tilak Nagar, Ayyappa Nagar, ITPL, Budigere Cross and Nearby Locations in Bengaluru.</p>
//                         </div>
//                         <div>
//                             <p>
//                                 Decorator near me in {city?.toUpperCase()},
//                                 Balloon Decorator near me in {city?.toUpperCase()},
//                                 Flower Decorator near me in {city?.toUpperCase()},
//                                 Decoration service near me in {city?.toUpperCase()},
//                                 Balloon Decoration service near me in {city?.toUpperCase()},
//                                 Flower Decoration service near me in {city?.toUpperCase()},
//                                 Birthday Decoration service near me in {city?.toUpperCase()},
//                                 Anniversary decoration service near me in {city?.toUpperCase()},
//                                 baby shower Decoration service near me in {city?.toUpperCase()},
//                                 Baby welome Decoration service near me in {city?.toUpperCase()},
//                                 Online balloon decoration in {city?.toUpperCase()};
//                                 Best balloon decorations{city?.toUpperCase()};
//                                 Kids birthday decoration service near me in {city?.toUpperCase()}
//                             </p>
//                         </div>
//                     </div>
//                     {/* <p id="city-area-title" style={{ fontSize: "70px", textTransform: "uppercase", fontWeight: "bold", color: "#E6756B", margin: "35px 0 2px", textAlign: "center" }}>Serving all Areas in {city}</p>
//                     <p style={{ fontSize: "10px", fontWeight: "bold", color: "#E6756B", margin: "2px 0 2px", textAlign: "center" }}>All localities are here</p>
//                     <div id="city-area-list">
//                         <ul style={{ listStyle: "none", padding: "20px 0" }}>
//                             {cityData[city]?.cityLocalitiesList.map((item) => {
//                                 return (
//                                     <li style={{ padding: "0 10px", display: "inline-block" }}><a href="/">{item.name}</a></li>
//                                 )
//                             })}
//                         </ul>
//                     </div> */}
//                 </div>
//             </section>
//             <section id="section7" class="sectionidsec">
//                 <div style={styles.pageWidth}>
//                     <p style={{ fontSize: "70px", textTransform: "uppercase", fontWeight: "bold", color: "#E6756B", margin: "35px 0 2px", textAlign: "center" }} className="other-cities">Other Cities</p>
//                     <div class="tab-inner">
//                         <ul style={{ listStyle: "none", padding: "20px 0" }}>
//                             <li className="city-link" data-city="Delhi" style={{ padding: "0 10px", display: "inline-block" }} >
//                                 <Link href="/balloon-decoration/delhi">Delhi</Link>
//                             </li>
//                             <li className="city-link" data-city="Gurugram" style={{ padding: "0 10px", display: "inline-block" }}>

//                                 <Link href="/balloon-decoration/delhi">Gurugram</Link>
//                             </li>
//                             <li className="city-link" data-city="Ghaziabad" style={{ padding: "0 10px", display: "inline-block" }}>

//                                 <Link href="/balloon-decoration/delhi">Ghaziabad</Link>
//                             </li>
//                             <li className="city-link" data-city="Faridabad" style={{ padding: "0 10px", display: "inline-block" }}>

//                                 <Link href="/balloon-decoration/delhi">Faridabad</Link>
//                             </li>
//                             <li className="city-link" data-city="Noida" style={{ padding: "0 10px", display: "inline-block" }}>

//                                 <Link href="/balloon-decoration/delhi">Noida</Link>
//                             </li>
//                             <li className="city-link" data-city="Bengaluru" style={{ padding: "0 10px", display: "inline-block" }}>

//                                 <Link href="/balloon-decoration/delhi">Bengaluru</Link>
//                             </li>
//                             <li className="city-link" data-city="Hyderabad" style={{ padding: "0 10px", display: "inline-block" }}>

//                                 <Link href="/balloon-decoration/delhi">Hyderabad</Link>
//                             </li>
//                             <li className="city-link" data-city="Mumbai" style={{ padding: "0 10px", display: "inline-block" }}>

//                                 <Link href="/balloon-decoration/delhi">Mumbai</Link>
//                             </li>
//                             <li className="city-link" data-city="Indore" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="balloon-decoration/indore">Indore</Link>
//                             </li>
//                             <li className="city-link" data-city="Chennai" style={{ padding: "0 10px", display: "inline-block" }}>

//                                 <Link href="/balloon-decoration/chennai">Chennai</Link>
//                             </li>
//                             <li className="city-link" data-city="Pune" style={{ padding: "0 10px", display: "inline-block" }}>

//                                 <Link href="/balloon-decoration/pune">Pune</Link>
//                             </li>
//                             <li className="city-link" data-city="Surat" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="#" >Surat</Link>

//                             </li>
//                             <li className="city-link" data-city="Bhopal" style={{ padding: "0 10px", display: "inline-block" }}>

//                                 <Link href="/balloon-decoration/bhopal">Bhopal</Link>
//                             </li>
//                             <li className="city-link" data-city="kanpur" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration/kanpur">Kanpur</Link>
//                             </li>
//                             <li className="city-link" data-city="Lucknow" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration/Lucknow">Lucknow</Link>
//                             </li>
//                             <li className="city-link" data-city="kolkata" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration/kolkata">kolkata</Link>
//                             </li>
//                             <li className="city-link" data-city="Goa" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration/Goa">Goa</Link>
//                             </li>
//                         </ul>



//                         <div id="city-content">
//                             <div class="des-city-area">
//                                 <h1 style={{ fontSize: "70px", textTransform: "uppercase", fontWeight: "bold", color: "#E6756B", margin: "35px 0 0px", textAlign: "center" }}>Description</h1>
//                                 <div id="city-description" style={{ fontSize: "10px", padding: "0 10px" }}>
//                                     <p>Home Balloon Decoration in {city} for Birthday Party celebrations</p>
//                                     <p>Decorations and Gifts can make anybody happy. Who doesn’t love getting pampered? Everybody does, though all may not ask for it. A birthday is an occasion to rejoice with our friends and loved ones. These days’ birthday themes and decorations seem to play a major role in any birthday party. Balloons are a necessary thing when it comes to decorating for birthday parties not because Online balloon decoration is cheap and colorful but because balloon decoration adds warm fuzzies to the party which creates a blissful moment in the hearts of people. Balloons are party highlighters! They not only brighten up birthday parties but also bring the group together in balloon bursting activities. Balloon birthday themes have always been fun and easy. The bright and colorful balloons are an ideal choice for any birthday party. When people hear the name of balloons decoration, they anticipate a happy moment to come which makes them feel extremely happy from within. It enlightens the festive mood with its elegant design, color and pattern. There are so many things you can do to create the best balloon decoration with the help of the best party planner in Bangalore or balloon decorators in {city}. These are the things you can do to make your birthday parties memorable.</p>
//                                     <p>Birthday Balloon Decoration in {city}</p>
//                                     <p>Birthdays are memorable occasions for all of us. Who does not love celebrating their birthday, kids love gifts, youngsters love to get their dream stuff and grown-up loves to get all the attention and special treatment by their near and dear ones, birthday is the happiest day of one’s life. This day not only makes the birthday boy or girl happy but also injects the family members with cheerful vibes. That’s the reason everyone is so excited to celebrate birthdays. And this is the sole reason that in India and across the globe, birthdays are no less than festivals, So celebrate your birthday with beautiful balloon decoration at home in {city}. Are you looking for the Best Balloon decorator in {city}? You want to opt for the Professional balloon decoration services but at the same time wanted it to be budget friendly? Our on-site balloon decorating service in Bangalore by HORA had created a wow and stunning backdrop for your corporate as well as personal events. The variety of balloon designs includes Backdrop, Ring Decoration, Sequence photo booth and so on. If you want to introduce fun to your events and looking for some unique assortment of party decoration then book Best Balloon Decoration in {city} from us.</p>
//                                     <p>Online Balloon Decoration Shop in {city}</p>
//                                     <p>Organizing and managing an event yourself can be tedious and, not to mention, time consuming. With everyday activities becoming simpler, the fun-filled episodes in your life have become even more precious. Celebrating them in a fashionable and classy manner is what makes the best memories. Whenever people gather, regardless of their number or purpose, someone needs to handle the intricacies to ensure the celebration is a success. stands the vitality of time, cooperation, and every other aspect that surrounds the planning of an event. With a fresh team of skilled, creative and motivated professionals, HORA offers the coolest event planning services in more than 100+ Cities in India Being young in this business; we bring to you a blend of innovation and style that’s simply new. Our focus is to provide you with the latest in trend and to create new trends. Taking your personal preferences into consideration and mixing it with new-age design layouts and themes, our primary goal is to help you create amazing memories to cherish for a lifetime. So what are you waiting for? book your favourite occasion from the best balloon decoration shop near me in {city}.</p>
//                                     <p>Choose HORA for all your celebrations and parties at cheapest rates</p>
//                                     <p>Get all your decoration requirements under one roof on HORA, from Baby Shower decoration to Welcome Baby decorations at home in {city}. We specialize in creating dreamy and delightful setups for various events, ensuring every moment is special and memorable.</p>
//                                     <p>
//                                         Decorator near me in {city?.toUpperCase()},
//                                         Balloon Decorator near me in {city?.toUpperCase()},
//                                         Flower Decorator near me in {city?.toUpperCase()},
//                                         Decoration service near me in {city?.toUpperCase()},
//                                         Balloon Decoration service near me in {city?.toUpperCase()},
//                                         Flower Decoration service near me in {city?.toUpperCase()},
//                                         Birthday Decoration service near me in {city?.toUpperCase()},
//                                         Anniversary decoration service near me in {city?.toUpperCase()},
//                                         baby shower Decoration service near me in {city?.toUpperCase()},
//                                         Baby welome Decoration service near me in {city?.toUpperCase()},
//                                         Online balloon decoration in {city?.toUpperCase()};
//                                         Best balloon decorations{city?.toUpperCase()};
//                                         Kids birthday decoration service near me in {city?.toUpperCase()}
//                                     </p>
//                                     <p>
//                                         event planning certification,event organizing courses,event planner classes,event planner training,event planning course,event mangement certification,how to become a certified event planner,event certification,how to plan an event,event planning,event planners,helena paschal,how to plan an event houston,corporate event planner,business event planner,how to become an event planner,how to start an event planner business,event planning for beginners

//                                     </p>
//                                 </div>
//                             </div>
//                         </div>


//                     </div>
//                     <p id="city-seo-content" style={{ fontSize: "10px", padding: "0 10px" }}>

//                         Online balloon decoration in {city}, Online decoration in {city}, Online balloon decorators in {city}, Online decorator in {city}; top balloon decorator in {city}; top balloon decorator in {city}; Excellent birthday party balloon decoration in {city}; event organising companies in {city}; beautiful theme balloon balloon decoration in {city}; beautiful theme flower balloon decoration in {city}; Hire balloon decoration at home in {city}; Best balloon decoration in {city}, Best decoration in {city}, Best balloon decorator in {city}; Best decorator in {city}; Balloon decoration at home in {city}; Balloon decorator at home in {city}; Best Balloon decorator at home in {city}; Best Balloon decoration at home in {city}; Professional balloon decoration services in {city}; Room Balloon Decoration; Hall Decoration; Large Decorations, Premium Decorations; Room decoration designs; Home Decoration; Stage decoration; Venue decoration; Best Room Balloon Decoration; Best Hall Decoration; Best Large Decorations, Best Premium Decorations; Best Room decoration designs; Best Home Decoration; Best Stage decoration; Best Venue decoration;
//                         Same-day bookings for Birthday Decoration at Home in {city}; Same-day bookings for Anniversary Decoration at Home in {city}; Same-day bookings for Birthday Decoration at in {city}. Same-day bookings for Baby shower Decoration at Home in {city}; Same-day bookings for Car Decoration at Home in {city}; Same-day bookings for first night Decoration at Home in {city}; Same-day bookings for welcome baby Decoration at Home in {city}
//                         Jungle Theme Decoration design, Jungle Theme Decorator near me; Jungle theme decoration under 1500; Jungle theme decoration under 5000; Jungle theme decoration under 10000; Jungle Theme balloon Decoration design; Jungle Theme balloon Decorator near me; Princess or Barbie Theme Decoration design, Princess or Barbie Theme Decorator near me; Princess or Barbie theme decoration under 1500; Princess or Barbie theme decoration under 5000; Jungle theme decoration under 10000; Princess or Barbie Theme balloon Decoration design; Princess or Barbie Theme balloon Decorator near me; Unicorn Theme Decoration design, Unicorn Theme Decorator near me; Unicorn theme decoration under 1500; Unicorn theme decoration under 5000; Unicorn theme decoration under 10000; Unicorn Theme balloon Decoration design; Unicorn Theme balloon Decorator near me; Space Theme Decoration design, Space Theme Decorator near me; Space theme decoration under 1500; Space theme decoration under 5000; Space theme decoration under 10000; Space Theme balloon Decoration design; Space Theme balloon Decorator near me;

//                         First birthday decoration; Second year birthday decoration, 5th year birthday decoration, 10th Birthday decoration; Anniversary Balloon Decoration in Bangalore; Kids birthday decoration; Birthday decoration; Decoration starting 1200 Rs; Budget-friendly suggestions for 1st Birthday Party Decorations; Budget-friendly suggestions for 2nd Birthday Party Decorations; Budget-friendly suggestions for 5th Birthday Party Decorations; Budget-friendly suggestions for 10th Birthday Party Decorations; Best balloon decorator for small parties in {city}, Best balloon decoration for small parties in {city}; Mini Decoration in {city},
//                         Book a decorator in {city}, Book a decoration in {city}, Book a balloon decorator in {city}, Book a flower decoration in {city}, Book a balloon decoration in {city}, Book a flower decorator in {city}; Book a trained verified decorator near you in {city}, Bookadecortor in {city},
//                         Decoration for small parties in {city}, Top Decorator in {city}, Decoration services in {city}, Decorator at home service in {city}, Decorator for a night in {city}, Decoration for a night in {city}, Decorator for hire in {city}, Decoration at my home in {city}, Decorator near me in {city}, Balloon Decorator near me in {city}, Flower Decorator near me in {city}, Decoration service near me in {city}, Balloon Decoration service near me in {city}, Flower Decoration service near me in {city}, Birthday Decoration service near me in {city}, Anniversary decoration service near me in {city}, baby shower Decoration service near me in {city}, Baby welome Decoration service near me in {city}; Simple birthday decoration at home; Simple birthday decoration in {city};

//                         Balloon Decoration for small parties in {city}, Top balloon Decorator in {city}, balloon Decoration services in {city}, balloon Decorator at home service in {city}, balloon Decorator for a night in {city}, Decorator for hire in {city}, balloon Decoration at my home in {city}, balloon Decorator near me in {city}, Balloon Decoration near me in {city}, Flower Decorator near me in {city}, Decoration service near me in {city}, Balloon Decoration service near me in {city}, Flower Decoration service near me in {city}, Birthday Decoration service near me in {city}, Anniversary decoration service near me in {city}, baby shower Decoration service near me in {city}, Baby welome Decoration service near me in {city}; balloon decoration for birthday at home in {city};
//                         balloon decoration ideas; Astronaut Space Theme balloon decoration; Avenger Space Theme balloon decoration; Boss Baby Theme balloon decoration; Baby Shark Theme balloon decoration; Barbie Theme balloon decoration; Cocomelon Theme balloon decoration; Car Theme balloon decoration; Circus Theme balloon decoration; Dinosaur Theme balloon decoration; Jungle Theme balloon decoration; Kitty Theme balloon decoration; Lion Theme balloon decoration; Mickey Mouse Theme balloon decoration; Minecraft Theme balloon decoration; Mermail Theme balloon decoration; Pokemon Theme balloon decoration; Princess Theme balloon decoration; Panda Theme balloon decoration; Traffic Theme balloon decoration; Super Dog Theme balloon decoration; Unicorn Theme balloon decoration                    </p>
//                 </div>



//             </section>
//             <section id="section7" class="sectionidsec">
//                 <div style={styles.pageWidth}>
//                     <p style={{ fontSize: "70px", textTransform: "uppercase", fontWeight: "bold", color: "#E6756B", margin: "35px 0 2px", textAlign: "center" }} className="other-cities">Other Services</p>
//                     <div class="tab-inner">
//                         <ul style={{ listStyle: "none", padding: "20px 0" }}>
//                             <li className="city-link" data-city={city} style={{ padding: "0 10px", display: "inline-block" }} >
//                                 <Link href="/balloon-decoration">Birthday Decoration in {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Gurugram" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">Baby Shower Decoration in {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Ghaziabad" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">Baby Welcome Decoration in {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Faridabad" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">First Night Decoration in {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Noida" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="balloon-decoration">Kids Birthday Decoration in  {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Bengaluru" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">Anniversary Decoration in {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Hyderabad" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">Candle Light Dinner in  {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Mumbai" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">Car Decoration in  {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Indore" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">Naming Ceremony Decoration in {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Chennai" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">Terrace Decoration in{city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Pune" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">Proposal Decoration in {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Surat" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">Bride-to-be Decoration in {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Bhopal" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">Cabana Decoration in {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="kanpur" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">Haldi Decoration in {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Lucknow" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration">Balloon Decoration in {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="kolkata" style={{ padding: "0 10px", display: "inline-block" }}>
//                                 <Link href="/balloon-decoration" >Office Decoration in  {city}</Link>
//                             </li>
//                             <li className="city-link" data-city="Goa" style={{ padding: "0 10px", display: "inline-block" }}>

//                                 <Link href="/balloon-decoration">Engagement Ring Platter in {city}</Link>
//                             </li>
//                         </ul>

//                     </div>
//                     <p id="city-seo-content" style={{ fontSize: "5px", margin: "20px 0 20px " }}>

//                         Online balloon decoration in {city}, Online decoration in {city}, Online balloon decorators in {city}, Online decorator in {city}; top balloon decorator in {city}; top balloon decorator in {city}; Excellent birthday party balloon decoration in {city}; event organising companies in {city}; beautiful theme balloon balloon decoration in {city}; beautiful theme flower balloon decoration in {city}; Hire balloon decoration at home in {city}; Best balloon decoration in {city}, Best decoration in {city}, Best balloon decorator in {city}; Best decorator in {city}; Balloon decoration at home in {city}; Balloon decorator at home in {city}; Best Balloon decorator at home in {city}; Best Balloon decoration at home in {city}; Professional balloon decoration services in {city}; Room Balloon Decoration; Hall Decoration; Large Decorations, Premium Decorations; Room decoration designs; Home Decoration; Stage decoration; Venue decoration; Best Room Balloon Decoration; Best Hall Decoration; Best Large Decorations, Best Premium Decorations; Best Room decoration designs; Best Home Decoration; Best Stage decoration; Best Venue decoration;
//                         Same-day bookings for Birthday Decoration at Home in {city}; Same-day bookings for Anniversary Decoration at Home in {city}; Same-day bookings for Birthday Decoration at in {city}. Same-day bookings for Baby shower Decoration at Home in {city}; Same-day bookings for Car Decoration at Home in {city}; Same-day bookings for first night Decoration at Home in {city}; Same-day bookings for welcome baby Decoration at Home in {city}
//                         Jungle Theme Decoration design, Jungle Theme Decorator near me; Jungle theme decoration under 1500; Jungle theme decoration under 5000; Jungle theme decoration under 10000; Jungle Theme balloon Decoration design; Jungle Theme balloon Decorator near me; Princess or Barbie Theme Decoration design, Princess or Barbie Theme Decorator near me; Princess or Barbie theme decoration under 1500; Princess or Barbie theme decoration under 5000; Jungle theme decoration under 10000; Princess or Barbie Theme balloon Decoration design; Princess or Barbie Theme balloon Decorator near me; Unicorn Theme Decoration design, Unicorn Theme Decorator near me; Unicorn theme decoration under 1500; Unicorn theme decoration under 5000; Unicorn theme decoration under 10000; Unicorn Theme balloon Decoration design; Unicorn Theme balloon Decorator near me; Space Theme Decoration design, Space Theme Decorator near me; Space theme decoration under 1500; Space theme decoration under 5000; Space theme decoration under 10000; Space Theme balloon Decoration design; Space Theme balloon Decorator near me;

//                         First birthday decoration; Second year birthday decoration, 5th year birthday decoration, 10th Birthday decoration; Anniversary Balloon Decoration in Bangalore; Kids birthday decoration; Birthday decoration; Decoration starting 1200 Rs; Budget-friendly suggestions for 1st Birthday Party Decorations; Budget-friendly suggestions for 2nd Birthday Party Decorations; Budget-friendly suggestions for 5th Birthday Party Decorations; Budget-friendly suggestions for 10th Birthday Party Decorations; Best balloon decorator for small parties in {city}, Best balloon decoration for small parties in {city}; Mini Decoration in {city},
//                         Book a decorator in {city}, Book a decoration in {city}, Book a balloon decorator in {city}, Book a flower decoration in {city}, Book a balloon decoration in {city}, Book a flower decorator in {city}; Book a trained verified decorator near you in {city}, Bookadecortor in {city},
//                         Decoration for small parties in {city}, Top Decorator in {city}, Decoration services in {city}, Decorator at home service in {city}, Decorator for a night in {city}, Decoration for a night in {city}, Decorator for hire in {city}, Decoration at my home in {city}, Decorator near me in {city}, Balloon Decorator near me in {city}, Flower Decorator near me in {city}, Decoration service near me in {city}, Balloon Decoration service near me in {city}, Flower Decoration service near me in {city}, Birthday Decoration service near me in {city}, Anniversary decoration service near me in {city}, baby shower Decoration service near me in {city}, Baby welome Decoration service near me in {city}; Simple birthday decoration at home; Simple birthday decoration in {city};

//                         Balloon Decoration for small parties in {city}, Top balloon Decorator in {city}, balloon Decoration services in {city}, balloon Decorator at home service in {city}, balloon Decorator for a night in {city}, Decorator for hire in {city}, balloon Decoration at my home in {city}, balloon Decorator near me in {city}, Balloon Decoration near me in {city}, Flower Decorator near me in {city}, Decoration service near me in {city}, Balloon Decoration service near me in {city}, Flower Decoration service near me in {city}, Birthday Decoration service near me in {city}, Anniversary decoration service near me in {city}, baby shower Decoration service near me in {city}, Baby welome Decoration service near me in {city}; balloon decoration for birthday at home in {city};
//                         balloon decoration ideas; Astronaut Space Theme balloon decoration; Avenger Space Theme balloon decoration; Boss Baby Theme balloon decoration; Baby Shark Theme balloon decoration; Barbie Theme balloon decoration; Cocomelon Theme balloon decoration; Car Theme balloon decoration; Circus Theme balloon decoration; Dinosaur Theme balloon decoration; Jungle Theme balloon decoration; Kitty Theme balloon decoration; Lion Theme balloon decoration; Mickey Mouse Theme balloon decoration; Minecraft Theme balloon decoration; Mermail Theme balloon decoration; Pokemon Theme balloon decoration; Princess Theme balloon decoration; Panda Theme balloon decoration; Traffic Theme balloon decoration; Super Dog Theme balloon decoration; Unicorn Theme balloon decoration                    </p>
//                 </div>



//             </section>

//         </div>
//     );
// }

// const styles = {
//     homebanner: {
//         marginTop: "-76px",
//     },
//     pageWidth: {
//         maxWidth: "100%",
//         width: "1200px",
//         margin: "0 auto",
//     },
//     bgImg: {
//         background: `url(${bannerSvgImage.src})`,
//         backgroundSize: "cover",
//         paddingTop: "110px",
//         paddingBottom: "30px",
//     },
//     pageWidth: {
//         maxWidth: "100%",
//         width: "1200px",
//         margin: "0 auto",
//     },
//     textContainer: {
//         textAlign: "center",
//         color: "white", // Adjust text color as needed
//         margin: "0 0 70px 0",
//     },
//     bannerBottomSec: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "top",
//         flexDirection: "row",
//         padding: "0px 6%",
//         margin: "0 auto",
//         flexWrap: "wrap",
//     },
//     celebrateBottomSec: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "flex-start",
//         flexDirection: "row",
//         margin: "0 auto",
//         flexWrap: "wrap",
//     },
//     celebrateBox: {
//         margin: "0 1%",
//         width: "20%",
//     },
//     bannerDecorationImage: {
//         margin: "0 1%",
//         width: "14%",
//     },
//     serviceSec: {
//         backgroundColor: "rgba(230, 117, 107, 0.2)",
//         borderRadius: "59px",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "60px",
//         marginBottom: "50px",
//     },
//     serviceSecRight: {
//         width: "53%",
//     },
//     serviceSecLeft: {
//         width: "40%",
//     }

// };

// export default DecorationCity;










"use client";
import React, { useState, useEffect } from "react";
import {
BASE_URL,
PAYMENT,
PAYMENT_STATUS,
API_SUCCESS_CODE,
UPDATE_ORDER_STATUS,
} from "../../utils/apiconstants";
import axios from "axios";
import Head from "next/head";
import Success from '../../pages/Success';
import Failure from '../../pages/Failure';
// import { useNavigate , Link, useLocation } from 'react-router-dom'; // Import useNavigate
import whatsppicon from "../../assets/whatsapp-icon.png";
import { getHomeOrganizationSchema } from "../../utils/schema";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "../../app/page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../app/globals.css';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DecorationIcon from '../../assets/decoration_icon.png';
import PhotographyIcon from '../../assets/photography_icon.png';
import FoodIcon from '../../assets/food_icon.png';
import EntertainmentIcon from '../../assets/enter_icon.png';
import '../../app/homepage.css'
// remove later
import homepage_entertainment1 from '../../assets/homepage_entertainment1.png';
import homepage_entertainment2 from '../../assets/homepage_entertainment2.png';
import homepage_entertainment3 from '../../assets/homepage_entertainment3.png';
import homepage_entertainment4 from '../../assets/homepage_entertainment4.png';

export default function Home() {
const router = useRouter();
const [showButton, setShowButton] = useState(false);
const [currentSlide, setCurrentSlide] = useState(0);

const openLink = () => {
window.open(
  "https://play.google.com/store/apps/details?id=com.hora",
  "_blank"
);
};
const schemaOrg = getHomeOrganizationSchema();
const scriptTag = JSON.stringify(schemaOrg);

useEffect(() => {
setShowButton(window.innerWidth > 800);
function handleResize() {
  setShowButton(window.innerWidth > 800);
};
window.addEventListener("resize", handleResize);

return () => {
  window.removeEventListener("resize", handleResize);
};
}, []);

useEffect(() => {
const checkPaymentStatus = async (transactionId) => {
  try {
    const storedUserID = await localStorage.getItem("userID");
    const apiUrl = BASE_URL + PAYMENT_STATUS + "/" + transactionId;

    const response = await axios.post(
      apiUrl,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data.message) {
      const message = response.data.message;

      if (message === "PAYMENT_SUCCESS") {
        const url = BASE_URL + UPDATE_ORDER_STATUS;

        const token = await localStorage.getItem("token");

        const requestData = {
          status: 1,
          _id: transactionId,
        };

        const response = await axios.post(url, requestData, {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        });

        router.push("/Success");
      } else {
        router.push("/Failure");
      }
    } else {
      console.log("API response does not contain a message field");
    }
  } catch (error) {
    console.error("Error checking payment status:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

const queryParams = new URLSearchParams(window.location.search);
const transactionId = queryParams.get("transaction")

if (transactionId) {
  checkPaymentStatus(transactionId);
}
}, [router]);
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const homeslidersettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true, // Enables the fade effect
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const celebrateslidersettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };



const slides = [
{
 image: "https://horaservices.com/api/uploads/homepage_slider1.png",
  title: 'Decoration at your step',
  description: 'Transform your space with our expert decorators',
  imgAlt: 'Decoration services at your step',
  link:"/balloon-decoration"
},
{
  image: "https://horaservices.com/api/uploads/homepage_slider2.png",
  title: 'Party Food Delivery',
  description: 'Delicious food for all your party needs',
  imgAlt: 'Party food delivery service',
  link:"/book-chef-cook-for-party"
},
{
  image: "https://horaservices.com/api/uploads/homepage_slider3.png",
  title: 'Live Cooking at Spot',
  description: 'Book top-notch performers for your event',
  imgAlt: 'Live cooking at event location',
  link:"/party-food-delivery-live-catering-buffet/party-food-delivery"
}
];

const foodData = [
  {
    id: 1,
    image: "https://horaservices.com/api/uploads/homepage_food1.png",
    title: "Bulk Food Delivery",
    imgAlt: "Bulk food delivery service",
    link:"/party-food-delivery-live-catering-buffet/party-food-delivery"
  },
  {
    id: 2,
    image: "https://horaservices.com/api/uploads/homepage_food2.png",
    title: "Chef For Party",
    imgAlt: "Chef cooking for a party",
    link:"/book-chef-cook-for-party"
  },
  {
    id: 3,
    image: "https://horaservices.com/api/uploads/homepage_food3.png",
    title: "Live Catering",
    imgAlt: "Live catering service at an event",
    link:"/party-food-delivery-live-catering-buffet/party-live-buffet-catering"
  },
];

const EntertainmentData = [
  { 
    id: 1, 
    title: 'Tattoo Artist', 
    imageUrl: homepage_entertainment1, 
    link: '#', 
    imgAlt: 'Tattoo artist providing services at an event' 
  },
  { 
    id: 2, 
    title: 'Magician', 
    imageUrl: homepage_entertainment2, 
    link: '#', 
    imgAlt: 'Magician performing at an event' 
  },
  { 
    id: 3, 
    title: 'Party Host', 
    imageUrl: homepage_entertainment3, 
    link: '#', 
    imgAlt: 'Party host engaging with guests' 
  },
  { 
    id: 4, 
    title: 'Mascot', 
    imageUrl: homepage_entertainment4, 
    link: '#', 
    imgAlt: 'Mascot character entertaining at an event' 
  },
];

const whereAreYouData = [
  {
    id: 1,
    title: 'Decoration',
    link: '/balloon-decoration',
    imageUrl: "https://horaservices.com/api/uploads/homepage_whatareu1.png",
    imgAlt: 'Event decoration service',
    points: [
      '✨Choose from 1000+ unique designs for any Event - Birthdays, Anniversaries, Baby showers, Weddings, and more!',
      '✨Get your venue decorated in just 2 hours, indoors or outdoors.',
      '✨Best prices, timely service, and support',
      '✨ 4.8 ⭐ Rating...', 
    ],
  },
  {
    id: 2,
    title: 'Chef For Party',
    link: '/book-chef-cook-for-party',
    imageUrl:  "https://horaservices.com/api/uploads/homepage_whatareu2.png",
    imgAlt: 'Chef services for party events',
    points: [
        " ✨ HORA brings professional chefs to your kitchen",
      '✨ They use your ingredients and utensils 🍳',
      '✨ Experience 400 restaurant-style dishes. 🍲',
      '✨ Affordable & customizable. 💰',
      '✨ Full hygiene control. 🧼',
      '✨ 4.8 ⭐ Rating...', 
    ],
  },
  {
    id: 3,
    title: 'Food Delivery',
    link: '/party-food-delivery-live-catering-buffet/party-food-delivery',
    imageUrl:  "https://horaservices.com/api/uploads/homepage_whatareu3.png",
    imgAlt: 'Food delivery services for events',
    points: [
      '✨🎉 Enjoy food delivery with',
      '✨ Best prices , Timely service',
      '✨ Delicious taste',
      '✨ Good packing' ,
      '✨ Guaranteed support',
      '✨ 4.8 ⭐ Rating...', 
    ],
  },
  {
    id: 4,
    title: 'Live Catering',
    link: '/party-food-delivery-live-catering-buffet/party-live-buffet-catering',
    imageUrl:  "https://horaservices.com/api/uploads/homepage_whatareu4.png",
    imgAlt: 'Live Catering services',
    points: [
      '🎉 Enjoy the full buffet/ Catering setup with hot and fresh food cooked by professional chefs starting @300 per plate ',
      '✨ Best prices , Timely service',
      '✨ Delicious taste',
      '✨ Good packing' ,
      '✨ Guaranteed support',
      '✨ 4.8 ⭐ Rating...', 
    ],
  },
  {
    id: 5,
    title: 'Entertainment',
    link: '/',
    imageUrl: "https://horaservices.com/api/uploads/homepage_whatareu5.png",
    imgAlt: 'Event food delivery services',
    points: [
      '✨ Make your event unforgettable by engaging your guests! ✨ Choose from over 10 amazing services:',
      '🎨 Tattoo Artist' , 
      '🎩 Magician',
      '🎉 Party Host' , 
      '🐻 Mascot ',
      '🌿 Mehandi',
      '💅 Nail Art ..and so much more!'
    ],
  },
];

const celebrateData = [
  {
    id: 1,
    title: 'Birthday and Anniversary',
    imageUrl: require('../../assets/homepage_Celebrate1.png'),
    imgAlt: 'Birthday and Anniversary celebration',
    link: "https://horaservices.com/balloon-decoration/birthday-decoration",
  },
  {
    id: 2,
    title: 'House Parties',
    imageUrl: require('../../assets/homepage_Celebrate2.png'),
    imgAlt: 'House parties celebration',
  },
  {
    id: 3,
    title: 'Corporate Events',
    imageUrl: require('../../assets/homepage_Celebrate3.png'),
    imgAlt: 'Corporate events celebration',
  },
  {
    id: 4,
    title: 'Wedding Events',
    imageUrl: require('../../assets/homepage_Celebrate4.png'),
    imgAlt: 'Wedding events celebration',
  },
  {
    id: 5,
    title: 'Gatherings',
    imageUrl: require('../../assets/homepage_Celebrate5.png'),
    imgAlt: 'Gatherings celebration',
  },
  {
    id: 6,
    title: 'Kids Events',
    imageUrl: require('../../assets/homepage_Celebrate6.png'),
    imgAlt: 'Kids events celebration',
  },
];

const CustomerReview = [
  {
    id: 1,
    name: "hemant singh",
    image: "https://play-lh.googleusercontent.com/a-/ALV-UjU_D6MAIAmJm4BrWTwjmEUcdUPXGbQOutY3YUmEfozjR0EDCDlbfQ=s32-rw",
    imgAlt: 'hemant singh review',
    rating: 5,
    review: "HORA have experienced and trained staff.  they effortlessly executed my event with grace. The food was not only delicious but also elegantly presented, leaving my guests raving about the taste and variety.",
  },
  {
    id: 2,
    name: "SANDIP RAI",
    image: "https://play-lh.googleusercontent.com/a/ACg8ocJ3rwU_SQsSWbLiTYa9DsB3xjuM1Qa2oUzyowa6bka5AsXukg=s32-rw-mo",
    imgAlt: 'SANDIP RAI review',
    rating: 5,
    review: "The decoration was so good and magical.I booked this decoration for my lil ones bday and I was very happy the way the canopy was set up and decorated by Sandeep from Hora. Greate Job!!"
  },
  {
    id: 3,
    name: "Ashu Tiwari",
    image: "https://play-lh.googleusercontent.com/a-/ALV-UjWDqzjOJ19p-lbksp72dtFtEozrxlyX3-grQi0fSoiFSm8RrR9H=s32-rw",
    imgAlt: 'Ashu Tiwari review',
    rating: 5,
    review: "Food was too good . I mean all dishes were good and quantity was good .every guest appreciated the taste and love it so much.Will definitely recommend to anyone looking for food services"
  },
  {
    id: 4,
    name: "Vijeta Sunda",
    image: "https://play-lh.googleusercontent.com/a-/ALV-UjVFRB3pRXxtJgvV6QWB7tLW9JFDG-QiY8oHr22n_pQIQJaN_WD87w=s32-rw",
    imgAlt: 'Vijeta Sunda review',
    rating: 4,
    review: "What a delightful experience we had..I'm so grateful for sending me the best Chef Vipin Kumar Arya who was so so experienced and skilled and dedicated...we had a party of 25people and he made it so easy for me and all"
  },
  {
    id: 5,
    name: "Sneha",
    image: "https://play-lh.googleusercontent.com/a-/ALV-UjWYlq3OV6In6sCw_X91EexqX7q9FdazSyOJ-ROxRw63-BEbUnuB_A=s32-rw",
    imgAlt: 'Jerome Bell review repeated',
    rating: 4,
    review: "The decorations were festive and vibrant, creating the perfect atmosphere for our celebration. Their professionalism and creativity were top-notch.. Very Good and amazing suppport"
  },
];

const openSliderLink = (link) => {
  if (link) {
    window.location.href = link; // Redirects to the provided link
  }
};



return (
<>
  <div className="page-width">
    <div className="party-services homeslider">
     <h1 className="party-title">All party services on one platform</h1>
<div className="home-slider-inner">
<Slider {...homeslidersettings}>
      {slides.map((slide, index) => (
        <div key={index} className="slide-container">
          <Image src={slide.image} alt={slide.title} 
           width={1200} 
           height={400} 
          //  objectFit="cover" 
           layout="responsive" 
           className="responsive-image"
           />
          <div className="carousel-content slide-content">
            <h2 className="party-title1 slide-title">{slide.title}</h2>
            <button className="slide-button book-now"   onClick={() => openSliderLink(slide.link)}>book Now</button>
          </div>
        </div>
      ))}
    </Slider>
    </div>

    </div>
    <div className="food-container sec-container">
    <h1 className="food-title">
    <span>Food</span>
    <span><Image src={FoodIcon} alt="Food Icon" className="food-icon" /></span>
    </h1>
    <div className="food-cards desktop">
    {foodData.map(item => (
      <div key={item.id} className="food-card">
        <a href={item.link} className="food-card-link">
          <Image src={item.image} alt={item.title} className="food-image"  width={200} height={100}/>
          <p className="food-card-title">{item.title}</p>
        </a>
      </div>
    ))}
    </div>

    <div className="food-cards mobile">
  {foodData.slice(0, 1).map(item => (
    <div key={item.id} className="food-card left-side">
      <a href={item.link} className="food-card-link">
        <Image src={item.image} alt={item.title} className="food-image" width={200} height={100}/>
        <p className="food-card-title">{item.title}</p>
      </a>
    </div>
  ))}
  
  <div className="food-card  right-side">
    {foodData.slice(1, 3).map(item => (
      <div key={item.id} className="food-card right-card">
        <a href={item.link} className="food-card-link">
          <Image src={item.image} alt={item.title} className="food-image" width={200} height={100}/>
          <p className="food-card-title">{item.title}</p>
        </a>
      </div>
    ))}
  </div>
</div>

    </div>
    <div className="dec-photo-con sec-container">
  <div className="service">
    <div className="service-header">
      <h2 className='services-h2'>
        Decoration 
        <Image src={DecorationIcon} alt="Decoration Icon" className="service-icon" />
      </h2>
    </div>
    <div className="service-image-container">
      <Image src="https://horaservices.com/api/uploads/homepage_decoration.png" alt="Decoration" className="service-image" width={200} height={100}/>
      <button className="book-now2" onClick={() => window.location.href = '/balloon-decoration'} >Book Now</button>
    </div>
  </div>
  <div className="service">
    <div className="service-header">
      <h2 className='services-h2'>
        Photography
        <Image src={PhotographyIcon} alt="Photography Icon" className="service-icon" />
      </h2>
    </div>
    <div className="service-image-container">
      <Image src="https://horaservices.com/api/uploads/homepage_photography.png" alt="Photography" className="service-image" width={200} height={100}/>
      <button className="book-now2" onClick={() => window.location.href = '/'} >Book Now</button>
    </div>
  </div>
   </div>

   {/* <div className="entertainment-container sec-container">
  <h1 className="entertainment-header">
    Entertainment 
    <Image src={EntertainmentIcon} alt="Entertainment Icon" className="food-icon" />
  </h1>
  <div className="entertainment-grid">
    {EntertainmentData.map(category => (
      <div key={category.id} className="category-card">
        <a href={category.link} rel="noopener noreferrer">
          <div className="category-image-wrapper">
            <Image src={category.imageUrl} alt={category.title} className="category-image" />
            <p className="category-title">{category.title}</p>
          </div>
        </a>
      </div>
    ))}
  </div>
  </div> */}
    <div className="entertainment-container where-are-you-sec sec-container">
    <h1 className="entertainment-header-whatAre">
    What are you <span className="pink-text">into?</span> 
    </h1>

    <h3 className='services-h3'>We offer a variety of services , differing in the total value of needed.</h3>
    <div className="categoriesCard-container">
    {whereAreYouData.map(category => (
      <div key={category.id} className="categoriesCard-card">
        <a href={category.link} rel="noopener noreferrer">
          <div className="categoriesCard-image-wrapper">
            <Image src={category.imageUrl} alt={category.title} className="categoriesCard-image"  width={200} height={100}/>
          </div>
        </a>
        <div className="what-are-sec">
        <p className="categoriesCard-title">{category.title}</p>
        <ul className="categoriesCard-points">
          {category.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <a href={category.link} className="categoriesCard-explore-more" >
          Explore More
        </a>
        </div>
       
      </div>
    ))}
    </div>
    </div>

    <div className="celebrate-container sec-container">
    <h1 className="celebrate-title">Celebrate With Us
    <Image src={DecorationIcon} alt="Entertainment Icon" className="service-icon" />
    </h1>
    <p className="celebrate-subtitle">You can easily search for what category of item you want to order.</p>
      <div className="categories-cards">
      <Slider {...celebrateslidersettings}>
      {celebrateData.map(category => (
      <div key={category.id} className="categories-card">
      <a href={category.link} rel="noopener noreferrer">
        <Image src={category.imageUrl} alt={category.title} className="categories-image" />
      </a>
      <p className="categories-title">{category.title}</p>
      </div>
      ))}
      </Slider>
      </div>

    
    </div>

    <div className="customer-review-container sec-container">
        <h2 className='customer-review-h2'>Customer Review</h2>
        <Slider {...settings}  >
          {CustomerReview.map(({ id, name, image, rating, review }) => (
            <div key={id} className="review-card">
              <div className="review-header">
                <Image src={image} alt={name} className="review-image" width={100} height={100}/>
                <div>
                  <h3 className="review-name">{name}</h3>
                  <div className="review-rating">{"⭐".repeat(rating)}</div>
                </div>
              </div>
              <p className="review-text">{review}</p>
            </div>
          ))}
        </Slider>
      </div>


    </div>
    <div>
      <Link href="https://wa.me/+917338584828/?text=Hi%2CI%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20the%20services" target="_blank">
        <Image className='whatappicon' src={whatsppicon} alt="WhatsApp Icon" />
      </Link>
    </div>
</>
);
}
