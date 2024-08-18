import React from 'react';
import { mainCarouselData } from './MainCaroselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const MainCrosel = () => {
    const items = mainCarouselData.map((item, index) => (
        <img 
            className='cursor-pointer -z-10'
            role='presentation'
            src={item.image}
            alt={`carousel-item-${index}`}
            key={index} // Added key for better React performance
        />
    ));

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            // responsive={responsive}
            // controlsStrategy="alternate"
        />
    );
};

export default MainCrosel;
