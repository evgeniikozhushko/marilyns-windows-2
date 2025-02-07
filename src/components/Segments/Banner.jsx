import React from 'react';
import { NavLink } from 'react-router-dom';

class Banner extends React.Component {
    render() {
        return (
            <>
                <div className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + this.props.bgimage + ')' }}>
                    <div className="overlay-main bg-black opacity-02" />
                    {/* <div className='overlay-secondary' /> */}
                        {/* <div> */}
                        {/* <div className="m-a10 p-a15 bdr-1 bdr-primary"> */}
                        
                        <div className="container" >


                            
                                {/* <div className='bdr-1 bdr-primary '> */}
                                    <div className="wt-bnr-inr-entry">
                                        {/* <div className='banner-bg-white'> */}
                                            <div className="banner-title-outer">
                                                <div className="banner-title-name">
                                                    {/* <h1>About Marilyn's Windows</h1> */}
                                                    <h2 className="text-white text-uppercase letter-spacing-5 font-18 font-weight-300">{this.props.title}</h2>
                                                </div>
                                            </div>
                                        {/* </div> */}
                                        {/* BREADCRUMB ROW */}
                                        <div className="p-tb20">
                                            <div>
                                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                                    
                                                    
                                                    <li>{this.props.pagename === 'Blog Post' ? 
                                                        <NavLink to={"/blogs"}>List of Blogs</NavLink> :
                                                        <NavLink to={"./"}>Home</NavLink>
                                                    }</li>
                                                    
                                                    <li>{this.props.pagename}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* BREADCRUMB ROW END */}
                                    </div>
                                {/* </div> */}



                        </div>
                            
                        {/* </div> */}
                    {/* </div> */}
                        
                </div>   
            </>
        );
    }
};

export default Banner;