import React from 'react'
import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import Content from './component/Content';
import Shorts from './component/Shorts';
import Errorpage from'./component/Errorpage';
import Music from'./component/Youtube';
import A from './component/A';
import Hooks from './component/Hooks';
import Hooks2 from './component/Hooks2';
import Dataapi from './component/Dataapi';
import Subscription from './component/Subscription';
import History from './component/History';
import User from './component/User';
import Likedvideos from './component/Likedvideos';
import Downloads from './component/Downloads';
import All from './component/All';
import Cricket from './component/Cricket';
import Filmi from  './component/Filmi';
import Gameshows from './component/Gameshows';
import Live from './component/Live';
import Thoughts from './component/Thoughts';
import Watched from './component/Watched';
import Computerprogramming from './component/Computerprogramming';
import Date from './component/Date';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import AddStudent from './component/AddStudent';
import StudentsList from './component/StudentsList';
import EditStudent from './component/EditStudent';
import Login from './component/Login';
 function App() {
  const details=[
    {
    name: "Tester",
    roll: 1234,
    group:"MCA"
  },
  {
    name:"Aditya",
    roll:68709,
    group:"MBA"
  },
  {
    name:"rjymca",
    roll:6785,
    group:"MSC"
  }
  ];
  return (
   <>
   
   
     <div className='Container-fluid'>
       <div className='row'>
       
       <BrowserRouter>
         <Sidebar></Sidebar>  
       <Routes>
       <Route path="/dataapi" element={<Dataapi/>}></Route>
       <Route path="/hooks2" element={<Hooks2/>}></Route>
       <Route path="/hooks" element={<Hooks/>}></Route>
       <Route path="/youtube music" element={<Music/>}></Route>

        <Route path="/youtube musicmini" element={<Music/>}></Route>
        {/* <Route path="*" element={<Errorpage/>}></Route> */}
        
         
        <Route path="/" element={<Content/>}></Route>
        <Route path="/home" element={<Content/>}></Route>
        <Route path="/login" element={<Login/>}></Route>  
        <Route path="/Live" element={<Live/>}></Route>
        <Route path="/shorts" element={<Shorts/>}></Route>
        <Route path="/music" element={<Music/>}></Route>
        <Route path="/A" element={<A data={details}/>}></Route>
        <Route path="/subscription" element={<Subscription/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/likedvideos" element={<Likedvideos/>}></Route>
        <Route path="/downloads" element={<Downloads/>}></Route>
        <Route path="/All" element={<All/>}></Route>
        <Route path="/Cricket" element={<Cricket/>}></Route>
        <Route path="/Filmi" element={<Filmi/>}></Route>
        <Route path="/Gameshows" element={<Gameshows/>}></Route>
        <Route path="/Thoughts" element={<Thoughts/>}></Route>
        <Route path="/Watched" element={<Watched/>}></Route>
        <Route path="/Computerprogramming" element={<Computerprogramming/>}></Route>
        <Route path="/list" element={<StudentsList/>}></Route>
        <Route path="/add" element={<AddStudent/>}></Route>
        <Route path="/editstudent/:id" element={<EditStudent/>}></Route>    
               
  </Routes>
  {/* <Login/> */}
   </BrowserRouter>
   
    {/* <AddStudent/>  */}
   {/* <StudentsList/> */}
       </div>
     </div>
    
     
   </>


  );
}

export default App;