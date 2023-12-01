import React, { useEffect, useState } from 'react'
import NavBar from '../components/Navbar'
import { baseURL } from '../constants/baseURL'
import { useParams } from 'react-router-dom'
import PdfView from '../components/PdfView'
import { instance } from '../config/axios'


const View = () => {
    const { name } = useParams();
    const pdfurl = `${baseURL}/images/${name}`;

    return (
        <>
            <div className='border sticky top-0 z-50'>
                <NavBar />
            </div>
            <PdfView pdfurl={pdfurl} />
        </>
    )
}

export default View