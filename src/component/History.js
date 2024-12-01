import React from 'react'
    import '../App.css'
    import Logo from '../images/logo.png'
    export default function History() {
      return (
       <>
       
        <div className='col-md-10' style={{height:'900px',background:'white',color:'black'}}>
         <center><h1>Watch History</h1></center>
         <center><div class="form-group" >
          <input type="text" class="font-control" placeholder="search" id="search" style={{width:'500px'}}></input>   <i class="fa fa-microphone" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true" id="sub"></i>   <i class="fa fa-bell-o" aria-hidden="true" id="sub"></i>
          </div></center><hr/>
            <h1>Today</h1>
            <div class="row">
           <div class="col-md-6"><iframe width="500" height="200" src="https://www.youtube.com/embed/WugJ7ZaOcuo?si=BHc8WOSPlIwrotcL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          <div class="col-md-6"><iframe width="500" height="200" src="https://www.youtube.com/embed/II_m28Bm-iM?si=w7dbBquAf_mWrftg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> 
    </div>
    <div class="row">
           <div class="col-md-6"><iframe width="500" height="200" src="https://www.youtube.com/embed/nE2F8skT3NI?si=oLE74UjjuFy1bR11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          <div class="col-md-6"><iframe width="500" height="200" src="https://www.youtube.com/embed/Vrcjv--S2YA?si=T1Bdl1cNBTcpEGE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> 
    </div>
    <div class="row">
           <div class="col-md-6"><iframe width="500" height="200" src="https://www.youtube.com/embed/mC5coI6a_9s?si=x2KUNCGeDSi21XRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          <div class="col-md-6"><iframe width="500" height="200" src="https://www.youtube.com/embed/Q_sQZTVnzK8?si=K59E8jJrj09vFXb1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div> 
    </div>
    </div>
    
       </>
      )
    }