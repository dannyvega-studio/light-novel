import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/mamasuki/ilus01.png';

class CarouselMAMASUKI extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="MAMASUKI" src={ilus01} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselMAMASUKI;