import React from 'react'
import NavBar from '../components/Navbar'
import FileUpload from '../components/FileUpload';

const Home = () => {

  
  return (
    <>
      <NavBar />
      <h1 className='text-center text-3xl font-bold text-gray-700 my-10'>The Best Online PDF Editor</h1>
      <div className='md:flex justify-center'>
        <div className=' flex justify-center md:w-[50%] mx-2'>
          <FileUpload />
        </div>
        <div className=' flex justify-center mt-4 md:justify-start md:w-[30%] md:mx-0 mx-4'>
          <div className=''>
            <div className='mb-7'>
              <h1 className='text-lg text-gray-700 font-bold mb-3'>Review & Edit PDFs</h1>
              <ul className='list-disc ps-4 space-y-4'>
                <li>Add, erase or highlight text</li>
                <li>Add images and signatures</li>
                <li>Merge, split and rotate PDFs</li>
              </ul>
            </div>
            <div className='mb-7'>
              <h1 className='text-lg text-gray-700 font-bold mb-3'>Create & Convert PDFs</h1>
              <ul className='list-disc ps-4 spacey-4'>
                <li>Convert Word, Excel, PowerPoint to PDF</li>
                <li>Convert PDF to Word and Images</li>
              </ul>
            </div>
            <div className='mb-7'>
              <h1 className='text-lg text-gray-700 font-bold mb-3'>Save & Secure PDFs</h1>
              <ul className='list-disc ps-4 space-y-4'>
                <li>Add, change or remove passwords</li>
                <li>Access your PDFs from anywhere</li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Home