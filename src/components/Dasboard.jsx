import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Dasboard = () => {
    const navigate= useNavigate();
    useEffect(()=>{
        const localKey=localStorage.getItem("accessKey");
        if(!localKey){
            navigate("/login");
        }
    },[]);
  return (
    <div>Dasboard</div>
  )
}

export default Dasboard