import React from 'react'
import adityalogo from '../images/adityalogo.jpeg'
import aditya from '../images/aditya.jpeg' 
import { Link } from 'react-router-dom'

export default function Live() {
  return (
    <>
       <div className='col-md-10' style={{height:'900px',background:'white'}}>
       <center><h1>Live</h1></center> 
       <center><img src={adityalogo} style={{height:'70px',width:'150px'}}></img></center>
       
       <center><div class="form-group" >
          <input type="text" class="font-control" placeholder="search" id="search" style={{width:'500px'}}></input>   <i class="fa fa-microphone" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true" id="sub"></i>   <i class="fa fa-bell-o" aria-hidden="true" id="sub"></i>
          </div></center><hr/>
          
          <marquee behavior="scroll" direction="right" scrollamount="15">A HEARTFELT INVITATION TO OUR VERY FIRST EVENT IS EXTENDED BY 1-MCA IN ADITYA SCHOOL OF COMPUTER SCIENCE AT RAJAHMUNDRY</marquee>
          <center><img src={aditya} style={{height:'500px',width:'400px'}}></img></center>
          
          </div>
          </>
  )
}
