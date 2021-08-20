import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/bokuwatomodachi/ilus01.jpg';
import ilus02 from '../../assets/images/bokuwatomodachi/ilus02.jpg';
import ilus03 from '../../assets/images/bokuwatomodachi/ilus03.jpg';
import ilus04 from '../../assets/images/bokuwatomodachi/ilus04.png';
import ilus05 from '../../assets/images/bokuwatomodachi/ilus05.jpg';
import ilus06 from '../../assets/images/bokuwatomodachi/ilus06.jpg';
import ilus07 from '../../assets/images/bokuwatomodachi/ilus07.jpg';
import ilus08 from '../../assets/images/bokuwatomodachi/ilus08.jpg';

class CarouselBWTGS extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="BWTGS" src={ilus01} />
                </div>
                <div>
                    <img alt="BWTGS" src={ilus02} />
                </div>
                <div>
                    <img alt="BWTGS" src={ilus03} />
                </div>
                <div>
                    <img alt="BWTGS" src={ilus04} />
                </div>
                <div>
                    <img alt="BWTGS" src={ilus05} />
                </div>
                <div>
                    <img alt="BWTGS" src={ilus06} />
                </div>
                <div>
                    <img alt="BWTGS" src={ilus07} />
                </div>
                <div>
                    <img alt="BWTGS" src={ilus08} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselBWTGS;