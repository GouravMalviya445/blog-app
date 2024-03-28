import React from 'react'
import { LogoutBtn, Container, Logo } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RxHamburgerMenu } from "react-icons/rx"
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react'

const Header = () => {
  const navigate = useNavigate();
  const authStatus = useSelector(state => state.auth.status)

  const [slider, setSlider] = useState(false);
  const handleClick = () => {
    setSlider(!slider);
  }

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Sign up',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-post',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-900'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>

          <ul className='flex max-sm:hidden ml-auto'>
            {
              navItems.map(item => (
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-block px-6 py-2 duration-200 hover:bg-pink-400 rounded-full'
                    >{item.name}</button>
                  </li>
                ) : null
              ))
            }
            <Link to='https://github.com/GouravMalviya445' target='_blank'>
              <button className='inine-block px-6 py-2 duration-200 hover:bg-pink-400 rounded-full'>
                Github
              </button>
            </Link>
            {
              authStatus && <li><LogoutBtn /></li>
            }
          </ul>

          <button onClick={handleClick} className='ml-auto self-center hidden max-sm:block'>
            {
              !slider ? <RxHamburgerMenu size={30} /> : <RxCross1 size={30} />
            }
          </button>

          <ul className={!slider ? 'fixed z-50 left-0 top-[-100%] px-2 bg-gray-900 opacity-10 w-full text-center ml-auto transition-all ease-in duration-[.35s]' : 'fixed z-50 left-0 top-[75px] px-2 bg-gray-900 w-full text-center ml-auto opacity-100 transition-all duration-[.4s] ease-in-out'}>
            {
              navItems.map(item => (
                item.active ? (
                  <li key={item.name} className='border-b'>
                    <button
                      onClick={() => (
                        navigate(item.slug),
                        setSlider(false)
                      )}
                      className='inline-block w-full py-2 duration-200 hover:bg-pink-400 rounded-full'
                    >{item.name}</button>
                  </li>
                ) : null
              ))
            }
            <Link to='https://github.com/GouravMalviya445' target='_blank'>
              <button onClick={() => setSlider(false)} className='inine-block w-full px-6 py-2 duration-200 hover:bg-pink-400 rounded-full'>
                Github
              </button>
            </Link>
            {
              authStatus && <li onClick={() => setSlider(false)} className='border-t'><LogoutBtn className='w-full' /></li>
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header