import React from 'react'
import appwriteServices from '../appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({ $id, title, featuredImage }) => {

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gradient-to-tr "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-4'>
                <div className='w-full flex justify-center mb-4'>
                    <img src={appwriteServices.getFilePreview(featuredImage)} 
                    alt={title} className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard