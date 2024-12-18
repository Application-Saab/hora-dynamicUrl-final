import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const RatingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: green;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Star = styled.span`
  color: gold;
  margin-right: 5px;
  font-size: 24px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const VerifiedReviews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: green;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ReviewContainer1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ccc;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const BookingInfo = styled.div`
  font-size: 12px;
  color: #666;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const BookingDate = styled.span`
  margin-top: 20px;
  font-size: 12px;
  color: #666;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
const UserRating = styled.div`
   position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  .filled {
    color: gold;
  }

  .blank {
    color: grey;
  }
`;

const ReviewContainer = styled.div`
  position: relative;
  padding: 20px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;

const Indicators = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
`;

const Indicator = styled.span`
  font-size: 12px;
  color: #4a4a4a;
  background-color: #f0f0f0;
  padding: 2px 5px;
  border-radius: 3px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const ReviewText = styled.div`
  font-size: 14px;
  color: #333;
  max-height: 100px;
  overflow-y: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #9252aa;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const getStars = (rating) => {
    const filledStars = Array(rating).fill(<span className="filled">★</span>);
    const blankStars = Array(5 - rating).fill(<span className="blank">★</span>);
    return [...filledStars, ...blankStars];
  };

const CustomersReviews = () => {
    const allReviewsData = [
        {
            name: "hemant singh",
            booking: "Booked Chef in Mumbai",
            date: "19 Mar 2024",
            rating: 5,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjU_D6MAIAmJm4BrWTwjmEUcdUPXGbQOutY3YUmEfozjR0EDCDlbfQ=s32-rw",
            indicators: {
                Taste: true,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: false,
                Punctuality: false,
            },
            text: "HORA have experienced and trained staff. Despite the tight timeline, they effortlessly executed my event with grace. The food was not only delicious but also elegantly presented, leaving my guests raving about the taste and variety. I couldn't have asked for a better partner in planning my special day!",
        },
        {
            "name": "Neha Patel",
            "booking": "Booked Chef and Balloon Decoration",
            "date": "12 May 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/women/10.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The chef and balloon decorations were excellent for our housewarming party. The service was prompt, and everything looked great. Minor hiccup with the setup time, but overall, a positive experience."
        },
        {
            "name": "Harikrishna Thakur",
            "booking": "Booked Decor Service for Party",
            "date": "10 Jan 24",
            "rating": 4,
            "avatar": "Arjun Singh",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Very responsive to communication. Team were very polite in addressing all of my concerns and answering my endless questions in a timely matter.Reasonable prices too! Highly recommend!!"
        },
        {
            name: "SANDIP RAI",
            booking: "Booked Decoration services in Bhopal",
            date: "3 April 24",
            rating: 5,
            avatar: "https://play-lh.googleusercontent.com/a/ACg8ocJ3rwU_SQsSWbLiTYa9DsB3xjuM1Qa2oUzyowa6bka5AsXukg=s32-rw-mo",
            indicators: {
                Taste: true,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: true,
                Punctuality: true,
            },
            text: "The decoration was so good and magical.I booked this decoration for my lil ones bday and I was very happy the way the canopy was set up and decorated by Sandeep from Hora.Will definitely recommend to anyone looking for decoration services",
        },
        {
            name: "Hari krishna",
            booking: "Booked Chef in Mumbai",
            date: "10 Jul 2024",
            rating: 5,
            avatar: "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png",
            indicators: {
                Taste: true,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: true,
                Punctuality: true,
            },
            text: "Very responsive to communication. Team were very polite in addressing all of my concerns and answering my endless questions in a timely matter.Reasonable prices too! Highly recommend!!",
        },


        {
            name: "Raju",
            booking: "Booked party in Delhi",
            date: "28 Jan 2024",
            rating: 4,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjVOQrKBRar3UK4sK6KyxFymcvdJgZR5N12qq_CKezcxylA5icHmIg=s32-rw",
            indicators: {
                Taste: true,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: true,
                Punctuality: true,
            },
            text: "It was actually a better and less expensive option than ordering cold deliveries from online delivery apps. Atleast when i know the party is hosted by me, I would not trust anything but Hora",
        },

       

        {
            name: "Ashu Tiwari",
            booking: "Booked Chef in Mumbai",
            date: "28 Aug 2023",
            rating: 4,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjWDqzjOJ19p-lbksp72dtFtEozrxlyX3-grQi0fSoiFSm8RrR9H=s32-rw",
            indicators: {
                Taste: true,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: true,
                Punctuality: true,
            },
            text: "Food was too good . I mean all dishes were good and quantity was good .everyguest appreciated the taste. Plus cook and his assistant behaviour politeness and willingness to make good food made ocassion special. Will definitely consider this option again Thanks alot",
        },

        {
            name: "sachin verma",
            booking: "Booked Cook in Mumbai",
            date: "28 Aug 2023",
            rating: 5,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjXind0jrmxF4pkdsh_ywls3oMCOIX34mvEP4JHDenRA_QDYP6ij=s32-rw",
            indicators: {
                Taste: true,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: true,
                Punctuality: true,
            },
            text: "It was my first experience, I loved it, I booked for my brother birthday & chef made it memorable. The way chef was preparing was in a very professional way, taste was too good. I will be booking often for the occasions. Thank you Hora",
        },

        {
            name: "Vijeta Sunda",
            booking: "Booked Stall in Mumbai",
            date: "25 Dec 2023",
            rating: 4,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjVFRB3pRXxtJgvV6QWB7tLW9JFDG-QiY8oHr22n_pQIQJaN_WD87w=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: false,
                Hygiene: false,
                Punctuality: true,
            },
            text: "What a delightful experience we had..I'm so grateful for sending me the best Chef Vipin Kumar Arya who was so so experienced and skilled and dedicated...we had a party of 25people and he made it so easy for me..Thank you to the waiter Tara who was really very helpful..they are really so experienced...Thank you once again.my guests loved the lip smacking food..",
        },

        {
            name: "Emily",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 5,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjWYlq3OV6In6sCw_X91EexqX7q9FdazSyOJ-ROxRw63-BEbUnuB_A=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: true,
                Punctuality: true,
            },
            text: "Festive Flair Solutions did an outstanding job with our holiday party. The decorations were festive and vibrant, creating the perfect atmosphere for our celebration. Their professionalism and creativity were top-notch. Highly recommended",
        },

        {
            name: "David",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 5,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjWFDTqDTGwEO4_z-t3k8FPAL4YavkPwEyOvVkiDzcnN3zjZ6k51=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: true,
                Hygiene: false,
                Punctuality: true,
            },
            text: "Elite Celebration Designs transformed our anniversary party into something truly special. The creative decorations and personalized touches made the event memorable. The team was great to work with, and I couldn't have asked for more",
        },


        {
            name: "Lisa",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 4,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjUChSgkPLahgkjxnEzmsFYxYlZzzJ-r38LWTOwr4xvQFEq1ffI=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: false,
                Hygiene: false,
                Punctuality: true,
            },
            text: "I hired Party Perfectionists for my corporate event, and they did not disappoint. The decorations were elegant, and the entire setup was exactly what we needed to impress our clients. Excellent service and very reliable",
        },


        {
            name: "Vijeta Sunda",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 4,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjXt1BScAlFKvlv8oaTMTuJ5hS9raN3b3ZNpG-oFmc5zjyOeU7-H=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: false,
                Hygiene: false,
                Punctuality: true,
            },
            text: "What a delightful experience we had..I'm so grateful for sending me the best Chef Vipin Kumar Arya who was so so experienced and skilled and dedicated...we had a party of 25people and he made it so easy for me..Thank you to the waiter Tara who was really very helpful..they are really so experienced...Thank you once again.my guests loved the lip smacking food..",
        },


        {
            name: "Michael",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 5,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjXtTD4G9gbxQz1RSCSnAEkBxESsZuZI2pSfXLzd6WjXDJ3muobz6w=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: false,
                Hygiene: false,
                Punctuality: true,
            },
            text: "Glamour & Glow Creations made my wedding day unforgettable. The attention to detail and creative designs were exceptional. The team was professional and went above and beyond to ensure everything was perfect. Thank you for making our day so magical!",
        },


        {
            name: "Samantha Jones",
            booking: "Booked Chef in Mumbai",
            date: "25 Dec 2023",
            rating: 4,
            avatar: "https://play-lh.googleusercontent.com/a-/ALV-UjX75wkzXlHbOA2P8ql-iy0PiLPcz-6NErfy9RBwPcCx3zwHKxLd=s32-rw",
            indicators: {
                Taste: false,
                Behaviour: true,
                Presentation: true,
                Quantity: false,
                Hygiene: false,
                Punctuality: true,
            },
            text: "I had an amazing experience with Sparkle Events! They turned my vision for my daughter's birthday party into a reality with beautiful decorations and seamless service. Highly recommend for anyone looking to make their event extra special",
        },

         
            {
                "name": "Olivia Brown",
                "booking": "Booked Party Planning",
                "date": "22 Feb 24",
                "rating": 3,
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw-LgCtrI4A6tR4seUyLctAtgrTbzOLKHQg0wP1CdrCmc_rUUnK0hG8r6-w&s",
                "indicators": {
                    "Taste": false,
                    "Behaviour": true,
                    "Presentation": true,
                    "Quantity": true,
                    "Hygiene": true,
                    "Punctuality": false
                },
                "text": "Party Perfectionists did a great job with our corporate event. The decorations were elegant, and the overall presentation was excellent. There was a slight delay in setup, but it was handled professionally."
            },
            {
                "name": "Yash Jadav",
                "booking": "Booked Themed Decor for Birthday Party",
                "date": "14 Mar 24",
                "rating": 3,
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9gbKLIRaf9WtoLCRkyRduQC-YAwEnAyPZ6t7AVEjI-tkhupfOgKk0heFjw&s",
                "indicators": {
                    "Taste": false,
                    "Behaviour": false,
                    "Presentation": true,
                    "Quantity": false,
                    "Hygiene": true,
                    "Punctuality": true
                },
                "text": "The decorations from Glamour & Glow Creations were good, but there were some issues with the quantity and placement. The team was polite, but there were areas that could be improved."
            },
            {
                "name": "Radika Sharma",
                "booking": "Booked Event Styling for Anniversary",
                "date": "30 Apr 24",
                "rating": 5,
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVR5kfELoNTyq9ooySzzeGiAnrEBQvsrkNTOTvJxyeCgTUgJo3vnLUQVaUMA&s",
                "indicators": {
                    "Taste": false,
                    "Behaviour": true,
                    "Presentation": true,
                    "Quantity": true,
                    "Hygiene": true,
                    "Punctuality": true
                },
                "text": "Elite Celebration Designs exceeded our expectations with their exceptional service. The anniversary celebration was beautifully styled, and every detail was perfect. Highly recommend their services!"
            },
            {
                "name": "Akshay Singh",
                "booking": "Booked Decoration for Baby Shower",
                "date": "15 May 24",
                "rating": 4,
                "avatar": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAACAwABBAYHBf/EAD4QAAIBAwEFBAgFAgMJAAAAAAECAAMEEQUGEiExQRMiUWEUMkJxgZGhsQcVI8HRUvFTYuEkJTNDY3KSovD/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAhEQEAAgICAQUBAAAAAAAAAAAAAQIDESExEgQyM0FRIv/aAAwDAQACEQMRAD8AUixqrKRY5RM7QirGKstRGKIFBYYWWBGAQBAhhZYWGFgDjgOeT5dZ4mtbR22m1xa0k9IuiudxWAC+R85i7Ya29tSOl6cBUvK64qgHjSTx8ien9poRvqOmAUlpJUq9e9kD3GXiETP42TUNZv6+O3r9nnJWmjGmB5HqZr1xrFWtVqUqjXFJ1Gf+IeIzPJuK9e4uVrlW4EZwMfaVe1+1dKw4VVBDnx/+4y0aUmZ7e3omu6laX9M07qvVok96nUcsCPLM6d+b2Khe0uaSFxlQzgTilveYU0uKswI3l8+Uq3vKtJsuq1VBwd8ZAiank70hV1DqQykZBHEEe+XiabsDqS1gbeiSKOCeyJz2bDw8Bzm7bsprS8FbsrEZuyt2QF4lERpEEiAoiCRGkQCICSIthHsItoCcSQsS4CEEcqwVWNUSErURiiUBGKIFqIYEiiGFhCAQwsgEKByDay4qW+1epCsxqMTuof6VIG6B7gcToGxn4f6atjTuNVUVrmqMkNyXM8vbTZp7rVLLVrRA7K6LcUx1UNwP7TeNB2lsK9anp1a3qW1zgbobBDeYIJzOea06jTvhrHO1VtmdEtbR0p2lML4kcZyzajZy3Sq9W03Vz7M6VtbtjpumlrRberXqg4bcHKaDq+pXFemazWFSnQY/1qxA8wOInGnnE7aJ8JjUtEu7B6D972uRBgo4oFxkNvtuk45TK1VXHfUlqZ5Z6TFtkVt1iPUIPH4TfWdw869dTps34c9pS2jVQeBVlbzxOt4mi/h1palquoHkuUUEcz1M33EpbtMdF4lERmJREhJZEorGEQSICiIBEawgkQEERTCPYRbCAnEuXiSACiNUQFEcBIFqIxRBURiiASiGBIBDAgQCFiQCEIFpbi5/QI7lTgwi6ezFvZagNUr437eiqqqE4AXkccgfdMm2bsrimzcgeMPanU7gafcUtMt/SatRd3dXPA55ZAPOZ8u/JpwdND0C3p6htS93XRK1RqhqBKgyo948JlV9gnp6hUvUcU6TOzFQ7OTnpx6TB2UubiltBQrXFqLNKVMpURyct5jOJuO0Gt0xTanTYHhkec5za0cQ06i07c51bRFq0L6nbDJpUywx4iaoLE0L/sXyauPU8/CdC0e9LPXQLvM7cRjJInjadolxf7Q1DWxQue1NRRUB3lp5Pex8viQJqrMxVltFZvuW67HWy2+iUO52bszM48TvYz9J7eJVGktGilKmMKgAEOWjeuXC2tzosysRmJWJKAYgERhlEQFERZEewimEBLRbCOYRbCArEkKSAtRGqICiOUSASiMUQVjBAJYYEFRGCBYEsCQCEBAmMjBmHXSjSSvcVxduCO+KByV8wPn85nYiLmrfWpNWwppWyMNTJCknoRnh9ZTJXfMOuG/hLSbkU6t6r0Fv6drnOKjY3h5jE8q/vt27NNSezQYnqbUbTaug7NrB6WeRYAj6EzRKtzcVn75Y1CfDhOda7abZPxuGymoLR1M1mI3Aec2vQbCuNb1fUbqmB6Q1OnQLDvFFUZx5Ek/ETl1rSuaBFasSqKd4gcjPc2d2luG2la5urm4S0cimtu1Ummi4Hs8uk0Y43GoZMs65dUxBhKQRnx4jHWTEOYZWIREqEhxAIjTAIgLIi2jyIthASwimjWi2EBOJcLEqSBWMWAscolQSiMWUohKIBqIYEoQxAghiUIWJMIXMHWdRp6TpN3fMueyQkDlvNyA92SBMfVdfsdOyjMa1cc6VM5I955D48fKaFtRtDdavS9AqGnSSuf06K9Svi39hL1pP2rNohtOnV62ubM2dfuVHroDVJHEOuQ32iKezVurGo6qABksRwAmJ+GlWomh3FOrk06LszY5p1msaptpfXtchqS0rInC0Qe97z4nymSuG18k1+noTnrjxxYzai+oGobWzAFNfbHtTXadOq2GUkAeHUzPq0zXcEjg3HJHSOt1WrcVUp43bcDPmx/j956VccUjUPMvkm87ltWzm1d5ZUqVpqFFa9FFAVkJFRB8eB+k3iw1C11GmHtKyv/UvJgfMdJzCnSwznw4Dz85aXNeyrivRc02U+svOLYonoi8usHr5SsTXNnNqaWp7lvdMqXB4K+cB/LyP3mycufjM1qzV0i2wmCYcEyElmARGmAYSSwimjWingLklySQCCOWLWNUSoYsNYIhqIBgQhBEMCAQmsbWaxVov+XWTlKhH61QcwOi5mzgZ4dZzS8uPSr+pXzkVarE+7jj6YnbFXc8qXnUManTG6OHITCvtKW6etULHtalMU0JHqDrPTRe7jrGhfjNWnF49O/r7M0rira1S1SqnYim/FamVGc/PP9552zulPWqi5u1JUeordZ69WwF3qVSrWTKUwq0/I8z+3yE9SmoUYAAlYpETtaZmSa9uj0hw4iYum6fTty5Ukhn3yT7WOGfnPTxMa8bsLKuygApSbHyMtpDGsaoa0FUnJrVWKjxGTgfLjJeId8nhuqctnx6CYDP6M+lUAcfpP/5boA+5nsIgYg1MFQN4g8oQ1ms5tm3UYhlKlh7/AN+InQNj9rWu/R9P1A/qVxihX6Mf6T58OHwHhnnJY3Hp1b2i7HPuIEdZb7WmaLFa1JyUK8wRx4efh5zlaPJMTp3X3cYJE83ZvVPznRaN66gVDlairyDg4OPLr7jPTImaY1OneJ3ACIto0xbCQFMIl45oloSXJLkkoUkcoiljlEqkYEMQFjAIBCGIIEMCEE3rmlYXFQHitF2+QzOYUDmmviOU6VrR3dHvcdbdx81nM6R3TjrNODqXLIzqYGcxmMRdI93MJ3xNCiVMBVx1hrFVW4ovkSTGKYBMQJgXVam9BqVQ47YFB8RHXVXss58MieBXJS3BcnepPgeY3hIkJ1Ss1OvpBqDDJvK3zAno17wVL62t1bFNENaoB16gGePtFU7Sna1kJZVJAJ4dIlKzML6469mlNT5sMfyZXfKV2ZK6RcVW68veWH8R2muaVYnlhlb6wbmg1CzsLUevWbfYeQ5fvLrj0evUU9APvIHT9hWNMXtsARSHZ1lI/wA28CPhuibUZq2wVQPb1h1IU/DJ/wBJtMz5Pc606CYtowxbTmsU8S0c8S8kLkkkgEojliljVlUmLDEFRDEAgIYEAQxJQ8/aBtzRbxv+nic1qcKvCdF2sO5s5fsOa0sj5ic5qeuG8Zpw9OWTtlUHyMSzUDFfAxNA4UnwhWxDgjHAPwM7KHXNcvXyxyd0fbH7SCru1VRvaGR5xbgPchuhHQQLlWZMr66d5f3gY2r3HZVKKnkwPE/CefqbKKI48W448Jk62oubFatPOV5TCp1Reac44b6LxlZGJqvf0ek2PVfEuyph9LpqPWeqpP2H0kucPorDqGzC2fcVaaIfYIb5HMr9pZtFPStpG6pbLuzE1Edpd3LDqDieroFLctq14/rVt5yT4Znklwab1z6pcD4ZlpHQfw0rCrSdgf8AkjA+WZvJnL/w4uha6ktu/AHepfHJx9p1AzPl7dKdAMW0YYtpzXKeJeNcxLmAEkkkBiiNURSxqyqTFjFgKIawgYlyhLEkeXtWu/s3qI4g9gcTm7ENTQjrynT9fqU6Wi3jV13k7JlwOpIwPqROS9sEwhI9bhw8ftz6zRh6c79s5Du02ImRZDcUHHeDb3vmIpzSPmQJ6FFSz7qjj4Tu5gqktdb59rPLpEXNTcr258WKmOLgje6rzmBqbbvYVOgaJDbhB2NVMd0jIms2b9hdVqTHCkHM2JmapTXvcSMTXNYpGheO4zgyspgTn/YWAitnSe2uVX/COJKFQNRIPWXoJVL6tk7oZDy6cRKfY2muwttINNPZpgcJr5AGh0ifabj8zPbvWX8qqKmWLDdyPOeDWcfltunTeOR7if5lpQ23YG37fWrdm4jshVJ8wvP5mdRM53+GFJqlUV/ZSgV/9v4E6IZny+51p0EiKaMJimM5rlPEOY94hpKS5JJIQcsasUsashJqwxFqY1ZCBCFiCIQkjw9tLlaOhGk6hjcOKajwwck/Sc1vFZVwAKjdAxYEe7jOl7Q6T+a3tmrXLUqaK+VVc5ORg5mna1shUpVt21ulYtyDLu/bIl6Z6V4lM4clo8oh5lPjTAHUiZ6Hj5TBp03oE06nr0zut7xzmbTAAYMSMAlcDOZridxtmnidKGCr+BGZg1aZr2LLzKnImbypsP8AKftMPTj+iAfHBgefRcgqCx4HEXq1LtKQbGSJLkdjeNT8TkTJqYehjrIS1iixR908o+xZkvDu4IZTvcccIu7p7lU+UXRGa6Fm5NnjKJbWlG1FuXp4UsDnFUEGeBUV6VJaZam26zZO8Os3GnVZrPeJ3e7y4En+JrGovv1GzSzxznAl5VhuP4XaiaNepYNQdnq4IdfVUDmTmdLacD0ag1e7thQVt9bygw3h4tun6lfnO9kzPk7daBaKMa0SxnNcpjEtGtFPCS5JJUIPWNWKWNWQk0CMWLWMWECEIQRCEDFrkHUqa/00zj4n/SeVqpxdK56cpnXL7utKB/gr9zPN15905mLJ75elh+KGmXR3r64PP9V/jxMZRcbpPhz4zGJzWcnqxP1zMingUmXA73lPapxWHj39wuaHzGJ59p+m5XoTmZ6nhgzB3d2pkeOJZVha4m4UqjnjjF21Xfp+cz9STtbRl544zw7Or2dXdblKyknUlHag9GitMsamo6hb2lBd6pVqhV+Pj5CZWpJlAy8wZtf4T6Z2mp3WouO5RTs6Z/zHn8gPrOGW/hEy64qedoh7+tbMW9pZZp3j9pu82ThObXlGotSon6bEHHBec6TttflQUT4TR3tt2rTQKalWsRkDqTMmPNe3ctuXBSscQ9X8LEFzrTh6bH0emWbwXwz8eI906uZgaJpVrplqi0LalQrOqmsUXBY46zPM72nbHEaA0U0Yxi3kJJaJcxrmIcwkGZcqSEMhY1ZJJCTVhqZJIQMQhJJA8u7X/fdPzoj7meRtPUCrnwGTLkmO/wAj0cXxQ0tTnPmY8MQkqSe1HTx7dmOesQ4xU8s5kkhCjgqVPIjE1y7Ts6pYcwcSSSJSFn36XenWNhbNdP2Wt2AG9XBqsf8Au5fTEkkw+sn+IbfRR/ctc2kq5uxvnOJl7Daat5f+m1AD2OSM+PSSSccPTR6mXQTz4QSZck7sRbRLy5IQQ8x3kkkpLzJJJCH/2Q==",
                "indicators": {
                    "Taste": false,
                    "Behaviour": true,
                    "Presentation": true,
                    "Quantity": true,
                    "Hygiene": false,
                    "Punctuality": true
                },
                "text": "Creative Moments did a great job with our baby shower decorations. The setup was lovely, and the team was very professional. However, there were minor cleanliness issues that could be addressed."
            },
        {
            "name": "Aarav Sharma",
            "booking": "Booked Balloon Decoration and Live Catering",
            "date": "10 July 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Creative Moments truly exceeded our expectations! The balloon decorations were stunning, and the live catering was a hit with everyone. The team was punctual and very attentive to our needs. Highly recommend their services for any event!"
        },
        {
            "name": "Saanvi Patel",
            "booking": "Booked Chef for Dinner Party",
            "date": "22 June 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": false
            },
            "text": "The chef provided by Creative Moments was fantastic! The food was delicious, and the presentation was impressive. However, there was a slight delay in service, which affected the overall experience."
        },
        {
            "name": "Vivaan Gupta",
            "booking": "Booked Balloon Decoration for Engagement",
            "date": "05 June 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Absolutely wonderful service! The balloon decorations for our engagement party were perfect, and everything was handled with great professionalism. Couldn’t have asked for a better team to make our day special."
        },
        {
            "name": "Isha Mehta",
            "booking": "Booked Decoration for Baby Shower",
            "date": "15 May 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/women/4.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": false,
                "Punctuality": true
            },
            "text": "Creative Moments did a great job with our baby shower decorations. The setup was lovely, and the team was very professional. However, there were minor cleanliness issues that could be addressed."
        },
        {
            "name": "Arjun Singh",
            "booking": "Booked Live Catering for Corporate Event",
            "date": "30 April 24",
            "rating": 3,
            "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": false,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The catering was good, but the quantity of food provided was less than expected for the size of our corporate event. The team was friendly and the food was tasty, but there’s room for improvement."
        },
        {
            "name": "Ananya Joshi",
            "booking": "Booked Decoration and Chef for Reception",
            "date": "18 March 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/6.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Our wedding reception was a huge success thanks to Creative Moments. Both the decorations and the food were exceptional. Everything was handled perfectly, and the team was incredibly professional and accommodating."
        },
        {
            "name": "Kartik Agarwal",
            "booking": "Booked Balloon Decoration for Kid's Birthday",
            "date": "01 July 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/men/7.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The balloon decorations for my child’s birthday party were fantastic! The kids loved it. The only issue was that the setup took a bit longer than expected, but it was worth the wait."
        },
        {
            "name": "Priya Sharma",
            "booking": "Booked Chef and Live Catering for Party",
            "date": "14 June 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/8.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Creative Moments made our graduation party memorable with excellent catering and service. The food was superb, and the team was punctual and professional. Highly recommend them for any event."
        },
        {
            "name": "Rohan Kapoor",
            "booking": "Booked Balloon Decoration for Baby Shower",
            "date": "25 April 24",
            "rating": 3,
            "avatar": "https://randomuser.me/api/portraits/men/9.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": false,
                "Hygiene": false,
                "Punctuality": true
            },
            "text": "The decorations were nice, but there were some issues with cleanliness and the quantity of balloons. The team was friendly and punctual, but these issues affected the overall experience."
        },
        {
            "name": "Neha Patel",
            "booking": "Booked Chef and Balloon Decoration",
            "date": "12 May 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/women/10.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The chef and balloon decorations were excellent for our housewarming party. The service was prompt, and everything looked great. Minor hiccup with the setup time, but overall, a positive experience."
        },
        {
            "name": "Amit Kumar",
            "booking": "Booked Live Catering for Birthday Party",
            "date": "03 June 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/men/11.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Everything was perfect for our birthday party. The live catering was outstanding, and the team was professional and courteous. The food was delicious and everyone had a great time."
        },
        {
            "name": "Shruti Agarwal",
            "booking": "Booked Decoration for Corporate Event",
            "date": "29 June 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/women/12.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The decorations for our corporate event were impressive, and the team was very professional. The only downside was that there were some issues with food taste, but overall, the event was a success."
        },
        {
            "name": "Ravi Kumar",
            "booking": "Booked Balloon Decoration and Live Catering",
            "date": "08 July 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/men/13.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Creative Moments did a wonderful job with the balloon decorations and live catering. The setup was beautiful, and the food was tasty. The team was professional, although there was a slight delay in the setup."
        },
        {
            "name": "Aanya Verma",
            "booking": "Booked Chef for Anniversary Party",
            "date": "21 June 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/14.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The chef and catering service provided by Creative Moments for our anniversary party were exceptional. The food was delicious and the service was flawless. Highly recommend them for any special occasion!"
        },
        {
            "name": "Kiran Reddy",
            "booking": "Booked Balloon Decoration for Office Party",
            "date": "27 May 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/men/15.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The balloon decorations for our office party were impressive and the team was very professional. The only issue was that the balloons didn’t last as long as expected, but overall, it was a great experience."
        },
        {
            "name": "Maya Singh",
            "booking": "Booked Live Catering for Family Reunion",
            "date": "15 June 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/16.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Creative Moments made our family reunion memorable with their excellent live catering service. The food was superb, and the team was very accommodating. We received many compliments from our guests."
        },
        {
            "name": "Nikhil Joshi",
            "booking": "Booked Balloon Decoration for Wedding",
            "date": "20 May 24",
            "rating": 3,
            "avatar": "https://randomuser.me/api/portraits/men/17.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": false,
                "Hygiene": false,
                "Punctuality": true
            },
            "text": "The decorations for our wedding were nice but had some issues with hygiene and quantity. The team was punctual and polite, but these problems impacted the overall satisfaction."
        },
        {
            "name": "Riya Gupta",
            "booking": "Booked Balloon Decoration for Baby Shower",
            "date": "05 June 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/women/18.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The balloon decorations and catering for our baby shower were excellent. The food was delicious, and the decorations were beautiful. Minor delay in setup, but overall a great service."
        },
        {
            "name": "Aditya Patel",
            "booking": "Booked Live Catering for Graduation Party",
            "date": "12 July 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/men/19.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The live catering service was fantastic for our graduation party. The food was amazing, and the team was very professional. The event went off without a hitch, thanks to Creative Moments."
        },
        {
            "name": "Siddhi Rao",
            "booking": "Booked Balloon Decoration",
            "date": "01 July 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/women/20.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The decorations for our Diwali celebration were beautiful and the team was very friendly. There were minor issues with the quantity of balloons, but overall, the service was very satisfactory."
        },
        {
            "name": "Kabir Sharma",
            "booking": "Booked Chef for Housewarming",
            "date": "19 June 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/men/21.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Creative Moments provided excellent chef and decoration services for our housewarming. The food was delicious and the decorations were perfect. The team was very professional and timely."
        },
        {
            "name": "Pooja Agarwal",
            "booking": "Booked Live Catering for Engagement Party",
            "date": "28 April 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/women/22.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The catering for our engagement party was very good. The food was well-prepared and the team was courteous. There was a slight delay in the setup, but the overall quality of service was impressive."
        },
        {
            "name": "Ishaan Kapoor",
            "booking": "Booked Balloon Decoration for Corporate Event",
            "date": "02 June 24",
            "rating": 3,
            "avatar": "https://randomuser.me/api/portraits/men/23.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": false,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The decorations were decent for our corporate event, but there were some issues with the quantity and cleanliness. The team was punctual and friendly, but these issues affected our overall satisfaction."
        },
        {
            "name": "Meera Desai",
            "booking": "Booked Chef and Balloon Decoration for Birthday Party",
            "date": "09 May 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/24.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Everything was perfect for our birthday party. The food was delicious, and the balloon decorations were exactly what we wanted. The team was very professional and the event went smoothly."
        },
        {
            "name": "Rajesh Mehta",
            "booking": "Booked Balloon Decoration for Baby Shower",
            "date": "23 June 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/men/24.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The balloon decorations for our baby shower were lovely and the team was very professional. There were minor issues with the setup time, but it was well worth it for the beautiful results."
        },
        {
            "name": "Sanya Verma",
            "booking": "Booked Live Catering for Wedding Reception",
            "date": "12 April 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/25.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The live catering for our wedding reception was excellent. The food was delicious and the service was impeccable. The team was very accommodating and made sure everything was perfect."
        },
        {
            "name": "Ankit Singh",
            "booking": "Booked Balloon Decoration for Anniversary Party",
            "date": "29 May 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/men/25.jpg",
            "indicators": {
                "Taste": false,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The balloon decorations for our anniversary party were beautiful, and the team was professional. There were a few issues with the setup timing, but overall, the service was good."
        },
        {
            "name": "Jia Patel",
            "booking": "Booked Chef for Graduation Party",
            "date": "17 June 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/26.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The chef provided by Creative Moments was outstanding. The food was amazing and the service was top-notch. Our graduation party was a success thanks to their excellent catering."
        },
        {
            "name": "Gaurav Kumar",
            "booking": "Booked Balloon Decoration and Live Catering for Birthday Party",
            "date": "06 July 24",
            "rating": 4,
            "avatar": "https://randomuser.me/api/portraits/men/26.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "The balloon decorations and catering for our birthday party were great. The food was good, and the decorations were beautiful. There was a small delay in setup, but it was managed well."
        },
        {
            "name": "Neelam Yadav",
            "booking": "Booked Chef and Balloon Decoration for Family Gathering",
            "date": "10 June 24",
            "rating": 5,
            "avatar": "https://randomuser.me/api/portraits/women/27.jpg",
            "indicators": {
                "Taste": true,
                "Behaviour": true,
                "Presentation": true,
                "Quantity": true,
                "Hygiene": true,
                "Punctuality": true
            },
            "text": "Everything was perfect for our family gathering. The food was excellent, and the balloon decorations were exactly what we hoped for. The team was very professional and everything went smoothly."
        }

    ]

    const [visibleReviews, setVisibleReviews] = useState(10);

    const loadMore = () => {
        setVisibleReviews((prevVisible) => Math.min(prevVisible + 10, allReviewsData.length));
    };

    return (
        <Container>
            <Header>
                <h1>Ratings & Reviews</h1>
                <p>HORA has Served 5 Lakh people in 20+ cities!</p>
                <RatingHeader>
                    <Star>★</Star> 4.7 / 5 Average Rating
                </RatingHeader>
                <VerifiedReviews>✔ 10238 Verified Reviews</VerifiedReviews>
            </Header>
            <ReviewContainer1>
                {allReviewsData.slice(0, visibleReviews).map((review, index) => (
                    <ReviewCard key={index}>
                        <UserInfo>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar src={review.avatar} />
                                <div>
                                    <UserName>{review.name}</UserName>
                                    <BookingInfo>{review.booking}</BookingInfo>
                                </div>
                            </div>
                            <BookingDate>{review.date}</BookingDate>
                        </UserInfo>
                        <UserRating>{getStars(review.rating)}</UserRating>
                        {/* <Indicators>
                            {Object.entries(review.indicators).map(([key, value]) => (
                                value && <Indicator key={key}>{key}👍</Indicator>
                            ))}
                        </Indicators> */}
                        <ReviewText>{review.text}</ReviewText>
                    </ReviewCard>
                ))}
            </ReviewContainer1>
            {visibleReviews < allReviewsData.length && (
                <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
            )}
        </Container>
    );
};

export default CustomersReviews;