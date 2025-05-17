import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import HomeOneHeader from '../HomeOne/HomeOneHeader.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import HeroPageTitle from './HeroPageTitle.jsx';
import ServiceDetailsImage from '../../assets/images/resource/service-details.jpg';
import ServiceDetailsBackground1 from '../../assets/images/resource/contact.jpg';
import ServiceDetailsBackground2 from '../../assets/images/resource/overlay-shape.png';

function ServicesDetails() {
    const [showQues, setQues] = useState(1);
    const openQuestion = (value) => {
        setQues(value);
    };

    return (
        <>
            <HomeOneHeader />
            <HeroPageTitle
                title="Web & Software Development"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/web-software-development', title: 'Web & Software Development' },
                ]}
            />
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        {/* Start Services Details Sidebar */}
                        <div className="col-xl-4 col-lg-4">
                            <div className="service-sidebar">
                                {/* Start Services Details Sidebar Single */}
                                <div className="sidebar-widget service-sidebar-single">
                                    <div className="service-sidebar wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200m">
                                        <div className="service-list">
                                            <ul>
                                                <li>
                                                    <Link to="/web-software-development" className="current">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Web & Software Development</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/it-infra-network-solutions">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>IT Infra & Network Solutions</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/cybersecurity">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Cybersecurity</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/cloud-services-management">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Cloud Services & Management</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/data-analytics-classification">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Data Analytics & Classification</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/designing-digital-marketing">
                                                        <i className="fas fa-angle-right"></i>
                                                        <span>Designing & Digital Marketing</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Services Details Sidebar Single */}

                                {/* Start Banner Widget */}
                                {/* <div className="sidebar-widget banner-widget">
                                    <div className="widget-content" style={{ backgroundImage: `url(${ServiceDetailsBackground1})` }}>
                                        <div className="shape" style={{ backgroundImage: `url(${ServiceDetailsBackground2})` }}></div>
                                        <div className="content-box">
                                            <div className="icon-box">
                                                <i className="lnr lnr-icon-pie-chart"></i>
                                            </div>
                                            <h3>Be healthy & eat only fresh</h3>
                                            <Link to="page-contact.html" className="theme-btn btn-style-two bg-light">
                                                <span className="btn-title text-black"> Contact us</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div> */}
                                {/* End Banner Widget */}

                                {/* Start Services Details Sidebar Single */}
                                {/* <div className="sidebar-widget service-sidebar-single mt-5">
                                    <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                                        <Link to="#" className="theme-btn btn-style-one d-grid">
                                            <span className="btn-title">
                                                <span className="fas fa-file-pdf"></span> download pdf file
                                            </span>
                                        </Link>
                                    </div>
                                </div> */}
                                {/* End Services Details Sidebar Single */}
                            </div>
                        </div>
                        {/* End Services Details Sidebar */}

                        {/* Start Services Details Content */}
                        <div className="col-xl-8 col-lg-8">
                            <div className="services-details__content">
                                <img src={ServiceDetailsImage} alt="" />
                                <h2 className="mt-4">What We Build</h2>
                                <p>From custom websites to enterprise-grade software, we create digital solutions that drive performance and business growth. Our team builds fast, secure, and responsive systems with clean UI and smooth backend functionality.</p>
                                
                                <div className="content mt-40">
                                    <div className="text">
                                        <h3>Why Choose Our Development Services</h3>
                                        <p>We combine strategy, design, and development to deliver solutions that are future-ready, scalable, and easy to manage.</p>
                                    </div>
                                    <div className="feature-list">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Custom websites and web apps tailored to your brand</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Cross-platform mobile app development</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">SEO and performance optimization</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">Backend APIs and database integration</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">CMS and admin panel implementation</h6>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                                <div className="single-item">
                                                    <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                                                    <h6 className="title">End-to-end testing and deployment</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="mt-25">
                                    <h3>Frequently Asked Question</h3>
                                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <ul className="accordion-box wow fadeInRight">
                                        <li className={`accordion block ${showQues === 1 ? 'active-block' : ''}`} onClick={() => openQuestion(1)}>
                                            <div className={`acc-btn ${showQues === 1 ? 'active' : ''}`}>
                                                Is my technology allowed on tech?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 1 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`accordion block active-block ${showQues === 2 ? 'active-block' : ''}`} onClick={() => openQuestion(2)}>
                                            <div className={`acc-btn ${showQues === 2 ? 'active' : ''}`}>
                                                How to soft launch your business?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 2 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`accordion block active-block ${showQues === 3 ? 'active-block' : ''}`} onClick={() => openQuestion(3)}>
                                            <div className={`acc-btn ${showQues === 3 ? 'active' : ''}`}>
                                                Can you manage my business?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 3 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`accordion block active-block ${showQues === 4 ? 'active-block' : ''}`} onClick={() => openQuestion(4)}>
                                            <div className={`acc-btn ${showQues === 4 ? 'active' : ''}`}>
                                                Why choose us?
                                                <div className="icon fa fa-plus"></div>
                                            </div>
                                            <div className={`acc-content ${showQues === 4 ? 'current' : ''}`}>
                                                <div className="content">
                                                    <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        {/* End Services Details Content */}
                    </div>
                </div>
            </section>
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default ServicesDetails;
