import React from 'react'

const Logo = ({ className = '' }) => {
    return (
        <div className='flex flex-wrap items-center'>
            <img className={`rounded-full w-24 ${className}`} src="https://i.postimg.cc/Jh1fxnLv/blog-logo.png" alt="blog" />
            
        </div>
    )
}

export default Logo