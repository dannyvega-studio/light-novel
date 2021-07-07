import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ilus01 from '../../assets/images/henneko/ilus01.jpg';
import ilus02 from '../../assets/images/henneko/ilus02.jpg';
import ilus03 from '../../assets/images/henneko/ilus03.jpg';
import ilus04 from '../../assets/images/henneko/ilus04.jpg';
import ilus05 from '../../assets/images/henneko/ilus05.jpg';
import ilus06 from '../../assets/images/henneko/ilus06.jpg';
import ilus07 from '../../assets/images/henneko/ilus07.jpg';

class CarouselHENNEKO extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay useKeyboardArrows >
                <div>
                    <img alt="HENNEKO" src={ilus01} />
                </div>
                <div>
                    <img alt="HENNEKO" src={ilus02} />
                </div>
                <div>
                    <img alt="HENNEKO" src={ilus03} />
                </div>
                <div>
                    <img alt="HENNEKO" src={ilus04} />
                </div>
                <div>
                    <img alt="HENNEKO" src={ilus05} />
                </div>
                <div>
                    <img alt="HENNEKO" src={ilus06} />
                </div>
                <div>
                    <img alt="HENNEKO" src={ilus07} />
                </div>
            </Carousel>
        );
    }
};

export default CarouselHENNEKO;