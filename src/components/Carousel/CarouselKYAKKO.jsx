import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/konosuba/kyakko/ilus01.jpg';
import ilus02 from '../../assets/images/konosuba/kyakko/ilus02.png';
import ilus03 from '../../assets/images/konosuba/kyakko/ilus03.jpg';
import ilus04 from '../../assets/images/konosuba/kyakko/ilus04.jpg';
import ilus05 from '../../assets/images/konosuba/kyakko/ilus05.jpg';

class CarouselKYAKKO extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="KYAKKO" src={ilus01} />
                </div>
                <div>
                    <img alt="KYAKKO" src={ilus02} />
                </div>
                <div>
                    <img alt="KYAKKO" src={ilus03} />
                </div>
                <div>
                    <img alt="KYAKKO" src={ilus04} />
                </div>
                <div>
                    <img alt="KYAKKO" src={ilus05} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselKYAKKO;