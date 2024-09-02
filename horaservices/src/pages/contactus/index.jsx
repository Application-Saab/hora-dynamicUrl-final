import React from "react";
import { FaTag, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import contactusbanner from "../../assets/contactusbanner.png";
import delhi from "../../assets/delhi.jpg";
import mumbai from "../../assets/mumbai.jpg";
import banglore from "../../assets/banglore.jpg";
import pune from "../../assets/Pune.png";
import noida from "../../assets/Noida.png";
import indore from "../../assets/indore.png";
import bhopal from "../../assets/bhopal.png";
import ghaziabad from "../../assets/ghaziabad.png";
import gurugram from "../../assets/gurugram.png";
import faridabad from "../../assets/faridabad.png";
import hydrabad from "../../assets/hydrabad.png";
import chennai from "../../assets/Chennai.png";
import jaipur from "../../assets/jaipur.png";
import ahmdabad from "../../assets/Ahmdabad.png";
import chandigarh from "../../assets/Chandigarh.png";
import kolkata from "../../assets/kolkata.png";
import lakhnow from "../../assets/Locknow.png";
import kanpur from "../../assets/Kanpur.png";
import surat from "../../assets/surat.png";
import goa from "../../assets/Goa.png";
import Image from "next/image";
import { useRouter } from 'next/router';  

const ContactUs = () => {

  const router = useRouter();

  const handleRedirect = (city) => {
    router.push(`/${city}/balloon-decoration`);
  };
  
  return (
    <main>
      <div className="aboutUsContainer" style={styles.aboutUsContainer}>
        <div
          className="heroSingle"
          style={{
            ...styles.heroSingle,
            backgroundImage: `url(${contactusbanner.src})`,
          }}
        >
          <div className="imageOverlay" style={styles.imageOverlay}>
            <div className="textContent" style={styles.textContent}>
              <h1>Contact Us</h1>
              <p className="contact-us-main-heading">
                We would love to hear from you! Feel free to reach out to us.
              </p>
            </div>
          </div>

          <div className="frame white"></div>
        </div>

        <div className="contact-us-secRight" style={styles.secRight}>
          <div className="contact-us-boxsection" style={styles.boxHow}>
            <FaTag style={styles.icon} />
            <h2
              style={{ fontSize: "1.3125rem", color: "#444", margin: "10px 0" }}
            >
              Call & Whatsapp
            </h2>
            <a href="tel:+918982321487" style={{ color: "#444" }}>
              +917338584828
            </a>
          </div>
          <div className="contact-us-boxsection" style={styles.boxHow}>
            <FaMapMarkerAlt style={styles.icon} />
            <h2
              style={{ fontSize: "1.3125rem", color: "#444", margin: "10px 0" }}
            >
              Email
            </h2>
            <a href="mailto:dev@horaservices.com" style={{ color: "#444" }}>
              dev@horaservices.com
            </a>
          </div>
          <div className="contact-us-boxsection" style={styles.boxHow}>
            <FaDownload style={styles.icon} />
            <h2
              style={{ fontSize: "1.3125rem", color: "#444", margin: "10px 0" }}
            >
              Download Application
            </h2>
            <small>
              -{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.hora"
                style={{ color: "#444" }}
              >
                Click Here
              </a>{" "}
              -
            </small>
          </div>
        </div>
        <div style={styles.contactUs}>
          <div style={styles.secRight1}>
            <h5
              className="contact-us-second-heading"
              style={{
                textAlign: "center",
                fontWeight: "500",
                fontSize: "1.25rem",
                marginTop: "10px",
                padding: "50px",
              }}
            >
              We Provide Services In These Cities
            </h5>
            <div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                <div
        onClick={() => handleRedirect('Mumbai')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={mumbai} alt="Mumbai" />
        <h4 className="contact-us-heading">Mumbai</h4>
      </div>
      <div
        onClick={() => handleRedirect('Delhi')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={delhi} alt="Delhi" />
        <h4 className="contact-us-heading">Delhi</h4>
      </div>
      <div
        onClick={() => handleRedirect('Bangalore')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={banglore} alt="Bangalore" />
        <h4 className="contact-us-heading">Bangalore</h4>
      </div>
              </div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                {/* <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={pune} alt="image" />
                  <h4 className="contact-us-heading">Pune</h4>
                </div>
                <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={noida} alt="image" />
                  <h4 className="contact-us-heading">Noida</h4>
                </div>
                <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={ghaziabad} alt="image" />
                  <h4 className="contact-us-heading">Gaziabad</h4>
                </div> */}
                 <div
        onClick={() => handleRedirect('Pune')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={pune} alt="Pune" />
        <h4 className="contact-us-heading">Pune</h4>
      </div>
      <div
        onClick={() => handleRedirect('Noida')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={noida} alt="Noida" />
        <h4 className="contact-us-heading">Noida</h4>
      </div>
      <div
        onClick={() => handleRedirect('Ghaziabad')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={ghaziabad} alt="Ghaziabad" />
        <h4 className="contact-us-heading">Ghaziabad</h4>
      </div>
              </div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                {/* <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={gurugram} alt="image" />
                  <h4 className="contact-us-heading">Gurugram</h4>
                </div>
                <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={faridabad} alt="image" />
                  <h4 className="contact-us-heading">Faridabad</h4>
                </div>
                <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={hydrabad} alt="image" />
                  <h4 className="contact-us-heading">Hydrabad</h4>
                </div> */}

<div
        onClick={() => handleRedirect('Gurugram')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={gurugram} alt="Gurugram" />
        <h4 className="contact-us-heading">Gurugram</h4>
      </div>
      <div
        onClick={() => handleRedirect('Faridabad')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={faridabad} alt="Faridabad" />
        <h4 className="contact-us-heading">Faridabad</h4>
      </div>
      <div
        onClick={() => handleRedirect('Hyderabad')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={hydrabad} alt="Hyderabad" />
        <h4 className="contact-us-heading">Hyderabad</h4>
      </div>

              </div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                {/* <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={chennai} alt="image" />
                  <h4 className="contact-us-heading">Chennai</h4>
                </div>
                <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={jaipur} alt="image" />
                  <h4 className="contact-us-heading">Jaipur</h4>
                </div>
                <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={ahmdabad} alt="image" />
                  <h4 className="contact-us-heading">Ahmdabad</h4>
                </div> */}

<div
        onClick={() => handleRedirect('Chennai')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={chennai} alt="Chennai" />
        <h4 className="contact-us-heading">Chennai</h4>
      </div>
      <div
        onClick={() => handleRedirect('Jaipur')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={jaipur} alt="Jaipur" />
        <h4 className="contact-us-heading">Jaipur</h4>
      </div>
      <div
        onClick={() => handleRedirect('Ahmedabad')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={ahmdabad} alt="Ahmedabad" />
        <h4 className="contact-us-heading">Ahmedabad</h4>
      </div>
              </div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                {/* <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={chandigarh} alt="image" />
                  <h4 className="contact-us-heading">Chandigarh</h4>
                </div>
                <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={kolkata} alt="image" />
                  <h4 className="contact-us-heading">Kolkata</h4>
                </div>
                <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={lakhnow} alt="image" />
                  <h4 className="contact-us-heading">Locknow</h4>
                </div> */}
                <div
        onClick={() => handleRedirect('Chandigarh')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={chandigarh} alt="Chandigarh" />
        <h4 className="contact-us-heading">Chandigarh</h4>
      </div>
      <div
        onClick={() => handleRedirect('Kolkata')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={kolkata} alt="Kolkata" />
        <h4 className="contact-us-heading">Kolkata</h4>
      </div>
      <div
        onClick={() => handleRedirect('Lucknow')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={lakhnow} alt="Lucknow" />
        <h4 className="contact-us-heading">Lucknow</h4>
      </div>
              </div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                {/* <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={kanpur} alt="image" />
                  <h4 className="contact-us-heading">Kanpur</h4>
                </div>
                <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={indore} alt="image" />
                  <h4 className="contact-us-heading">Indore</h4>
                </div>
                <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={surat} alt="image" />
                  <h4 className="contact-us-heading">Surat</h4>
                </div> */}
                 <div
        onClick={() => handleRedirect('Kanpur')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={kanpur} alt="Kanpur" />
        <h4 className="contact-us-heading">Kanpur</h4>
      </div>
      <div
        onClick={() => handleRedirect('Indore')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={indore} alt="Indore" />
        <h4 className="contact-us-heading">Indore</h4>
      </div>
      <div
        onClick={() => handleRedirect('Surat')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={surat} alt="Surat" />
        <h4 className="contact-us-heading">Surat</h4>
      </div>
              </div>
              <div
                className="contact-us-img-section-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px",
                }}
              >
                {/* <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={bhopal} alt="image" />
                  <h4 className="contact-us-heading">Bhopal</h4>
                </div>
                <div className="contact-us-section-div">
                  <Image className="contact-us-img" src={goa}  alt="image"/>
                  <h4 className="contact-us-heading">Goa</h4>
                </div> */}
                 <div
        onClick={() => handleRedirect('Bhopal')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={bhopal} alt="Bhopal" />
        <h4 className="contact-us-heading">Bhopal</h4>
      </div>
      <div
        onClick={() => handleRedirect('Goa')}
        className="contact-us-section-div"
        style={{ cursor: 'pointer' }}
      >
        <Image className="contact-us-img" src={goa} alt="Goa" />
        <h4 className="contact-us-heading">Goa</h4>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
const styles = {
  aboutUsContainer: {
    width: "100%",
    backgroundColor: "#ededed",
  },
  contactUs: {
    backgroundColor: "#fff",
  },
  heroSingle: {
    position: "relative",
    width: "100%",
    height: "400px" /* Adjust height as needed */,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  imageOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "rgba(0, 0, 0, 0.1)" /* Adjust overlay color and opacity as needed */,
  },
  textContent: {
    textAlign: "center",
    color: "white",
  },
  // secRight: {
  //   width: "80%",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   margin: "27px auto 51px",
  // },
  secRight1: {
    width: "75%",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto 20px",
    flexDirection: "column",
  },
  // boxHow: {
  //   boxShadow: "0 0 32px -7px rgba(0, 0, 0, 0.1)",
  //   padding: "30px 25px",
  //   textAlign: "center",
  //   marignBottum: "20px",
  //   backgroundColor: "#fff",
  //   width: "300px",
  // },
  secRight: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px 0",
    backgroundColor: "#f8f8f8",
  },
  boxHow: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "30%",
  },
  icon: {
    fontSize: "2rem",
    color: "#8a6d3b",
  },
};

export default ContactUs;
