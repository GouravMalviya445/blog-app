import React from 'react'

const Logo = ({ className = '' }) => {
    return (
        <div className='flex flex-wrap items-center'>
            <img className={`rounded-full w-12 ${className}`} src="/images/logo.png" alt="blog" />
        </div>
    )
}

export default Logo