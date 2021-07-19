import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/overlord/ilus01.png';
import ilus02 from '../../assets/images/overlord/ilus02.png';
import ilus03 from '../../assets/images/overlord/ilus03.png';
import ilus04 from '../../assets/images/overlord/ilus04.png';
import ilus05 from '../../assets/images/overlord/ilus05.png';
import ilus06 from '../../assets/images/overlord/ilus06.png';
import ilus07 from '../../assets/images/overlord/ilus07.png';
import ilus08 from '../../assets/images/overlord/ilus08.png';

class CarouselOVERLORD extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="OVERLORD" src={ilus01} />
                </div>
                <div>
                    <img alt="OVERLORD" src={ilus02} />
                </div>
                <div>
                    <img alt="OVERLORD" src={ilus03} />
                </div>
                <div>
                    <img alt="OVERLORD" src={ilus04} />
                </div>
                <div>
                    <img alt="OVERLORD" src={ilus05} />
                </div>
                <div>
                    <img alt="OVERLORD" src={ilus06} />
                </div>
                <div>
                    <img alt="OVERLORD" src={ilus07} />
                </div>
                <div>
                    <img alt="OVERLORD" src={ilus08} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselOVERLORD;