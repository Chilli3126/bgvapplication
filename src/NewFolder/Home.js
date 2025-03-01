import React, { useState } from 'react';
import myImage from './Images/hero_image1.png'
import Image from './Images/hero_image2.png'
import Stock from './Images/bigstock--225292126.webp';
import Stock1 from './Images/1636059208-GettyImages-1322682443.jpg'
import Stock3 from './Images/ASG-Blog-Mastheads-18.webp'
import Stock2 from './Images/bigstock-Internet-Business-Technology-428549714_1024X684.png'
        import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faFacebook,faYoutube,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
    import { faLocationDot,  faPhone } from "@fortawesome/free-solid-svg-icons";
    import { faFacebookF,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

    import { faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
    import Image1 from './Images/Moram_James_Law.png'
    import Image2 from './Images/Sree_Veeranjaneya_Enterprise.png'
    import Image3 from './Images/Sgreens.png'
    import Image4 from "./Images/Kognitive.png";
    import Image5 from './Images/Trovetechs.png'
    
const testimonials = [
  {
    text: "The team at Code Stream is fantastic! They were communicative, patient, and attentive to our needs throughout the website development process. They took our vision and turned it into a website that perfectly captured our brand identity. Their attention to detail and professionalism are unmatched, and we could not be happier with the final product.",
    author: "Sree Veeranjaneya Enterprise",
    role: "Board of Director",
    image: Image1, // Make sure the image is in the public folder
  },
    {
      text: "“Working with Code Stream was an exceptional experience. From the initial consultation to the final product, the team was attentive, responsive, and dedicated to delivering a website that exceeded our expectations. Their expertise and attention to detail were evident throughout the project, and we are thrilled with the end result.”",
      author: "Trovetechs",
      role: "*Board of Director*",
      image: Image3, // Make sure the image is in the public folder
    },
    {
      text:"“Code Stream made the website development process a breeze. They were professional, responsive, and took the time to understand our unique business needs. The entire team worked seamlessly together to deliver a website that perfectly aligned with our brand and exceeded our expectations. We are grateful for their hard work and expertise, and we highly recommend them to anyone looking for a top-notch website.”",
      author: "Moram James Law Associates",
      role: "*Board of Director*",
      image: Image2, // Make sure the image is in the public folder
    },
    {
      text:"“We cannot recommend Code Stream enough for their website development services. Their team of professionals were not only knowledgeable but also easy to work with. They took the time to understand our business needs and created a website that was not only visually appealing but also user-friendly and fully optimized. We are grateful for their hard work and expertise.”",
      author: "Kognitive",
      role: "*CEO*",
      image: Image4, // Make sure the image is in the public folder
    },
    {
      text:"“Working with Code Stream was an excellent experience. Their team of experts was knowledgeable, creative, and dedicated to delivering a website that met our exact specifications. They were easy to work with, communicated effectively, and kept us updated throughout the entire process. The final product was visually stunning, user-friendly, and perfectly aligned with our brand. We would recommend Code Stream to anyone in need of website development services.”",
      author: "Sgreens Poultry Farm",
      role: "*Board of Director*",
      image: Image5, // Make sure the image is in the public folder
    },
];



const Home=()=>
{

    const [index, setIndex] = useState(0);

    const prevTestimonial = () => {
      setIndex(index === 0 ? testimonials.length - 1 : index - 1);
    };
  
    const nextTestimonial = () => {
      setIndex(index === testimonials.length - 1 ? 0 : index + 1);
    };

    return(<>
       <main className='main'>
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
                        <li><Link to="/aboutUsx">About Us</Link></li>
                        <li><Link to="/career">Career</Link></li>
                        <li><Link to="/contactUs">Contact Us</Link></li> 
                    </ul>
                </nav>
            </div>
        </header>
                {/*Banner section start */}
                <section className="contact-section">
                    {/* Welcome Text */}
                    <div className="contact-text">
                        <h2>Welcome to Hakward Technologies Ltd</h2>
                        <p className="subtitle">
                        Customer IT Solutions <br /> for Business Growth
                        </p>
                        <p className="description">
                        Hakward Technologies Ltd provides custom IT solutions for businesses to stay ahead of the curve.
                        Our expert team delivers tailored software solutions including software development,
                        web design, mobile app development, cloud computing, and cybersecurity. Contact us today to learn more.
                        </p>
                        
                        <div className="button-group">
                        <button className="contact-btn"><Link to="/contactUs">Contact Us</Link> </button>
                        <button className="portfolio-btn">Our Portfolio</button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="contact-images">
                        <img src={myImage} alt="Illustration 1" className="image-left" />
                        <img src={Image} alt="Illustration 2" className="image-right" />
                    </div>
                </section>
        
                {/*Home page start 2*/}
                <section className="section-how-we-work">
                    {/* Title & Description */}
                    <div className="text-centered-container">
                        <h3>How We Work</h3>
                        <p>
                        Our core team helps companies by creating and implementing technology solutions
                        that meet their specific needs. We have a clear process to ensure successful
                        project completion and maintain open communication with our clients throughout.
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid-container">
                        <div className="grid-item">
                        <img src={Stock} alt="Requirements Gathering" />
                        <h3>Requirements Gathering</h3>
                        <p>
                            We begin by understanding the client's needs through meetings, discussions, and documentation.
                        </p>
                        </div>
                        <div className="grid-item">
                        <img src={Stock1} alt="Analysis and Design" />
                        <h3>Analysis and Design</h3>
                        <p>
                            We analyze the requirements and create a design plan outlining the solution's architecture and technology stack.
                        </p>
                        </div>
                        <div className="grid-item">
                        <img src={Stock} alt="Development" />
                        <h3>Development</h3>
                        <p>
                            Once the design is approved, our development team starts building the solution, following best coding practices.
                        </p>
                        </div>
                        <div className="grid-item">
                        <img src={Stock2} alt="Testing" />
                        <h3>Testing</h3>
                        <p>
                            As the solution is developed, we conduct unit and integration testing to ensure everything works as intended.
                        </p>
                        </div>
                        <div className="grid-item">
                        <img src={Stock3} alt="Deployment" />
                        <h3>Deployment</h3>
                        <p>
                            Once tested and approved, the solution is deployed to the client's production environment.
                        </p>
                        </div>
                        <div className="grid-item">
                        <img src={Stock} alt="Maintenance and Support"  />
                        <h3>Maintenance and Support</h3>
                        <p>
                            We offer continuous maintenance and support, fixing bugs, making updates, and ensuring optimal performance.
                        </p>
                        </div>
                    </div>
                </section>
                {/*home page 4 start */}

                <section className="testimonial-section">
                    {/* ✅ Added 'Happy Clients' Section */}
                    <div className="testimonial-header">
                        <h2 className="testimonial-title">Happy Clients</h2>
                        <p className="testimonial-subtitle">What our clients say about us</p>
                    </div>

                    <div className="testimonial-content">
                        <p className="testimonial-text">{testimonials[index].text}</p>
                        <h3 className="testimonial-author">{testimonials[index].author}</h3>
                        <p className="testimonial-role">{testimonials[index].role}</p>
                        <div className="testimonial-arrows">
                        <button onClick={prevTestimonial} className="arrow-btn">
                            <FontAwesomeIcon icon={faCircleChevronLeft} />
                        </button>
                        <button onClick={nextTestimonial} className="arrow-btn">
                            <FontAwesomeIcon icon={faCircleChevronRight} />
                        </button>
                        </div>
                    </div>

                    <div className="testimonial-image">
                        <img src={testimonials[index].image} alt="Testimonial" />
                    </div>
                </section>
           
            {/*Footer section start*/}
            <footer className="footer">
                {/* Title */}
                <div className="footer-title">
                    <h3>Welcome to Hakward Technologies Ltd</h3>
                </div>

                {/* Footer Content */}
                <div className="footer-container">
                    <div className="footer-box">
                    <FontAwesomeIcon icon={faLocationDot} className="icon-1" />
                    <h3>Corporate Office</h3>
                    <p>H.NO 4-38/D/A, 1st floor, Opp Lingampally Railway Station, Road No 10, Dubey Colony, Serilingampally, Hyderabad, Telangana-500019</p>
                    </div>

                    <div className="footer-box">
                    <FontAwesomeIcon icon={faEnvelope} className="icon-1" />
                    <h3>Email Address</h3>
                    <p>info@Hakwardtech.in</p>
                    </div>

                    <div className="footer-box">
                    <FontAwesomeIcon icon={faPhone} className="icon-1" />
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
                    <div className="social-circle"><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className="social-circle"><FontAwesomeIcon icon={faFacebookF} /></div>
                    <div className="social-circle"><FontAwesomeIcon icon={faYoutube} /></div>
                    <div className="social-circle"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                    <div className="social-circle"><FontAwesomeIcon icon={faInstagram} /></div>
                </div>
            </footer>
       </main>
        
    </>)
}

export default Home;
