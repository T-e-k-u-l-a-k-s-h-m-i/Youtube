import React from 'react'
import '../App.css'
import Logo from '../images/logo.png'
export default function Likedvideos() {
  return (
   <>
   
   <div className='col-md-10' style={{height:'900px',background:'grey'}}>
        <center><h1>Downloads</h1></center>
        
        <center><i class="fa fa-download" aria-hidden="true"></i> </center>
        <center><div class="form-group" >
          <input type="text" class="font-control" placeholder="search" id="search" style={{width:'500px'}}></input>   <i class="fa fa-microphone" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true" id="sub"></i>   <i class="fa fa-bell-o" aria-hidden="true" id="sub"></i>
          </div></center><hr/>
              <center><h1>your downloaded videos</h1> </center>
              <div class="row">
        <div class="col-md-6"><iframe width="500" height="300" src="https://www.youtube.com/embed/x4r7af2Lcmw?si=roMA5wcw9oww3DZj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div class="col-md-6"><iframe width="500" height="300" src="https://www.youtube.com/embed/nikFXCO5p30?si=hi4Aw9tomN3a0Lap" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        </div>
        
     </div>  
     </>  
  )
}
