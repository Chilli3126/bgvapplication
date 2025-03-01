import React from "react";
import { faTwitter,faFacebook,faYoutube,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';
   import { faLocationDot,  faPhone } from "@fortawesome/free-solid-svg-icons";
   import { faFacebookF,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
        import { Link } from "react-router-dom";




const ContactUs =()=>
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
        {/* Home page 1 */}
        <div className="home-container-3">
            <h1>Get in Touch with <br /> Hakwardtech</h1>
            <p>
                At Hakwardtech, we're dedicated to helping businesses achieve their goals
            through innovative IT solutions. Contact us today to learn more about our services,
                products, or career opportunities. Let's drive your business forward together.
            </p>
        </div>
        {/*Home page 2 */}
        <div className="contact-container">
                <div className="contact-details">
                    <div className="contact-item">
                    <span className="icon-1"><FontAwesomeIcon icon={faEnvelope} /></span>
                    <div>
                        <h4>Email Address</h4>
                        <p>info@codestream.in</p>
                    </div>
                    </div>

                    <div className="contact-item">
                    <span className="icon-1"><FontAwesomeIcon icon={faPhone} /></span>
                    <div>
                        <h4>Phone Number</h4>
                        <p>+91 7396433910</p>
                    </div>
                    </div>

                    <div className="contact-item">
                    <span className="icon-1"><FontAwesomeIcon icon={faLocationDot} /></span>
                    <div>
                        <h4>Corporate Office</h4>
                        <p>
                        H.NO 4-38/D/A, 1st floor, Opp Lingampally Railway Station,
                        Serilingampally, Hyderabad, Telangana-500019
                        </p>
                    </div>
                    </div>
                </div>
            </div>
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
export default ContactUs;