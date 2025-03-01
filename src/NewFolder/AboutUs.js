import React from "react";
import { faTwitter,faFacebook,faYoutube,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';
   import { faLocationDot,  faPhone } from "@fortawesome/free-solid-svg-icons";
   import { faFacebookF,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
     import backgroundImage from './Images/team-banner.jpg'
    import backgroundImage1 from './Images/company_overview.png'
        import icon1 from './Images/expertise-1.png';
        import icon2 from './Images/expertise-2.png'
        import icon3 from './Images/expertise-3.png'
        import icon4 from './Images/expertise-4.png'
        import icon5 from './Images/expertise-5.png'
        import icon6 from './Images/expertise-6.png'
        import icon7 from './Images/expertise-7.png'
        import icon8 from './Images/expertise-8.png'
            import approachImage from './Images/approach.png';
             import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
             import { Link } from "react-router-dom";

const AboutUs =()=>
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

        {/*Home page 1*/}
        <div className="homepage-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <header className="about-section-1">
                <div className="about-content-1">
                    <h1>
                        Know Your <br />
                        Trusted <br />
                        IT Partner
                    </h1>
                <p>
                    CodeStream offers innovative IT solutions for digital transformation and business
                    growth. Learn more about our expert team and how we can help your business.
                </p>
                </div>
            </header>
        </div>
           {/*Home page 2*/}

           <div className="homepage-container-1">
                <div className="content-container">
                    <div className="text-content">
                    <h1>Our Company Overview</h1>
                    <p>
                    CodeStream is a software company that provides end-to-end software technology services for independent
                    software vendors and enterprises, with a specialization in product engineering. 
                    Since 2017, CodeStream has developed a strong customer base worldwide.
                    </p>
                    <p>
                    At CodeStream, we believe that technology has the power to transform businesses and change lives.
                    Our mission is to help our clients achieve their business objectives by delivering innovative, reliable,
                        and easy-to-use software solutions. We are dedicated to building long-term relationships
                        with our clients based on trust, integrity, and customer satisfaction.
                    </p>
                    </div>
                    <div className="image-content">
                    <img src={backgroundImage1} alt="Team Collaboration" />
                    </div>
                </div>
            </div>
            {/*Home page 3 Services Section*/}
            <div className="homepage-container-3">
                <section className="services-section">
                    <h2>Our Expertise</h2>
                    <p>
                    At CodeStream, we have extensive experience in various technologies and industries. Our team of experts
                    specializes in delivering high-quality IT solutions.
                    </p>
                    <div className="services-grid">
                    <div className="service-card">
                        <img src={icon1} alt="Product Engineering" />
                        <h3>Product Engineering</h3>
                    </div>
                    <div className="service-card">
                        <img src={icon2} alt="Cloud Computing" />
                        <h3>Cloud Computing</h3>
                    </div>
                    <div className="service-card">
                        <img src={icon3} alt="Quality Assurance & Testing" />
                        <h3>Quality Assurance & Testing</h3>
                    </div>
                    <div className="service-card">
                        <img src={icon4} alt="UI/UX Design" />
                        <h3>UI/UX Design</h3>
                    </div>
                    <div className="service-card">
                        <img src={icon5} alt="DevOps" />
                        <h3>DevOps</h3>
                    </div>
                    <div className="service-card">
                        <img src={icon6} alt="Custom Software Development" />
                        <h3>Custom Software Development</h3>
                    </div>
                    <div className="service-card">
                        <img src={icon7} alt="Enterprise App Development" />
                        <h3>Enterprise Application Development</h3>
                    </div>
                    <div className="service-card">
                        <img src={icon8} alt="Mobile App Development" />
                        <h3>Mobile Application Development</h3>
                    </div>
                    </div>
                    <div  className="services-section-1">
                        <p>
                        Our team is dedicated to staying up-to-date with the latest technologies and industry trends.
                        We are committed to providing our clients with innovative solutions that help them achieve 
                        their business objectives and stay ahead of the competition.
                        </p>
                    </div>
                </section>
            </div>
            {/*Home page 4 approachSection */}
            <section className='approachSection'>
                {/* Left Side - Text Content */}
                <div className='content'>
                    <h2>Our Approach</h2>
                    <p>
                    At CodeStream, we take a collaborative approach to software development.
                    We work closely with our clients to understand their specific needs and
                    requirements, and we develop solutions tailored to their unique needs.
                    Our team of experts uses an agile development methodology that emphasizes
                    collaboration, flexibility, and rapid iteration. This approach allows us
                    to deliver high-quality solutions that are scalable, reliable, and easy
                    to use.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className='image'>
                    <img src={approachImage} alt="Collaboration" />
                </div>
            </section>
            {/*Home page 5 */}
            <section className= "valuesSection">
                <h2>Our Values</h2>
                <p className= "intro">
                    At CodeStream, we are guided by a set of core values that define who we are and how we do business:
                </p>

                <div className= "valueIsList">
                    <div className= "valueItem">
                    <FontAwesomeIcon icon={faCircleCheck} className= "icon-1" />
                    <strong>Customer Satisfaction:</strong> We are committed to delivering innovative solutions 
                    that meet our clients' unique needs and exceed their expectations.
                    </div>
                    <div className= "valueItem">
                    <FontAwesomeIcon icon={faCircleCheck} className= "icon-1" />
                    <strong>Innovation:</strong> We stay up-to-date with the latest technologies and
                    trends to develop innovative solutions for our clients.
                    </div>
                    <div className= "valueItem">
                    <FontAwesomeIcon icon={faCircleCheck} className= "icon-1" />
                    <strong>Collaboration:</strong> We believe that collaboration is key to
                    successful software development and work closely with our clients.
                    </div>
                    <div className= "valueItem">
                    <FontAwesomeIcon icon={faCircleCheck} className= "icon-1" />
                    <strong>Professionalism:</strong> We conduct ourselves with the highest 
                    level of professionalism and hold ourselves accountable for high-quality solutions.
                    </div>
                </div>

                <p className= "footerText">
                    At CodeStream, our values are at the core of everything we do.
                    We build long-term relationships with our clients based on trust, integrity, and customer satisfaction.
                </p>
            </section>

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
export default AboutUs;