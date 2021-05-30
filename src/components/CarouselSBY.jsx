import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../assets/images/seishunbuta/ilus01.jpg';
import ilus02 from '../assets/images/seishunbuta/ilus02.jpg';
import ilus03 from '../assets/images/seishunbuta/ilus03.jpg';
import ilus04 from '../assets/images/seishunbuta/ilus04.jpg';
import ilus05 from '../assets/images/seishunbuta/ilus05.jpg';
import ilus06 from '../assets/images/seishunbuta/ilus06.jpg';

class CarouselSBY extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="SBY" src={ilus01} />
                </div>
                <div>
                    <img alt="SBY" src={ilus02} />
                </div>
                <div>
                    <img alt="SBY" src={ilus03} />
                </div>
                <div>
                    <img alt="SBY" src={ilus04} />
                </div>
                <div>
                    <img alt="SBY" src={ilus05} />
                </div>
                <div>
                    <img alt="SBY" src={ilus06} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselSBY;