import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const CustomInput = forwardRef((props,ref) => {
  const inputEl = useRef();
  useImperativeHandle(ref,()=>({
    focusInput: () =>{
        inputEl.current.focus();
    },
    clearInput: ()=>{
        inputEl.current.value = ""
    }
  }))

  return (
   <>
     <input className="custom-input" type='text' placeholder='Enter Name' ref={inputEl} onChange={props.onChange}/>
   </>
  )
})

export default CustomInput