import React from "react";
import useToggle from "../../Hooks/useToggle.js";
import BackToTop from "../BackToTop.jsx";
import FooterHomeOne from "./FooterHomeOne.jsx";
import ServicesHomeThree from './ServicesHomeThree.jsx';
import BlogHomeThree from "./Blog.jsx";
import ClientHomeOne from "./ClientHomeOne.jsx";
import HeaderFour from "./HeaderFour.jsx";
import ContactSectionTwo from "./Contact.jsx";
import CallToActionFour from "./CallToAction.jsx";
import BannerSectionThree from "./Banner.jsx";
import ServicesHomeFour from "./Services.jsx";
import AboutSectionSix from "./About.jsx";
import ProjectSliderHomeThree from "./Project.jsx";
import TestimonialCarousel from "./Testimonial.jsx";
import FeaturesSectionFive from "./Feature.jsx";
import IndustriesSection from "./Industries.jsx";
import OfferSectionFour from "./Offer.jsx";
import PricingSection from "./Pricing.jsx";
import FaqHomeOne from "./Faq.jsx";

function HomeFive() {
  const [drawer, drawerAction] = useToggle(false);

  return (
    <>
      <HeaderFour action={drawerAction.toggle} />
      <BannerSectionThree />
      {/* <FeaturesSectionFive /> */}
      <AboutSectionSix />
      <IndustriesSection />
      <ServicesHomeThree />
      {/* <OfferSectionFour /> */}
      
      
      {/* <ProjectSliderHomeThree /> */}
      {/* <PricingSection /> */}
      
      {/* <FaqHomeOne /> */}
      {/* <TestimonialCarousel /> */}
      {/* <BlogHomeThree /> */}
      {/* <ClientHomeOne /> */}
      <ContactSectionTwo />
      <CallToActionFour />
      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default HomeFive;
