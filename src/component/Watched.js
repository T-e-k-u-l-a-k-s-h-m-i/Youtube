import React from 'react'
import { Link } from 'react-router-dom'

export default function Watched() {
  return (
    <>
       <div className='col-md-10' style={{height:'900px',background:'pink'}}>
        <center><h1>Watched</h1></center>
        <center><div class="form-group" >
          <input type="text" class="font-control" placeholder="search" id="search" style={{width:'500px'}}></input>   <i class="fa fa-microphone" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true" id="sub"></i>   <i class="fa fa-bell-o" aria-hidden="true" id="sub"></i>
          </div></center><hr/>
       <center><i><h1>this page will appear watched videos</h1></i>
</center>
<div class="row">
           <div class="col-md-6"><iframe width="500" height="200" src="https://www.youtube.com/embed/WugJ7ZaOcuo?si=BHc8WOSPlIwrotcL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          <div class="col-md-6"><iframe width="500" height="200" src="https://www.youtube.com/embed/II_m28Bm-iM?si=w7dbBquAf_mWrftg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> 
    </div> 
        </div>
        </>
  )
}
