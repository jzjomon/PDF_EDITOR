import React, { useEffect, useState } from 'react'
import { Document, Page } from "react-pdf"
import { pdfjs } from 'react-pdf';
import { PDFDocument } from 'pdf-lib'
import { saveAs } from 'file-saver'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();


const PdfView = ({ pdfurl }) => {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState();
    const [pagesArr, setPageArr] = useState([]);
    const [selected, setSelected] = useState([]);
    const navigate = useNavigate();

    const mergePDFPages = async (pdfUrl, pageNumbers) => {
        const existingPdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const newPdfDoc = await PDFDocument.create();
      
        for (const pageNumber of pageNumbers) {
          const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageNumber - 1]);
          newPdfDoc.addPage(copiedPage);
        }
      
        const newPdfBytes = await newPdfDoc.save();
        const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
        saveAs(blob, 'merged.pdf');
        
      };

    const handleLoad = (e) => {
        setPages(e._pdfInfo.numPages);
        const arr = [];
        for (let i = 1; i <= e._pdfInfo.numPages; i++) {
            arr[i] = i;
        };
        setPageArr(arr);
    }

    const handleSelect = (e) => {
        if (e.target.checked) {
            setSelected([...selected, e.target.value]);
        } else {
            const arr = selected.filter(ele => ele !== e.target.value);
            setSelected(arr);
        }
    }

    const handleDownload = async () => {
      await mergePDFPages(pdfurl, selected);
    }
    const handleError = () => {
        Swal.fire("Something went wrong !","Document has been deleted from the server .","error").then(() => {
            navigate('/');
        })
    }

    return (
        <>
            <div className='w-full h-10 sticky flex justify-between top-20 z-40 border'>
                <div className='w-1/4  flex justify-center items-center'>
                    <button onClick={() => page > 1 && setPage(page - 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <span className='text-xl mx-2'>{page} of {pages}</span>
                    <button onClick={() => page < pages && setPage(page + 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
                {
                    selected.length > 0 && <div className='w-1/4 flex justify-center items-center'>
                        <span className='text-lg me-3 font-semibold'>{selected.length} Page Selected</span>
                        <button onClick={handleDownload} className='border px-3 py-1 text-xl font-bold rounded text-white bg-red-600 hover:border-red-600 hover:text-red-600 hover:bg-white transition-all'>Download</button>
                    </div>
                }
            </div>
            <div className='w-full h-[85vh] flex'>
                <div className='w-1/5 overflow-auto'>
                    {
                        pagesArr.map(ele => (
                            
                                <div key={ele} className='flex'>
                                    <div  className='flex w-4/5 justify-center border mb-3' onClick={() => setPage(ele)}>
                                        <Document  className='' file={pdfurl} onLoadSuccess={handleLoad} >
                                            <Page pageNumber={ele} renderTextLayer={false} scale={0.2} renderAnnotationLayer={false} />
                                        </Document>
                                    </div>
                                    <div className='w-1/5 flex justify-center items-center'>
                                        <input type="checkbox" className='rounded-full' value={ele} onClick={handleSelect} />
                                    </div>
                                </div>
                            
                        ))
                    }
                </div>
                <div className='w-4/5 flex justify-center overflow-auto '>
                    <Document error={handleError} file={pdfurl} onLoadSuccess={handleLoad} >
                        <Page  pageNumber={page} renderTextLayer={false} scale={1.3} renderAnnotationLayer={false} />
                    </Document>

                </div>
            </div>
        </>
    )
}

export default PdfView