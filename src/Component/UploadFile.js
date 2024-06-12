import React from 'react'
import { useState } from 'react'

const UploadFile = () => {

  const [selectFile, setSelectFile] = useState(null)

  const handleFile = (e) => {
    const file = e.target.files[0];
    console.log(file.name);
    const fileExt = file.name.split('.').pop();
    const fileExt2Match = ['doc', 'xls', 'xlsx']
    if (fileExt2Match.includes(fileExt)) {
      console.log(fileExt);
      if (fileExt === fileExt2Match) {
        setSelectFile(file);
        console.log(selectFile);
      }
    }
    else {
      setSelectFile(null);
      alert('Invalid File! Please select a DOC,XLS,XLSA file')
    }

  }

  const uploadfile = () => {
    handleFile();
  }


  return (
    <>
      <h1 className='text-center text-4xl mb-5'>Upload File</h1>
      <form action="" className='ml-[550px] flex flex-col bg-gray-200 justify-center items-center h-[300px] w-[500px] border-2 border-dashed border-black cursor-pointer rounded-md'>
        <input className='rounded-md' type="file" name='file' accept=".doc, .xls, .xlsx" onChange={handleFile} />
        <p className='mt-7 text-2xl font-bold'>Supported Files</p>
        <p className='mt-2 font-bold'>DOC,XLS,XLSA</p>
        <span className='bg-black text-white rounded-md px-3 py-2 mt-2 cursor-pointer' onClick={uploadfile} >Upload</span>

        <h3 className='mr-5 mt-2 font-bold'>{`The File is ${selectFile} `}</h3>
      </form>
    </>
  )
}

export default UploadFile
