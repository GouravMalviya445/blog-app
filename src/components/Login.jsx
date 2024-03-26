import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authServices from '../appwrite/auth'
import { useForm } from 'react-hook-form'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('');

    const login = async (data) => {
        setError('');
        try {
            const session = await authServices.login(data);
            if (session) {
                const userData = await authServices.getCurrentUser();
                if (userData) dispatch(authLogin(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex text-center justify-center'>
                    <span className='inline-block w-full text-black max-w-[100px]'>
                        <Logo />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Don&apos;t have any account?&nbsp;
                    <Link to='/signup' className='text-blue-700 font-medium text-primary transition-all duration-200 hover:underline hover:text-blue-800'>
                        Sign up
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form className='mt-8' onSubmit={handleSubmit(login)}>
                    <div className="space-y-5">
                        <Input
                            label='Email: '
                            type='email'
                            placeholder='enter your email'
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPattern: value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value) || 'Email address must be a valid address'
                                }
                            })}
                        />
                        <Input
                            label='Password: '
                            type='password'
                            placeholder='enter your password'
                            {...register('password', {
                                required: true,
                            })}
                        />
                        <Button
                            type='submit'
                            className='w-full active:translate-y-[5px] active:shadow-[0_0_0_#111] hover:shadow-[0_5px_2px_#111] hover:translate-y-[-5px] transition-all duration-200 ease-in'
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login