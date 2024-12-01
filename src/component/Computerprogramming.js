import React from 'react'
import html from '../images/html.jpeg' 
import css from '../images/css.jpeg' 
import js from '../images/js.jpeg' 
import react from '../images/react.jpeg' 
import { Link } from 'react-router-dom'

export default function Computerprogramming() {
  return (
   <>
   
    <div className='col-md-10' style={{height:'2000px',background:'yellow',color:'purple'}}>
    <center><h1>computer programming languages</h1></center>
    <center><div class="form-group" >
          <input type="text" class="font-control" placeholder="search" id="search" style={{width:'500px'}}></input>   <i class="fa fa-microphone" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true" id="sub"></i>   <i class="fa fa-bell-o" aria-hidden="true" id="sub"></i>
          </div></center><hr/>
          <div className='menu1'>
            <ul>
            <center>  <li><img src={html} style={{height:'30px',width:'30px'}}></img>     <b>HTML</b> </li></center><br></br>
            <center><li><img src={css} style={{height:'30px',width:'30px'}}></img>     <b>CSS</b> </li></center><br></br>
            <center><li><img src={js} style={{height:'30px',width:'30px'}}></img>     <b>JAVASCRIPT</b> </li></center><br></br>
            <center><li><img src={react} style={{height:'30px',width:'30px'}}></img>     <b>REACT</b> </li></center> 
            </ul>
          </div>
          </div>
          </>
  )
}
