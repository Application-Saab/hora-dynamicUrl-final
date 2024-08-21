// import './Navbar.css';
// import Image from 'next/image';
// import Logo from '../../assets/new_logo.png';
// import React, { useState, useEffect } from 'react';

// const SearchBar = () => (
//     <div className="navbar-search">
//         <input type="text" placeholder="Search for Services" />
//         <button className="search-button">
//             <i className="search-icon"></i>
//         </button>
//     </div>
// );

// const NavbarIcons = () => (
//     <div className="navbar-icons">
//         <i className="cart-icon"></i>
//         <i className="profile-icon"></i>
//         <i className="language-icon"></i>
//     </div>
// );

// const Categories = ({ isDropdownOpen, toggleDropdown }) => (
//     <div className="navbar-categories">
//         <button onClick={toggleDropdown} className="categories-button">
//             <i className="categories-icon"></i>
//             Categories
//             <i className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}></i>
//         </button>
//         <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
//             <li>Decoration</li>
//             <li>Chef for Party</li>
//             <li>Food Delivery</li>
//             <li>Live Catering</li>
//             <li>Entertainment</li>
//         </ul>
//     </div>
// );

// const Navbar = () => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };

//         handleResize();
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     const toggleDrawer = () => {
//         setIsDrawerOpen(!isDrawerOpen);
//     };

//     return (
//         <nav className="navbar">
//             {isMobile ? (
//                 <>
//                     <div className="navbar-logo">
//                         <Image style={{ marginLeft: "30px" }} src={Logo} alt="Logo" width={40} height={40} />
//                     </div>
//                     <button className="hamburger-menu" onClick={toggleDrawer}>
//                         ☰
//                     </button>
//                     <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
//                         <button className="close-drawer" onClick={toggleDrawer}>×</button>
//                         <div className="drawer-content">
//                             <div className="drawer-icons">
//                                 <i className="cart-icon"></i>
//                                 <i className="profile-icon"></i>
//                             </div>
//                             <ul className="drawer-item-list">
//                                 <li>Decoration</li>
//                                 <li>Chef for Party</li>
//                                 <li>Food Delivery</li>
//                                 <li>Live Catering</li>
//                                 <li>Entertainment</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </>
//             ) : (
//                 <>
//                     <div className="navbar-logo">
//                         <Image src={Logo} alt="Logo" width={60} height={70} />
//                     </div>
//                     <SearchBar />
//                     <Categories isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
//                     <NavbarIcons />
//                 </>
//             )}
//         </nav>
//     );
// };

// export default Navbar;


import './Navbar.css';
import Image from 'next/image';
import Logo from '../../assets/new_logo.png';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const SearchBar = () => (
    <div className="navbar-search">
        <input type="text" placeholder="Search for Services" />
        <button className="search-button">
            <i className="search-icon"></i>
        </button>
    </div>
);

const NavbarIcons = () => (
    <div className="navbar-icons">
        <i className="cart-icon"></i>
        <i className="profile-icon"></i>
        <i className="language-icon"></i>
    </div>
);

const Categories = ({ isDropdownOpen, toggleDropdown }) => (
    <div className="navbar-categories">
        <button onClick={toggleDropdown} className="categories-button">
            <i className="categories-icon"></i>
            Categories
            <i className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}></i>
        </button>
        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li><Link href="/balloon-decoration">Decoration</Link></li>
            <li><Link href="/book-chef-cook-for-party">Chef for Party</Link></li>
            <li><Link href="/party-food-delivery-live-catering-buffet/party-food-delivery">Food Delivery</Link></li>
            <li><Link href="/party-food-delivery-live-catering-buffet/party-live-buffet-catering">Live Catering</Link></li>
            <li><Link href="/entertainment">Entertainment</Link></li>
        </ul>
    </div>
);

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav className="navbar">
            {isMobile ? (
                <>
                    <div className="navbar-logo">
                        <Image style={{ marginLeft: "30px" }} src={Logo} alt="Logo" width={40} height={40} />
                    </div>
                    <button className="hamburger-menu" onClick={toggleDrawer}>
                        ☰
                    </button>
                    <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                        <button className="close-drawer" onClick={toggleDrawer}>×</button>
                        <div className="drawer-content">
                            <div className="drawer-icons">
                                <i className="cart-icon"></i>
                                <i className="profile-icon"></i>
                            </div>
                            <ul className="drawer-item-list">
                                <li><Link href="/balloon-decoration">Decoration</Link></li>
                                <li><Link href="/book-chef-cook-for-party">Chef for Party</Link></li>
                                <li><Link href="/party-food-delivery-live-catering-buffet/party-food-delivery">Food Delivery</Link></li>
                                <li><Link href="/party-food-delivery-live-catering-buffet/party-live-buffet-catering">Live Catering</Link></li>
                                <li><Link href="/entertainment">Entertainment</Link></li>
                            </ul>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="navbar-logo">
                        <Image src={Logo} alt="Logo" width={60} height={70} />
                    </div>
                    <SearchBar />
                    <Categories isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
                    <NavbarIcons />
                </>
            )}
        </nav>
    );
};

export default Navbar;
