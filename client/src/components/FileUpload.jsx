import React, { useEffect, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'

const fileTypes = ['PDF']

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    useEffect(() => {
        console.log(file);
    }, [file])
    return (
        <>
            <FileUploader classes="w-[700px] h-[500px] border mx-2 rounded border-dashed border-[5px] border-gray-400" handleChange={handleChange} name="file" types={fileTypes}>
                <div className='w-full h-full flex justify-center items-center '>
                    <div>
                        <div className='mb-6'>
                            <div className='flex justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[100px]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </div>
                            <h1 className='text-xl font-semibold text-center text-gray-700 mt-3'>
                                Drag & Drop your file here
                            </h1>
                            <h1 className='italic text-center mt-3'>
                                or
                            </h1>
                        </div>
                        <div className='text-center'>
                        <button className='inline-flex gap-3 rounded bg-red-600  text-white text-xl py-4 px-2'>
                            <svg class="w-6 h-6 text-white -rotate-90 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                            </svg>
                            <span>Click to upload your file</span>
                        </button>
                        </div>
                        <div className='mt-5'>
                            <div className='inline-flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 sm:w-6 sm:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>

                            <span className='text-gray-600 font-semibold '>Your files stay private. Secure file uploading by HTPPS.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </FileUploader>
        </>
    );
}

export default FileUpload