import React from 'react'
import { LogoutBtn, Container, Logo } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const authStatus = useSelector(state => state.auth.status)

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

          <ul className='flex ml-auto'>
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
        </nav>
      </Container>
    </header>
  )
}

export default Header