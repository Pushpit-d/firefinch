import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Service1Image from '../../assets/images/resource/service-1.jpg';
import Service2Image from '../../assets/images/resource/service-2.jpg';
import Service3Image from '../../assets/images/resource/service-3.jpg';

const ServicesDetails = () => {
    return (
        <>
          
          
            <section className="">
                <div className="container">
                    <div className="row">
                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/web-software-development"><img src={Service1Image} alt="" /></Link>
                                    </figure>
                                    {/* <div className="icon-box"><i className="icon flaticon-business-010-startup"></i></div> */}
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link to="/web-software-development">Web & Software Development</Link></h5>
                                    <div className="text">Custom websites and applications built to match your business goals with speed, scalability, and style.</div>
                                    <Link to="/web-software-development" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/it-infra-network-solutions"><img src={Service2Image} alt="" /></Link>
                                    </figure>
                                    {/* <div className="icon-box"><i className="icon flaticon-business-002-graph"></i></div> */}
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link to="/it-infra-network-solutions">IT Infra & Network Solutions</Link></h5>
                                    <div className="text">Reliable setup and management of networks, servers, and hardware to keep your operations running smoothly.</div>
                                    <Link to="/it-infra-network-solutions" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/cybersecurity"><img src={Service3Image} alt="" /></Link>
                                    </figure>
                                    {/* <div className="icon-box"><i className="icon flaticon-business-048-coin"></i></div> */}
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link to="/cybersecurity">Cybersecurity</Link></h5>
                                    <div className="text">Comprehensive security solutions to protect your digital assets from threats and ensure compliance.

</div>
                                    <Link to="/cybersecurity" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/cloud-services-management"><img src={Service3Image} alt="" /></Link>
                                    </figure>
                                    {/* <div className="icon-box"><i className="icon flaticon-business-002-graph"></i></div> */}
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link to="/cloud-services-management">Cloud Services & Management</Link></h5>
                                    <div className="text">Flexible and secure cloud infrastructure services for scalable hosting, storage, and application delivery.</div>
                                    <Link to="/cloud-services-management" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/data-analytics-classification"><img src={Service1Image} alt="" /></Link>
                                    </figure>
                                    {/* <div className="icon-box"><i className="icon flaticon-business-048-coin"></i></div> */}
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link to="/data-analytics-classification">Data Analytics & Classification</Link></h5>
                                    <div className="text">Transform raw data into actionable insights through advanced classification and intelligent reporting.</div>
                                    <Link to="/data-analytics-classification" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Service Block */}
                        <div className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link to="/designing-digital-marketing"><img src={Service2Image} alt="" /></Link>
                                    </figure>
                                    {/* <div className="icon-box"><i className="icon flaticon-business-010-startup"></i></div> */}
                                </div>
                                <div className="content-box">
                                    <h5 className="title"><Link to="/designing-digital-marketing">Designing & Digital Marketing</Link></h5>
                                    <div className="text">Development and ongoing support of interactive platforms to boost digital engagement and brand reach.</div>
                                    <Link to="/designing-digital-marketing" className="read-more">read More <i className="fa fa-long-arrow-alt-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BackToTop />
        </>
    );
};

export default ServicesDetails;
