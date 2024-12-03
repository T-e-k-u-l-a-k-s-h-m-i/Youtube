import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function StudentsList() {

   const[students, setStudents]=useState([{}])

   useEffect(()=>{
   
      axios.get('http://localhost:5000/api/getTrainees')
      .then(res => setStudents(res.data.students))
   },[])





// Delete function
   const handleDelete=(_id)=>{
       
      // console.log(_id)

   axios.delete('http://localhost:5000/api/deletestudent/'+_id)
   .then((response)=>
   {
     if(response.status===200)
     {
      alert("data deleted");

      window.location.href='/list'
   
     }
     
   })}

   // Delete functionend


  return (
   <div className='col-md-10' style={{background:'yellow'}}>
  <center> <h6>Students Data</h6></center>

   <table border={1}  className='table table-bordered'>
     <tr>
     <th>S.No</th>
     <th>Name</th>
     <th>Roll</th>
      <th>Email</th>
      <th>Actions</th>
      <th>Remove Actions</th>
      
      
     </tr>  
     
     {
            students.map((e,i)=>
            {
              return(
              <>
                <tr>
                  <td>{i+1}</td>
                  <td>{e.name}</td>
                  <td>{e.roll}</td>
                  <td>{e.email}</td>
                  <td><Link to={`/editstudent/${e._id}`}  id='stud'className="btn btn-warning">Edit</Link>    
                 
                  </td>
                  <td><button onClick={()=>handleDelete(e._id)} className='btn btn-danger'>Delete</button></td>
                </tr>

              </>)
            })
         
     }
   </table>

  </div>
  )
}