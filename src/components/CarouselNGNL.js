import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../assets/images/ngnl/ilus01.jpg';
import ilus02 from '../assets/images/ngnl/ilus02.jpg';
import ilus03 from '../assets/images/ngnl/ilus03.jpg';
import ilus04 from '../assets/images/ngnl/ilus04.jpg';

class CarouselNGNL extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="NGNL" src={ilus01} />
                </div>
                <div>
                    <img alt="NGNL" src={ilus02} />
                </div>
                <div>
                    <img alt="NGNL" src={ilus03} />
                </div>
                <div>
                    <img alt="NGNL" src={ilus04} />
                </div>
            </Carousel>
        );
    }
};


export default CarouselNGNL;