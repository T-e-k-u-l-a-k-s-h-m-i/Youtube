import React from 'react'
import '../App.css'
import Logo from '../images/logo.png'
export default function Shorts() {
  return (
   <>
   
    <div className='col-md-10' style={{height:'900px',background:'yellow',color:'purple'}}>
        <center><h1>Shorts</h1></center>
        <center><div class="form-group" >
          <input type="text" class="font-control" placeholder="search" id="search" style={{width:'500px'}}></input>   <i class="fa fa-microphone" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true" id="sub"></i>   <i class="fa fa-bell-o" aria-hidden="true" id="sub"></i>
          </div></center><hr/>
        <div class="row">  
        <div class="col-md-4"><iframe width="338" height="602" src="https://www.youtube.com/embed/qX6P3muVX4o" title="#odiyamma song #from hi nanna#telugu you tube shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div class="col-md-4"><iframe width="338" height="602" src="https://www.youtube.com/embed/vXb30Y7mLqE" title="Siddharth - Unakku thaan (Live cover)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <div class="col-md-4"><iframe width="338" height="602" src="https://www.youtube.com/embed/t6qVKkeR8w0" title="Believe In Your Ownself - Dr. Tejaswini Manogna | Thinkidiom" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    </div>
</div>

   </>
  )
}