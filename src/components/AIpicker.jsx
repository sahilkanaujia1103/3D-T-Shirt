import React from 'react'
import CustomButton from "./CustomButton"

const AIpicker = ({
  prompt,setPrompt,generatingImg,handleSubmit
}) => {
  return (
    <div className='aipicker-container'>
       <textarea 
       placeholder='Ask A.I ...'
       rows={5}
       value={prompt}
       onChange={(e)=>setPrompt(e.target.value)}
        className='aipicker-textarea'
       ></textarea>
       <div className='flex felx-wrap gap-3'>
        {
           generatingImg?(
            <CustomButton
              type={"outline"}
              title={"Asking AI..."}
              customStyles="text-xs"
            />
           ):
           <>
           <CustomButton
              type="ouline"
              title="AI Logo"
              handleClick={()=>handleSubmit("logo")}
              customStyles="text-xs"
            />
             <CustomButton
              type="filled"
              title="AI Full"
              handleClick={()=>handleSubmit("full")}
              customStyles="text-xs"
            />
           </>
        }
       </div>
       
    </div>
  )
}

export default AIpicker