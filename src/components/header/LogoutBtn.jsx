import React from 'react'
import authService from '../../appwrtie/auth'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice'
function LogoutBtn() {
    const dispatch = useDispatch();
    const handleLogout =  ()=>{
        authService.logout()
        .then(()=>dispatch(logout))
        .catch((error)=>console.log("error in loggin in Logout component:",error))
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={handleLogout}
    
    >Logout</button>
  )
}

export default LogoutBtn