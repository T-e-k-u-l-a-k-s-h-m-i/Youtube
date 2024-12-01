import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Cricket() {
  return (
   <>
   
    <div className='col-md-10' style={{height:'2000px',background:'yellow',color:'purple'}}>
      <center><h1>Cricket</h1></center>
    <center><div class="form-group" >
          <input type="text" class="font-control" placeholder="search" id="search" style={{width:'500px'}}></input>   <i class="fa fa-microphone" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true" id="sub"></i>   <i class="fa fa-bell-o" aria-hidden="true" id="sub"></i>
          </div></center>
    <div class="row">    
        
        <div class="col-md-6"><iframe width="500" height="315" src="https://www.youtube.com/embed/9lF4d4w84uM?si=ifHYk79TvSdni2K7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div class="col-md-6"><iframe width="500" height="315" src="https://www.youtube.com/embed/x_prt6sDXUQ?si=L9egvvWpeyGirJDh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
       
        </div>
        <div class="row">
        <div class="col-md-6"><iframe width="500" height="315" src="https://www.youtube.com/embed/OlEJLvYTM30?si=fc_nSQJF5cafOyFN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div class="col-md-6"><iframe width="500" height="315" src="https://www.youtube.com/embed/WQdqgrWvy6g?si=ULAHSmCF07nR21QJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
       
        </div>
        </div>
        </>
  )
}