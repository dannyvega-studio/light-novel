import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../assets/images/kumodesuga/ilus01.png';
import ilus02 from '../assets/images/kumodesuga/ilus02.png';
import ilus03 from '../assets/images/kumodesuga/ilus03.png';
import ilus04 from '../assets/images/kumodesuga/ilus04.jpg';

class CarouselKDGNK extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="KDGNK" src={ilus01} />
                </div>
                <div>
                    <img alt="KDGNK" src={ilus02} />
                </div>
                <div>
                    <img alt="KDGNK" src={ilus03} />
                </div>
                <div>
                    <img alt="KDGNK" src={ilus04} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselKDGNK;