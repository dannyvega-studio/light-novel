import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/elfsan/ilus00.jpg';
import ilus02 from '../../assets/images/elfsan/ilus01.jpg';
import ilus03 from '../../assets/images/elfsan/ilus02.jpg';

class CarouselELFSAN extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="ELF SAN" src={ilus01} />
                </div>
                <div>
                    <img alt="ELF SAN" src={ilus02} />
                </div>
                <div>
                    <img alt="ELF SAN" src={ilus03} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselELFSAN;