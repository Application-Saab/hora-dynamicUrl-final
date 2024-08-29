// import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import axios from 'axios';
import { BASE_URL, GET_ADDRESS_LIST, CONFIRM_ORDER_ENDPOINT, SAVE_LOCATION_ENDPOINT } from '../../utils/apiconstants';
import { PAYMENT, PAYMENT_STATUS, API_SUCCESS_CODE } from '../../utils/apiconstants';
import { Button, Card, Form } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import checkImage from '../../assets/check.png';
import { useRouter } from 'next/router';
import Image from 'next/image';

const FoodDeliveryCheckout = () => {
    //   const { selectedDishesFoodDelivery , selectedOption ,orderType, selectedDishDictionary, selectedDishPrice, totalOrderAmount , selectedDishQuantities , peopleCount} = useLocation().state || {}; // Accessing subCategory and itemName safely
    const [comment, setComment] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDateError, setSelectedDateError] = useState(false);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
    const [selectedTimeSlotError, setSelectedTimeSlotError] = useState(false);
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState(false);
    const [pinCode, setPinCode] = useState('');
    const [pinCodeError, setPinCodeError] = useState(false);
    const [picodeReqError, setPicodeReqError] = useState(false);
    const [city, setCity] = useState('');
    const [cityError, setCityError] = useState(false);
    const router = useRouter();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [deliveryCharges, setDeliveryCharges] = useState(250);
    const [packingCost, setpackingCost] = useState(200);
    const [includeDisposable, setIncludeDisposable] = useState(true); // State for checkbox
    const [includeTables, setIncludeTables] = useState(true);
    const [combinedDateTime, setCombinedDateTime] = useState(null);
    const [combinedDateTimeError, setCombinedDateTimeError] = useState(false);
    const [isClient, setIsClient] = useState(false);

    /// order.type is 2 for chef
    /// order.type is 1 for decoration
    /// order.type is 3 for waiter
    /// order type 4  bar tender
    /// order type 5 cleaner
    /// order type 6 Single Plate Meal
    /// order type 7 Live Buffer
    /// order type 8 Bulk Catering.
    let {
        selectedDishesFoodDelivery,
        selectedOption,
        orderType,
        selectedDishDictionary,
        selectedDishPrice,
        totalOrderAmount,
        selectedDishQuantities,
        peopleCount
    } = router.query;

    if (selectedDishesFoodDelivery) {
        try {
            selectedDishesFoodDelivery = JSON.parse(selectedDishesFoodDelivery);
            selectedDishQuantities = JSON.parse(selectedDishQuantities);
        } catch (error) {
            console.error('Error parsing selectedDishDictionary:', error);
        }
    }
    const selectedDeliveryOption = selectedOption;

    const handleComment = (e) => {
        setComment(e.target.value);
    };

    // console.log("selectedDishesFoodDelivery", selectedDishesFoodDelivery)

    const selectedMealList = selectedDishesFoodDelivery
        ? Object.values(selectedDishesFoodDelivery).map(dish => {
            return {
                name: dish.name,
                image: dish.image,
                price: Number(dish.cuisineArray[0]),
                id: dish._id,
                mealId: dish.mealId
            };
        })
        : [];

    const dishCount = selectedMealList.filter(x => x.mealId == "63f1b6b7ed240f7a09f7e2de" || x.mealId == "63f1b39a4082ee76673a0a9f" || x.mealId == "63edc4757e1b370928b149b3").length;
    function calculateDiscountPercentage(peopleCount, dishCount) {
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

    // Assuming selectedMealList, peopleCount, and dishCount are defined earlier
    const dishPrice = selectedMealList.reduce((total, dish) => total + dish.price, 0);
    // console.log("dishPrice" + dishPrice)
    var totalPrice = selectedDeliveryOption === 'party-live-buffet-catering' ? ((dishPrice * peopleCount) * 1.1 + 6500).toFixed(0) : dishPrice * peopleCount;
    const discountPercentage = calculateDiscountPercentage(peopleCount, dishCount);
    // console.log("discountPercentage" + discountPercentage)
    var discountedPrice = selectedDeliveryOption === 'party-live-buffet-catering' ? ((totalPrice - 6500) * (discountPercentage / 100)).toFixed(0) : (totalPrice * (discountPercentage / 100)).toFixed(0);

    const calculateFinalTotal = () => {
        let finalTotal = totalPrice - parseFloat(discountedPrice) + deliveryCharges;
        console.log(totalPrice, discountedPrice);
        console.log("finalTotal: " + finalTotal);
        if (selectedDeliveryOption === 'party-food-delivery') {
            finalTotal += parseFloat(packingCost);
            console.log("finalTotal after packing cost: " + finalTotal);
            if (includeDisposable) {
                finalTotal += parseFloat((20 * peopleCount).toFixed(0));
                console.log("finalTotal after disposable cost: " + finalTotal);
            }
        } else if (selectedDeliveryOption === 'party-live-buffet-catering') {
            if (includeTables) {
                finalTotal += 1200;
                console.log("finalTotal after table cost: " + finalTotal);
            }
        }
        console.log("finalTotal after adjustments: " + finalTotal.toFixed(0));
        return finalTotal.toFixed(0);
    };

    // Function to calculate the advance payment
    const calculateAdvancePayment = () => {
        return Math.round(calculateFinalTotal() * 0.65);
    };

    // useEffect(() => {
    //     Object.values(selectedDishData).map((item) => cat.push(item.cuisineId[0]));
    // }, []);

    const RenderDishQuantity = ({ item }) => {
        const itemCount = selectedDishQuantities.filter(meal => meal.id[0] === "63f1b6b7ed240f7a09f7e2de" || meal.id[0] === "63f1b39a4082ee76673a0a9f" || meal.id[0] === "63edc4757e1b370928b149b3").length
        const mainCourseItemCount = selectedDishQuantities.filter(meal => meal.id[0] === "63f1b6b7ed240f7a09f7e2de").length
        const appetizerItemCount = selectedDishQuantities.filter(meal => meal.id[0] === "63f1b39a4082ee76673a0a9f").length
        const breadItemCount = selectedDishQuantities.filter(meal => meal.id[0] === "63edc4757e1b370928b149b3").length

        let quantity = item.quantity * peopleCount;

        if ((item.id[0] === "63f1b6b7ed240f7a09f7e2de" && mainCourseItemCount > 1) || (item.id[0] === "63f1b39a4082ee76673a0a9f" && appetizerItemCount > 1) || (item.id[0] === "63edc4757e1b370928b149b3" && breadItemCount > 1)) {
            if (itemCount <= 5) {
                quantity = quantity
            }
            else if (itemCount == 6) {
                quantity = quantity * (1 - 0.15)
            }
            else if (itemCount == 7) {
                console.log("quantity before" + quantity)
                quantity = quantity * (1 - 0.15)
                console.log("quantity after" + quantity)
            }
            else if (itemCount == 8) {
                quantity = quantity * (1 - 0.25)
            }
            else if (itemCount == 8) {
                quantity = quantity * (1 - 0.30)
            }
            else if (itemCount == 9) {
                quantity = quantity * (1 - 0.35)
            }
            else if (itemCount == 10) {
                quantity = quantity * (1 - 0.35)
            }
            else if (itemCount == 11) {
                quantity = quantity * (1 - 0.40)
            }
            else if (itemCount == 11) {
                quantity = quantity * (1 - 0.40)
            }
            else if (itemCount == 12) {
                quantity = quantity * (1 - 0.50)
            }
            else if (itemCount == 13) {
                quantity = quantity * (1 - 0.53)
            }
            else if (itemCount == 15) {
                quantity = quantity * (1 - 0.55)
            }
        }
        quantity = Math.round(quantity)
        let unit = item.unit;
        if (quantity >= 1000) {
            quantity = quantity / 1000;
            if (unit === 'Gram')
                unit = 'KG'
            else if (unit === 'ml')
                unit = 'L'
        }
        return (
            <div className='ordersummaryproduct'>
                <div>
                    <Image
                        src={`https://horaservices.com/api/uploads/${item.image}`}
                        alt={item.name}
                        className='checkoutRightImg chef'
                        width={300} height={300}
                    />
                </div>
                <div style={{ color: "rgb(146, 82, 170)", fontWeight: "600" }}>
                    <p className='ordersummeryname'>{item.name}</p>

                </div>
            </div>
        );
    };

    const handleDateChange = (date) => {
        console.log(`Date selected: ${date}`);
        setSelectedDate(date);
        setSelectedDateError(false);
        combineDateTime(date, selectedTimeSlot); // Pass the current selected time slot
    };

    const handleTimeSlotChange = (event) => {
        const timeSlot = event.target.value;
        console.log(`Time slot selected: ${timeSlot}`);
        setSelectedTimeSlot(timeSlot);
        setSelectedDateError(false);
        combineDateTime(selectedDate, timeSlot); // Pass the current selected date
    };

    const combineDateTime = (date, timeSlot) => {
        console.log(`Combining Date: ${date} with Time Slot: ${timeSlot}`);
        if (date && timeSlot) {
            const [startHour, period] = timeSlot.split('-')[0].trim().split(' ');
            let hour = parseInt(startHour.split(':')[0], 10);
            if (period === 'PM' && hour !== 12) {
                hour += 12;
            } else if (period === 'AM' && hour === 12) {
                hour = 0;
            }

            const combinedDate = new Date(date);
            console.log(`Initial Combined Date: ${combinedDate}`);
            combinedDate.setHours(hour);
            combinedDate.setMinutes(0);
            combinedDate.setSeconds(0);
            combinedDate.setMilliseconds(0);
            console.log(`Final Combined Date: ${combinedDate}`);
            setCombinedDateTime(combinedDate);
            validateDateTime(combinedDate);
        }
    };

    const validateDateTime = (combinedDate) => {
        const now = new Date();
        console.log(`Combined Date for Validation: ${combinedDate}`);
        const timeDifference = combinedDate - now;
        console.log(`Time Difference: ${timeDifference} ms`);
        // Check if the combined date and time are at least 24 hours in the future
        if (timeDifference < 24 * 60 * 60 * 1000) { // 24 hours in milliseconds
            console.log("The selected date and time are less than 24 hours from now.");
            setCombinedDateTimeError(true);
        } else {
            console.log("The selected date and time are valid.");
            setCombinedDateTimeError(false);
        }
    };

    const generateTimeSlots = () => {
        const startTime = 7; // Starting hour
        const endTime = 22; // Ending hour
        const interval = orderType == 2 ? 1 : 3; // Interval in hours

        const timeSlots = [];
        for (let hour = startTime; hour < endTime; hour += interval) {
            const startTimeFormatted = hour < 10 ? `0${hour}:00 AM` : `${hour % 12 || 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;
            const endTimeFormatted = hour + interval < 10 ? `0${hour + interval}:00 AM` : `${(hour + interval) % 12 || 12}:00 ${hour + interval < 12 ? 'AM' : 'PM'}`;
            timeSlots.push(`${startTimeFormatted} - ${endTimeFormatted}`);
        }
        return timeSlots;
    };

    const pincodes = [
        "560063", "560030", "560034", "560007", "560092", "560024", "560045", "560003", "560050", "562107",
        "560064", "560047", "560026", "560086", "560002", "560070", "560073", "560053", "560085", "560043",
        "560017", "560001", "560009", "560025", "560083", "560076", "560004", "560079", "560103", "560046",
        "562157", "560010", "560049", "560056", "560068", "560093", "560018", "560040", "560097", "560061",
        "562130", "560067", "560036", "560029", "560062", "560037", "560071", "562125", "560016", "560100",
        "560005", "560065", "560019", "560021", "560022", "560013", "560087", "560008", "560051", "560102",
        "560104", "560048", "560094", "560066", "560038", "560078", "560006", "560014", "560015", "560041",
        "560069", "560011", "560020", "560084", "560096", "560098", "560095", "560077", "560074", "560054",
        "560023", "560033", "560055", "560099", "560072", "560039", "560075", "560032", "560058", "560059",
        "560080", "560027", "560012", "560042", "560028", "560052", "560091", "110001", "110002", "110003",
        "110004", "110005", "110006", "110007", "110008", "110009", "110010", "110011", "110012", "110013",
        "110014", "110015", "110016", "110017", "110018", "110019", "110020", "110021", "110022", "110023",
        "110024", "110025", "110026", "110027", "110028", "110029", "110030", "110031", "110032", "110033",
        "110034", "110035", "110036", "110037", "110038", "110039", "110040", "110041", "110042", "110043",
        "110044", "110045", "110046", "110047", "110048", "110049", "110051", "110052", "110053", "110054",
        "110055", "110056", "110057", "110058", "110059", "110060", "110061", "110062", "110063", "110064",
        "110065", "110066", "110067", "110068", "110070", "110071", "110073", "110074", "110075", "110076",
        "110078", "110081", "110082", "110083", "110084", "110085", "110086", "110087", "110088", "110091",
        "110092", "110093", "110094", "110095", "110096", "201301", "201302", "201303", "201304", "201305",
        "201306", "201307", "201309", "201312", "201308", "201312", "201315", "201310", "201318", "122001",
        "122002", "122003", "122006", "122008", "122009", "122010", "122011", "122015", "122016", "122017",
        "122018", "201009", "201001", "201002", "201003", "201004", "201005", "201006", "201007", "201008",
        "201010", "201011", "201012", "201013", "201014", "201015", "201016", "201017", "201018", "121002",
        "121001", "121003", "121004", "121005", "121006", "121007", "121008", "121009", "121010", "122022",
         "560035"
    ]

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
        if (e.target.value) {
            setAddressError(false)
        } else {
            setAddressError(true)
        }
    };

    const handlePinCodeChange = (e) => {
        if (e.target.value) {
            setPicodeReqError(false)
        } else {
            setPicodeReqError(true)
        }
        setPinCode(e.target.value);
        if (((e.target.value).length) == 6) {
            const validpin = pincodes.some((validPin) => validPin === e.target.value)
            if (!validpin) {
                setPinCodeError(true)
            } else {
                setPinCodeError(false)
            }
        } else {
            setPinCodeError(true)
        }
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
        if (e.target.value) {
            setCityError(false)
        } else {
            setCityError(true)
        }
    };

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    const contactUsRedirection = () => {
        window.open('https://wa.me/917338584828?text=Hello%20I%20have%20some%20queries%20for%20food%20delivery%20and%20live%20Catering%20service', '_blank');
    };

    const saveAddress = async () => {
        try {
            const url = BASE_URL + SAVE_LOCATION_ENDPOINT;

            // Retrieve userID from localStorage
            let userId = localStorage.getItem("userID");

            if (!userId) {
                console.error('Error retrieving userID');
                return;
            }

            const address2 = address + pinCode;
            const requestData = {
                address1: address2,
                address2: address2,
                locality: city,
                city: city,
                userId: userId
            };

            const token = localStorage.getItem('token');

            const response = await axios.post(url, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token
                },
            });

            if (response.status === API_SUCCESS_CODE) {
                // Handle navigation in React (e.g., using React Router)
                console.log("Address saved successfully");
                return response.data.data._id
            }
        } catch (error) {
            console.log('Error  Data:', error.message);
        }
    };


    const onContinueClick = async () => {
        const apiUrl = BASE_URL + PAYMENT;
        const storedUserID = await localStorage.getItem('userID');
        const phoneNumber = await localStorage.getItem('mobileNumber')
        let merchantTransactionId;
        const advance = calculateAdvancePayment();
        const total = calculateFinalTotal();
        console.log(selectedTimeSlot);
        try {
            const addressID = await saveAddress();
            const storedUserID = await localStorage.getItem('userID');
            const url = BASE_URL + CONFIRM_ORDER_ENDPOINT;
            const requestData = {
                "toId": "",
                "order_time": selectedTimeSlot,
                "no_of_people": peopleCount,
                "type": 6,
                "fromId": storedUserID,
                "is_discount": "0",
                "addressId": addressID,
                "order_date": selectedDate.toDateString(),
                "no_of_burner": includeDisposable,
                "order_locality": city,
                "total_amount": total,
                "orderApplianceIds": [],
                "payable_amount": total,
                "is_gst": "0",
                "order_type": true,
                "items": Object.keys(selectedDishesFoodDelivery),
                "status": 0
            }

            const token = await localStorage.getItem('token');

            const response = await axios.post(url, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token
                },
            });

            merchantTransactionId = response.data.data._id
            //}
        } catch (error) {
            console.log('Error Confirming Order:', error.message);
        }

        const requestData2 = {
            user_id: storedUserID,
            price: advance,
            phone: phoneNumber,
            name: '',
            merchantTransactionId: merchantTransactionId
        };
        try {
            if (city && pinCode && address && selectedTimeSlot && selectedDate) {
                if (combinedDateTimeError) {
                    alert("The selected date and time must be at least 24 hours from now.");
                    return;
                }
                const response2 = await axios.post(apiUrl, requestData2, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });


                window.location.href = response2.data

            } else {
                if (!city) {
                    setCityError(true)
                }
                if (!pinCode) {
                    setPicodeReqError(true)
                    setPinCodeError(true)
                }
                if (!address) {
                    setAddressError(true)
                }
                if (!selectedTimeSlot) {
                    setSelectedTimeSlotError(true)
                }
                if (!selectedDate) {
                    setSelectedDateError(true)
                }
            }

        } catch (error) {
            // Handle errors
            console.error('API error:', error);
        }

    }

    return (
        <div className="App">
            {isClient && window.innerWidth > 800 ?
                <div style={{ padding: "1% 2%", backgroundColor: "rgba(237, 237, 237, 0.79)" }}>
                    <div style={{ display: "flex" }} className='checoutSec my-3 gap-3'>
                        <div style={{ width: "40%", boxShadow: "rgba(0, 0, 0, 0.18) 0px 1px 8px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "20px" }} className='leftSeccheckout'>
                            <h2 style={{ fontSize: "22px", fontWeight: "400", color: "#222", borderBottom: "1px solid #f0f0f0", margin: "0 0 8px 0", lineHeight: "35px" }}>Booking Details</h2>
                            <div className='border border-danger p-1 px-3 rounded bg-danger-subtle text-black text-center' style={{ color: '#000', fontSize: 12, fontWeight: '500', textAlign: 'left', color: "#9252AA" }}>The decorator requires approximately 40-90 minutes to fulfill the service</div>
                            <div style={{ display: 'flex', margin: "8px 0px 10px", flexDirection: "row" }} className='row align-items-between justify-content-between   align-items-lg-center justify-content-lg-between'>
                                <CustomDatePicker handleDateChange={handleDateChange} setSelectedDate={setSelectedDate} selectedDate={selectedDate} showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} combinedDateTimeError={combinedDateTimeError} selectedDateError={selectedDateError} />
                                <CustomTimePicker handleTimeSlotChange={handleTimeSlotChange} generateTimeSlots={generateTimeSlots} selectedTimeSlot={selectedTimeSlot} combinedDateTimeError={combinedDateTimeError} selectedTimeSlotError={selectedTimeSlotError} />
                            </div>
                            {combinedDateTimeError && <p className="text-danger" style={{ fontSize: '12px', margin: "5px 0 0 0" }}>The selected date and time must be at least 24 hours from now.</p>}

                            <div className='checkoutInputType border-1 rounded-4  ' style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                <h4 style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marginBottom: "4px" }}>Share your comments (if any)</h4>
                                <textarea className='rounded border border-1 p-1 bg-white text-black'
                                    value={comment}
                                    onChange={handleComment}
                                    rows={4}
                                    placeholder="Enter your comment."
                                />
                            </div>
                            <div>
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} className='checkoutInputType'>
                                    <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", fontWeight: "600" }}>Address:</label>
                                    <textarea
                                        type="text"
                                        className='rounded border border-1 p-1 bg-white text-black'
                                        value={address}
                                        onChange={handleAddressChange}
                                        rows={4}
                                        placeholder="Enter your Address."
                                    />
                                    {addressError && <p className={`p-0 m-0 ${addressError ? "text-danger" : ""}`}>This field is required!</p>}
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} className='checkoutInputType'>
                                    <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marigin: "16px 0 6px", fontWeight: 600 }}>Pin Code:</label>
                                    <input
                                        type="text" className='bg-white text-black rounded border border-1 p-1'
                                        value={pinCode}
                                        onChange={handlePinCodeChange}
                                    />
                                    {pinCode && <p className={`p-0 m-0 ${pinCodeError ? "text-danger" : "text-success"}`}>{`Service ${pinCodeError ? 'not' : ''} available in your area!`}</p>}
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} className='checkoutInputType'>
                                    <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marigin: "16px 0 6px", fontWeight: 600 }}>City:</label>
                                    <select value={city} className='bg-white text-black rounded border border-1 p-1' onChange={handleCityChange}>
                                        <option value="">Select City</option>
                                        <option value="Bangalore">Bangalore</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Mumbai">Mumbai</option>
                                        {/* Add more cities as needed */}
                                    </select>
                                    {cityError && <p className={`p-0 m-0 ${cityError ? "text-danger" : ""}`}>This field is required!</p>}
                                </div>
                            </div>
                            <button onClick={onContinueClick} className="blue-btn chkeoutBottun">Confirm Order</button>
                        </div>
                        <div className="rightSecfooddelivery" style={{ boxShadow: "rgba(0, 0, 0, 0.18) 0px 1px 8px", padding: "20px", width: "59%", borderRadius: "20px", backgroundColor: "rgb(255, 255, 255)" }}>
                            <h3 style={{ fontSize: "22px", fontWeight: "400", color: "#222", borderBottom: "1px solid #f0f0f0", margin: "0 0 11px 0", lineHeight: "35px" }}>Order Summary</h3>
                            <div className='righysercchefinner'>
                                <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ marginHorizontal: 16, flexDirection: 'column', width: 120, borderRadius: 6, border: "1px solid #E6E6E6", padding: 5 }}>
                                        <p style={{ color: '#A3A3A3', fontSize: 9, fontWeight: '400', margin: 0 }}>Total Dishes</p>
                                        <p style={{ color: '#9252AA', fontSize: 13, fontWeight: '600', margin: 0 }}>{Object.keys(selectedDishesFoodDelivery).length}</p>
                                    </div>
                                    <div style={{ marginHorizontal: 16, flexDirection: 'column', width: 120, borderRadius: 6, border: "1px solid #E6E6E6", padding: 5 }}>
                                        <p style={{ color: '#A3A3A3', fontSize: 9, fontWeight: '400', margin: 0 }}>No. of People</p>
                                        <p style={{ color: '#9252AA', fontSize: 13, fontWeight: '600', margin: 0 }}>{peopleCount}</p>
                                    </div>
                                </div>

                                <div style={{ paddingTop: "5px" }}>
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                                        <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Item Total</p>
                                        <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>₹ {totalPrice}</p>
                                    </div>
                                    {/* <img style={{ width: 290, height: 1, marginTop: 5, marginBottom: 5 }} src="../../assets/Rectangleline.png" alt="line" /> */}
                                    {discountedPrice > 0 && (
                                        <div>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3, alignItems: "center" }}>
                                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row' }}>
                                                    <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Item Discount:</p>
                                                </div>
                                                <p style={{ color: "#008631", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>
                                                    {'-'} ₹ {discountedPrice}
                                                </p>
                                            </div>
                                            {/* <img style={{ width: 290, height: 1, marginTop: 5, marginBottom: 5 }} src="../../assets/Rectangleline.png" alt="line" /> */}
                                        </div>
                                    )}
                                    {selectedDeliveryOption === 'party-food-delivery' && (
                                        <div>
                                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: includeDisposable ? '#efefef' : '#fff', padding: "4px", margin: "0px 0 17px 0" }}>
                                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                                    <button onClick={() => setIncludeDisposable(!includeDisposable)} style={{ background: 'none', border: 'none', padding: 0 }}>
                                                        <div style={{ width: 19, height: 19, borderWidth: 1, border: includeDisposable ? '1px solid #008631' : '1px solid #008631', borderRadius: 3, alignItems: 'center', justifyContent: 'center', marginRight: 4, display: 'flex' }}>
                                                            {includeDisposable && <Image src={checkImage} alt="Info" width={13} height={13} />}
                                                        </div>
                                                    </button>
                                                    <div>
                                                        <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 13, lineHeight: '20px', marginBottom: 0 }}>Disposable plates + water bottle:₹ 20/Person</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 14, marginBottom: 0 }}>₹ {includeDisposable ? 20 * peopleCount : 0}</p>
                                                </div>
                                            </div>
                                            {/* <img style={{ width: 290, height: 1, marginTop: 10, marginBottom: 5 }} src="../../assets/Rectangleline.png" alt="line" /> */}
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                                                <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Packing Cost</p>
                                                <div style={{ display: 'flex', color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>
                                                    <p style={{ color: "#9252AA", fontWeight: '600' }}> ₹ {packingCost}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                                                    <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Delivery Charges</p>
                                                    <div style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px', display: 'flex', flexDirection: "row" }}>
                                                        {totalPrice - discountedPrice > 4000 ? (
                                                            <>
                                                                <p style={{ color: "#008631", fontWeight: '600', marginRight: 5 }}>FREE</p>
                                                                <p style={{ textDecoration: "line-through", color: "#9252AA", fontWeight: '600' }}>₹ {deliveryCharges}</p>
                                                            </>
                                                        ) : (
                                                            <p style={{ color: "#9252AA", fontWeight: '600' }}>₹ {deliveryCharges}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {selectedDeliveryOption === 'party-live-buffet-catering' && (
                                        <div>
                                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: includeTables ? '#efefef' : '#fff', paddingHorizontal: 5, paddingVertical: 4, marginTop: 4 }}>
                                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                                    <button onClick={() => setIncludeTables(!includeTables)} style={{ background: 'none', border: 'none', padding: 0 }}>
                                                        <div style={{ width: 19, height: 19, borderWidth: 1, borderColor: includeTables ? '#008631' : '#008631', borderRadius: 3, alignItems: 'center', justifyContent: 'center', marginRight: 4, display: 'flex' }}>
                                                            {includeDisposable && <Image src={checkImage} alt="Info" height={13} width={13} />}
                                                        </div>
                                                    </button>
                                                    <div>
                                                        <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 13, lineHeight: '20px' }}>3-4 Serving Tables with Cloth:</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 14 }}>₹ {includeTables ? 1200 : 0}</p>
                                                </div>
                                            </div>
                                            {/* <img style={{ width: 290, height: 1, marginTop: 10, marginBottom: 5 }} src="../../assets/Rectangleline.png" alt="line" /> */}
                                        </div>
                                    )}
                                    {/* Calculation for final total amount */}
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                                        <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Final Amount</p>
                                        <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>₹ {calculateFinalTotal()}</p>
                                    </div>

                                    {/* Calculation for advance payment */}
                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                                        <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Advance Payment</p>
                                        <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>₹ {calculateAdvancePayment()}</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 7, borderTop: "1px solid #efefef" }}>
                                <div style={{ marginHorizontal: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                    <p style={{ padding: 4, color: '#000', fontSize: 13, fontWeight: '700', marginBottom: 0 }}>Dishes selected</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                                    {selectedDishQuantities.map((item, index) => (
                                        <RenderDishQuantity key={index} item={item} />
                                    ))}
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-3 mb-0'>
                                <h5 className='mt-2'>Need more info?</h5>
                                <button onClick={contactUsRedirection} style={{ border: "2px solid rgb(157, 74, 147)", color: "rgb(157, 74, 147)", padding: "3px 3px" }} className=' rounded-5 ms-1 bg-white contactus-redirection'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div style={{ padding: "1% 2%", backgroundColor: "#edededc9" }} className='checkoutmobileview'>
                    <div className='checoutSec my-3 gap-3'>
                        <div className='border border-danger p-1 px-1 rounded bg-danger-subtle text-black text-center' style={{ color: '#000', fontSize: 12, fontWeight: '500', textAlign: 'left', color: "#9252AA" }}>
                            Bill value depends upon Dish selected + Number of people
                        </div>
                        <div style={{ display: 'flex', margin: "8px 0px 10px", flexDirection: "row" }} className='row align-items-between justify-content-between   align-items-lg-center justify-content-lg-between'>
                            <CustomDatePicker handleDateChange={handleDateChange} setSelectedDate={setSelectedDate} selectedDate={selectedDate} showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} combinedDateTimeError={combinedDateTimeError} selectedDateError={selectedDateError} />
                            <CustomTimePicker handleTimeSlotChange={handleTimeSlotChange} generateTimeSlots={generateTimeSlots} selectedTimeSlot={selectedTimeSlot} combinedDateTimeError={combinedDateTimeError} selectedTimeSlotError={selectedTimeSlotError} />
                        </div>
                        {combinedDateTimeError && <p className="text-danger" style={{ fontSize: '12px', margin: "5px 0 0 0" }}>The selected date and time must be at least 24 hours from now.</p>}

                        <div>
                            <div className="rightSeccheckout chef" style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "20px", backgroundColor: "#fff", borderRadius: "20px", width: "59%" }}>
                                <div className='rightcheckoutsec' style={{ padding: "6px  0 0 " }}>

                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                            <label style={{ color: "rgb(146, 82, 170)", fontSize: "12px", marigin: "16px 0 6px", fontWeight: 500 }}>Total Dishes</label>
                                            <p style={{ margin: 0, windth: "100%", color: "rgb(146, 82, 170)", fontSize: "12px", fontWeight: 200 }}> {selectedDishesFoodDelivery && Object.keys(selectedDishesFoodDelivery).length}</p>
                                        </div>
                                        {peopleCount > 0 ?
                                            <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                                <label style={{ color: "rgb(146, 82, 170)", fontSize: "12px", marigin: "16px 0 6px", fontWeight: 500 }}>Number of people</label>
                                                <p style={{ margin: 0, windth: "100%", color: "rgb(146, 82, 170)", fontSize: "12px", fontWeight: 200 }}>{peopleCount}</p>
                                            </div>
                                            :
                                            null
                                        }
                                    </div>
                                    <div className='chef-divider' style={{ marginTop: "10px", marginBottom: "10px" }}></div>
                                    <div style={{ paddingHorizontal: 5 }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                                            <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Item Total</p>
                                            <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>₹ {totalPrice}</p>
                                        </div>
                                        {discountedPrice > 0 && (
                                            <div>
                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3, alignItems: "center" }}>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row' }}>
                                                        <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Item Discount:</p>
                                                    </div>
                                                    <p style={{ color: "#008631", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>
                                                        {'-'} ₹ {discountedPrice}
                                                    </p>
                                                </div>
                                                {/* <img style={{ width: 290, height: 1, marginTop: 5, marginBottom: 5 }} src="../../assets/Rectangleline.png" alt="line" /> */}
                                            </div>
                                        )}

                                        {selectedDeliveryOption === 'party-food-delivery' && (
                                            <div>
                                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: includeDisposable ? '#efefef' : '#fff', padding: "7px 4px", marginTop: 4 }}>
                                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                                        <button onClick={() => setIncludeDisposable(!includeDisposable)} style={{ background: 'none', border: 'none', padding: 0 }}>
                                                            <div style={{ width: 19, height: 19, border: includeDisposable ? '1px solid #008631' : '1px solid #008631', borderRadius: 3, alignItems: 'center', justifyContent: 'center', marginRight: 4, display: 'flex' }}>
                                                                {includeDisposable && <Image src={checkImage} alt="Info" style={{ height: 13, width: 13 }} />}
                                                            </div>
                                                        </button>
                                                        <div>
                                                            <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 13, lineHeight: '20px', marginBottom: 0 }}>Disposable plates + water bottle:</p>
                                                            <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 13, lineHeight: '20px', marginBottom: 0 }}> ₹ 20/Person</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 14 }}>₹ {includeDisposable ? 20 * peopleCount : 0}</p>
                                                    </div>
                                                </div>
                                                {/* <img style={{ width: 290, height: 1, marginTop: 10, marginBottom: 5 }} src="../../assets/Rectangleline.png" alt="line" /> */}
                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                                                    <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Packing Cost</p>
                                                    <div style={{ display: 'flex', color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>
                                                        <p style={{ color: "#9252AA", fontWeight: '600' }}> ₹ {packingCost}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                                                        <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Delivery Charges</p>
                                                        <div style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px', display: 'flex', flexDirection: "row" }}>
                                                            {totalPrice - discountedPrice > 4000 ? (
                                                                <>
                                                                    <p style={{ color: "#008631", fontWeight: '600', marginRight: 5 }}>FREE</p>
                                                                    <p style={{ textDecoration: "line-through", color: "#9252AA", fontWeight: '600' }}>₹ {deliveryCharges}</p>
                                                                </>
                                                            ) : (
                                                                <p style={{ color: "#9252AA", fontWeight: '600' }}>₹ {deliveryCharges}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {selectedDeliveryOption === 'party-live-buffet-catering' && (
                                            <div>
                                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: includeTables ? '#efefef' : '#fff', padding: "10px 4px", marginTop: 0, marginBottom: 8 }}>
                                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                                        <button onClick={() => setIncludeTables(!includeTables)} style={{ background: 'none', border: 'none', padding: 0 }}>
                                                            <div style={{ width: 19, height: 19, borderWidth: 1, border: includeTables ? '1px solid #008631' : '1px solid #008631', borderRadius: 3, alignItems: 'center', justifyContent: 'center', marginRight: 4, display: 'flex' }}>
                                                                {includeTables && <Image src={checkImage} alt="Info" style={{ height: 13, width: 13 }} />}
                                                            </div>
                                                        </button>
                                                        <div>
                                                            <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 13, marginBottom: 0 }}>3-4 Serving Tables with Cloth:</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 14, marginBottom: 0 }}>₹ {includeTables ? 1200 : 0}</p>
                                                    </div>
                                                </div>
                                                {/* <img style={{ width: 290, height: 1, marginTop: 10, marginBottom: 5 }} src="../../assets/Rectangleline.png" alt="line" /> */}
                                            </div>
                                        )}

                                        <div className='chef-divider'></div>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                                            <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Final Amount</p>
                                            <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>₹ {calculateFinalTotal()}</p>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                                            <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Advance Payment</p>
                                            <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>₹ {calculateAdvancePayment()}</p>
                                        </div>
                                        <div className='chef-divider'></div>

                                        <div className='checkoutInputType border-1 rounded-4  my-3' style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                            <h4 style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marginBottom: "4px" }}>Share your comments (if any)</h4>
                                            <textarea className='bg-white text-black rounded border border-1 p-1 decor-commemnts'
                                                value={comment}
                                                onChange={handleComment}
                                                rows={4}
                                                placeholder="Enter your comments"
                                            />
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} className='checkoutInputType'>
                                            <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", fontWeight: "600" }}>Address:</label>
                                            <textarea
                                                type="text"
                                                className='bg-white text-black rounded border border-1 p-1'
                                                value={address}
                                                onChange={handleAddressChange}
                                                rows={4}
                                                placeholder="Enter your Address."
                                            />
                                            {addressError && <p className={`p-0 m-0 ${addressError ? "text-danger" : ""}`}>This field is required!</p>}
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} className='checkoutInputType'>
                                            <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marigin: "16px 0 6px", fontWeight: 600 }}>Pin Code:</label>
                                            <input
                                                type="text" className='bg-white text-black rounded border border-1 p-1'
                                                value={pinCode}
                                                onChange={handlePinCodeChange}
                                            />
                                            {pinCode && <p className={`p-0 m-0 ${pinCodeError ? "text-danger" : "text-success"}`}>{`Service ${pinCodeError ? 'not' : ''} available in your area!`}</p>}
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} className='checkoutInputType'>
                                            <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marigin: "16px 0 6px", fontWeight: 600 }}>City:</label>
                                            <select value={city} className='bg-white text-black rounded border border-1 p-1' onChange={handleCityChange}>
                                                <option value="">Select City</option>
                                                <option value="Bangalore">Bangalore</option>
                                                <option value="Delhi">Delhi NCR</option>
                                                <option value="Mumbai">Mumbai</option>
                                                {/* Add more cities as needed */}
                                            </select>
                                            {cityError && <p className={`p-0 m-0 ${cityError ? "text-danger" : ""}`}>This field is required!</p>}
                                        </div>
                                        <div>
                                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexFlow: "wrap" }}>
                                                {selectedDishQuantities && selectedDishQuantities.map((item, index) => (
                                                    <div style={{ width: "48%", border: "1px solid rgb(149 142 142 / 73%)", flexDirection: "row", display: "flex", borderRadius: "10px", padding: "6px 10px", boxSizing: "border-box" }} className='dishes-checkout-page'>
                                                        <div style={{ marginRight: 2, width: "90%" }}>
                                                            <Image className='checkoutRightImg chef' src={`https://horaservices.com/api/uploads/${item.image}`} width={300} height={300} />
                                                        </div>
                                                        <div style={{ color: "rgb(146, 82, 170)", fontWeight: "500", fontSize: "12px" }}>
                                                            <p style={{ margin: "0 0 0 0", padding: "0" }}>{item.name}</p>
                                                            {/* <p style={{ margin: "0 0 0 0", padding: "0" }}>{item.price}</p> */}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center mt-3 mb-0'>
                                    <h5 className='fs-6 mt-2'>Need more info?</h5>
                                    <button style={{ border: "2px solid rgb(157, 74, 147)", color: "rgb(157, 74, 147)", padding: "3px 3px", fontSize: "13px" }} className='bg-white rounded-5 ms-1 '>Contact Us</button>
                                </div>

                                <div className='px-1 py-3 border rounded my-2 cancellatiop-policy' style={{
                                    background: "rgb(157, 74,147, 28%)"
                                }}>
                                    <p style={{ fontSize: "13px", color: "rgb(157, 74, 147)" }} className=' text-center m-1'>Cancellation and order change policy</p>
                                    <p style={{ fontSize: "13px", color: "rgb(157, 74, 147)" }} className='m-1'>Till the order is not assign to the service provider , 100% of the amount will be refunded, othewise 50%of the advance will be deducted as a cancellation charges to componsate the service provider. </p>
                                    <p style={{ fontSize: "13px", color: "rgb(157, 74, 147)" }} className='m-1'>The order cannot be edited after paying the advance customers can cancel the order and replace it with a new order with the required changes.</p>
                                </div>
                            </div>

                            <div>
                                <div style={{
                                    position: "fixed",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    backgroundColor: "#fff",
                                    borderTop: "1px solid #efefef",
                                    backgroundColor: "#EDEDED"
                                }}
                                >
                                    <button onClick={onContinueClick} className="blue-btn chkeoutBottun">Confirm Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default FoodDeliveryCheckout;

export const CustomDatePicker = ({ handleDateChange, selectedDate, showDatePicker, setShowDatePicker, selectedDateError, combinedDateTimeError }) => {

    const toggleDatePicker = () => {
        setShowDatePicker((prev) => !prev);
    };

    return (
        <div className={`timepkerSec  d-flex flex-column border border-1 rounded-4 p-2  ${combinedDateTimeError ? 'border-danger' : ''} `}>
            <p style={{ marginBottom: "4px", color: "rgb(146, 82, 170)", fontSize: "12px" }} className='p-0 m-0'>Select Date</p>
            <Dropdown show={showDatePicker} onToggle={toggleDatePicker} className='border-none p-0'>
                <Dropdown.Toggle
                    variant="outline-secondary"
                    className={`w-100 m-0 p-0 d-flex justify-content-between align-items-center text-black ${selectedDateError ? 'border-danger' : ''}`}
                    style={{ cursor: 'pointer', padding: 0, background: 'none', border: 'none' }}        >
                    <span style={{ fontSize: '12px' }} className='m-0 p-0 '>{selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu
                    show={showDatePicker}
                    className="p-2"
                    style={{ minWidth: 'auto' }}
                >
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        inline // Use inline to show the calendar
                    />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export const CustomTimePicker = ({ selectedTimeSlot, handleTimeSlotChange, generateTimeSlots, selectedTimeSlotError, combinedDateTimeError }) => {
    return (
        <div className={`timepkerSec d-flex flex-column border border-1 ${combinedDateTimeError ? 'border-danger' : ''}  ${selectedTimeSlotError ? 'border-danger' : ""} rounded-4 p-2`}>
            <p style={{ marginBottom: "4px", color: "rgb(146, 82, 170)", fontSize: "12px" }} className='p-0 m-0'>Select Time</p>
            <Form.Control
                as="select"
                value={selectedTimeSlot}
                onChange={handleTimeSlotChange}
                style={{ fontSize: "14px", width: "auto", cursor: 'pointer', padding: 0, background: 'none', border: 'none' }}
            >
                <option value="">Select a time slot</option>
                {generateTimeSlots().map((timeSlot, index) => (
                    <option key={index} value={timeSlot}>
                        {timeSlot}
                    </option>
                ))}
            </Form.Control>
        </div>
    )
}