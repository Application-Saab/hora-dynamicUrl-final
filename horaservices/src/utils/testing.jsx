import React from 'react';
import './testing.css';
import Image from "next/image";

// StarRating Component to display stars for ratings
const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="stars">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}>
          {index < rating ? '⭐' : '☆'}
        </span>
      ))}
    </div>
  );
};

const ReviewBox = ({ reviews, averageRating, totalReviews, reviewImages }) => {
  return (
    <div className="review-section">
      <div className="review-box">
        {/* Heading */}
        <h2 className="review-heading">Our Happy Customers</h2>
        <div className="divider"></div>

        {/* Average Rating */}
        <div className="average-rating">
          <h2>{averageRating.toFixed(2)} 
                ⭐⭐⭐⭐⭐
            </h2>
          <h5 style={{marginTop: "10px", fontSize: "15px"}}>{totalReviews} Reviews</h5>
        </div>

        {/* Image Gallery */}
        <div className="image-gallery">
          {reviewImages.slice(0, 20).map((image, index) => (
            <Image key={index} src={image} alt={`Review img ${index + 1}`} className="thumbnail" />
          ))}
          {reviewImages.length > 20 && (
            <div className="more-images">+{reviewImages.length - 6} more</div>
          )}
        </div>

        {/* Customer Reviews */}
        <div className="customer-reviews">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                {/* Customer profile image */}
                <div className="customer-profile">
                  <Image width={50} height={30} src={review.profileImage} alt={review.name} className="profile-circle" />
                </div>
                <div className="review-info">
                  <h4>{review.name}</h4>
                  <span className='span-reivewDate'>{review.reviewDate}</span>
                  {/* Move the Verified Purchase below reviewDate */}
                  {review.verified && <span className="verified">Verified Purchase</span>}
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className='reviewText-css'>{review.reviewText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
const App = () => {
  const reviews = [
    {
      id: 1,
      name: "Harikrishna Thakur",
      reviewDate: "Reviewed in January",
      verified: true,
      rating: 5,
      reviewText: "Very responsive to communication. Team were very polite in addressing all of my concerns and answering my endless questions in a timely matter.Reasonable prices too! Highly recommend!!",
      profileImage: "data:image/jpeg;base64,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"
    },
    {
      id: 2,
      name: "Yash Jadav",
      reviewDate: "Reviewed in March",
      verified: true,
      rating: 4,
      reviewText: "The decorations from Glamour & Glow Creations were good, but there were some issues with the quantity and placement. The team was polite, but there were areas that could be improved.",
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9gbKLIRaf9WtoLCRkyRduQC-YAwEnAyPZ6t7AVEjI-tkhupfOgKk0heFjw&s"
    },
    {
      id: 3,
      name: "Aarav Sharma",
      reviewDate: "Reviewed in July",
      verified: true,
      rating: 4,
      reviewText: "Creative Moments truly exceeded our expectations! The balloon decorations were stunning, and the live catering was a hit with everyone. The team was punctual and very attentive to our needs. Highly recommend their services for any event!",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    ,
    {
      id: 4,
      name: "Kartik Agarwal",
      reviewDate: "Reviewed in July",
      verified: true,
      rating: 5,
      reviewText: "The balloon decorations for my child’s birthday party were fantastic! The kids loved it. The only issue was that the setup took a bit longer than expected, but it was worth the wait.",
      profileImage: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
        id: 5,
        name: "Rohan Sharma",
        reviewDate: "Reviewed in August",
        verified: true,
        rating: 5,
        reviewText: "The event was a hit! The team was professional, and the decorations exceeded our expectations. The balloon arches were especially stunning.",
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg"
      },
      {
        id: 6,
        name: "Aditi Mehra",
        reviewDate: "Reviewed in July",
        verified: true,
        rating: 4,
        reviewText: "The setup was beautiful, especially the photo booth area. It created the perfect backdrop for photos! A slight delay in setting up, but it didn’t affect the event.",
        profileImage: "https://randomuser.me/api/portraits/women/18.jpg"
      },
      {
        id: 7,
        name: "Sahil Patel",
        reviewDate: "Reviewed in September",
        verified: true,
        rating: 5,
        reviewText: "Fantastic job with the birthday decor! The team was very responsive and made sure everything was perfect. Highly recommend them for any event.",
        profileImage: "https://randomuser.me/api/portraits/men/35.jpg"
      },
      {
        id: 8,
        name: "Priya Nair",
        reviewDate: "Reviewed in June",
        verified: true,
        rating: 4,
        reviewText: "The decorations were beautiful, but the coordination could’ve been smoother. Still, the final outcome was wonderful, and everyone loved it.",
        profileImage: "https://randomuser.me/api/portraits/women/40.jpg"
      },
      {
        id: 9,
        name: "Ankit Joshi",
        reviewDate: "Reviewed in May",
        verified: true,
        rating: 5,
        reviewText: "Everything was perfect! The balloon decorations added a fun element to the event. Great attention to detail and an amazing team to work with!",
        profileImage: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: 10,
        name: "Pooja Verma",
        reviewDate: "Reviewed in September",
        verified: true,
        rating: 4,
        reviewText: "The decoration service was great, especially the flower arrangements. It added a special touch to our event. However, there was a minor delay in getting the balloons set up.",
        profileImage: "https://randomuser.me/api/portraits/women/25.jpg"
      }
      
  ];

  const reviewImages = [
    require('../assets/ballon-dec3.jpg'), require('../assets/ballon-dec2.jpg'), require('../assets/decimage1.jpg'),
    require('../assets/decoration1.png'), require('../assets/decoration3.png'),
    require('../assets/decoration4.png'), require('../assets/decoration-home-banner.png'), require('../assets/3506591.jpg'),
    require('../assets/3561202.jpg'), require('../assets/14308387.jpg'), require('../assets/adriannacalvo.jpg'),
    require('../assets/123456765432.jpg'), require('../assets/lexander.jpg')
  ];

  const averageRating = 4.51;
  const totalReviews = 176;

  return (
    <div className="app">
      <ReviewBox
        reviews={reviews}
        averageRating={averageRating}
        totalReviews={totalReviews}
        reviewImages={reviewImages}
      />
    </div>
  );
};

export default App;
