import React from "react";
    import Service1 from './Images/service 1.png'; // Import your images
    import Service2 from './Images/service 2.png'
    import Service3 from './Images/service 3.png'
    import Service4 from './Images/service 4.png'
    import Service5 from './Images/service 5.png'
    import Service6 from './Images/service 6.png'
    import Service7 from './Images/service 7.png'
    import Service8 from './Images/service 8.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faArrowRight  } from '@fortawesome/free-solid-svg-icons';



const Services1 = () => {
  return (
    
    <section>
      <div className="services-container">
        <div className="services-grid">
          {/* Web Design Card */}
          <div className="service-card">
            <div className="service-image-container">
              <img src={Service1} alt="Web Design" className="service-image"  />
            </div>
            <h2 className="service-title">Web Design</h2>
            <p className="service-description">
              Our experienced team provides exceptional web design services tailored to unique needs of each client.
              From concept to launch, we work closely with our clients to create custom websites that are visually 
              appealing, user-friendly, and optimized for search engines. Our goal is to help businesses establish an 
              online presence that sets them apart and drives growth.
            </p>
            <button className="button">
              <span>Explore more</span>
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              </button>
          </div>

          {/* Web Development Card */}
          <div className="service-card">
            <div className="service-image-container">
              <img src={Service2} alt="Web Development" className="service-image" width={350} height={250} />
            </div>
            <h2 className="service-title">Web Development</h2>
            <p className="service-description">
              Our web development services aim to enhance your online presence and drive business growth.
              We specialize in creating custom websites tailored to meet the unique needs and goals of each client.
              From concept to launch, we work closely with you to deliver a user-friendly, visually stunning website 
              that exceeds your expectations.
            </p>
            <button className="button">
              <span>Explore more</span>
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              
            </button>
          </div>
          <div className="service-card">
            <div className="service-image-container">
              <img src={Service3} alt="Web Design" className="service-image" />
            </div>
            <h2 className="service-title">Mobile App Development</h2>
            <p className="service-description">
                Transform your ideas into reality with our professional mobile app development services.
                Our team of experts specialize in creating intuitive and user-friendly apps across iOS and 
                Android platforms. Whether it's a simple or complex app, we deliver high-quality solutions that 
                meet your specific needs.
            </p>
            <button className="button">
              <span>Explore more</span>
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              </button>
          </div>
          <div className="service-card">
            <div className="service-image-container">
              <img src={Service4} alt="Web Design" className="service-image" />
            </div>
            <h2 className="service-title">Consultancy</h2>
            <p className="service-description">
                 Unlock your full potential with our comprehensive consultancy services.
                 Our team of experts bring a wealth of experience and knowledge to help you reach your goals.
              From strategy development to implementation, we provide personalized solutions to support you.
               Trust us to guide you towards success.
            </p>
            <button className="button">
              <span>Explore more</span>
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              </button>
          </div>
          <div className="service-card">
            <div className="service-image-container">
              <img src={Service5} alt="Web Design" className="service-image" />
            </div>
            <h2 className="service-title">Application Maintenance</h2>
            <p className="service-description">
                Ensure the smooth operation of your applications with our professional maintenance services. 
                Our team of experts provide round-the-clock support to keep your applications running smoothly and
                efficiently. Trust us to handle all your maintenance needs and keep your applications performing at
              their best.
            </p>
            <button className="button">
              <span>Explore more</span>
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              </button>
          </div>
          <div className="service-card">
            <div className="service-image-container">
              <img src={Service6} alt="Web Design" className="service-image" />
            </div>
            <h2 className="service-title">Software Services</h2>
            <p className="service-description">
            Accelerate your digital transformation with our comprehensive software services.
             Our team of experts specialize in delivering cutting-edge solutions that meet your unique needs.
              From software development to implementation, we provide end-to-end 
              support to help you achieve your goals.
            </p>
            <button className="button">
              <span>Explore more</span>
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              </button>
          </div>
          <div className="service-card">
            <div className="service-image-container">
              <img src={Service7} alt="Web Design" className="service-image" />
            </div>
            <h2 className="service-title">SEO Services</h2>
            <p className="service-description">
            Drive traffic and increase your online visibility with our professional SEO services.
             Our team of experts use proven strategies to boost your search engine rankings and attract
              more qualified leads to your website. Partner with us for effective and results-driven SEO solutions.
            </p>
            <button className="button">
              <span>Explore more</span>
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              </button>
          </div>
          <div className="service-card">
            <div className="service-image-container">
              <img src={Service8} alt="Web Design" className="service-image" />
            </div>
            <h2 className="service-title">AI Services</h2>
            <p className="service-description">
            Streamline your image sourcing and text annotation processes with our advanced AI solutions.
             Our team of experts specialize in delivering high-quality and accurate results using state-of-the-art technology.
              Trust us to provide the tools and support you need to efficiently scale your operations.
            </p>
            <button className="button">
              <span>Explore more</span>
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;
