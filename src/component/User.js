import React from 'react'
import '../App.css'
import Logo from '../images/logo.png'
export default function User() {
  return (
   <>
   
   <div className='col-md-10' style={{height:'900px',background:'grey'}}>
        <center><h1>Sign in</h1></center>
        <div class="row" >
       <div class='col-md-5'>
        <div class="form-group">
				<label>Enter Name</label><input type="text" class="form-control" id="reg"></input>
				</div>
        <div class="form-group">
				<label>G-mail</label><input type="text" class="form-control"></input>
				</div>
			<div class="form-group">
				<label>Password</label><input type="password" class="form-control"></input>
				</div> 
       <u><p>forgot Password</p></u>
       <div class="classname button" >
   <center><button type="button" class="btn btn-light" id="sign">Signin</button>      <button type="button" class="btn btn-light" id="sign">Login</button></center>
        </div>
        </div>
        
        </div>
       </div>
        </>
  )
}