import React, { useState } from 'react'

export default function Login() {

    const [islogin, setIslogin] = useState(false)

  return (
    <div className='container'>
       <div className="form-container">
        <div className='form-toggle'>
            <button className={islogin ? 'active' : ''} onClick={() => setIslogin(true)}>Login</button>
            <button className={!islogin ? 'active' : ""} onClick={() => setIslogin(false)}>SignUp</button>
        </div>
        {islogin ? <>
          <div className='form'>
            <h2>Login Form</h2>
            <input type="email" placeholder='Enter Email'/>
            <input type="password" placeholder='Enter Password'/>
            <a href="#">Forgot Password?</a>
            <button>Login</button>
            <p>Not a Member ? <a href="#" onClick={() => setIslogin(false)}>SignUp Now</a></p>
            
          </div>
        </> : <>
          <div className='form'>
            <h2>SignUp Form</h2>
            <input type="email" placeholder='Enter Email'/>
            <input type="password" placeholder='Enter Password'/>
            <input type="password" placeholder='Confirm Password'/>
            <button>SignUp</button>
          </div>
            
        
        </>}
       </div>
    </div>
  )
}
