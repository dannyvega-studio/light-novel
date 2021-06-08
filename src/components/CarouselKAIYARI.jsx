import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus00 from '../assets/images/kaiyari/ilus00.jpg';
import ilus01 from '../assets/images/kaiyari/ilus01.jpg';
import ilus02 from '../assets/images/kaiyari/ilus02.jpg';
import ilus03 from '../assets/images/kaiyari/ilus03.jpg';
import ilus04 from '../assets/images/kaiyari/ilus04.jpg';
import ilus05 from '../assets/images/kaiyari/ilus05.jpg';
import ilus06 from '../assets/images/kaiyari/ilus06.jpg';
import ilus07 from '../assets/images/kaiyari/ilus07.jpg';
import ilus08 from '../assets/images/kaiyari/ilus08.jpg';
import ilus09 from '../assets/images/kaiyari/ilus09.jpg';

class CarouselKAIYARI extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="KAIYARI" src={ilus00} />
                </div>
                <div>
                    <img alt="KAIYARI" src={ilus01} />
                </div>
                <div>
                    <img alt="KAIYARI" src={ilus02} />
                </div>
                <div>
                    <img alt="KAIYARI" src={ilus03} />
                </div>
                <div>
                    <img alt="KAIYARI" src={ilus04} />
                </div>
                <div>
                    <img alt="KAIYARI" src={ilus05} />
                </div>
                <div>
                    <img alt="KAIYARI" src={ilus06} />
                </div>
                <div>
                    <img alt="KAIYARI" src={ilus07} />
                </div>
                <div>
                    <img alt="KAIYARI" src={ilus08} />
                </div>
                <div>
                    <img alt="KAIYARI" src={ilus09} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselKAIYARI;