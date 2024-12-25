import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { Modal, Button, Container, Row, Col, Spinner } from "react-bootstrap";
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import checkImage from "../../../assets/tick.jpeg";
import orderWarning from "../../../assets/OrderWarning.png";
import Popup from "../../../utils/popup";
import SelectDishes from "../../../assets/selectDish.png";
import SelectDateTime from "../../../assets/event2.png";
import SelectConfirmOrder from "../../../assets/confirm_order.png";
import { useRouter } from "next/router";
import TickIcon from "../../../assets/tick.png";
import PlusIcon from "../../../assets/plus.png";
import MinusIcon from "../../../assets/ic_minus.png";
import PeopleIcon from "../../../assets/people.png";
import InfoIcon from "../../../assets/info.png";
import Image from "next/image";
import "../../../css/chefOrder.css";

const orangeColor = "#FF6F61";
const defaultColor = "#B0BEC5";

const FoodDeliveryselectDate = ({ history, currentStep }) => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [activeTab, setActiveTab] = useState("right");
  const [showAll, setShowAll] = useState(false);
  const [burnerCount, setBurnerCount] = useState(0);
  const [isWarningVisible, setWarningVisible] = useState(false);
  const [isTimeValid, setTimeValid] = useState(null);
  const [isDateValid, setDateValid] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [isDatePressed, setIsDatePressed] = useState(false);
  const [isTimePressed, setIsTimePressed] = useState(false);
  const [showCookingTime, setShowCookingTime] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Appliances");
  const [isWarningVisibleForTotalAmount, setWarningVisibleForTotalAmount] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  let {
    selectedOption,
    selectedDishDictionary,
    selectedDishPrice,
    selectedDishes,
    isDishSelected,
    selectedCount,
    selectedDishQuantities,
  } = router.query;

  const [peopleCount, setPeopleCount] = useState(
    selectedOption === 'party-live-buffet-catering' ? 20 : 10
  );

  if (selectedDishDictionary) {
    try {
      selectedDishDictionary = JSON.parse(selectedDishDictionary);
      selectedDishQuantities = JSON.parse(selectedDishQuantities);
    } catch (error) {
      console.error('Error parsing selectedDishDictionary:', error);
    }
  } // Accessing subCategory and itemName safely
  // selectedDishQuantities = Array.isArray(selectedDishQuantities) ? selectedDishQuantities : [];
  const data = selectedDishDictionary;
  const [dishPrice, setDishPrice] = useState(selectedDishPrice);

  const selectedMealList = Object.values(data).map(dish => {
    return {
        name: dish.name,
        image: dish.image,
        price: Number(dish.cuisineArray[0]),
        id: dish._id,
        mealId: dish.mealId
    };
});
const dishCount = selectedMealList.filter(x => x.mealId == "63f1b6b7ed240f7a09f7e2de" || x.mealId == "63f1b39a4082ee76673a0a9f" || x.mealId == "63edc4757e1b370928b149b3").length;
    function calculateDiscountPercentage(peopleCount, dishCount ) {
        console.log(peopleCount + "===3333====" +  dishCount)
        if (dishCount <= 5) {
            if (peopleCount >= 0 && peopleCount <= 10) {
                return 0;
            } else if (peopleCount >= 11 && peopleCount <= 19) {
                return 0;
            } else if (peopleCount >= 20 && peopleCount <= 29) {
                return 3.5;
            } else if (peopleCount >= 30 && peopleCount <= 39) {
                return 3.5;
            } else if (peopleCount >= 40 && peopleCount <= 49) {
                return 7.0;
            } else if (peopleCount >= 50 && peopleCount <= 59) {
                return 7.0;
            } else {
                return 10.0; // For 60-150 people, use the same discount percentage as 50-59 people
            }
        } else if (dishCount == 6) {
            if (peopleCount >= 0 && peopleCount <= 10) {
                return 15;
            } else if (peopleCount >= 11 && peopleCount <= 19) {
                return 15;
            } else if (peopleCount >= 20 && peopleCount <= 29) {
                return 18.5;
            } else if (peopleCount >= 30 && peopleCount <= 39) {
                return 18.5;
            } else if (peopleCount >= 40 && peopleCount <= 49) {
                return 22.0;
            } else if (peopleCount >= 50 && peopleCount <= 59) {
                return 22.0;
            } else if (peopleCount >= 60 && peopleCount <= 69) {
                return 25;
            } else if (peopleCount >= 70 && peopleCount <= 99) {
                return 25;
            } else {
                return 25; // For 100-150 people, use the same discount percentage as 70-99 people
            }
        }
        else if (dishCount == 7) {
            if (peopleCount >= 0 && peopleCount <= 10) {
                return 15;
            } else if (peopleCount >= 11 && peopleCount <= 19) {
                return 15;
            } else if (peopleCount >= 20 && peopleCount <= 29) {
                return 18.5;
            } else if (peopleCount >= 30 && peopleCount <= 39) {
                return 18.5;
            } else if (peopleCount >= 40 && peopleCount <= 49) {
                return 22.0;
            } else if (peopleCount >= 50 && peopleCount <= 59) {
                return 22.0;
            } else if (peopleCount >= 60 && peopleCount <= 69) {
                return 25;
            } else if (peopleCount >= 70 && peopleCount <= 99) {
                return 25;
            } else {
                return 25; // For 100-150 people, use the same discount percentage as 70-99 people
            }
        }
        else if (dishCount == 8) {
            if (peopleCount >= 0 && peopleCount <= 10) {
                return 25;
            } else if (peopleCount >= 11 && peopleCount <= 19) {
                return 25;
            } else if (peopleCount >= 20 && peopleCount <= 29) {
                return 28;
            } else if (peopleCount >= 30 && peopleCount <= 39) {
                return 28.5;
            } else if (peopleCount >= 40 && peopleCount <= 49) {
                return 28.5;
            } else if (peopleCount >= 50 && peopleCount <= 59) {
                return 32.5;
            } else if (peopleCount >= 60 && peopleCount <= 69) {
                return 32.5;
            } else if (peopleCount >= 70 && peopleCount <= 99) {
                return 35.0;
            } else {
                return 35.0; // For 100-150 people, use the same discount percentage as 70-99 people
            }
        }
        else if (dishCount == 9) {
            if (peopleCount >= 0 && peopleCount <= 10) {
                return 30;
            } else if (peopleCount >= 11 && peopleCount <= 19) {
                return 30;
            } else if (peopleCount >= 20 && peopleCount <= 29) {
                return 33.5;
            } else if (peopleCount >= 30 && peopleCount <= 39) {
                return 33.5;
            } else if (peopleCount >= 40 && peopleCount <= 49) {
                return 37;
            } else if (peopleCount >= 50 && peopleCount <= 59) {
                return 37;
            } else if (peopleCount >= 60 && peopleCount <= 69) {
                return 40;
            } else if (peopleCount >= 70 && peopleCount <= 99) {
                return 40;
            } else {
                return 40; // For 100-150 people, use the same discount percentage as 70-99 people
            }
        }
        else if (dishCount == 10) {
            if (peopleCount >= 0 && peopleCount <= 10) {
                return 35;
            } else if (peopleCount >= 11 && peopleCount <= 19) {
                return 35;
            } else if (peopleCount >= 20 && peopleCount <= 29) {
                return 38.5;
            } else if (peopleCount >= 30 && peopleCount <= 39) {
                return 38.5;
            } else if (peopleCount >= 40 && peopleCount <= 49) {
                return 42.0;
            } else if (peopleCount >= 50 && peopleCount <= 59) {
                return 42.0;
            } else if (peopleCount >= 60 && peopleCount <= 69) {
                return 45.0;
            } else if (peopleCount >= 70 && peopleCount <= 99) {
                return 45.0;
            } else {
                return 45.0; // For 100-150 people, use the same discount percentage as 70-99 people
            }
        }
        else if (dishCount == 11) {
            if (peopleCount >= 0 && peopleCount <= 10) {
                return 40;
            } else if (peopleCount >= 11 && peopleCount <= 19) {
                return 40;
            } else if (peopleCount >= 20 && peopleCount <= 29) {
                return 43.5;
            } else if (peopleCount >= 30 && peopleCount <= 39) {
                return 43.5;
            } else if (peopleCount >= 40 && peopleCount <= 49) {
                return 47.0;
            } else if (peopleCount >= 50 && peopleCount <= 59) {
                return 47.0;
            } else if (peopleCount >= 60 && peopleCount <= 69) {
                return 50.0;
            } else if (peopleCount >= 70 && peopleCount <= 99) {
                return 50.0;
            } else {
                return 50.0; // For 100-150 people, use the same discount percentage as 70-99 people
            }
        }
        else if (dishCount == 12) {
            if (peopleCount >= 0 && peopleCount <= 10) {
                return 50;
            } else if (peopleCount >= 11 && peopleCount <= 19) {
                return 50.0;
            } else if (peopleCount >= 20 && peopleCount <= 29) {
                return 53.5;
            } else if (peopleCount >= 30 && peopleCount <= 39) {
                return 53.5;
            } else if (peopleCount >= 40 && peopleCount <= 49) {
                return 57.0;
            } else if (peopleCount >= 50 && peopleCount <= 59) {
                return 57.0;
            } else if (peopleCount >= 60 && peopleCount <= 69) {
                return 60.0;
            } else if (peopleCount >= 70 && peopleCount <= 99) {
                return 60.0;
            } else {
                return 60.0; // For 100-150 people, use the same discount percentage as 70-99 people
            }
        }
        else if (dishCount == 13) {
            if (peopleCount >= 0 && peopleCount <= 10) {
                return 53;
            } else if (peopleCount >= 11 && peopleCount <= 19) {
                return 53.0;
            } else if (peopleCount >= 20 && peopleCount <= 29) {
                return 56.5;
            } else if (peopleCount >= 30 && peopleCount <= 39) {
                return 56.5;
            } else if (peopleCount >= 40 && peopleCount <= 49) {
                return 60.0;
            } else if (peopleCount >= 50 && peopleCount <= 59) {
                return 60.0;
            } else if (peopleCount >= 60 && peopleCount <= 69) {
                return 63.0;
            } else if (peopleCount >= 70 && peopleCount <= 99) {
                return 63.0;
            } else {
                return 63.0; // For 100-150 people, use the same discount percentage as 70-99 people
            }
        }
        else if (dishCount == 14) {
            if (peopleCount >= 0 && peopleCount <= 10) {
                return 53;
            } else if (peopleCount >= 11 && peopleCount <= 19) {
                return 53.0;
            } else if (peopleCount >= 20 && peopleCount <= 29) {
                return 56.5;
            } else if (peopleCount >= 30 && peopleCount <= 39) {
                return 56.5;
            } else if (peopleCount >= 40 && peopleCount <= 49) {
                return 60.0;
            } else if (peopleCount >= 50 && peopleCount <= 59) {
                return 60.0;
            } else if (peopleCount >= 60 && peopleCount <= 69) {
                return 63.0;
            } else if (peopleCount >= 70 && peopleCount <= 99) {
                return 63.0;
            } else {
                return 63.0; // For 100-150 people, use the same discount percentage as 70-99 people
            }
        }
        else if (dishCount == 15) {
            if (peopleCount >= 0 && peopleCount <= 10) {
                return 55;
            } else if (peopleCount >= 11 && peopleCount <= 19) {
                return 55.0;
            } else if (peopleCount >= 20 && peopleCount <= 29) {
                return 58.5;
            } else if (peopleCount >= 30 && peopleCount <= 39) {
                return 58.5;
            } else if (peopleCount >= 40 && peopleCount <= 49) {
                return 62.0;
            } else if (peopleCount >= 50 && peopleCount <= 59) {
                return 62.0;
            } else if (peopleCount >= 60 && peopleCount <= 69) {
                return 65.0;
            } else if (peopleCount >= 70 && peopleCount <= 99) {
                return 65.0;
            } else {
                return 65.0; // For 100-150 people, use the same discount percentage as 70-99 people
            }
        }
        else {

        }
    }

    const newDishPrice = selectedMealList.reduce((total, dish) => total + dish.price, 0);
    var totalPrice = selectedOption === 'party-live-buffet-catering' ?  ((newDishPrice * peopleCount) * 1.1 + 6500).toFixed(0) : newDishPrice * peopleCount;
    const discountPercentage = calculateDiscountPercentage(peopleCount, dishCount);
    console.log("discountPercentage" + discountPercentage)
    var discountedPrice = selectedOption === 'party-live-buffet-catering' ? ((totalPrice - 6500) * (discountPercentage / 100)).toFixed(0) : (totalPrice * (discountPercentage / 100)).toFixed(0);


    console.log(totalPrice+"===="+ discountedPrice)

  // Container for the whole component
  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 10px;

    @media (max-width: 768px) {
      padding: 0;
    }
  `;

  // Layout for heading and control section
  const HeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
    }
  `;

  // Heading
  const Heading = styled.p`
    margin: 0;
    font-size: 18px;
    color: #3c3c3e;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 16px;
      margin-bottom: 10px;
    }
  `;

  // Buttons container
  const ControlButtons = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: space-between;
      margin: 0;
    }
  `;

  // Container for Range Input and Count Display
  const RangeContainer = styled.div`
    display: flex;
    align-items: center;
    width: 94%;
    max-width: 920px;
    margin-top: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }
  `;

  // Range Input container
  const RangeWrapper = styled.div`
    flex: 1;
    padding: 5px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
    }
  `;

  // Text
  const CountText = styled.p`
    margin: 0 10px;
    line-height: 23px;
    font-size: 18px;
    text-align: center;
    color: black;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  `;

  // Display Count
  const CountDisplay = styled.p`
    margin-left: 20px;
    line-height: 23px;
    font-size: 18px;
    text-align: center;
    color: black;

    @media (max-width: 768px) {
      font-size: 16px;
      margin-left: 0; // Adjust margin for mobile
    }
  `;
  //different

  const Container = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: row; // Align items horizontally
    overflow-x: auto; // Enable horizontal scrolling if needed
    padding: 10px; // Adjust padding for mobile view
    width: 100%; // Ensure it takes up the full width of the parent
    white-space: nowrap; // Prevent labels from wrapping to the next line

    @media (max-width: 800px) {
      padding: 5px; // Reduce padding on smaller screens
       display: flex;
    }
  `;

  const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px; // Adjust margin for spacing
  `;

  const Line = styled.div`
    height: 2px;
    width: 50px; // Default width for mobile view
    background-color: #ccc;
    margin: 0 4px; // Adjust margin for spacing
    color: ${(props) => (props.active ? "#F46C5B" : "black")};

    @media (max-width: 600px) {
      width: 30px; // Smaller width for mobile view
    }
  `;

  //   const Image = styled.img`
  //     width: 48px;       // Default size for mobile view
  //     height: 48px;

  //     ${(props) => props.active && `border: 2px solid #000;`};

  //     @media (max-width: 600px) {
  //     width: 32px;     // Smaller width for mobile view
  //     height: 32px;    // Maintain aspect ratio
  //   }
  //   `;

  const Label = styled.div`
    margin-top: 5px;
    text-align: center;
    font-size: 14px; // Default font size
    color: ${(props) =>
      props.active ? "#F46C5B" : "black"}; // Color based on active prop
    white-space: nowrap; // Prevent text from wrapping

    @media (max-width: 600px) {
      font-size: 10px; // Smaller font size for mobile view
    }
  `;

  const [popupMessage, setPopupMessage] = useState({
    img: "",
    title: "",
    body: "",
    button: "",
  });

  const minPeopleCount = selectedOption === 'party-live-buffet-catering' ? 20 : 10;
  const maxPeopleCount = 100;
  const step = 5;

  const increasePeopleCount = () => {
    setPeopleCount(peopleCount + 1);
  };

  const decreasePeopleCount = () => {
    if (peopleCount > 25) {
      setPeopleCount(peopleCount - 1);
    } else {
      alert("Minimum guest count should be 25");
    }
  };

  const handleRangeChange = (e) => {
    console.log(e.target.value);
    const value = parseInt(e.target.value, 10);
    setPeopleCount(value);
    setDishPrice(value * 49); // Assuming 49 is the unit price
  };

  const handleWarningClose = () => {
    setWarningVisibleForTotalAmount(false);
  };

  const contactUsRedirection = () => {
    window.open(
      "https://wa.me/917338584828?text=Hello%20I%20have%20some%20queries%20for%20food%20delivery%20and%20live%20catering%20service"
    );
  };
  const onContinueClick = () => {
    const totalOrderAmount =
      selectedOption === "party-live-buffet-catering"
        ? (dishPrice * peopleCount * 1.1 + 6500).toFixed(0)
        : dishPrice * peopleCount;

    if (totalOrderAmount < 3000) {
      // alert("Please select minimum order amount: 3000rps");
      setWarningVisibleForTotalAmount(true);
      setPopupMessage({
        img: orderWarning,
        title: "Total Order Amount is less than ₹3000",
        body: "Total Order amount can not be less than ₹3000, Add more to continue",
        button: "Add More",
      });
      return; // Stop further execution if totalOrderAmount is less than 3000
    }

    const navigateState = {
      from: window.location.pathname,
      peopleCount: peopleCount,
      selectedDeliveryOption: selectedOption,
      selectedDishesFoodDelivery: JSON.stringify(data),
      totalOrderAmount: totalOrderAmount,
      selectedDishQuantities: JSON.stringify(selectedDishQuantities),
      selectedOption: selectedOption,
    };

    if (localStorage.getItem("isLoggedIn") !== "true") {
      router.push({
        pathname: "/login",
        query: {
          from: window.location.pathname,
          peopleCount: peopleCount,
          selectedDeliveryOption: selectedOption,
          selectedDishesFoodDelivery: JSON.stringify(data),
          totalOrderAmount: totalOrderAmount,
          selectedDishQuantities: JSON.stringify(selectedDishQuantities),
          selectedOption: selectedOption,
        }
        });
    } else {
      router.push({
        pathname: "/party-food-delivery-live-catering-buffet-checkout",
        query: {
          from: window.location.pathname,
          peopleCount: peopleCount,
          selectedDeliveryOption: selectedOption,
          selectedDishesFoodDelivery: JSON.stringify(data),
          totalOrderAmount: totalOrderAmount,
          selectedDishQuantities: JSON.stringify(selectedDishQuantities),
          selectedOption: selectedOption,
        }
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const LeftTabContent = ({ selectedOption }) => {
    return (
      <div
        style={{
          paddingTop: 10,
          backgroundColor: "#FFFFFF",
          paddingLeft: 10,
          borderRadius: 10,
          fontSize: 14,
          paddingBottom: 10,
        }}
      >
        <div>
          {selectedOption === "party-food-delivery" && (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image src={checkImage} alt="Info" style={{ height: 13, width: 13, marginRight: 10 }} />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 7,
                    marginBottom: "2px",
                  }}
                >
                  Free Delivery
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image src={checkImage} alt="Info" style={{ height: 13, width: 13, marginRight: 10 }} />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 7,
                    marginBottom: "2px",
                  }}
                >
                  Hygienically Packed boxes
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image src={checkImage} alt="Info" style={{ height: 13, width: 13, marginRight: 10 }} />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 7,
                    marginBottom: "2px",
                  }}
                >
                  {" "}
                  Freshly Cooked Food
                </p>
              </div>
            </>
          )}
        </div>
        <div>
          {selectedOption === "party-live-buffet-catering" && (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image src={TickIcon} alt="tick" style={{ height: 16, width: 16 }} />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 1,
                  }}
                >
                  {" "}
                  Well Groomed Waiters (2 Nos)
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image src={TickIcon} alt="tick" style={{ height: 16, width: 16 }} />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 4,
                    flex: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {" "}
                  Bone-china Crockery & Quality disposal for loose items.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image src={TickIcon} alt="tick" style={{ height: 16, width: 16 }} />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 6,
                  }}
                >
                  Transport (to & fro)
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image src={TickIcon} alt="tick" style={{ height: 16, width: 16 }} />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 8,
                  }}
                >
                  Dustbin with Garbage bag
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image src={TickIcon} alt="tick" style={{ height: 16, width: 16 }} />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 4,
                  }}
                >
                  {" "}
                  Head Mask for waiters & chefs
                </p>
              </div>
              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image src={TickIcon} alt="tick" style={{ height: 16, width: 16 }} />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 7,
                  }}
                >
                  Tandoor/Other cooking Utensils
                </p>
              </div> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image src={TickIcon} alt="tick" style={{ height: 16, width: 16 }} />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 8,
                  }}
                >
                  Chafing Dish
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image src={TickIcon} alt="tick" style={{ height: 16, width: 16 }} />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 8,
                  }}
                >
                  Cocktail Napkins
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image src={TickIcon} alt="tick" style={{ height: 16, width: 16 }} />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 8,
                  }}
                >
                  2 Chefs
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image
                  src={TickIcon}
                  alt="tick"
                  style={{ height: 16, width: 16 }}
                />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 9,
                  }}
                >
                  Water Can (Bisleri)(20 litres)
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Image
                  src={TickIcon}
                  alt="tick"
                  style={{ height: 16, width: 16 }}
                />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 9,
                  }}
                >
                  Hand gloves
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "90%",
                }}
              >
                <Image
                  src={TickIcon}
                  alt="exclusion"
                  style={{ height: 16, width: 16 }}
                />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    paddingLeft: 7,
                    flex: 1,
                    flexWrap: "wrap",
                  }}
                >
                  Exclusion: Buffet table/kitchen table is in client scope (can
                  be provided at additional cost)
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const RenderDishQuantity = ({ item }) => {
    const itemCount = Object.values(data).filter(x =>
      x.mealId[0] === "63f1b6b7ed240f7a09f7e2de" ||
      x.mealId[0] === "63f1b39a4082ee76673a0a9f" ||
      x.mealId[0] === "63edc4757e1b370928b149b3"
    ).length;

    const mainCourseItemCount = Object.values(data).filter(x => x.mealId[0] === "63f1b6b7ed240f7a09f7e2de").length;
    const appetizerItemCount = Object.values(data).filter(x => x.mealId[0] === "63f1b39a4082ee76673a0a9f").length;
    const breadItemCount = Object.values(data).filter(x => x.mealId[0] === "63edc4757e1b370928b149b3").length;

    let quantity = item.quantity * peopleCount;

    if (item.id && (
      (item.id[0] === "63f1b6b7ed240f7a09f7e2de" && mainCourseItemCount > 1) ||
      (item.id[0] === "63f1b39a4082ee76673a0a9f" && appetizerItemCount > 1) ||
      (item.id[0] === "63edc4757e1b370928b149b3" && breadItemCount > 1))
    ) {
      if (itemCount <= 5) {
        quantity = quantity;
      } else if (itemCount === 6 || itemCount === 7) {
        quantity = quantity * (1 - 0.15);
      } else if (itemCount === 8) {
        quantity = quantity * (1 - 0.25);
      } else if (itemCount === 9 || itemCount === 10) {
        quantity = quantity * (1 - 0.35);
      } else if (itemCount === 11) {
        quantity = quantity * (1 - 0.40);
      } else if (itemCount === 12) {
        quantity = quantity * (1 - 0.50);
      } else if (itemCount === 13) {
        quantity = quantity * (1 - 0.53);
      } else if (itemCount === 15) {
        quantity = quantity * (1 - 0.55);
      }
    }

    quantity = Math.round(quantity);
    let unit = item.unit;
    if (quantity >= 1000) {
      quantity = quantity / 1000;
      if (unit === 'Gram') {
        unit = 'KG';
      } else if (unit === 'ml') {
        unit = 'L';
      }
      else if (unit === 'Peices') {
        unit = 'PCS';
      }
    }

    return (
      <div style={{ width: "23%", alignItems: 'center', borderRadius: 5, border: "1px solid #DADADA", flexDirection: 'row', padding: "10px", display: "flex", marginBottom: "20px" }} className='ingredientsec'>
        <div style={{ marginLeft: 5, width: "45%", height: "auto", backgroundColor: '#F0F0F0', borderRadius: "10px", alignItems: 'center', padding: "5%", justifyContent: 'center', marginRight: 15 }} className='ingredientleftsec'>
          <Image src={`https://horaservices.com/api/uploads/${item.image}`} alt={item.name} style={styles.image} width={100} height={60} />
        </div>
        <div style={{ flexDirection: 'column', marginLeft: 1, width: 80 }} className='ingredientrightsec'>
          <div style={{ fontSize: "80%", fontWeight: '500', color: '#414141' }} className='ingredientrightsecheading'>{item.name}</div>
          {
            selectedOption === 'party-food-delivery' ? 
            <div style={{ fontSize: "110%", fontWeight: '700', color: '#9252AA' , textTransform:"uppercase"}} className='ingredientrightsecsibheading'>{quantity + ' ' + unit}</div>
            :
            null
          }
        </div>
      </div>
    );
  };


  const RightTabContent = ({ selected_dish_quantities }) => {
    if (!selected_dish_quantities) {
      // console.log('selectedDishQuantities is not an object:', selected_dish_quantities);
      return null;
    }
    return (
      <div
        style={{
          paddingTop: 14,
          paddingBottom: 11,
          paddingLeft: 8,
          backgroundColor: "#FFFFFF",
          marginLeft: 0,
          marginRight: 0,
          borderRadius: "0px 10px 10px 10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            borderRadius: "4px 13px 13px 13px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingBottom: 2,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="dishes-selected"
          >
            {Object.keys(selected_dish_quantities).length > 0 ? (
              Object.keys(selected_dish_quantities).map((key, index) => (
                <RenderDishQuantity
                  key={index}
                  item={selected_dish_quantities[key]}
                />
              ))
            ) : null}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "start",
            flexDirection: "row",
            borderRadius: 10,
            marginRight: 12,
            marginTop: 0,
            borderRadius: 10,
            backgroundColor: "#F9E9FF",
            padding: "10px 0px 10px 8px",
          }}
        >
          <Image src={InfoIcon} alt="Info" style={{ height: 13, width: 13 }} />
          <p
            style={{
              color: "#9252AA",
              fontWeight: "700",
              marginLeft: 5,
              fontSize: 11,
              marginBottom: 0,
            }}
          >
            Complementary: Green Salad, Mint Chutney, and Achar
          </p>
        </div>

        <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#9252AA",
                      fontWeight: "400",
                      padding: "10px 5px 0",
                    }}
                  >
                    Dish quantities vary based on guest count and selections.
                    Over 5 dishes: 550-700g per person. Under 5 dishes: 100g per
                    person per dish
                  </div>
                </div>
      </div>
    );
  };

  const renderTabContent = (selectedDishQuantities) => {
    if (activeTab === "left") {
      return <LeftTabContent selectedOption={selectedOption} />;
    } else if (activeTab === "right") {
      return (
        <RightTabContent selected_dish_quantities={selectedDishQuantities} />
      );
    }
  };

  return (
    <div
      style={{ width: "90%", margin: "0 auto", backgroundColor: "#EDEDED" }}
      className="selectdatesecouter"
    >
      <div
        style={{
          flexDirection: "row",
          backgroundColor: "#EFF0F3",
          boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.23)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <Image style={{ width: "20px", height: "20px", marginRight: "10px" }} src={InfoIcon} alt="info" />
        <p
          style={{
            color: "#676767",
            fontSize: "94%",
            fontWeight: "400",
            margin: "0",
          }}
          className="billheading"
        >
          Bill value depends upon Dish selected + Number of people
        </p>
      </div>

      <Container className="range-bar">
        <Step active={true.toString()}>
          <Image src={SelectDishes} alt="Select Dishes" style={isMobile ? styles.mobileDish : styles.webDish} />
          <Label active={true.toString()}>Select Dishes</Label>
        </Step>
        <Line active={true.toString()} />
        <Step>
          <Image src={SelectDateTime} alt="Select Date & Time" style={isMobile ? styles.mobileDish : styles.webDish} />
          <Label active={true.toString()}>Select Date & Time</Label>
        </Step>
        <Line />
        <Step>
          <Image src={SelectConfirmOrder} alt="Confirm Order" style={isMobile ? styles.mobileDish : styles.webDish} />
          <Label>Select Confirm Order</Label>
        </Step>
      </Container>
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          backgroudColor: "rgb(237, 237, 237)",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#edededc9",
        }}
        className="selectdateContainersec"
      >
        <div
          style={{ width: "98%", margin: "10px", padding: "10px 30px" }}
          className="selectdateContainer"
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "9px 20px 15px",
            }}
            className="peoplecontsec"
          >
            <div
              style={{ display: "flex", flexDirection: "column", marginTop: 13 }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    src={PeopleIcon}
                    style={{ height: 25, width: 25 }}
                    alt="people icon"
                  />
                  <p
                    style={{
                      margin: "0 0 0 10px",
                      fontSize: "100%",
                      padding: "0",
                      color: "#3C3C3E",
                      fontWeight: "500",
                    }}
                    className="selectdateContainerheadig"
                  >
                    How many people you are hosting?
                  </p>
                  <div style={{ display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                  <button
                    onClick={decreasePeopleCount}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <Image
                      src={MinusIcon}
                      style={{ height: 25, width: 25, marginLeft: 5 }}
                      alt="minus icon"
                       className="quantiy-icon"
                    />
                  </button>
                  <p
                    style={{
                      marginLeft: 5,
                      lineHeight: "23px",
                      fontSize: 18,
                      marginTop: "0",
                      marginBottom:"0",
                      width: 22,
                      textAlign: "center",
                      color: "black",
                    }}
                    className="totalcount"
                  >
                    {peopleCount}
                  </p>
                  <button
                    onClick={increasePeopleCount}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <Image
                      src={PlusIcon}
                      style={{ height: 25, width: 25, marginLeft: 5 }}
                      alt="plus icon"
                      className="quantiy-icon"
                    />
                  </button>
                  </div>
                </div>
              </div>

              <div className="range-container">
                <div className="range-wrapper">
                  <input
                    type="range"
                    min={minPeopleCount}
                    max={maxPeopleCount}
                    step={step}
                    value={peopleCount}
                    id="customRange3"
                    onChange={handleRangeChange}
                    className="range-input"
                    style={{
                      "--range-color": "rgb(146, 82, 170)", // Custom color variable
                      "--range-track-height": "6px", // Custom track height
                      "--range-thumb-size": "14px", // Custom thumb (handle) size
                      "--range-thumb-transform": "translateY(-30%)", // Vertically center the thumb
                    }}
                  />
                  <div>
                    <div className="count-display">{peopleCount}</div>
                  </div>
                </div>
              </div>


              <div className="d-flex flex-column flex-lg-row align-items-between justify-content-center  align-items-lg-center justify-content-lg-between">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: " baseline",
                justifyContent: " space-between",
                paddingTop: 12,
                width:"100%",

              }}
            >
              <p style={{ fontSize: 16, fontWeight: 600, color: "#222"   , marginBottom:0}}>
                Need more info?
              </p>
           
                <button className="button-cta whatsapp-cta"  onClick={contactUsRedirection}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle icon-cta"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" className="whatsapp-iconimg"></path></svg>Whatsapp</button>
           
            </div>

          </div>
            </div>

      
          </div>


       
          <div
            style={{
              flexDirection: "row",
              marginTop: 20,
              marginHorizontal: 16,
            }}
          >
            <button
              style={{
                backgroundColor: activeTab === "left" ? "white" : "#D9D9D9",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 15,
                padding: "5px 60px",
                borderRight: "1px solid #ccc",
              }}
              onClick={() => setActiveTab("left")}
              className="tabButton"
            >
              <p
                style={
                  activeTab === "left" ? styles.activeTab : styles.inactiveTab
                }
              >
                Inclusion
              </p>
            </button>
            <button
              style={{
                backgroundColor: activeTab === "right" ? "white" : "#D9D9D9",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 15,
                padding: "5px 60px",
              }}
              onClick={() => setActiveTab("right")}
              className="tabButton"
            >
              <p
                style={
                  activeTab === "right" ? styles.activeTab : styles.inactiveTab
                }
              >
                Dishes Selected
              </p>
            </button>
            {renderTabContent(selectedDishQuantities)}
          </div>

       
        </div>
      </div>
      <Row>
        <Col>
          <div
            style={{
              position: "fixed",
              bottom: 0,
              width: "100%",
              backgroundColor: "#EDEDED",
              borderTop: "1px solid #efefef",
              padding: "15px 0",
              left: "0",
            }}
          >
            <Button
              onClick={onContinueClick}
              style={{
                width: "50%",
                backgroundColor: isDishSelected ? "#9252AA" : "#F9E9FF",
                borderColor: isDishSelected ? "#9252AA" : "#F9E9FF",
              }}
              disabled={!isDishSelected}
              className="continuebtnchef"
            >
              <div
                style={{
                  className: "continueButtonLeftText",
                  color: isDishSelected ? "white" : "#343333",
                }}
              >
                Continue
              </div>
              <div
                style={{
                  className: "continueButtonRightText",
                  color: isDishSelected ? "white" : "#343333",
                }}
              >
                {selectedCount} Items | ₹ {totalPrice - discountedPrice}
              </div>
            </Button>
          </div>
        </Col>
      </Row>
      {isWarningVisibleForTotalAmount && (
        <Popup popupMessage={popupMessage} onClose={handleWarningClose} />
      )}
    </div>
  );
};

const styles = {
  activeTab: {
    fontWeight: "500",
    color: "#823D9D",
    fontSize: 13,
    padding: "0px",
    margin: "0px",
  },
  inactiveTab: {
    color: "#969696",
    fontSize: 13,
    fontWeight: "500",
    padding: "0px",
    margin: "0px",
  },
  burner: {
    width: "56px",
    margin: "10px 0 0",
  },
  mobileDish: {
    width: "32px",
    height: "32px",
  },
  webDish: {
    width: "48px",
    height: "48px",
  },
};

export default FoodDeliveryselectDate;
