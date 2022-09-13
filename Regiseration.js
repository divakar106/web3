

import React, {useState} from 'react';

import Login from './login';



function Register() {

    const [name, setName] = useState("");

    const [Email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState("false");
    const [Login, setLogin] = useState("true");



    function handleSubmit(e){
        e.preventDefault();
        if(!name || !email || !password){
            setFlag(true);

        }else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));

            console.log("Saved In Local Storage");
            setLogin(!login);
        }
    }
    return (

        {login  (

            <div>
        <form>
        <h1>Register</h1>
        <div className='form-group'>
        <label>Name</label>
        <input type='text'
        className='form-control'
        placeholder='Enter Full Name'

        />

        </div>


        <div className='form-group'>
        <label>Email</label>
        <input type='text'
        className='form-control'
        placeholder='Enter Email ID'

        />

        </div>



        <div className='form-group'>
        <label>Password</label>
        <input type='text'
        className='form-control'
        placeholder='Enter password'

        />

        </div>

        <button type='submit' >Register</button>

        <p>Already Register (" ") login ?</p>
      

        {flag && (
            <Aler color="primary" variant='danger'>
            Please Fill Every Field
            </Aler>
        )}
        </form>

        ):(
        
            <Login />

            )}
    
            
            </div>
        )
            
        
    
    
}
export default Register