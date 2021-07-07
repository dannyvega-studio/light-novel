import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/bokunosensei/ilus01.jpg';
import ilus02 from '../../assets/images/bokunosensei/ilus02.jpg';

class CarouselBOKUNOSENSEI extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="BOKUNOSENSEI" src={ilus01} />
                </div>
                <div>
                    <img alt="BOKUNOSENSEI" src={ilus02} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselBOKUNOSENSEI;