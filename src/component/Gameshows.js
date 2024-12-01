import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Filmi() {
  return (
   <>
   
    <div className='col-md-10' style={{height:'2000px',background:'yellow',color:'purple'}}>
    <center><h1>Game shows</h1></center>
    <center><div class="form-group" >
          <input type="text" class="font-control" placeholder="search" id="search" style={{width:'500px'}}></input>   <i class="fa fa-microphone" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true" id="sub"></i>   <i class="fa fa-bell-o" aria-hidden="true" id="sub"></i>
          </div></center>
    <div class="row">    
        
        <div class="col-md-6"><iframe width="500" height="315" src="https://www.youtube.com/embed/lzAswe5OCoY?si=jIvAPbnOgxW5Ta2J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div class="col-md-6"><iframe width="500" height="315" src="https://www.youtube.com/embed/19lH4BbTlkI?si=cdIYkK-Q3RS4s5P-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
       
        </div>
       
        </div>
        </>
  )
}