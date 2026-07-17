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
     <input type='text' placeholder='name' ref={inputEl} onChange={props.onChange}/>
   </>
  )
})

export default CustomInput