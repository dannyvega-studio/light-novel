import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../assets/images/konosuba/ilus01.png';
import ilus02 from '../assets/images/konosuba/ilus02.png';
import ilus03 from '../assets/images/konosuba/ilus03.png';
import ilus04 from '../assets/images/konosuba/ilus04.png';
import ilus05 from '../assets/images/konosuba/ilus05.png';
import ilus06 from '../assets/images/konosuba/ilus06.png';

class CarouselKONOSUBA extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="KONOSUBA" src={ilus01} />
                </div>
                <div>
                    <img alt="KONOSUBA" src={ilus02} />
                </div>
                <div>
                    <img alt="KONOSUBA" src={ilus03} />
                </div>
                <div>
                    <img alt="KONOSUBA" src={ilus04} />
                </div>
                <div>
                    <img alt="KONOSUBA" src={ilus05} />
                </div>
                <div>
                    <img alt="KONOSUBA" src={ilus06} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselKONOSUBA;