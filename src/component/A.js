import React from 'react'

export default function A(props) {
  return (
  <>
    <div className='col-md-10' style={{height:'900px',background:'gray'}}>
       <center><h1><u>Details</u></h1></center> 
{
  props.data.map((e,i)=>{
 return(
  <>
  <h1>{e.name}</h1>
  <h1>{e.roll}</h1>
  <h1>{e.group}</h1>
  <h1>{i}</h1>
  </>


 )


  })
}
        
     </div>
         </>
  )
}