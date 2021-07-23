import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/elaina/ilus01.jpg';
import ilus02 from '../../assets/images/elaina/ilus02.jpg';
import ilus03 from '../../assets/images/elaina/ilus03.jpg';
import ilus04 from '../../assets/images/elaina/ilus04.jpg';

class CarouselELAINA extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="ELAINA" src={ilus01} />
                </div>
                <div>
                    <img alt="ELAINA" src={ilus02} />
                </div>
                <div>
                    <img alt="ELAINA" src={ilus03} />
                </div>
                <div>
                    <img alt="ELAINA" src={ilus04} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselELAINA;