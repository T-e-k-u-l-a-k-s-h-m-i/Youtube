import React, { useState,useEffect } from 'react'

export default function Hooks2() {

const [data1,setData]=useState(0);

useEffect(()=>{
setTimeout(()=>{

  setData((data1)=>data1+1)

}, 3000)

})


  return (
   <>
   <div className='col-md-10' style={{height:'900px',background:'brown',color:'white'}}>
   <center><h1>{data1}</h1></center> 
   </div>
   
   </>
  )
}