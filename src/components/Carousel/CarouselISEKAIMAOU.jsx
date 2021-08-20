import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/isekaimaou/ilus01.jpg';
import ilus02 from '../../assets/images/isekaimaou/ilus02.png';
import ilus03 from '../../assets/images/isekaimaou/ilus03.jpg';
import ilus04 from '../../assets/images/isekaimaou/ilus04.jpg';
import ilus05 from '../../assets/images/isekaimaou/ilus05.jpg';

class CarouselISEKAIMAOU extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="ISEKAI MAOU" src={ilus01} />
                </div>
                <div>
                    <img alt="ISEKAI MAOU" src={ilus02} />
                </div>
                <div>
                    <img alt="ISEKAI MAOU" src={ilus03} />
                </div>
                <div>
                    <img alt="ISEKAI MAOU" src={ilus04} />
                </div>
                <div>
                    <img alt="ISEKAI MAOU" src={ilus05} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselISEKAIMAOU;