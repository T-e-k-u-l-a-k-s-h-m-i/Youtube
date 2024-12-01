
import { useState, useEffect,useRef} from "react";

export default function Hooks() {

const [data1, setData]= useState(0)
const [color, setColor] = useState("red")

const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
 

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
    <div className='col-md-10' style={{height:'900px',background:'yellow',color:'black'}}>
     <center><h1>{data1}</h1></center>
    <center><h1>My favorite color is {color}!</h1></center> 
    
  <center><button onClick={()=>setData(data1+1)}>data1 button</button>

  <button
          type="button" onClick={() => setColor("blue")} style={{background:'blue',color:'black'}}>Blue</button>
        <button
          type="button" onClick={() => setColor("red")} style={{background:'red',color:'black'}}>Red</button>
        <button
          type="button" onClick={() => setColor("pink")} style={{background:'pink',color:'black'}}>Pink</button>
        <button
          type="button" onClick={() => setColor("green")} style={{background:'green',color:'black'}}>Green</button></center><br/>
    
<center><input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/></center>
 <center><h2>Current Values: {inputValue}</h2></center>     
      <center><h2>Previous Values: {previousInputValue.current}</h2></center>
     
     
     </div>
    </>
  )
}