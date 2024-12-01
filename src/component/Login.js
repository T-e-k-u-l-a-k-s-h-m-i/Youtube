import React,{useState} from 'react';
import axios from 'axios';

export default function Login() {
  const [data, setData] = useState({
    email: "",
    name: ""
  });

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const api = 'http://localhost:5000/api/login-user'
        axios.post(api,data).then((response) => {
            console.log(response.data)
            alert(response.status)
            alert(response.data.message)
            if(response.status==200){
              window.location.href='/list';
            }            
        })

        .catch(error => {
          console.log(error.response)

          if(error.response.status==401)
          {
            alert(error.response.data.message)
          }
          else{
            alert(error)
          }
        });
  };

  return (
    <div className="App">
       <br /> 
      <form onSubmit={handleSubmit}>
        <div className='row'>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={(e) =>
              setData({...data, email: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.name}
            onChange={(e) =>
              setData({...data, name: e.target.value })
            }
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
        </div>
      </form>
    </div>
  );
}