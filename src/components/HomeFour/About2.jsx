import React from 'react';
import { Link } from 'react-router-dom';
import MenImage from '../../assets/images/resource/men.png'; 

function AboutSectionSix({ className }) {
    return (
        <section className={`about-section-six ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">About Our Company</span>
                                <h2>Always Deliver More than you Expected</h2>
                                <div className="text">
                                With over 5 years of hands-on experience, we specialize in providing smart, scalable, and client-focused digital solutions. Our mission is to deliver unmatched quality, on time, every time — going beyond expectations at every step.
                                </div>
                            </div>

                            <div className="content-box">
                                <div className="about-block-four">
                                    <i className="icon flaticon-business-018-startup"></i>
                                    <h5 className="title">End to End Development</h5>
                                    <div className="text">From concept to deployment, we handle everything — web, mobile, and custom software tailored to your business goals.</div>
                                </div>

                                <div className="about-block-four">
                                    <i className="icon flaticon-business-027-world"></i>
                                    <h5 className="title">Software IT Outsource</h5>
                                    <div className="text">Get reliable, cost-effective tech talent and services to scale your digital operations efficiently.</div>
                                </div>

                                {/* <ul className="list-style-three">
                                    <li>Sed non odio non elit porttitor tincidunt donec</li>
                                    <li>Sed non odio non elit porttitor tinc</li>
                                </ul> */}
                            </div>

                            <div className="btm-box">
                                <Link to="/contact-pages" className="theme-btn btn-style-one">
                                    <span className="btn-title">Contact Us</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInLeft">
                            <div className="image-box">
                                <figure className="image wow fadeIn">
                                    <img src={MenImage} alt="About Us" />
                                </figure>
                                <div className="completed-projects">
                                    <strong>50+</strong>
                                    <div className="text">PROJECTS DONE</div>
                                </div>
                                <div className="experience bounce-y">
                                    <strong>5+</strong>
                                    <div className="text">Years of <br />Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSectionSix;
