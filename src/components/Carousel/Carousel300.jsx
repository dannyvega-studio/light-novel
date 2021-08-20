import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/300/ilus01.jpg';
import ilus02 from '../../assets/images/300/ilus02.png';
import ilus03 from '../../assets/images/300/ilus03.png';

class Carousel300 extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="300" src={ilus01} />
                </div>
                <div>
                    <img alt="300" src={ilus02} />
                </div>
                <div>
                    <img alt="300" src={ilus03} />
                </div>
            </Carousel>
        );
    }
};

export default Carousel300;