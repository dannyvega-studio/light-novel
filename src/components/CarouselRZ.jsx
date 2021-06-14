import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../assets/images/rezero/ilus01.png';
import ilus02 from '../assets/images/rezero/ilus02.png';
import ilus03 from '../assets/images/rezero/ilus03.png';
import ilus04 from '../assets/images/rezero/ilus04.png';
import ilus05 from '../assets/images/rezero/ilus05.png';
import ilus06 from '../assets/images/rezero/ilus06.png';
import ilus07 from '../assets/images/rezero/ilus07.png';
import ilus08 from '../assets/images/rezero/ilus08.png';
import ilus09 from '../assets/images/rezero/ilus09.png';

class CarouselREZERO extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="REZERO" src={ilus01} />
                </div>
                <div>
                    <img alt="REZERO" src={ilus02} />
                </div>
                <div>
                    <img alt="REZERO" src={ilus03} />
                </div>
                <div>
                    <img alt="REZERO" src={ilus04} />
                </div>
                <div>
                    <img alt="REZERO" src={ilus05} />
                </div>
                <div>
                    <img alt="REZERO" src={ilus06} />
                </div>
                <div>
                    <img alt="REZERO" src={ilus07} />
                </div>
                <div>
                    <img alt="REZERO" src={ilus08} />
                </div>
                <div>
                    <img alt="REZERO" src={ilus09} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselREZERO;