import React from 'react'

const Logo = ({ className = '' }) => {
    return (
        <div className='flex flex-wrap items-center'>
            <img className={`rounded-full w-12 ${className}`} src="https://i.postimg.cc/rFbmmK5n/logo.png" alt="blog" />
        </div>
    )
}

export default Logo