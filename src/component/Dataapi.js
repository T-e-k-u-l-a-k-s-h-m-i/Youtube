import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function Dataapi() {

    const[products, setProducts]=useState([{}])
    // const [images,seImages]=useState(Array)

   useEffect(()=>{
      axios.get('http://localhost:5000/api/getTrainees')
      .then(res => setProducts(res.data.students))                               
   },[])

   console.log(products)
   return (   
      <>
      <div className='col-md-10'>
         {
            products.map((e,i)=>{
             return(
              <>
              <div className='row'>
              <div className='col-md-3 float-start' style={{height:'200px',background:'yellow',margin:'5px',border:'2px solid green',float:'left'}}>
              <p>{e.name}</p>
  
                  <p>{e.roll}</p>
                  <p>{e.email}</p>
  
                  {/* <img src={e.thumbnail}></img> */}
                  </div>
              </div>
              
              </>
  
  
             )
  
            })
         }
      </div>
      </>
    )
  
}

