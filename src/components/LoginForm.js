import React,{useState} from 'react'

const LoginForm = () =>{
    const [erremail, setErrEmail] = useState(false);
    const [user,setUser] = useState({email:"", password:"", cfpassword:""})
    const {email, password, cfpassword} = user
    const [pmatch, setPmatch] = useState(false)
    const [plen, setPlen] = useState(false);
    const [fillp, setFillp] = useState(false)

    function handleInput(e){
        setUser({...user, [e.target.name]:e.target.value})
    }

    function validateEmail(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!email || !password){
            setErrEmail(true)
            // setPmatch(true)
            setFillp(true)
        }
        else {
            if(validateEmail()){
                setFillp(false)
                setErrEmail(false)
                console.log("email validated")

                if(password.length> 3 ){
                    setPlen(false)
                    if(password === cfpassword){
                        // setErrEmail(false)
                        setPmatch(false)
                        alert("user signup successful")
                    }
                    else{
                        setPmatch(true)
                    }
                }
                else{
                    setPlen(true)
                }
            }
            else{
                setErrEmail(true)
            }
        }
    }
    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type='text'value={user.email} name='email' onChange={handleInput} placeholder='Email'  />
                    {erremail && <p>email format not valid</p> }
                
                <label>Password</label>
                <input type='password' name='password' value={user.password} onChange={handleInput} placeholder='Password'  />
                    {plen && <p>password length should be greater than 8</p>}
                    {fillp && <p>Password cannot be empty</p>}

                <label>Confirm password</label>
                <input type='password' value={user.cfpassword} name='cfpassword' onChange={handleInput} placeholder='confirm-password' />
                    { pmatch && <p>Passwords doesnt match</p> } 
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginForm