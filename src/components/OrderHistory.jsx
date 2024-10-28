import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
    const navigate= useNavigate();
    useEffect(()=>{
        const localKey=localStorage.getItem("accessKey");
        if(!localKey){
            navigate("/login");
        }
    },[]);
  return (
    <div>OrderHistory</div>
  )
}

export default OrderHistory