import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/bokusensei/ilus01.jpg';
import ilus02 from '../../assets/images/bokusensei/ilus02.png';
import ilus03 from '../../assets/images/bokusensei/ilus03.png';
import ilus04 from '../../assets/images/bokusensei/ilus04.png';

class CarouselBOKUSENSEI extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="BOKUSENSEI" src={ilus01} />
                </div>
                <div>
                    <img alt="BOKUSENSEI" src={ilus02} />
                </div>
                <div>
                    <img alt="BOKUSENSEI" src={ilus03} />
                </div>
                <div>
                    <img alt="BOKUSENSEI" src={ilus04} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselBOKUSENSEI;