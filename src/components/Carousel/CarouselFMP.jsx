import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/fmp/ilus01.jpg';

class CarouselFMP extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="FMP" src={ilus01} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselFMP;