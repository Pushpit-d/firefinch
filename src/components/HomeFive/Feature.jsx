import React from 'react';
import { Link } from 'react-router-dom';

function FeaturesSectionSix() {

    return (
        <section className="features-section-six">
            <div className="auto-container">
                <div className="row">
                    {/*<!-- Feature Block Six -->*/}
                    <div className="feature-block-six col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box ">
                            <span className="icon">50+</span>
                            <br></br>
                            <h3 className="title"><Link href="#">Projects Successfully<br/> Delivered Across <br/>the Globe</Link></h3>
                            
                        </div>
                    </div>

                    {/*<!-- Feature Block Six -->*/}
                    <div className="feature-block-six col-lg-4 hide-md ">
                        <div className="inner-box ">
                            <figure className="image"><img src="./src/assets/images/resource/feature-bg-6.jpg" alt=""/></figure>
                        </div>
                    </div>

                    {/*<!-- Feature Block Six -->*/}
                    <div className="feature-block-six col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box ">
                        <span className="icon">10+</span>
                        <br></br>
                            <h3 className="title"><Link href="#"> Industries Served <br/>with Tailorede<br/> IT Solutions </Link></h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionSix;
