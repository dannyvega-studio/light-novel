import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/konosuba/zuko/ilus01.jpg';
import ilus02 from '../../assets/images/konosuba/zuko/ilus02.jpg';
import ilus03 from '../../assets/images/konosuba/zuko/ilus03.jpg';

class CarouselBAKUENZUKKO extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="BAKUEN! ZUKKO" src={ilus01} />
                </div>
                <div>
                    <img alt="BAKUEN! ZUKKO" src={ilus02} />
                </div>
                <div>
                    <img alt="BAKUEN! ZUKKO" src={ilus03} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselBAKUENZUKKO;