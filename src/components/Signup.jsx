import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Signup = () => {
  const navigate= useNavigate();
  useEffect(()=>{
    const localKey= localStorage.getItem("accessKey");
    if(localKey){
      navigate('/dasboard');
    }
  },[]);

  const [user, setuser] = useState({
    user_name: "",
    user_password: "",
    user_full_name: "",
    user_address: "",
    user_email_address: ""
})
    

  const handleChange = (inputname, value) => {
    if (inputname === 'email') {
      setuser(prevUser => ({
          ...prevUser,
          user_email_address: value
      }));
  }
   else if (inputname === 'username') {
        setuser(prevUser => ({
            ...prevUser,
            user_name: value
        }));
    } else if (inputname === 'password') {
        setuser(prevUser => ({
            ...prevUser,
            user_password: value
        }));
    }
};
const handleSubmit=async () =>{
  // event.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!emailRegex.test(user.user_email_address)){
    toast.error("enter valid mail address");
    return;
  }
  if(!user.user_name){
    toast.error("enter valid user name");
    return;
  }
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if(!passwordRegex.test(user.user_password)){
    toast.error("Password must be atleast 8 characters long, include a letter, a number, and a special character.")
    return;
  }
  try {
    const path = `http://localhost:7000/userData`
    const userCheck=await userExist(path, user.user_name);
    console.log(userCheck);
    if(!userCheck){
      axios.post(path,user);
      toast.success("Success.");
      localStorage.setItem("accessKey", user.user_name);
      navigate('/dasboard');
    }
     else{
      toast.error("User already exists!")
     }

  }
  catch(e){
    console.log(e, "Can not create user.")
  }
 
}
const userExist=async(path, username)=>{
   try{
    const response=await axios.get(`${path}?user_name=${username}`);
    if(response.data[0].length==0){
      return false;
    }
    else{
      return true;
    }
   }
   catch(e){
    console.log(e);
   }
}

  return (
    <>
    <ToastContainer /> 
    <div className="whole">
        <form className="form_main" >
            <p className="heading">Sign up</p>
            <div className="inputContainer">
                <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="inputIcon">
                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                </svg>
                <input placeholder="Email" id="email" value={user.user_email_address} className="inputField" type="text" onChange={(e) => handleChange('email', e.target.value)} />
            </div>
            <div className="inputContainer">
                <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="inputIcon">
                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                </svg>
                <input placeholder="Username" id="username" value={user.user_name} className="inputField" type="text" onChange={(e) => handleChange('username', e.target.value)} />
            </div>

            <div className="inputContainer">
                <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="inputIcon">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                </svg>
                <input placeholder="Password" value={user.user_password} id="password" className="inputField" type="password" onChange={(e) => handleChange('password', e.target.value)} />
            </div>

            <button id="button" type="submit" onClick={()=>handleSubmit()}>Submit</button>
            <div className="signupContainer">
                <p>Already have an account?</p>
                <a href="#" onClick={()=>{
                    navigate('/login');
                }}>Login</a>
            </div>
        </form>
    </div>
</>
  )
}

export default Signup