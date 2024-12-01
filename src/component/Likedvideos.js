import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
export default function Likedvideos() {
  return (
   <>
   
   <div className='col-md-10' style={{height:'900px',background:'grey'}}>
        <center><h1>Likedvideos</h1></center><hr/>
         
        <div class="classname1 button">
        <Link to="/All"><button type="button" class="btn btn-secondary">All</button></Link>
        <Link to="/Home"><button type="button" class="btn btn-secondary">videos</button></Link>
        <Link to="/Shorts"><button type="button" class="btn btn-secondary">shorts</button></Link>
        </div>
        </div>
        
        </>
  )
}