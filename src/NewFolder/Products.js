import React from "react";
import { faTwitter,faFacebook,faYoutube,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';
   import { faLocationDot,  faPhone } from "@fortawesome/free-solid-svg-icons";
   import { faFacebookF,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
    import sampleImage from './Images/ca_menu_phone.png'; // Replace with actual image path
    import {  faApple,faGooglePlay} from "@fortawesome/free-brands-svg-icons";
        import mainImage from './Images/laptop_img.png'
        import mainImage1 from './Images/cs_spare_parts_laptop_img.png'
        import { Link } from "react-router-dom";


const Products =()=>
{
   return (<>
       
       <main>
           <nav className='Navbar'>
                       <div className='Navbar-1'>
                           <div className='Navbar-Child-1'>
                           <p><FontAwesomeIcon icon={faEnvelope} color='pink' /> info@Hakwardtech.in</p> 
                           </div>
                           <div className='Navbar-2'>
                               <ul className='Navbar-Child-2'>
                               <li><FontAwesomeIcon icon={faTwitter}  /></li>
                               <li><FontAwesomeIcon icon={faFacebook} /></li>
                               <li><FontAwesomeIcon icon={faYoutube} /></li>
                               <li><FontAwesomeIcon icon={faLinkedin} /></li>
                               <li><FontAwesomeIcon icon={faInstagram} /></li>
                               </ul>
                           </div>
                       </div>
           </nav>
                {/*Header section */}
                <header className="header">
            <div className="header-1">
                <div className="header-Child-1">
                    <p className="Hakward">
                        <span className="letter">H</span>
                        <span className="letter">a</span>
                        <span className="letter">k</span>
                        <span className="letter">w</span>
                        <span className="letter">a</span>
                        <span className="letter">r</span>
                        <span className="letter">d</span>
                        <p className="letter-Child">Technologies Ltd</p>
                    </p>
                </div>
                <nav className="header-2">
                    <ul className="header-Child-2">
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/services">Services</Link></li>
                         <li><Link to="/products">Products</Link></li>
                         <li><Link to="/aboutUs">About Us</Link></li>
                         <li><Link to="/career">Career</Link></li>
                         <li><Link to="/contactUs">Contact Us</Link></li> 
                    </ul>
                 </nav>
            </div>
        </header>

            {/*Home page*/}
            <div className="home-container">
                <h1 className="main-title">Innovative</h1>
                <h1 className="main-title" >Technology</h1>
                <h1 className="main-title">Products</h1>
                <p className="description">
                    Hakwardtech provides innovative technology products to help drive your
                    business forward. Our solutions are designed to optimize efficiency,
                    enhance performance, and increase profitability. Explore our products
                    now.
                </p>
            </div>
           {/*Home page 2*/}
           <div className="home-container1">
                <div className="image-container">
                    <img src={sampleImage} alt="Sample" />
                </div>
                <div className="text-container">
                    <h1 className="main-title-1">Hakward MENU SCANNER</h1>
                    <h2 className="sub-title-1">Digital Menu Solution</h2>
                    <p className="description">
                        That's accessible for diners and drinkers on their smartphones after scanning a QR code.
                        All customers have to do is point their mobile device and scan the QR code, and they're
                        immediately taken to a touchless menu.
                    </p>
                    <div className="button-container">
                        <p>Download the App:</p> 
                        <button className="app-button">
                            <FontAwesomeIcon icon={faGooglePlay} className="Img" /> GET IT ON Google Play
                        </button>
                        <button className="app-button">
                            <FontAwesomeIcon icon={faApple}  className="Img"/> Download on the App Store
                        </button>
                    </div>
                </div>
            </div>
            {/*Home page 3 */}
        
                <header className="hero-section">
                    <div className="hero-content">
                    <h1>Hakwardtech </h1>
                    <h1>POULTRY FARMING</h1>
                    <p>
                        Tracks bird count, mortality, and age. It helps make informed decisions
                        about liquidating farms and provides accurate production costs and profit/loss
                        statements. Highly recommended for efficient poultry farm management.
                    </p>
                    </div>
                    <div className="hero-image">
                    <img src={mainImage} alt="Main display" />
                    </div>
                </header>
            {/*Home page 4 */}
                    <header className="hero-section-1">
                        <div className="hero-image-1">
                            <img src={mainImage1} alt="Main display" />
                            </div>
                            <div className="hero-content-1">
                            <h1>Is A SYSTEM </h1>
                            <p>
                                that enables administrators and other website workers to conduct various tasks 
                                like monitoring, maintaining, and controlling certain business processes. 
                                An CS Spare Parts is one of the core components of a control panel. 
                                It gives the users instant access to data, reports, and metrics they currently need.
                            </p>
                            </div>
                    </header>
           <section>
                <footer className='footerServices'>
                               <div className="text-centered-container-footer">
                                   <h3>Welcome to Hakward Technologies Ltd</h3>   
                               </div>
                               
                                   <div className="footer-container">
                                       {/* Corporate Office */}
                                       <div className="footer-box">
                                       <div className="icon-box">
                                           <FontAwesomeIcon icon={faLocationDot} className="icon" />
                                       </div>
                                       <h3>Corporate Office</h3>
                                       <p>H.NO 4-38/D/A, 1st floor, Opp Lingampally Railway Station, Road No 10, Dubey Colony, Serilingampally, Hyderabad, Telangana-500019</p>
                                       </div>
               
                                       {/* Email Address */}
                                       <div className="footer-box">
                                       <div className="icon-box">
                                           <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                       </div>
                                       <h3>Email Address</h3>
                                       <p>info@Hakwardtech.in</p>
                                       </div>
               
                                       {/* Phone Number */}
                                       <div className="footer-box">
                                       <div className="icon-box">
                                           <FontAwesomeIcon icon={faPhone} className="icon" />
                                       </div>
                                       <h3>Phone Number</h3>
                                       <p>+91 7396433910</p>
                                       </div>
                                   </div>
               
                                   {/* Navigation Links */}
                                   <div className="footer-links">
                                       <a href="#">Home</a>
                                       <a href="#">Services</a>
                                       <a href="#">Products</a>
                                       <a href="#">About Us</a>
                                       <a href="#">Career</a>
                                       <a href="#">Contact Us</a>
                                   </div>
               
                                   {/* Copyright */}
                                   <p className="copyright">Copyright © 2024 All Rights Reserved</p>
               
                                   {/* Social Media Icons */}
                                   <div className="social-icons">
                                       <div className="social-circle">
                                       <FontAwesomeIcon icon={faTwitter} />
                                       </div>
                                       <div className="social-circle">
                                       <FontAwesomeIcon icon={faFacebookF} />
                                       </div>
                                       <div className="social-circle">
                                       <FontAwesomeIcon icon={faYoutube} />
                                       </div>
                                       <div className="social-circle">
                                       <FontAwesomeIcon icon={faLinkedinIn} />
                                       </div>
                                       <div className="social-circle">
                                       <FontAwesomeIcon icon={faInstagram} />
                                       </div>
                                   </div>
                                  
                           </footer>
                    </section>

        </main>
       </>)
}
export default Products;