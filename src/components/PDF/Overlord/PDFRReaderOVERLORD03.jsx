import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import PDFReaderControlsPage from '../PDFReaderControlsPage';
import PDFReaderControlsZoom from '../PDFReaderControlsZoom';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFReader = () => {

    const [scale, setScale] = useState(0.5);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <section id="pdf-section">
                <PDFReaderControlsZoom 
                    scale={scale}
                    setScale={setScale}
                    file="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/95cdc4bfe71a744b4720e63b862e6114ba4db9bb/Overlord/Overlord%20Vol%203%20JG.pdf" />
                <Document
                    file="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/95cdc4bfe71a744b4720e63b862e6114ba4db9bb/Overlord/Overlord%20Vol%203%20JG.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                <Page pageNumber={pageNumber} scale={scale} />
                </Document>
                <PDFReaderControlsPage 
                    numPages={numPages} 
                    pageNumber={pageNumber} 
                    setPageNumber={setPageNumber} 
                    file="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/95cdc4bfe71a744b4720e63b862e6114ba4db9bb/Overlord/Overlord%20Vol%203%20JG.pdf" />
            </section>
        </div>
    )
}

export default PDFReader;