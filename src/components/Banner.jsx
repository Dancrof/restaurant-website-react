import React from 'react';
import './banner.css';
import bannerImg from '../img/banner/banner.jpg';
function Banner() {
    return (
        <div className="banner">
            <img src={bannerImg} alt="" />
        </div>
    );
}

export default Banner
