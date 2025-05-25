import React from 'react';
import { Link } from 'react-router-dom';
import AboutImage from '../../assets/images/resource/about-14.jpg'; // Import the image

function AboutSectionFive({ className }) {
    return (
        <section className={`about-section-five style-two pt-0 ${className || ''}`}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xl-6 col-lg-6 col-md-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Welcome to Firefinch</span>
                                <h2>Building Smarter Digital Solutions Together</h2>
                                <div className="text">
                                Whether you're starting from scratch or scaling your existing systems, our team is ready to deliver reliable, secure, and innovative IT solutions. From infrastructure and cybersecurity to custom apps and cloud platforms — we’ve got you covered.
                                </div>
                            </div>

                            <ul className="list-style-three">
                                <li>Web & Software Development</li>
                                <li>IT Infrastructure & Network Solutionso</li>
                                <li>Cybersecurity & Data Protection</li>
                                <li>Cloud Services & Datacenter Solutions</li>
                            </ul>

                            {/* <div className="btn-box d-flex align-items-center">
                                <Link to="/about-us" className="theme-btn btn-style-one">
                                    <span className="btn-title">Discover more</span>
                                </Link>
                                <Link to="tel:+92(8800)9806" className="info-btn">
                                    <i className="icon fa fa-phone"></i>
                                    <small>Call Anytime</small><br /> + 88 ( 9800 ) 6802
                                </Link>
                            </div> */}
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="image-column col-xl-6 col-lg-6 col-md-12">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image overlay-anim wow fadeInUp">
                                    <img src={AboutImage} alt="About Us" />
                                </figure>
                                <div className="experience">
                                    <strong>5+</strong>
                                    <div className="text">Years <br />Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSectionFive;
