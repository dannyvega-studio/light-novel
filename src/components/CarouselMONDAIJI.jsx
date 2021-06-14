import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../assets/images/mondaiji/ilus01.jpg';
import ilus02 from '../assets/images/mondaiji/ilus02.jpg';
import ilus03 from '../assets/images/mondaiji/ilus03.jpg';
import ilus04 from '../assets/images/mondaiji/ilus04.jpg';
import ilus05 from '../assets/images/mondaiji/ilus05.jpg';
import ilus06 from '../assets/images/mondaiji/ilus06.jpg';
import ilus07 from '../assets/images/mondaiji/ilus07.png';
import ilus08 from '../assets/images/mondaiji/ilus08.jpg';
import ilus09 from '../assets/images/mondaiji/ilus09.png';

class CarouselMONDAIJI extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="Mondaiji" src={ilus01} />
                </div>
                <div>
                    <img alt="Mondaiji" src={ilus02} />
                </div>
                <div>
                    <img alt="Mondaiji" src={ilus03} />
                </div>
                <div>
                    <img alt="Mondaiji" src={ilus04} />
                </div>
                <div>
                    <img alt="Mondaiji" src={ilus05} />
                </div>
                <div>
                    <img alt="Mondaiji" src={ilus06} />
                </div>
                <div>
                    <img alt="Mondaiji" src={ilus07} />
                </div>
                <div>
                    <img alt="Mondaiji" src={ilus08} />
                </div>
                <div>
                    <img alt="Mondaiji" src={ilus09} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselMONDAIJI;