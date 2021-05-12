import React from 'react';
import { FaSearchPlus, FaSearchMinus } from 'react-icons/fa';

const PDFReaderControlsZoom = (props) => {

    const { scale, setScale } = props;
    
    const isMinZoom = scale < 0.6;
    const isMaxZoom = scale >= 1.5;

    const zoomOutClass = isMinZoom ? 'disabled' : 'clickable';
    const zoomInClass = isMaxZoom ? 'disabled' : 'clickable';

    const zoomOut = () => {
        if (!isMinZoom) setScale(scale - 0.1);
    };

    const zoomIn = () => {
        if (!isMaxZoom) setScale(scale + 0.1);
    };

    return (
            <div className="pdf-controls bg-dark m-3 p-3 d-flex align-items-baseline justify-content-center">
                <FaSearchMinus
                className={`fas fa-search-minus mx-3 ${zoomOutClass}`}
                onClick={zoomOut}
                /> 
                <span>{(scale * 100).toFixed()}%</span>
                <FaSearchPlus
                className={`fas fa-search-plus mx-3 ${zoomInClass}`}
                onClick={zoomIn}
                />
            </div>
        
    )
}

export default PDFReaderControlsZoom;