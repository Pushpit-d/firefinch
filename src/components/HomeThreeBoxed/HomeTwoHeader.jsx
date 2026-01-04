import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo-2.png";
import StickyMenu from "../../lib/StickyMenu";
import Navigation from "../Navigation.jsx";

function Header({ action, className, scroll }) {
  useEffect(() => {
    StickyMenu(); // Initialize the sticky menu
  }, []);

  return (
    <header className={`main-header header-style-three ${className || ""}`}>
      {/* Header Top */}
      <div className="header-top">
        <div className="auto-container">
          <div className="inner-container">
            <div className="top-left">
              <ul className="social-icon-one">
                <li>
                  <Link to="#">
                    <span className="fab fa-twitter"></span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fab fa-facebook-square"></span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fab fa-pinterest-p"></span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fab fa-instagram"></span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="top-right">
              <ul className="list-style-one">
                <li>
                  <i className="fa fa-envelope"></i>{" "}
                  <Link to="mailto:info@firefinchtechnologies.com">
                    info@firefinchtechnologies.com
                  </Link>
                </li>
                <li>
                  <i className="fa fa-map-marker"></i> 99 Broklyn Golden Street.
                  New York
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Top */}

      {/* Header Lower */}
      <div className="header-lower">
        <div className="auto-container">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <Link to="/">
                  <img src={logo1} alt="Firefinch" title="Firefinch" />
                </Link>
              </div>
            </div>

            <div className="nav-outer">
              {/* Navigation */}
              <nav className="nav main-menu">
                <Navigation />
              </nav>
            </div>

            <div className="outer-box">
              {/* <div className="ui-btn-outer border-0">
                                <button className="ui-btn ui-btn search-btn">
                                    <span className="icon lnr lnr-icon-search"></span>
                                </button>
                                <Link to="#" className="ui-btn"><i className="lnr-icon-shopping-cart"></i></Link>
                            </div> */}

              {/* Mobile Nav toggler */}
              <div className="mobile-nav-toggler" onClick={action}>
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Lower */}

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>

        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link to="/">
                <img src={logo1} alt="" title="" />
              </Link>
            </div>
            <div className="close-btn">
              <i className="icon fa fa-times"></i>
            </div>
          </div>

          <ul className="navigation clearfix">
            {/* Keep This Empty / Menu will come through Javascript */}
          </ul>
          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <Link to="tel:+97145581425">+971 4 558 1425</Link>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-envelope1"></span>
                <span className="title">Send Email</span>
                <Link to="mailto:info@firefinchtechnologies.com">
                  info@firefinchtechnologies.com
                </Link>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-clock"></span>
                <span className="title">Opening Hours</span>
                Mon- Fri 10:00 - 6:00, Sat & Sun - Closed
              </div>
            </li>
          </ul>

          <ul className="social-links">
            <li>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-pinterest"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* End Mobile Menu */}

      {/* Sticky Header */}
      <div
        className={`sticky-header ${
          scroll ? "fixed-header animated slideInDown" : ""
        }`}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link to="/">
                <img src={logo2} alt="Firefinch" />
              </Link>
            </div>

            <div className="nav-outer">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <Navigation />
                </div>
              </nav>

              <div className="mobile-nav-toggler" onClick={action}>
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sticky Header */}
    </header>
  );
}

export default Header;
