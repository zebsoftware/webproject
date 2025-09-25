import React, { useState } from 'react'

export default function ChangeEvent() {
   const [username,setusername] =useState("");
    const [password,setpassword] =useState("");
    const Changeaction = (e) => {
        if (e.target.name === "username") {
            setusername(e.target.value);
        } else if (e.target.name === "password") {
            setpassword(e.target.value);
        }
    }
    
  return (
    <>
    <form >
        username:
        
        <input type="text" name="username" value={username} onChange={Changeaction} /><br />
        password:
        <input type="password" name="password" value={password} onChange={Changeaction} /><br />
        <button>submit</button>
        <p>{username}</p>
        <p>{password}</p>
    </form>
    </>
  )
}
    

