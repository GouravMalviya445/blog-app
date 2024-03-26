import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protected = ({ children, authentication = true }) => {
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth.status)

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <img src='/images/Dual Ball-1s-200px.svg' alt='loading' /> : <>{children}</>
}

export default Protected