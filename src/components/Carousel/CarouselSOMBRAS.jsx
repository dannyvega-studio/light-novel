import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/sombras/ilus01.png';
import ilus02 from '../../assets/images/sombras/ilus02.png';
import ilus03 from '../../assets/images/sombras/ilus03.png';
import ilus04 from '../../assets/images/sombras/ilus04.png';

class CarouselSOMBRAS extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="SOMBRAS" src={ilus01} />
                </div>
                <div>
                    <img alt="SOMBRAS" src={ilus02} />
                </div>
                <div>
                    <img alt="SOMBRAS" src={ilus03} />
                </div>
                <div>
                    <img alt="SOMBRAS" src={ilus04} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselSOMBRAS;