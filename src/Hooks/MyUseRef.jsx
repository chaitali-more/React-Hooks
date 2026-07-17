import React, { useEffect, useRef, useState } from 'react'

const MyUseRef = () => {
const [name, setName] = useState("");
const count = useRef(0); // For Creating mutable variables which will not re-render the component.
const inpEle = useRef(""); // useRef allows use to direct access DOM Elements

console.log(count.current)
useEffect(()=>{
    count.current = count.current + 1
})

const handleClick = () =>{
    console.log(inpEle.current);
    inpEle.current.style.width = "300px"
    inpEle.current.style.color = "red"
    inpEle.current.style.background = "yellow"
    inpEle.current.focus()   
}

//    const [count, setCount] = useState(0);
//    useEffect(()=>{
//     setCount(count + 1) //State update -> Re-render -> Effect runs -> State update -> Infinite Loop
//    },[count])

  return (
    <div>

        <h4>MyUseRef</h4>
        <input type="text" onChange={(e) =>{setName(e.target.value)}}
        ref={inpEle}
        />
        <h5>Name: {name}</h5>

        <h5>Render: {count.current}</h5>
        <button onClick={handleClick}>Taget Input</button>
    </div>
  )
}

export default MyUseRef