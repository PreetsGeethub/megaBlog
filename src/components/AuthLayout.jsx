import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, Authentication = true}) {
    const navigate = useNavigate();
    const [loader,setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status) 

    useEffect(()=>{
        if(Authentication && authStatus !==  Authentication){
            navigate("/login")
        } else if(!Authentication && authStatus!== Authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,Authentication])
  return loader ? <h1>Loading..</h1> : <>{children}</>
}

