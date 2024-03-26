import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authServices from '../../appwrite/auth'

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authServices.logout().then(() => dispatch(logout()));
    }

    return <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-pink-400 rounded-full'>Logout</button>

}

export default LogoutBtn