import React from 'react'
// import adityalogo from '../images/adityalogo.jpeg'
import { Link } from 'react-router-dom'

export default function Content() {
  return (
    <>
       <div className='col-md-10' style={{height:'900px',background:'white'}}>
       {/* <center><img src={adityalogo} style={{height:'60px',width:'60px'}}></img></center> */}
          
       <center><div class="form-group" >
          <input type="text" class="font-control" placeholder="search" id="search" style={{width:'500px'}}></input>   <i class="fa fa-microphone" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true" id="sub"></i>   <i class="fa fa-bell-o" aria-hidden="true" id="sub"></i>
          </div></center>
				
        <div class="classname button">    
        <Link to="/All"><button type="button" class="btn btn-secondary">All</button></Link>
        <Link to="/youtube music"><button type="button" class="btn btn-secondary">Music</button></Link>
        <Link to="/Filmi"><button type="button" class="btn btn-secondary">Filmi</button></Link>
        <Link to="/Cricket"><button type="button" class="btn btn-secondary">Cricket</button></Link>
        <Link to="/Watched"><button type="button" class="btn btn-secondary">Watched</button></Link>
        <Link to="/Gameshows"><button type="button" class="btn btn-secondary">Gameshows</button></Link>
        <Link to="/Live"><button type="button" class="btn btn-secondary">Live</button></Link>
        <Link to="/Thoughts"><button type="button" class="btn btn-secondary">Thoughts</button></Link>
       
        
        <Link to="/computerprogramming"><button type="button" class="btn btn-secondary">computerprogramming</button></Link>
        
        </div>
        <div class="row">    
        
  <div class="col-md-4"><iframe width="350" height="150" src="https://www.youtube.com/embed/O_9u1P5YjVc?si=qsiI2DpfhhWBK58b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  <div class="col-md-4"><iframe width="350" height="150" src="https://www.youtube.com/embed/DAl3dbTnAgw?si=wdrGS2ZYffW3n7DO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  <div class="col-md-4"><iframe width="350" height="150" src="https://www.youtube.com/embed/83S9nL7eOHY?si=vrje1IGEY6AT2qpP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  </div>
  <div class="row">
  <div class="col-md-4"><iframe width="350" height="150" src="https://www.youtube.com/embed/-mJFZp84TIY?si=OpqLhDzyfhaJ0Eg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  <div class="col-md-4"><iframe width="350" height="150" src="https://www.youtube.com/embed/ajdRvxDWH4w?si=I7lRBOUu4qwg63U5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  <div class="col-md-4"><iframe width="350" height="150" src="https://www.youtube.com/embed/ok-plXXHlWw?si=mcWnyPg4IOxk2p2F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  </div>
  <div class="row">
  <div class="col-md-4"><iframe width="350" height="150" src="https://www.youtube.com/embed/zb3Qk8SG5Ms?si=sjea6M6vlyYU-LWB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  <div class="col-md-4"><iframe width="350" height="150" src="https://www.youtube.com/embed/4hUUqE-kygM?si=BkGxMrvaRAt0lAIB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  <div class="col-md-4"><iframe width="350" height="150" src="https://www.youtube.com/embed/O_9u1P5YjVc?si=GwhEOd7Z95J0EadB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  </div>
  </div>

  </>
  )
}