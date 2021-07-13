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
import ilus09 from '../../assets/images/overlord/ilus09.png';
import ilus10 from '../../assets/images/overlord/ilus10.png';
import ilus11 from '../../assets/images/overlord/ilus11.png';
import ilus12 from '../../assets/images/overlord/ilus12.png';
import ilus13 from '../../assets/images/overlord/ilus13.png';
import ilus14 from '../../assets/images/overlord/ilus14.png';

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
                <div>
                    <img alt="OVERLORD" src={ilus09} />
                </div>
                <div>
                    <img alt="OVERLORD" src={ilus10} />
                </div>
                <div>
                    <img alt="OVERLORD" src={ilus11} />
                </div>
                <div>
                    <img alt="OVERLORD" src={ilus12} />
                </div>
                <div>
                    <img alt="OVERLORD" src={ilus13} />
                </div>
                <div>
                    <img alt="OVERLORD" src={ilus14} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselOVERLORD;