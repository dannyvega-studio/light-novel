import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/goblinslayer/ilus01.jpg';
import ilus02 from '../../assets/images/goblinslayer/ilus02.jpg';
import ilus03 from '../../assets/images/goblinslayer/ilus03.jpg';
import ilus04 from '../../assets/images/goblinslayer/ilus04.jpg';
import ilus05 from '../../assets/images/goblinslayer/ilus05.jpg';

class CarouselGS extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="GS" src={ilus01} />
                </div>
                <div>
                    <img alt="GS" src={ilus02} />
                </div>
                <div>
                    <img alt="GS" src={ilus03} />
                </div>
                <div>
                    <img alt="GS" src={ilus04} />
                </div>
                <div>
                    <img alt="GS" src={ilus05} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselGS;