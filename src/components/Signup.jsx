import { useState } from "react"
import authServices from '../appwrite/auth'
import { Button, Input, Logo } from './index'
import { login } from "../store/authSlice"
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError('');
        try {
            const userData = await authServices.createAccount(data);
            if (userData) {
                const userData = await authServices.getCurrentUser();
                if (userData) dispatch(login({ userData }));
                navigate('/')
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="flex items-center justify-center m-4">
            <div className={`mx-auto w-full max-w-lg bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Already have an account?&nbsp;
                    <Link to='/login' className='text-blue-700 font-medium text-primary transition-all duration-200 hover:underline hover:text-blue-800'>
                        sign In
                    </Link>
                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                    <form onSubmit={handleSubmit(create)}>
                        <div className="space-y-5 text-white text-start">
                            <Input
                                label='Name: '
                                placeholder='Enter your name'
                                {...register('name', {
                                    required: true
                                })}
                            />

                            <Input
                                label='Email: '
                                placeholder='Enter your email'
                                type='email'
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
                                type="submit"
                                className="w-full active:translate-y-[5px] active:shadow-[0_0_0_#111] hover:shadow-[0_5px_2px_#111] hover:translate-y-[-5px] transition-all duration-200 ease-in"
                            >Create Account</Button>
                        </div>
                    </form>
                </p>
            </div>
        </div>
    )
}

export default Signup