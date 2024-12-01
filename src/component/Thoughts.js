import React from 'react'
import { Link } from 'react-router-dom'

export default function Thoughts() {
  return (
    <>
       <div className='col-md-10' style={{height:'900px',background:'white'}}>
        <center><h1>Thoughts</h1></center>
       <center><div class="form-group" >
          <input type="text" class="font-control" placeholder="search" id="search" style={{width:'500px'}}></input>   <i class="fa fa-microphone" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true" id="sub"></i>   <i class="fa fa-bell-o" aria-hidden="true" id="sub"></i>
          </div></center>
          <div class="row">    
        
        <div class="col-md-6"><iframe width="500" height="315" src="https://www.youtube.com/embed/8n-Deiz6oFw?si=Cy_IZpHu-77CMzmb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div class="col-md-6"><iframe width="500" height="315" src="https://www.youtube.com/embed/r8LJ5X2ejqU?si=l7kx2fsmVMgJXCZK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
       
        </div>
        </div>
        </>
  )
  }
