import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/konosuba/bakuen/ilus01.jpg';
import ilus02 from '../../assets/images/konosuba/bakuen/ilus02.jpg';
import ilus03 from '../../assets/images/konosuba/bakuen/ilus03.jpg';
import ilus04 from '../../assets/images/konosuba/bakuen/ilus04.jpg';
import ilus05 from '../../assets/images/konosuba/bakuen/ilus05.jpg';
import ilus06 from '../../assets/images/konosuba/bakuen/ilus06.jpg';

class CarouselBAKUEN extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="BAKUEN!" src={ilus01} />
                </div>
                <div>
                    <img alt="BAKUEN!" src={ilus02} />
                </div>
                <div>
                    <img alt="BAKUEN!" src={ilus03} />
                </div>
                <div>
                    <img alt="BAKUEN!" src={ilus04} />
                </div>
                <div>
                    <img alt="BAKUEN!" src={ilus05} />
                </div>
                <div>
                    <img alt="BAKUEN!" src={ilus06} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselBAKUEN;