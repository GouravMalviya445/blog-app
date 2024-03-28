import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authServices from '../../appwrite/auth'

const LogoutBtn = ({
    className = ''
}) => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authServices.logout().then(() => dispatch(logout()));
    }

    return <button onClick={logoutHandler} className={`inline-block px-6 py-2 duration-200 hover:bg-pink-400 rounded-full ${className}`}>Logout</button>

}

export default LogoutBtn