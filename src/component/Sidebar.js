import React from 'react'
import '../App.css'
import Logo from '../images/logo.png'
import tv from '../images/tv.jpeg'
import movie from '../images/movie.png'
import comedy from '../images/comedy.jpeg'
import Hook from '../images/Hook.jpeg'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
export default function Sidebar() {
  return (
   <>
   
    <div className='col-md-2' style={{height:'900px',background:'white',color:'black'}}>
        <div>
        
       
           <center><i class="fa fa-align-justify" aria-hidden="true"></i>   <img src={Logo} style={{height:'40px',width:'100px'}}></img></center><hr/>
        
            </div>

        <div>
            <div className='menu'>
            <ul>
            {/* <Link to="/login"><li> studentlogin</li></Link> */}
            {/* <Link to="/add"><li> addstudent</li></Link> */}
            {/* <Link to="/list"><li> student</li></Link> */}
            <Link to="/home"><li><i class="fa fa-home" aria-hidden="true"></i>        Home</li></Link>
              <Link to="/shorts"><li><i class="fa fa-video-camera" aria-hidden="true"></i>       Shorts</li></Link>
              <Link to="/subscription"><li><i class="fa fa-bell" aria-hidden="true"></i>      Subscription</li></Link><hr/>
             <li>You <i class="fa fa-angle-right" aria-hidden="true"></i></li>
             <Link to="/youtube music"><li><i class="fa fa-music" aria-hidden="true"></i>     Youtube Music</li></Link>
             <Link to="/history"><li><i class="fa fa-history" aria-hidden="true"></i>        History</li></Link>
             
             <Link to="/watch later"><li><i class="fa fa-clock-o" aria-hidden="true"></i>       watch later</li></Link>
             <Link to="/Downloads"><li><i class="fa fa-download" aria-hidden="true"></i>      Downloads</li></Link>
             <Link to="/Likedvideos"><li><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>     Likedvideos</li></Link>
             
        {/* <Link to="/Hooks"><li><img src={Hook} style={{height:'20px',width:'20px'}}></img>      Hooks</li></Link> */}
             {/* <Link to="/A"><li>  <i class="fa fa-circle" aria-hidden="true"></i>      A</li></Link> */}
             <Link to="/User"><li>  <i class="fa fa-user" aria-hidden="true"></i>      User</li></Link>
             <hr/>
             <li>Subscriptions</li>
                  <li><img src={tv} style={{height:'20px',width:'20px'}}></img> Tv9 Live</li>
                 <li>  <img src={movie} style={{height:'20px',width:'20px'}}></img> movies</li>
                 <li>  <img src={comedy} style={{height:'20px',width:'20px'}}></img> Comedy shows</li>
                 <li><i class="fa fa-angle-down" aria-hidden="true"></i>Shows more</li>  
                
            </ul>
            </div>
        </div>
    </div>

   </>
  )
}