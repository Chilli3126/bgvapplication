import React from "react";
import { faTwitter,faFacebook,faYoutube,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';
   import { faLocationDot,  faPhone } from "@fortawesome/free-solid-svg-icons";
   import { faFacebookF,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
  
       import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
       import { Link } from "react-router-dom"; 


const Career =()=>
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
        {/*Home page 1 */}

        <div className="home-container-2">
            <h1>Join Our Team<br />Hakwardtech Careers</h1>
            <p>
                Hakwardtech is always looking for talented individuals to join our team. 
                Discover exciting opportunities to work with a dynamic, forward-thinking company. 
                Explore our career opportunities and apply today.
            </p>
        </div>
            {/*Home page 2*/}
            <div className="company-culture-1">
                <h2>
                    <span>Company</span> Culture
                </h2>
                <p className="intro-text">
                    At Hakwardtech Software Company, we believe that our success is directly tied to the success of our employees.
                    We are committed to providing our employees with a dynamic and engaging work environment that fosters innovation,
                    creativity, and collaboration.
                </p>
                <p className="bold-text">
                    <strong>As a member of the Hakwardtech Software Company team, you will have the opportunity to:</strong>
                </p>
                <ul className="culture-list">
                    <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="check-icon" /> Work with cutting-edge technologies and innovative solutions
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="check-icon" /> Collaborate with talented and experienced professionals
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="check-icon" /> Grow and develop your skills and career through challenging and rewarding work
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="check-icon" /> Enjoy a supportive and inclusive culture that values diversity and inclusion
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="check-icon" /> Receive competitive compensation and benefits packages
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="check-icon" /> Work in a company that prioritizes work-life balance and employee well-being
                    </li>
                </ul>
            </div>

            {/*Home page 3*/}
            <section className="career-container">
                <h2 className="career-title">Career Opportunities</h2>
                <p className="career-intro">
                    We are always looking for talented and passionate professionals to join
                    our team. Currently, we have the following open positions:
                </p>
                <p className="career-highlight">
                    <strong>* At this time, we do not have any open positions available *</strong>
                </p>
                <p className="career-note">
                    However, we encourage you to check back with us periodically, as we are always on the
                    lookout for talented individuals who can contribute to our team.
                </p>
                <hr className="career-divider" />
                <p className="career-apply">
                    *If you are interested in any of these positions, we encourage you to apply by submitting
                    your resume and cover letter through our online application system.*
                </p>
            </section>
            {/*home page 4*/}
            <div className="homepage-container-1">
                <div className="homepage-content">
                    <h2>Interested in finding out more? Get in touch.</h2>
                </div>
                <button className="contact-button"><Link to="/contactUs">CONTACT Us</Link></button>
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
export default Career;