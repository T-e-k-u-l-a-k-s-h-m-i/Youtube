import React from 'react'
import pagelogo from '../images/404.jpeg' 
export default function Errorpage() {
  return (
  <>
 <div className='col-md-10' style={{background:'grey'}}>
       <div class="row">
    <center><h1><u>Images</u></h1></center>
    <center><div class="form-group" >
          <input type="text" class="font-control" placeholder="search" id="search" style={{width:'500px'}}></input>   <i class="fa fa-microphone" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true" id="sub"></i>   <i class="fa fa-bell-o" aria-hidden="true" id="sub"></i>
          </div></center>

    <center><img src={pagelogo} style={{height:'400px', width:'400px'}}></img></center>
    </div>
    </div>
    </>
    
  )
}