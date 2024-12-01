import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Filmi() {
  return (
   <>
   
    <div className='col-md-10' style={{height:'2000px',background:'yellow',color:'black'}}>
      <center><h1>Filmi</h1></center>
    <center><div class="form-group" >
          <input type="text" class="font-control" placeholder="search" id="search" style={{width:'500px'}}></input>   <i class="fa fa-microphone" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true" id="sub"></i>   <i class="fa fa-bell-o" aria-hidden="true" id="sub"></i>
          </div></center><hr/>
       
        
        <center><div class="col-md-6"><iframe width="660" height="315" src="https://www.youtube.com/embed/R5IUTalZaHA?si=mGkaOPgh7X_2YJXF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></center>
        <center><div class="col-md-6"><iframe width="660" height="315" src="https://www.youtube.com/embed/Rp2wcK1_-fM?si=8kqnRdWfYdO5LFZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></center>
       
        
       
        </div>
        </>
  )
}