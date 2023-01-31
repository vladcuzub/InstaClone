import React, { useState, useContext} from "react";
import Image from "next/image";
import instagram from "../assets/instagram.png";




function Login() {

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name.length<=0 || password.length==0) {
      setError(true)
    
    } 

  }

  return (
    <div className="flex items-center justify-center bg-gray-100 
      h-screen absolute">
      <div className="bg-white w-96 h-200 p-6 rounded shadow">
        <div className="flex items-center justify-center mb-4">
          <Image src={instagram} alt="logo"></Image>
        </div>
        <form className="p-4" onChange={handleSubmit}>
          <input
            className="w-full py-2 bg-gray-50 text-gray-500 px-1 
            outline-none mb-4"
            type="text"
            name="name"
            placeholder="Username "
            onChange={e=>setName(e.target.value)}
          ></input>
         {error&&name.length<=5?
            <p className="text-red-500">Username must have more than 5 Characters !</p>:""}
         
          <input
            className="w-full py-2 bg-gray-50 text-gray-500 px-1 
            outline-none mb-4"
            type="password"
            name="password"
            placeholder="Password"
            onChange={e=>setPassword(e.target.value)}
          ></input>
          {error&&password.length<=5?
               <p className="text-red-500">Password must have more than 5 Characters !</p>:""}
          <button className="bg-blue-500 w-full 
          text-gray-100 py-2 rounded hover:bg-blue-600 
          transition-colors" type="submit" 
            
          >Log in</button>
        </form>
       
      </div>
    </div>
  );
}

export default Login;
