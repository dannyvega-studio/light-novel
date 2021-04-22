import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../assets/images/mushoku/ilus01.jpg';
import ilus02 from '../assets/images/mushoku/ilus02.jpg';
import ilus03 from '../assets/images/mushoku/ilus03.jpg';
import ilus04 from '../assets/images/mushoku/ilus04.jpg';

class Carouselmushoku extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="Mushoku" src={ilus01} />
                </div>
                <div>
                    <img alt="Mushoku" src={ilus02} />
                </div>
                <div>
                    <img alt="Mushoku" src={ilus03} />
                </div>
                <div>
                    <img alt="Mushoku" src={ilus04} />
                </div>
            </Carousel>
        );
    }
};


export default Carouselmushoku;