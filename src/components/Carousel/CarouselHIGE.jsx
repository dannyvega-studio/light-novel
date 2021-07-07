import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/hige/ilus01.png';
import ilus02 from '../../assets/images/hige/ilus02.png';
import ilus03 from '../../assets/images/hige/ilus03.png';
import ilus04 from '../../assets/images/hige/ilus04.png';
import ilus05 from '../../assets/images/hige/ilus05.png';
import ilus06 from '../../assets/images/hige/ilus06.png';

class CarouselHIGE extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="HIGE" src={ilus01} />
                </div>
                <div>
                    <img alt="HIGE" src={ilus02} />
                </div>
                <div>
                    <img alt="HIGE" src={ilus03} />
                </div>
                <div>
                    <img alt="HIGE" src={ilus04} />
                </div>
                <div>
                    <img alt="HIGE" src={ilus05} />
                </div>
                <div>
                    <img alt="HIGE" src={ilus06} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselHIGE;