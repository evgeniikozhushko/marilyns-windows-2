import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const logos = [
    { image: require('./../../images/client-logo/w1.png') },
    { image: require('./../../images/client-logo/w2.png') },
    { image: require('./../../images/client-logo/w3.png') },
    { image: require('./../../images/client-logo/w4.png') },
    { image: require('./../../images/client-logo/w5.png') },
    { image: require('./../../images/client-logo/w6.png') },

]

class ClientsLogo extends React.Component {

    render() {
        const options = {
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2
                },
                767: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        };
        return (
            <>
                
                    <div className="section-full p-tb40 bg-black square_shape4 tm-client-wrap">
                    <div className="p-t48 p-b50 ">     
                        <div className="container">
                            <div className="section-content">
                                <div className="">
                                    <div className="row">

                                        {/* <div className='container container-logo'> */}
                                            <div className='p-b50'>
                                                <div className="col-md-12 col-sm-12 p-b30">
                                                    {/* TITLE START */}
                                                    <div className="text-left">
                                                        <h2 className="text-uppercase font-36 text-white">My Premium Suppliers</h2>
                                                        <div className="wt-separator-outer">
                                                            <div className="wt-separator bg-white" />
                                                        </div>
                                                    </div>
                                                    {/* TITLE END */}
                                                </div>
                                            </div>
                                        {/* </div> */}

                                        <div className="col-md-12 col-sm-12">
                                            <div className="section-content bg-white p-tb80">
                                                
                                                <OwlCarousel className="owl-carousel home-client-carousel owl-btn-center-v" {...options}>
                                                    {logos.map((item, index) => (
                                                        <div className="item" key={index}>
                                                            <div className="ow-client-logo">
                                                                <div className="client-logo client-logo-media">
                                                                    <NavLink to={"aboutme"}><img src={item.image.default} alt="" /></NavLink>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </OwlCarousel>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
};

export default ClientsLogo;