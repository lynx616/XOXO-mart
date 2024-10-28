import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate= useNavigate();
    useEffect(()=>{
        const localKey=localStorage.getItem("accessKey");
        if(!localKey){
            navigate("/login");
        }
    },[]);
  return (
    <div>Profile</div>
  )
}

export default Profile