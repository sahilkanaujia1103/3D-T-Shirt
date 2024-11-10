import React from 'react'
import CustomButton from './CustomButton'

const FilePicker = ({file,setFile,readFile}) => {
  return (
    <div className='filepicker-container'>
    <div className='flex flex-col flex-1'>
         <input type="file" name="" id="file-upload"
         accept='image/*' 
         onChange={(e)=>{setFile(e.target.files[0])}} />
         <label htmlFor="file-upload" className='filepicker-label'>
          Upload file
         </label>
         <p className='mt-2 text-xs text-gray-500 truncate'>
          {file===""?"No file selected":file.name}
         </p>
    </div>
    <div
     className='mt-4 flex flex-wrap gap-3'>
           <CustomButton
            type="outline"
            title="logo"
            handleClick={()=>{readFile("logo")}}
            customStyles="text-xs"

           />
           <CustomButton
            type="filled"
            title="full"
            handleClick={()=>{readFile("full")}}
            customStyles="text-xs"

           />
    </div>
    </div>
  )
}

export default FilePicker