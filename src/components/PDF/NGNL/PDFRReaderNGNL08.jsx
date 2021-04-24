import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import PDFReaderControls from '../PDFReaderControls';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFReader = () => {

    const [scale, setScale] = useState(1.0);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <section id="pdf-section">
                <PDFReaderControls 
                    scale={scale}
                    setScale={setScale}
                    numPages={numPages} 
                    pageNumber={pageNumber} 
                    setPageNumber={setPageNumber} 
                    file="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/28e673b4e7468fd253e848a46244c0fb6ea79fcb/NGNL/ngnl08.pdf" />
                <Document
                    file="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/28e673b4e7468fd253e848a46244c0fb6ea79fcb/NGNL/ngnl08.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                <Page pageNumber={pageNumber} scale={scale} />
                </Document>
            </section>
        </div>
    )
}

export default PDFReader;
