import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import firstItem from '../assets/hero.png';
import secondItem from '../assets/second.png';
import thirdItem from '../assets/third.png';
import fourthItem from '../assets/fourth.jpg';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <Slider {...settings} className='pt-2'>
                <div><img src={firstItem} alt="Slide 1" className='h-40' /></div>
                <div><img src={secondItem} alt="Slide 2" className='h-40'/></div>
                <div><img src={thirdItem} alt="Slide 3" className='h-40' /></div>
                <div><img src={fourthItem} alt="Slide 4" className='h-40' /></div>
        </Slider>
    );
};

export default Carousel;
